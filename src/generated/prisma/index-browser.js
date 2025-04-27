
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  emailVerified: 'emailVerified',
  image: 'image'
};

exports.Prisma.AccountScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  type: 'type',
  provider: 'provider',
  providerAccountId: 'providerAccountId',
  refresh_token: 'refresh_token',
  access_token: 'access_token',
  expires_at: 'expires_at',
  token_type: 'token_type',
  scope: 'scope',
  id_token: 'id_token',
  session_state: 'session_state'
};

exports.Prisma.SessionScalarFieldEnum = {
  id: 'id',
  sessionToken: 'sessionToken',
  userId: 'userId',
  expires: 'expires'
};

exports.Prisma.BreastCancerPredictionScalarFieldEnum = {
  prediction_id: 'prediction_id',
  user_id: 'user_id',
  radius_mean: 'radius_mean',
  texture_mean: 'texture_mean',
  perimeter_mean: 'perimeter_mean',
  area_mean: 'area_mean',
  smoothness_mean: 'smoothness_mean',
  result: 'result',
  created_at: 'created_at'
};

exports.Prisma.DiabetesPredictionScalarFieldEnum = {
  prediction_id: 'prediction_id',
  user_id: 'user_id',
  pregnancies: 'pregnancies',
  glucose: 'glucose',
  blood_pressure: 'blood_pressure',
  skin_thickness: 'skin_thickness',
  insulin: 'insulin',
  bmi: 'bmi',
  diabetes_pedigree_function: 'diabetes_pedigree_function',
  age: 'age',
  result: 'result',
  created_at: 'created_at'
};

exports.Prisma.HeartDiseasePredictionScalarFieldEnum = {
  prediction_id: 'prediction_id',
  user_id: 'user_id',
  age: 'age',
  sex: 'sex',
  chest_pain_type: 'chest_pain_type',
  resting_blood_pressure: 'resting_blood_pressure',
  serum_cholesterol: 'serum_cholesterol',
  fasting_blood_sugar: 'fasting_blood_sugar',
  resting_ecg: 'resting_ecg',
  max_heart_rate: 'max_heart_rate',
  exercise_induced_angina: 'exercise_induced_angina',
  oldpeak: 'oldpeak',
  slope_of_peak_exercise_st_segment: 'slope_of_peak_exercise_st_segment',
  num_major_vessels: 'num_major_vessels',
  thal: 'thal',
  result: 'result',
  created_at: 'created_at'
};

exports.Prisma.KidneyDiseasePredictionScalarFieldEnum = {
  prediction_id: 'prediction_id',
  user_id: 'user_id',
  age: 'age',
  blood_pressure: 'blood_pressure',
  specific_gravity: 'specific_gravity',
  albumin: 'albumin',
  sugar: 'sugar',
  red_blood_cells: 'red_blood_cells',
  pus_cell: 'pus_cell',
  pus_cell_clumps: 'pus_cell_clumps',
  bacteria: 'bacteria',
  blood_glucose_random: 'blood_glucose_random',
  blood_urea: 'blood_urea',
  serum_creatinine: 'serum_creatinine',
  sodium: 'sodium',
  potassium: 'potassium',
  hemoglobin: 'hemoglobin',
  packed_cell_volume: 'packed_cell_volume',
  white_cell_count: 'white_cell_count',
  red_cell_count: 'red_cell_count',
  hypertension: 'hypertension',
  diabetes_mellitus: 'diabetes_mellitus',
  coronary_artery_disease: 'coronary_artery_disease',
  appetite: 'appetite',
  pedal_edema: 'pedal_edema',
  anemia: 'anemia',
  classification: 'classification',
  created_at: 'created_at'
};

exports.Prisma.ParkinsonsPredictionScalarFieldEnum = {
  prediction_id: 'prediction_id',
  user_id: 'user_id',
  ascii_subject_name: 'ascii_subject_name',
  recording_number: 'recording_number',
  mdvp_fo: 'mdvp_fo',
  mdvp_fhi: 'mdvp_fhi',
  mdvp_flo: 'mdvp_flo',
  mdvp_jitter_percentage: 'mdvp_jitter_percentage',
  mdvp_jitter_abs: 'mdvp_jitter_abs',
  mdvp_rap: 'mdvp_rap',
  mdvp_ppq: 'mdvp_ppq',
  jitter_ddp: 'jitter_ddp',
  mdvp_shimmer: 'mdvp_shimmer',
  mdvp_shimmer_db: 'mdvp_shimmer_db',
  shimmer_apq3: 'shimmer_apq3',
  shimmer_apq5: 'shimmer_apq5',
  mdvp_apq: 'mdvp_apq',
  shimmer_dda: 'shimmer_dda',
  nhr: 'nhr',
  hnr: 'hnr',
  status: 'status',
  rpde: 'rpde',
  d2: 'd2',
  dfa: 'dfa',
  spread1: 'spread1',
  spread2: 'spread2',
  ppe: 'ppe',
  result: 'result',
  created_at: 'created_at'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  User: 'User',
  Account: 'Account',
  Session: 'Session',
  BreastCancerPrediction: 'BreastCancerPrediction',
  DiabetesPrediction: 'DiabetesPrediction',
  HeartDiseasePrediction: 'HeartDiseasePrediction',
  KidneyDiseasePrediction: 'KidneyDiseasePrediction',
  ParkinsonsPrediction: 'ParkinsonsPrediction'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
