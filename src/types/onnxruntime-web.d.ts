/**
 * Declaration file for onnxruntime-web
 * This resolves the TypeScript error about missing declarations
 */

declare module "onnxruntime-web" {
  // Define InferenceSession
  export class InferenceSession {
    static create(
      uri: string,
      options?: InferenceSession.SessionOptions
    ): Promise<InferenceSession>;

    run(
      feeds: Record<string, Tensor>,
      options?: RunOptions
    ): Promise<Record<string, Tensor>>;

    readonly inputNames: string[];
    readonly outputNames: string[];

    static readonly SessionOptions: typeof SessionOptions;
  }

  export namespace InferenceSession {
    interface SessionOptions {
      executionProviders?: string[];
      executionMode?: ExecutionMode;
      graphOptimizationLevel?: GraphOptimizationLevel;
      enableCpuMemArena?: boolean;
      enableMemPattern?: boolean;
      executionPriority?: ExecutionPriority;
      logId?: string;
      logSeverityLevel?: number;
      logVerbosityLevel?: number;
      intraOpNumThreads?: number;
      interOpNumThreads?: number;
    }
  }

  // Define Tensor
  export class Tensor {
    constructor(
      type: string,
      data:
        | Float32Array
        | Int32Array
        | Int8Array
        | Uint8Array
        | Int16Array
        | Float64Array
        | Uint16Array
        | Int64Array
        | Uint32Array
        | Uint64Array
        | string[],
      dims: readonly number[]
    );

    readonly data:
      | Float32Array
      | Int32Array
      | Int8Array
      | Uint8Array
      | Int16Array
      | Float64Array
      | Uint16Array
      | Int64Array
      | Uint32Array
      | Uint64Array
      | string[];
    readonly type: string;
    readonly dims: readonly number[];
  }

  // Define enums
  export enum ExecutionMode {
    SEQUENTIAL = 0,
    PARALLEL = 1,
  }

  export enum GraphOptimizationLevel {
    DISABLE_ALL = 0,
    ENABLE_BASIC = 1,
    ENABLE_EXTENDED = 2,
    ENABLE_ALL = 99,
    BASIC_OPT = 1, // Alias for ENABLE_BASIC for backward compatibility
  }

  export enum ExecutionPriority {
    LOW = 0,
    MEDIUM = 1,
    HIGH = 2,
  }

  // Define options
  export interface RunOptions {
    logSeverityLevel?: number;
    logVerbosityLevel?: number;
    terminate?: boolean;
    tag?: string;
  }

  // Define SessionOptions
  export interface SessionOptions {
    executionMode?: ExecutionMode;
    graphOptimizationLevel?: GraphOptimizationLevel;
    enableCpuMemArena?: boolean;
    enableMemPattern?: boolean;
    executionPriority?: ExecutionPriority;
    logId?: string;
    logSeverityLevel?: number;
    logVerbosityLevel?: number;
    intraOpNumThreads?: number;
    interOpNumThreads?: number;
    executionProviders?: string[];
  }
}
