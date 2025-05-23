import * as onnx from "onnxruntime-web";

// Simple function to load the ONNX model
export async function loadModel(modelPath: string) {
  try {
    console.log(`Loading model from: ${modelPath}`);
    const session = await onnx.InferenceSession.create(modelPath);

    // Log input and output names to help with debugging
    console.log("Model loaded successfully");
    console.log("Input names:", session.inputNames);
    console.log("Output names:", session.outputNames);

    return session;
  } catch (error) {
    console.error("Error loading model:", error);
    throw new Error(
      `Failed to load model: ${
        error instanceof Error ? error.message : String(error)
      }`
    );
  }
}

// Simple function to run inference and get predictions
export async function runInference(
  model: onnx.InferenceSession,
  inputData: number[]
) {
  try {
    // Get model's expected input shape
    const inputTensor = model.inputNames[0];
    console.log(`Running inference with input tensor: ${inputTensor}`);
    console.log(`Input data length: ${inputData.length}`);
    console.log(`Input data values:`, inputData);

    // Create input tensor with correct dimensions
    // For the diabetes model, this is likely [1, 9] - a batch size of 1 with 9 features
    const tensor = new onnx.Tensor("float32", new Float32Array(inputData), [
      1,
      inputData.length,
    ]);

    // Run inference with input name from model metadata
    console.log(
      `Starting model inference with input shape: [1, ${inputData.length}]`
    );
    const outputs = await model.run({ [model.inputNames[0]]: tensor });

    // Log raw outputs for debugging
    console.log("Raw model output object:", outputs);
    console.log("Output names available:", Object.keys(outputs));

    // Get output tensor data using output name from model metadata
    const outputTensor = outputs[model.outputNames[0]];
    console.log("Output tensor:", outputTensor);
    console.log("Output tensor type:", outputTensor?.constructor?.name);
    console.log("Output data type:", outputTensor?.data?.constructor?.name);
    console.log(
      "First few values of output data:",
      Array.from(outputTensor.data as any).slice(0, 10)
    );

    // Convert output data to numbers to avoid BigInt issues
    let outputArray: number[];

    if (
      outputTensor.data instanceof Float32Array ||
      outputTensor.data instanceof Float64Array
    ) {
      // Already a number array
      outputArray = Array.from(outputTensor.data);
      console.log("Output is Float array, no conversion needed");
    } else if (typeof outputTensor.data[0] === "bigint") {
      // Convert BigInt to Number
      outputArray = Array.from(outputTensor.data as any[]).map(Number);
      console.log("Converted BigInt values to numbers:", outputArray);
    } else {
      // Handle other array types
      outputArray = Array.from(outputTensor.data as ArrayLike<number>);
      console.log("Converted other array type to numbers:", outputArray);
    }

    console.log("Final processed output array:", outputArray);

    // Process output based on model type (classification vs regression)
    if (outputArray.length === 1) {
      // Regression or single probability value
      const result = {
        prediction: outputArray[0] > 0.5 ? 1 : 0,
        probability: outputArray[0],
      };
      console.log("Single value result:", result);
      return result;
    } else if (outputArray.length === 2) {
      // Binary classification with two outputs [negative_prob, positive_prob]
      const result = {
        prediction: outputArray[1] > outputArray[0] ? 1 : 0,
        probability: Math.max(outputArray[0], outputArray[1]),
      };
      console.log("Binary classification result:", result);
      return result;
    } else {
      // Multi-class classification
      const maxIndex = outputArray.indexOf(Math.max(...outputArray));
      const result = {
        prediction: maxIndex,
        probability: outputArray[maxIndex],
      };
      console.log("Multi-class classification result:", result);
      return result;
    }
  } catch (error) {
    console.error("Error running inference:", error);
    console.error(
      "Error stack:",
      error instanceof Error ? error.stack : "No stack available"
    );
    throw new Error(
      `Inference failed: ${
        error instanceof Error ? error.message : String(error)
      }`
    );
  }
}

/**
 * Attempts to parse a Gemini (Google AI) output as JSON, even if the response is surrounded by text or markdown.
 * Returns null if parsing fails.
 */
export function parseGeminiJson(text: string): any | null {
  try {
    // First try: direct parse in case it's already valid JSON
    try {
      return JSON.parse(text);
    } catch (e) {
      // Not valid JSON, continue with extraction attempts
    }

    // Second try: extract content between backticks (common in code blocks)
    const codeBlockMatch = text.match(/```(?:json)?\s*([\s\S]*?)\s*```/);
    if (codeBlockMatch && codeBlockMatch[1]) {
      try {
        return JSON.parse(codeBlockMatch[1]);
      } catch (e) {
        // Not valid JSON in code block, continue
      }
    }

    // Third try: find the first occurrence of { or [ and attempt to extract JSON
    const jsonStartMatch = text.match(/[\{\[]/);
    if (jsonStartMatch) {
      const startIndex = jsonStartMatch.index;
      if (startIndex !== undefined) {
        // Find matching closing bracket/brace
        const startChar = text[startIndex];
        const endChar = startChar === "{" ? "}" : "]";
        let bracketCount = 1;
        let endIndex = -1;

        for (let i = startIndex + 1; i < text.length; i++) {
          if (text[i] === startChar) bracketCount++;
          else if (text[i] === endChar) bracketCount--;

          if (bracketCount === 0) {
            endIndex = i;
            break;
          }
        }

        if (endIndex > startIndex) {
          const jsonSubstring = text.substring(startIndex, endIndex + 1);
          try {
            return JSON.parse(jsonSubstring);
          } catch (e) {
            // Not valid JSON, fall through to final attempt
          }
        }
      }
    }

    // Final fallback: try to extract anything that looks like a JSON object or array
    const anyJsonMatch = text.match(/[\{\[][\s\S]*?[\}\]]/);
    if (anyJsonMatch) {
      try {
        return JSON.parse(anyJsonMatch[0]);
      } catch (e) {
        // Not valid JSON, give up
      }
    }

    // Nothing worked, return null
    console.warn("Could not parse JSON from AI response:", text);
    return null;
  } catch (error) {
    console.error("Error in parseGeminiJson:", error);
    return null;
  }
}
