
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model BreastCancerPrediction
 * 
 */
export type BreastCancerPrediction = $Result.DefaultSelection<Prisma.$BreastCancerPredictionPayload>
/**
 * Model DiabetesPrediction
 * 
 */
export type DiabetesPrediction = $Result.DefaultSelection<Prisma.$DiabetesPredictionPayload>
/**
 * Model HeartDiseasePrediction
 * 
 */
export type HeartDiseasePrediction = $Result.DefaultSelection<Prisma.$HeartDiseasePredictionPayload>
/**
 * Model KidneyDiseasePrediction
 * 
 */
export type KidneyDiseasePrediction = $Result.DefaultSelection<Prisma.$KidneyDiseasePredictionPayload>
/**
 * Model ParkinsonsPrediction
 * 
 */
export type ParkinsonsPrediction = $Result.DefaultSelection<Prisma.$ParkinsonsPredictionPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.breastCancerPrediction`: Exposes CRUD operations for the **BreastCancerPrediction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BreastCancerPredictions
    * const breastCancerPredictions = await prisma.breastCancerPrediction.findMany()
    * ```
    */
  get breastCancerPrediction(): Prisma.BreastCancerPredictionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.diabetesPrediction`: Exposes CRUD operations for the **DiabetesPrediction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DiabetesPredictions
    * const diabetesPredictions = await prisma.diabetesPrediction.findMany()
    * ```
    */
  get diabetesPrediction(): Prisma.DiabetesPredictionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.heartDiseasePrediction`: Exposes CRUD operations for the **HeartDiseasePrediction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HeartDiseasePredictions
    * const heartDiseasePredictions = await prisma.heartDiseasePrediction.findMany()
    * ```
    */
  get heartDiseasePrediction(): Prisma.HeartDiseasePredictionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.kidneyDiseasePrediction`: Exposes CRUD operations for the **KidneyDiseasePrediction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more KidneyDiseasePredictions
    * const kidneyDiseasePredictions = await prisma.kidneyDiseasePrediction.findMany()
    * ```
    */
  get kidneyDiseasePrediction(): Prisma.KidneyDiseasePredictionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.parkinsonsPrediction`: Exposes CRUD operations for the **ParkinsonsPrediction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ParkinsonsPredictions
    * const parkinsonsPredictions = await prisma.parkinsonsPrediction.findMany()
    * ```
    */
  get parkinsonsPrediction(): Prisma.ParkinsonsPredictionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Account: 'Account',
    Session: 'Session',
    BreastCancerPrediction: 'BreastCancerPrediction',
    DiabetesPrediction: 'DiabetesPrediction',
    HeartDiseasePrediction: 'HeartDiseasePrediction',
    KidneyDiseasePrediction: 'KidneyDiseasePrediction',
    ParkinsonsPrediction: 'ParkinsonsPrediction'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "account" | "session" | "breastCancerPrediction" | "diabetesPrediction" | "heartDiseasePrediction" | "kidneyDiseasePrediction" | "parkinsonsPrediction"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      BreastCancerPrediction: {
        payload: Prisma.$BreastCancerPredictionPayload<ExtArgs>
        fields: Prisma.BreastCancerPredictionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BreastCancerPredictionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreastCancerPredictionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BreastCancerPredictionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreastCancerPredictionPayload>
          }
          findFirst: {
            args: Prisma.BreastCancerPredictionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreastCancerPredictionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BreastCancerPredictionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreastCancerPredictionPayload>
          }
          findMany: {
            args: Prisma.BreastCancerPredictionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreastCancerPredictionPayload>[]
          }
          create: {
            args: Prisma.BreastCancerPredictionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreastCancerPredictionPayload>
          }
          createMany: {
            args: Prisma.BreastCancerPredictionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BreastCancerPredictionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreastCancerPredictionPayload>[]
          }
          delete: {
            args: Prisma.BreastCancerPredictionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreastCancerPredictionPayload>
          }
          update: {
            args: Prisma.BreastCancerPredictionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreastCancerPredictionPayload>
          }
          deleteMany: {
            args: Prisma.BreastCancerPredictionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BreastCancerPredictionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BreastCancerPredictionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreastCancerPredictionPayload>[]
          }
          upsert: {
            args: Prisma.BreastCancerPredictionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreastCancerPredictionPayload>
          }
          aggregate: {
            args: Prisma.BreastCancerPredictionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBreastCancerPrediction>
          }
          groupBy: {
            args: Prisma.BreastCancerPredictionGroupByArgs<ExtArgs>
            result: $Utils.Optional<BreastCancerPredictionGroupByOutputType>[]
          }
          count: {
            args: Prisma.BreastCancerPredictionCountArgs<ExtArgs>
            result: $Utils.Optional<BreastCancerPredictionCountAggregateOutputType> | number
          }
        }
      }
      DiabetesPrediction: {
        payload: Prisma.$DiabetesPredictionPayload<ExtArgs>
        fields: Prisma.DiabetesPredictionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DiabetesPredictionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiabetesPredictionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DiabetesPredictionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiabetesPredictionPayload>
          }
          findFirst: {
            args: Prisma.DiabetesPredictionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiabetesPredictionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DiabetesPredictionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiabetesPredictionPayload>
          }
          findMany: {
            args: Prisma.DiabetesPredictionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiabetesPredictionPayload>[]
          }
          create: {
            args: Prisma.DiabetesPredictionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiabetesPredictionPayload>
          }
          createMany: {
            args: Prisma.DiabetesPredictionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DiabetesPredictionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiabetesPredictionPayload>[]
          }
          delete: {
            args: Prisma.DiabetesPredictionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiabetesPredictionPayload>
          }
          update: {
            args: Prisma.DiabetesPredictionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiabetesPredictionPayload>
          }
          deleteMany: {
            args: Prisma.DiabetesPredictionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DiabetesPredictionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DiabetesPredictionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiabetesPredictionPayload>[]
          }
          upsert: {
            args: Prisma.DiabetesPredictionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiabetesPredictionPayload>
          }
          aggregate: {
            args: Prisma.DiabetesPredictionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiabetesPrediction>
          }
          groupBy: {
            args: Prisma.DiabetesPredictionGroupByArgs<ExtArgs>
            result: $Utils.Optional<DiabetesPredictionGroupByOutputType>[]
          }
          count: {
            args: Prisma.DiabetesPredictionCountArgs<ExtArgs>
            result: $Utils.Optional<DiabetesPredictionCountAggregateOutputType> | number
          }
        }
      }
      HeartDiseasePrediction: {
        payload: Prisma.$HeartDiseasePredictionPayload<ExtArgs>
        fields: Prisma.HeartDiseasePredictionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HeartDiseasePredictionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeartDiseasePredictionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HeartDiseasePredictionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeartDiseasePredictionPayload>
          }
          findFirst: {
            args: Prisma.HeartDiseasePredictionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeartDiseasePredictionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HeartDiseasePredictionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeartDiseasePredictionPayload>
          }
          findMany: {
            args: Prisma.HeartDiseasePredictionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeartDiseasePredictionPayload>[]
          }
          create: {
            args: Prisma.HeartDiseasePredictionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeartDiseasePredictionPayload>
          }
          createMany: {
            args: Prisma.HeartDiseasePredictionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HeartDiseasePredictionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeartDiseasePredictionPayload>[]
          }
          delete: {
            args: Prisma.HeartDiseasePredictionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeartDiseasePredictionPayload>
          }
          update: {
            args: Prisma.HeartDiseasePredictionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeartDiseasePredictionPayload>
          }
          deleteMany: {
            args: Prisma.HeartDiseasePredictionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HeartDiseasePredictionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HeartDiseasePredictionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeartDiseasePredictionPayload>[]
          }
          upsert: {
            args: Prisma.HeartDiseasePredictionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeartDiseasePredictionPayload>
          }
          aggregate: {
            args: Prisma.HeartDiseasePredictionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHeartDiseasePrediction>
          }
          groupBy: {
            args: Prisma.HeartDiseasePredictionGroupByArgs<ExtArgs>
            result: $Utils.Optional<HeartDiseasePredictionGroupByOutputType>[]
          }
          count: {
            args: Prisma.HeartDiseasePredictionCountArgs<ExtArgs>
            result: $Utils.Optional<HeartDiseasePredictionCountAggregateOutputType> | number
          }
        }
      }
      KidneyDiseasePrediction: {
        payload: Prisma.$KidneyDiseasePredictionPayload<ExtArgs>
        fields: Prisma.KidneyDiseasePredictionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KidneyDiseasePredictionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KidneyDiseasePredictionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KidneyDiseasePredictionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KidneyDiseasePredictionPayload>
          }
          findFirst: {
            args: Prisma.KidneyDiseasePredictionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KidneyDiseasePredictionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KidneyDiseasePredictionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KidneyDiseasePredictionPayload>
          }
          findMany: {
            args: Prisma.KidneyDiseasePredictionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KidneyDiseasePredictionPayload>[]
          }
          create: {
            args: Prisma.KidneyDiseasePredictionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KidneyDiseasePredictionPayload>
          }
          createMany: {
            args: Prisma.KidneyDiseasePredictionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KidneyDiseasePredictionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KidneyDiseasePredictionPayload>[]
          }
          delete: {
            args: Prisma.KidneyDiseasePredictionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KidneyDiseasePredictionPayload>
          }
          update: {
            args: Prisma.KidneyDiseasePredictionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KidneyDiseasePredictionPayload>
          }
          deleteMany: {
            args: Prisma.KidneyDiseasePredictionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KidneyDiseasePredictionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.KidneyDiseasePredictionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KidneyDiseasePredictionPayload>[]
          }
          upsert: {
            args: Prisma.KidneyDiseasePredictionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KidneyDiseasePredictionPayload>
          }
          aggregate: {
            args: Prisma.KidneyDiseasePredictionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKidneyDiseasePrediction>
          }
          groupBy: {
            args: Prisma.KidneyDiseasePredictionGroupByArgs<ExtArgs>
            result: $Utils.Optional<KidneyDiseasePredictionGroupByOutputType>[]
          }
          count: {
            args: Prisma.KidneyDiseasePredictionCountArgs<ExtArgs>
            result: $Utils.Optional<KidneyDiseasePredictionCountAggregateOutputType> | number
          }
        }
      }
      ParkinsonsPrediction: {
        payload: Prisma.$ParkinsonsPredictionPayload<ExtArgs>
        fields: Prisma.ParkinsonsPredictionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParkinsonsPredictionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkinsonsPredictionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParkinsonsPredictionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkinsonsPredictionPayload>
          }
          findFirst: {
            args: Prisma.ParkinsonsPredictionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkinsonsPredictionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParkinsonsPredictionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkinsonsPredictionPayload>
          }
          findMany: {
            args: Prisma.ParkinsonsPredictionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkinsonsPredictionPayload>[]
          }
          create: {
            args: Prisma.ParkinsonsPredictionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkinsonsPredictionPayload>
          }
          createMany: {
            args: Prisma.ParkinsonsPredictionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParkinsonsPredictionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkinsonsPredictionPayload>[]
          }
          delete: {
            args: Prisma.ParkinsonsPredictionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkinsonsPredictionPayload>
          }
          update: {
            args: Prisma.ParkinsonsPredictionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkinsonsPredictionPayload>
          }
          deleteMany: {
            args: Prisma.ParkinsonsPredictionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParkinsonsPredictionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParkinsonsPredictionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkinsonsPredictionPayload>[]
          }
          upsert: {
            args: Prisma.ParkinsonsPredictionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkinsonsPredictionPayload>
          }
          aggregate: {
            args: Prisma.ParkinsonsPredictionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParkinsonsPrediction>
          }
          groupBy: {
            args: Prisma.ParkinsonsPredictionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParkinsonsPredictionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParkinsonsPredictionCountArgs<ExtArgs>
            result: $Utils.Optional<ParkinsonsPredictionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    account?: AccountOmit
    session?: SessionOmit
    breastCancerPrediction?: BreastCancerPredictionOmit
    diabetesPrediction?: DiabetesPredictionOmit
    heartDiseasePrediction?: HeartDiseasePredictionOmit
    kidneyDiseasePrediction?: KidneyDiseasePredictionOmit
    parkinsonsPrediction?: ParkinsonsPredictionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number
    BreastCancerPrediction: number
    DiabetesPrediction: number
    HeartDiseasePrediction: number
    KidneyDiseasePrediction: number
    ParkinsonsPrediction: number
    sessions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    BreastCancerPrediction?: boolean | UserCountOutputTypeCountBreastCancerPredictionArgs
    DiabetesPrediction?: boolean | UserCountOutputTypeCountDiabetesPredictionArgs
    HeartDiseasePrediction?: boolean | UserCountOutputTypeCountHeartDiseasePredictionArgs
    KidneyDiseasePrediction?: boolean | UserCountOutputTypeCountKidneyDiseasePredictionArgs
    ParkinsonsPrediction?: boolean | UserCountOutputTypeCountParkinsonsPredictionArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBreastCancerPredictionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BreastCancerPredictionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDiabetesPredictionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiabetesPredictionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountHeartDiseasePredictionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HeartDiseasePredictionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountKidneyDiseasePredictionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KidneyDiseasePredictionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountParkinsonsPredictionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParkinsonsPredictionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    BreastCancerPrediction?: boolean | User$BreastCancerPredictionArgs<ExtArgs>
    DiabetesPrediction?: boolean | User$DiabetesPredictionArgs<ExtArgs>
    HeartDiseasePrediction?: boolean | User$HeartDiseasePredictionArgs<ExtArgs>
    KidneyDiseasePrediction?: boolean | User$KidneyDiseasePredictionArgs<ExtArgs>
    ParkinsonsPrediction?: boolean | User$ParkinsonsPredictionArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    BreastCancerPrediction?: boolean | User$BreastCancerPredictionArgs<ExtArgs>
    DiabetesPrediction?: boolean | User$DiabetesPredictionArgs<ExtArgs>
    HeartDiseasePrediction?: boolean | User$HeartDiseasePredictionArgs<ExtArgs>
    KidneyDiseasePrediction?: boolean | User$KidneyDiseasePredictionArgs<ExtArgs>
    ParkinsonsPrediction?: boolean | User$ParkinsonsPredictionArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      BreastCancerPrediction: Prisma.$BreastCancerPredictionPayload<ExtArgs>[]
      DiabetesPrediction: Prisma.$DiabetesPredictionPayload<ExtArgs>[]
      HeartDiseasePrediction: Prisma.$HeartDiseasePredictionPayload<ExtArgs>[]
      KidneyDiseasePrediction: Prisma.$KidneyDiseasePredictionPayload<ExtArgs>[]
      ParkinsonsPrediction: Prisma.$ParkinsonsPredictionPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string | null
      emailVerified: Date | null
      image: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    BreastCancerPrediction<T extends User$BreastCancerPredictionArgs<ExtArgs> = {}>(args?: Subset<T, User$BreastCancerPredictionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BreastCancerPredictionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    DiabetesPrediction<T extends User$DiabetesPredictionArgs<ExtArgs> = {}>(args?: Subset<T, User$DiabetesPredictionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiabetesPredictionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    HeartDiseasePrediction<T extends User$HeartDiseasePredictionArgs<ExtArgs> = {}>(args?: Subset<T, User$HeartDiseasePredictionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HeartDiseasePredictionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    KidneyDiseasePrediction<T extends User$KidneyDiseasePredictionArgs<ExtArgs> = {}>(args?: Subset<T, User$KidneyDiseasePredictionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KidneyDiseasePredictionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ParkinsonsPrediction<T extends User$ParkinsonsPredictionArgs<ExtArgs> = {}>(args?: Subset<T, User$ParkinsonsPredictionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkinsonsPredictionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data?: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.BreastCancerPrediction
   */
  export type User$BreastCancerPredictionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BreastCancerPrediction
     */
    select?: BreastCancerPredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BreastCancerPrediction
     */
    omit?: BreastCancerPredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreastCancerPredictionInclude<ExtArgs> | null
    where?: BreastCancerPredictionWhereInput
    orderBy?: BreastCancerPredictionOrderByWithRelationInput | BreastCancerPredictionOrderByWithRelationInput[]
    cursor?: BreastCancerPredictionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BreastCancerPredictionScalarFieldEnum | BreastCancerPredictionScalarFieldEnum[]
  }

  /**
   * User.DiabetesPrediction
   */
  export type User$DiabetesPredictionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiabetesPrediction
     */
    select?: DiabetesPredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiabetesPrediction
     */
    omit?: DiabetesPredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiabetesPredictionInclude<ExtArgs> | null
    where?: DiabetesPredictionWhereInput
    orderBy?: DiabetesPredictionOrderByWithRelationInput | DiabetesPredictionOrderByWithRelationInput[]
    cursor?: DiabetesPredictionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DiabetesPredictionScalarFieldEnum | DiabetesPredictionScalarFieldEnum[]
  }

  /**
   * User.HeartDiseasePrediction
   */
  export type User$HeartDiseasePredictionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeartDiseasePrediction
     */
    select?: HeartDiseasePredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeartDiseasePrediction
     */
    omit?: HeartDiseasePredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeartDiseasePredictionInclude<ExtArgs> | null
    where?: HeartDiseasePredictionWhereInput
    orderBy?: HeartDiseasePredictionOrderByWithRelationInput | HeartDiseasePredictionOrderByWithRelationInput[]
    cursor?: HeartDiseasePredictionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HeartDiseasePredictionScalarFieldEnum | HeartDiseasePredictionScalarFieldEnum[]
  }

  /**
   * User.KidneyDiseasePrediction
   */
  export type User$KidneyDiseasePredictionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KidneyDiseasePrediction
     */
    select?: KidneyDiseasePredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KidneyDiseasePrediction
     */
    omit?: KidneyDiseasePredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KidneyDiseasePredictionInclude<ExtArgs> | null
    where?: KidneyDiseasePredictionWhereInput
    orderBy?: KidneyDiseasePredictionOrderByWithRelationInput | KidneyDiseasePredictionOrderByWithRelationInput[]
    cursor?: KidneyDiseasePredictionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KidneyDiseasePredictionScalarFieldEnum | KidneyDiseasePredictionScalarFieldEnum[]
  }

  /**
   * User.ParkinsonsPrediction
   */
  export type User$ParkinsonsPredictionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkinsonsPrediction
     */
    select?: ParkinsonsPredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkinsonsPrediction
     */
    omit?: ParkinsonsPredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkinsonsPredictionInclude<ExtArgs> | null
    where?: ParkinsonsPredictionWhereInput
    orderBy?: ParkinsonsPredictionOrderByWithRelationInput | ParkinsonsPredictionOrderByWithRelationInput[]
    cursor?: ParkinsonsPredictionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParkinsonsPredictionScalarFieldEnum | ParkinsonsPredictionScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionToken" | "userId" | "expires", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model BreastCancerPrediction
   */

  export type AggregateBreastCancerPrediction = {
    _count: BreastCancerPredictionCountAggregateOutputType | null
    _avg: BreastCancerPredictionAvgAggregateOutputType | null
    _sum: BreastCancerPredictionSumAggregateOutputType | null
    _min: BreastCancerPredictionMinAggregateOutputType | null
    _max: BreastCancerPredictionMaxAggregateOutputType | null
  }

  export type BreastCancerPredictionAvgAggregateOutputType = {
    prediction_id: number | null
    radius_mean: number | null
    texture_mean: number | null
    perimeter_mean: number | null
    area_mean: number | null
    smoothness_mean: number | null
  }

  export type BreastCancerPredictionSumAggregateOutputType = {
    prediction_id: number | null
    radius_mean: number | null
    texture_mean: number | null
    perimeter_mean: number | null
    area_mean: number | null
    smoothness_mean: number | null
  }

  export type BreastCancerPredictionMinAggregateOutputType = {
    prediction_id: number | null
    user_id: string | null
    radius_mean: number | null
    texture_mean: number | null
    perimeter_mean: number | null
    area_mean: number | null
    smoothness_mean: number | null
    result: string | null
    created_at: Date | null
  }

  export type BreastCancerPredictionMaxAggregateOutputType = {
    prediction_id: number | null
    user_id: string | null
    radius_mean: number | null
    texture_mean: number | null
    perimeter_mean: number | null
    area_mean: number | null
    smoothness_mean: number | null
    result: string | null
    created_at: Date | null
  }

  export type BreastCancerPredictionCountAggregateOutputType = {
    prediction_id: number
    user_id: number
    radius_mean: number
    texture_mean: number
    perimeter_mean: number
    area_mean: number
    smoothness_mean: number
    result: number
    created_at: number
    _all: number
  }


  export type BreastCancerPredictionAvgAggregateInputType = {
    prediction_id?: true
    radius_mean?: true
    texture_mean?: true
    perimeter_mean?: true
    area_mean?: true
    smoothness_mean?: true
  }

  export type BreastCancerPredictionSumAggregateInputType = {
    prediction_id?: true
    radius_mean?: true
    texture_mean?: true
    perimeter_mean?: true
    area_mean?: true
    smoothness_mean?: true
  }

  export type BreastCancerPredictionMinAggregateInputType = {
    prediction_id?: true
    user_id?: true
    radius_mean?: true
    texture_mean?: true
    perimeter_mean?: true
    area_mean?: true
    smoothness_mean?: true
    result?: true
    created_at?: true
  }

  export type BreastCancerPredictionMaxAggregateInputType = {
    prediction_id?: true
    user_id?: true
    radius_mean?: true
    texture_mean?: true
    perimeter_mean?: true
    area_mean?: true
    smoothness_mean?: true
    result?: true
    created_at?: true
  }

  export type BreastCancerPredictionCountAggregateInputType = {
    prediction_id?: true
    user_id?: true
    radius_mean?: true
    texture_mean?: true
    perimeter_mean?: true
    area_mean?: true
    smoothness_mean?: true
    result?: true
    created_at?: true
    _all?: true
  }

  export type BreastCancerPredictionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BreastCancerPrediction to aggregate.
     */
    where?: BreastCancerPredictionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BreastCancerPredictions to fetch.
     */
    orderBy?: BreastCancerPredictionOrderByWithRelationInput | BreastCancerPredictionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BreastCancerPredictionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BreastCancerPredictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BreastCancerPredictions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BreastCancerPredictions
    **/
    _count?: true | BreastCancerPredictionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BreastCancerPredictionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BreastCancerPredictionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BreastCancerPredictionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BreastCancerPredictionMaxAggregateInputType
  }

  export type GetBreastCancerPredictionAggregateType<T extends BreastCancerPredictionAggregateArgs> = {
        [P in keyof T & keyof AggregateBreastCancerPrediction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBreastCancerPrediction[P]>
      : GetScalarType<T[P], AggregateBreastCancerPrediction[P]>
  }




  export type BreastCancerPredictionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BreastCancerPredictionWhereInput
    orderBy?: BreastCancerPredictionOrderByWithAggregationInput | BreastCancerPredictionOrderByWithAggregationInput[]
    by: BreastCancerPredictionScalarFieldEnum[] | BreastCancerPredictionScalarFieldEnum
    having?: BreastCancerPredictionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BreastCancerPredictionCountAggregateInputType | true
    _avg?: BreastCancerPredictionAvgAggregateInputType
    _sum?: BreastCancerPredictionSumAggregateInputType
    _min?: BreastCancerPredictionMinAggregateInputType
    _max?: BreastCancerPredictionMaxAggregateInputType
  }

  export type BreastCancerPredictionGroupByOutputType = {
    prediction_id: number
    user_id: string
    radius_mean: number
    texture_mean: number
    perimeter_mean: number
    area_mean: number
    smoothness_mean: number
    result: string
    created_at: Date
    _count: BreastCancerPredictionCountAggregateOutputType | null
    _avg: BreastCancerPredictionAvgAggregateOutputType | null
    _sum: BreastCancerPredictionSumAggregateOutputType | null
    _min: BreastCancerPredictionMinAggregateOutputType | null
    _max: BreastCancerPredictionMaxAggregateOutputType | null
  }

  type GetBreastCancerPredictionGroupByPayload<T extends BreastCancerPredictionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BreastCancerPredictionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BreastCancerPredictionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BreastCancerPredictionGroupByOutputType[P]>
            : GetScalarType<T[P], BreastCancerPredictionGroupByOutputType[P]>
        }
      >
    >


  export type BreastCancerPredictionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    prediction_id?: boolean
    user_id?: boolean
    radius_mean?: boolean
    texture_mean?: boolean
    perimeter_mean?: boolean
    area_mean?: boolean
    smoothness_mean?: boolean
    result?: boolean
    created_at?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["breastCancerPrediction"]>

  export type BreastCancerPredictionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    prediction_id?: boolean
    user_id?: boolean
    radius_mean?: boolean
    texture_mean?: boolean
    perimeter_mean?: boolean
    area_mean?: boolean
    smoothness_mean?: boolean
    result?: boolean
    created_at?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["breastCancerPrediction"]>

  export type BreastCancerPredictionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    prediction_id?: boolean
    user_id?: boolean
    radius_mean?: boolean
    texture_mean?: boolean
    perimeter_mean?: boolean
    area_mean?: boolean
    smoothness_mean?: boolean
    result?: boolean
    created_at?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["breastCancerPrediction"]>

  export type BreastCancerPredictionSelectScalar = {
    prediction_id?: boolean
    user_id?: boolean
    radius_mean?: boolean
    texture_mean?: boolean
    perimeter_mean?: boolean
    area_mean?: boolean
    smoothness_mean?: boolean
    result?: boolean
    created_at?: boolean
  }

  export type BreastCancerPredictionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"prediction_id" | "user_id" | "radius_mean" | "texture_mean" | "perimeter_mean" | "area_mean" | "smoothness_mean" | "result" | "created_at", ExtArgs["result"]["breastCancerPrediction"]>
  export type BreastCancerPredictionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BreastCancerPredictionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BreastCancerPredictionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BreastCancerPredictionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BreastCancerPrediction"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      prediction_id: number
      user_id: string
      radius_mean: number
      texture_mean: number
      perimeter_mean: number
      area_mean: number
      smoothness_mean: number
      result: string
      created_at: Date
    }, ExtArgs["result"]["breastCancerPrediction"]>
    composites: {}
  }

  type BreastCancerPredictionGetPayload<S extends boolean | null | undefined | BreastCancerPredictionDefaultArgs> = $Result.GetResult<Prisma.$BreastCancerPredictionPayload, S>

  type BreastCancerPredictionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BreastCancerPredictionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BreastCancerPredictionCountAggregateInputType | true
    }

  export interface BreastCancerPredictionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BreastCancerPrediction'], meta: { name: 'BreastCancerPrediction' } }
    /**
     * Find zero or one BreastCancerPrediction that matches the filter.
     * @param {BreastCancerPredictionFindUniqueArgs} args - Arguments to find a BreastCancerPrediction
     * @example
     * // Get one BreastCancerPrediction
     * const breastCancerPrediction = await prisma.breastCancerPrediction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BreastCancerPredictionFindUniqueArgs>(args: SelectSubset<T, BreastCancerPredictionFindUniqueArgs<ExtArgs>>): Prisma__BreastCancerPredictionClient<$Result.GetResult<Prisma.$BreastCancerPredictionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BreastCancerPrediction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BreastCancerPredictionFindUniqueOrThrowArgs} args - Arguments to find a BreastCancerPrediction
     * @example
     * // Get one BreastCancerPrediction
     * const breastCancerPrediction = await prisma.breastCancerPrediction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BreastCancerPredictionFindUniqueOrThrowArgs>(args: SelectSubset<T, BreastCancerPredictionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BreastCancerPredictionClient<$Result.GetResult<Prisma.$BreastCancerPredictionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BreastCancerPrediction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BreastCancerPredictionFindFirstArgs} args - Arguments to find a BreastCancerPrediction
     * @example
     * // Get one BreastCancerPrediction
     * const breastCancerPrediction = await prisma.breastCancerPrediction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BreastCancerPredictionFindFirstArgs>(args?: SelectSubset<T, BreastCancerPredictionFindFirstArgs<ExtArgs>>): Prisma__BreastCancerPredictionClient<$Result.GetResult<Prisma.$BreastCancerPredictionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BreastCancerPrediction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BreastCancerPredictionFindFirstOrThrowArgs} args - Arguments to find a BreastCancerPrediction
     * @example
     * // Get one BreastCancerPrediction
     * const breastCancerPrediction = await prisma.breastCancerPrediction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BreastCancerPredictionFindFirstOrThrowArgs>(args?: SelectSubset<T, BreastCancerPredictionFindFirstOrThrowArgs<ExtArgs>>): Prisma__BreastCancerPredictionClient<$Result.GetResult<Prisma.$BreastCancerPredictionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BreastCancerPredictions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BreastCancerPredictionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BreastCancerPredictions
     * const breastCancerPredictions = await prisma.breastCancerPrediction.findMany()
     * 
     * // Get first 10 BreastCancerPredictions
     * const breastCancerPredictions = await prisma.breastCancerPrediction.findMany({ take: 10 })
     * 
     * // Only select the `prediction_id`
     * const breastCancerPredictionWithPrediction_idOnly = await prisma.breastCancerPrediction.findMany({ select: { prediction_id: true } })
     * 
     */
    findMany<T extends BreastCancerPredictionFindManyArgs>(args?: SelectSubset<T, BreastCancerPredictionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BreastCancerPredictionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BreastCancerPrediction.
     * @param {BreastCancerPredictionCreateArgs} args - Arguments to create a BreastCancerPrediction.
     * @example
     * // Create one BreastCancerPrediction
     * const BreastCancerPrediction = await prisma.breastCancerPrediction.create({
     *   data: {
     *     // ... data to create a BreastCancerPrediction
     *   }
     * })
     * 
     */
    create<T extends BreastCancerPredictionCreateArgs>(args: SelectSubset<T, BreastCancerPredictionCreateArgs<ExtArgs>>): Prisma__BreastCancerPredictionClient<$Result.GetResult<Prisma.$BreastCancerPredictionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BreastCancerPredictions.
     * @param {BreastCancerPredictionCreateManyArgs} args - Arguments to create many BreastCancerPredictions.
     * @example
     * // Create many BreastCancerPredictions
     * const breastCancerPrediction = await prisma.breastCancerPrediction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BreastCancerPredictionCreateManyArgs>(args?: SelectSubset<T, BreastCancerPredictionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BreastCancerPredictions and returns the data saved in the database.
     * @param {BreastCancerPredictionCreateManyAndReturnArgs} args - Arguments to create many BreastCancerPredictions.
     * @example
     * // Create many BreastCancerPredictions
     * const breastCancerPrediction = await prisma.breastCancerPrediction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BreastCancerPredictions and only return the `prediction_id`
     * const breastCancerPredictionWithPrediction_idOnly = await prisma.breastCancerPrediction.createManyAndReturn({
     *   select: { prediction_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BreastCancerPredictionCreateManyAndReturnArgs>(args?: SelectSubset<T, BreastCancerPredictionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BreastCancerPredictionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BreastCancerPrediction.
     * @param {BreastCancerPredictionDeleteArgs} args - Arguments to delete one BreastCancerPrediction.
     * @example
     * // Delete one BreastCancerPrediction
     * const BreastCancerPrediction = await prisma.breastCancerPrediction.delete({
     *   where: {
     *     // ... filter to delete one BreastCancerPrediction
     *   }
     * })
     * 
     */
    delete<T extends BreastCancerPredictionDeleteArgs>(args: SelectSubset<T, BreastCancerPredictionDeleteArgs<ExtArgs>>): Prisma__BreastCancerPredictionClient<$Result.GetResult<Prisma.$BreastCancerPredictionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BreastCancerPrediction.
     * @param {BreastCancerPredictionUpdateArgs} args - Arguments to update one BreastCancerPrediction.
     * @example
     * // Update one BreastCancerPrediction
     * const breastCancerPrediction = await prisma.breastCancerPrediction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BreastCancerPredictionUpdateArgs>(args: SelectSubset<T, BreastCancerPredictionUpdateArgs<ExtArgs>>): Prisma__BreastCancerPredictionClient<$Result.GetResult<Prisma.$BreastCancerPredictionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BreastCancerPredictions.
     * @param {BreastCancerPredictionDeleteManyArgs} args - Arguments to filter BreastCancerPredictions to delete.
     * @example
     * // Delete a few BreastCancerPredictions
     * const { count } = await prisma.breastCancerPrediction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BreastCancerPredictionDeleteManyArgs>(args?: SelectSubset<T, BreastCancerPredictionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BreastCancerPredictions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BreastCancerPredictionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BreastCancerPredictions
     * const breastCancerPrediction = await prisma.breastCancerPrediction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BreastCancerPredictionUpdateManyArgs>(args: SelectSubset<T, BreastCancerPredictionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BreastCancerPredictions and returns the data updated in the database.
     * @param {BreastCancerPredictionUpdateManyAndReturnArgs} args - Arguments to update many BreastCancerPredictions.
     * @example
     * // Update many BreastCancerPredictions
     * const breastCancerPrediction = await prisma.breastCancerPrediction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BreastCancerPredictions and only return the `prediction_id`
     * const breastCancerPredictionWithPrediction_idOnly = await prisma.breastCancerPrediction.updateManyAndReturn({
     *   select: { prediction_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BreastCancerPredictionUpdateManyAndReturnArgs>(args: SelectSubset<T, BreastCancerPredictionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BreastCancerPredictionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BreastCancerPrediction.
     * @param {BreastCancerPredictionUpsertArgs} args - Arguments to update or create a BreastCancerPrediction.
     * @example
     * // Update or create a BreastCancerPrediction
     * const breastCancerPrediction = await prisma.breastCancerPrediction.upsert({
     *   create: {
     *     // ... data to create a BreastCancerPrediction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BreastCancerPrediction we want to update
     *   }
     * })
     */
    upsert<T extends BreastCancerPredictionUpsertArgs>(args: SelectSubset<T, BreastCancerPredictionUpsertArgs<ExtArgs>>): Prisma__BreastCancerPredictionClient<$Result.GetResult<Prisma.$BreastCancerPredictionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BreastCancerPredictions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BreastCancerPredictionCountArgs} args - Arguments to filter BreastCancerPredictions to count.
     * @example
     * // Count the number of BreastCancerPredictions
     * const count = await prisma.breastCancerPrediction.count({
     *   where: {
     *     // ... the filter for the BreastCancerPredictions we want to count
     *   }
     * })
    **/
    count<T extends BreastCancerPredictionCountArgs>(
      args?: Subset<T, BreastCancerPredictionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BreastCancerPredictionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BreastCancerPrediction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BreastCancerPredictionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BreastCancerPredictionAggregateArgs>(args: Subset<T, BreastCancerPredictionAggregateArgs>): Prisma.PrismaPromise<GetBreastCancerPredictionAggregateType<T>>

    /**
     * Group by BreastCancerPrediction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BreastCancerPredictionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BreastCancerPredictionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BreastCancerPredictionGroupByArgs['orderBy'] }
        : { orderBy?: BreastCancerPredictionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BreastCancerPredictionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBreastCancerPredictionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BreastCancerPrediction model
   */
  readonly fields: BreastCancerPredictionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BreastCancerPrediction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BreastCancerPredictionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BreastCancerPrediction model
   */
  interface BreastCancerPredictionFieldRefs {
    readonly prediction_id: FieldRef<"BreastCancerPrediction", 'Int'>
    readonly user_id: FieldRef<"BreastCancerPrediction", 'String'>
    readonly radius_mean: FieldRef<"BreastCancerPrediction", 'Float'>
    readonly texture_mean: FieldRef<"BreastCancerPrediction", 'Float'>
    readonly perimeter_mean: FieldRef<"BreastCancerPrediction", 'Float'>
    readonly area_mean: FieldRef<"BreastCancerPrediction", 'Float'>
    readonly smoothness_mean: FieldRef<"BreastCancerPrediction", 'Float'>
    readonly result: FieldRef<"BreastCancerPrediction", 'String'>
    readonly created_at: FieldRef<"BreastCancerPrediction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BreastCancerPrediction findUnique
   */
  export type BreastCancerPredictionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BreastCancerPrediction
     */
    select?: BreastCancerPredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BreastCancerPrediction
     */
    omit?: BreastCancerPredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreastCancerPredictionInclude<ExtArgs> | null
    /**
     * Filter, which BreastCancerPrediction to fetch.
     */
    where: BreastCancerPredictionWhereUniqueInput
  }

  /**
   * BreastCancerPrediction findUniqueOrThrow
   */
  export type BreastCancerPredictionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BreastCancerPrediction
     */
    select?: BreastCancerPredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BreastCancerPrediction
     */
    omit?: BreastCancerPredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreastCancerPredictionInclude<ExtArgs> | null
    /**
     * Filter, which BreastCancerPrediction to fetch.
     */
    where: BreastCancerPredictionWhereUniqueInput
  }

  /**
   * BreastCancerPrediction findFirst
   */
  export type BreastCancerPredictionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BreastCancerPrediction
     */
    select?: BreastCancerPredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BreastCancerPrediction
     */
    omit?: BreastCancerPredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreastCancerPredictionInclude<ExtArgs> | null
    /**
     * Filter, which BreastCancerPrediction to fetch.
     */
    where?: BreastCancerPredictionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BreastCancerPredictions to fetch.
     */
    orderBy?: BreastCancerPredictionOrderByWithRelationInput | BreastCancerPredictionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BreastCancerPredictions.
     */
    cursor?: BreastCancerPredictionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BreastCancerPredictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BreastCancerPredictions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BreastCancerPredictions.
     */
    distinct?: BreastCancerPredictionScalarFieldEnum | BreastCancerPredictionScalarFieldEnum[]
  }

  /**
   * BreastCancerPrediction findFirstOrThrow
   */
  export type BreastCancerPredictionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BreastCancerPrediction
     */
    select?: BreastCancerPredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BreastCancerPrediction
     */
    omit?: BreastCancerPredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreastCancerPredictionInclude<ExtArgs> | null
    /**
     * Filter, which BreastCancerPrediction to fetch.
     */
    where?: BreastCancerPredictionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BreastCancerPredictions to fetch.
     */
    orderBy?: BreastCancerPredictionOrderByWithRelationInput | BreastCancerPredictionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BreastCancerPredictions.
     */
    cursor?: BreastCancerPredictionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BreastCancerPredictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BreastCancerPredictions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BreastCancerPredictions.
     */
    distinct?: BreastCancerPredictionScalarFieldEnum | BreastCancerPredictionScalarFieldEnum[]
  }

  /**
   * BreastCancerPrediction findMany
   */
  export type BreastCancerPredictionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BreastCancerPrediction
     */
    select?: BreastCancerPredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BreastCancerPrediction
     */
    omit?: BreastCancerPredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreastCancerPredictionInclude<ExtArgs> | null
    /**
     * Filter, which BreastCancerPredictions to fetch.
     */
    where?: BreastCancerPredictionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BreastCancerPredictions to fetch.
     */
    orderBy?: BreastCancerPredictionOrderByWithRelationInput | BreastCancerPredictionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BreastCancerPredictions.
     */
    cursor?: BreastCancerPredictionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BreastCancerPredictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BreastCancerPredictions.
     */
    skip?: number
    distinct?: BreastCancerPredictionScalarFieldEnum | BreastCancerPredictionScalarFieldEnum[]
  }

  /**
   * BreastCancerPrediction create
   */
  export type BreastCancerPredictionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BreastCancerPrediction
     */
    select?: BreastCancerPredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BreastCancerPrediction
     */
    omit?: BreastCancerPredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreastCancerPredictionInclude<ExtArgs> | null
    /**
     * The data needed to create a BreastCancerPrediction.
     */
    data: XOR<BreastCancerPredictionCreateInput, BreastCancerPredictionUncheckedCreateInput>
  }

  /**
   * BreastCancerPrediction createMany
   */
  export type BreastCancerPredictionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BreastCancerPredictions.
     */
    data: BreastCancerPredictionCreateManyInput | BreastCancerPredictionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BreastCancerPrediction createManyAndReturn
   */
  export type BreastCancerPredictionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BreastCancerPrediction
     */
    select?: BreastCancerPredictionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BreastCancerPrediction
     */
    omit?: BreastCancerPredictionOmit<ExtArgs> | null
    /**
     * The data used to create many BreastCancerPredictions.
     */
    data: BreastCancerPredictionCreateManyInput | BreastCancerPredictionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreastCancerPredictionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BreastCancerPrediction update
   */
  export type BreastCancerPredictionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BreastCancerPrediction
     */
    select?: BreastCancerPredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BreastCancerPrediction
     */
    omit?: BreastCancerPredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreastCancerPredictionInclude<ExtArgs> | null
    /**
     * The data needed to update a BreastCancerPrediction.
     */
    data: XOR<BreastCancerPredictionUpdateInput, BreastCancerPredictionUncheckedUpdateInput>
    /**
     * Choose, which BreastCancerPrediction to update.
     */
    where: BreastCancerPredictionWhereUniqueInput
  }

  /**
   * BreastCancerPrediction updateMany
   */
  export type BreastCancerPredictionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BreastCancerPredictions.
     */
    data: XOR<BreastCancerPredictionUpdateManyMutationInput, BreastCancerPredictionUncheckedUpdateManyInput>
    /**
     * Filter which BreastCancerPredictions to update
     */
    where?: BreastCancerPredictionWhereInput
    /**
     * Limit how many BreastCancerPredictions to update.
     */
    limit?: number
  }

  /**
   * BreastCancerPrediction updateManyAndReturn
   */
  export type BreastCancerPredictionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BreastCancerPrediction
     */
    select?: BreastCancerPredictionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BreastCancerPrediction
     */
    omit?: BreastCancerPredictionOmit<ExtArgs> | null
    /**
     * The data used to update BreastCancerPredictions.
     */
    data: XOR<BreastCancerPredictionUpdateManyMutationInput, BreastCancerPredictionUncheckedUpdateManyInput>
    /**
     * Filter which BreastCancerPredictions to update
     */
    where?: BreastCancerPredictionWhereInput
    /**
     * Limit how many BreastCancerPredictions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreastCancerPredictionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BreastCancerPrediction upsert
   */
  export type BreastCancerPredictionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BreastCancerPrediction
     */
    select?: BreastCancerPredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BreastCancerPrediction
     */
    omit?: BreastCancerPredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreastCancerPredictionInclude<ExtArgs> | null
    /**
     * The filter to search for the BreastCancerPrediction to update in case it exists.
     */
    where: BreastCancerPredictionWhereUniqueInput
    /**
     * In case the BreastCancerPrediction found by the `where` argument doesn't exist, create a new BreastCancerPrediction with this data.
     */
    create: XOR<BreastCancerPredictionCreateInput, BreastCancerPredictionUncheckedCreateInput>
    /**
     * In case the BreastCancerPrediction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BreastCancerPredictionUpdateInput, BreastCancerPredictionUncheckedUpdateInput>
  }

  /**
   * BreastCancerPrediction delete
   */
  export type BreastCancerPredictionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BreastCancerPrediction
     */
    select?: BreastCancerPredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BreastCancerPrediction
     */
    omit?: BreastCancerPredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreastCancerPredictionInclude<ExtArgs> | null
    /**
     * Filter which BreastCancerPrediction to delete.
     */
    where: BreastCancerPredictionWhereUniqueInput
  }

  /**
   * BreastCancerPrediction deleteMany
   */
  export type BreastCancerPredictionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BreastCancerPredictions to delete
     */
    where?: BreastCancerPredictionWhereInput
    /**
     * Limit how many BreastCancerPredictions to delete.
     */
    limit?: number
  }

  /**
   * BreastCancerPrediction without action
   */
  export type BreastCancerPredictionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BreastCancerPrediction
     */
    select?: BreastCancerPredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BreastCancerPrediction
     */
    omit?: BreastCancerPredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreastCancerPredictionInclude<ExtArgs> | null
  }


  /**
   * Model DiabetesPrediction
   */

  export type AggregateDiabetesPrediction = {
    _count: DiabetesPredictionCountAggregateOutputType | null
    _avg: DiabetesPredictionAvgAggregateOutputType | null
    _sum: DiabetesPredictionSumAggregateOutputType | null
    _min: DiabetesPredictionMinAggregateOutputType | null
    _max: DiabetesPredictionMaxAggregateOutputType | null
  }

  export type DiabetesPredictionAvgAggregateOutputType = {
    prediction_id: number | null
    pregnancies: number | null
    glucose: number | null
    blood_pressure: number | null
    skin_thickness: number | null
    insulin: number | null
    bmi: number | null
    diabetes_pedigree_function: number | null
    age: number | null
  }

  export type DiabetesPredictionSumAggregateOutputType = {
    prediction_id: number | null
    pregnancies: number | null
    glucose: number | null
    blood_pressure: number | null
    skin_thickness: number | null
    insulin: number | null
    bmi: number | null
    diabetes_pedigree_function: number | null
    age: number | null
  }

  export type DiabetesPredictionMinAggregateOutputType = {
    prediction_id: number | null
    user_id: string | null
    pregnancies: number | null
    glucose: number | null
    blood_pressure: number | null
    skin_thickness: number | null
    insulin: number | null
    bmi: number | null
    diabetes_pedigree_function: number | null
    age: number | null
    result: string | null
    created_at: Date | null
  }

  export type DiabetesPredictionMaxAggregateOutputType = {
    prediction_id: number | null
    user_id: string | null
    pregnancies: number | null
    glucose: number | null
    blood_pressure: number | null
    skin_thickness: number | null
    insulin: number | null
    bmi: number | null
    diabetes_pedigree_function: number | null
    age: number | null
    result: string | null
    created_at: Date | null
  }

  export type DiabetesPredictionCountAggregateOutputType = {
    prediction_id: number
    user_id: number
    pregnancies: number
    glucose: number
    blood_pressure: number
    skin_thickness: number
    insulin: number
    bmi: number
    diabetes_pedigree_function: number
    age: number
    result: number
    created_at: number
    _all: number
  }


  export type DiabetesPredictionAvgAggregateInputType = {
    prediction_id?: true
    pregnancies?: true
    glucose?: true
    blood_pressure?: true
    skin_thickness?: true
    insulin?: true
    bmi?: true
    diabetes_pedigree_function?: true
    age?: true
  }

  export type DiabetesPredictionSumAggregateInputType = {
    prediction_id?: true
    pregnancies?: true
    glucose?: true
    blood_pressure?: true
    skin_thickness?: true
    insulin?: true
    bmi?: true
    diabetes_pedigree_function?: true
    age?: true
  }

  export type DiabetesPredictionMinAggregateInputType = {
    prediction_id?: true
    user_id?: true
    pregnancies?: true
    glucose?: true
    blood_pressure?: true
    skin_thickness?: true
    insulin?: true
    bmi?: true
    diabetes_pedigree_function?: true
    age?: true
    result?: true
    created_at?: true
  }

  export type DiabetesPredictionMaxAggregateInputType = {
    prediction_id?: true
    user_id?: true
    pregnancies?: true
    glucose?: true
    blood_pressure?: true
    skin_thickness?: true
    insulin?: true
    bmi?: true
    diabetes_pedigree_function?: true
    age?: true
    result?: true
    created_at?: true
  }

  export type DiabetesPredictionCountAggregateInputType = {
    prediction_id?: true
    user_id?: true
    pregnancies?: true
    glucose?: true
    blood_pressure?: true
    skin_thickness?: true
    insulin?: true
    bmi?: true
    diabetes_pedigree_function?: true
    age?: true
    result?: true
    created_at?: true
    _all?: true
  }

  export type DiabetesPredictionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiabetesPrediction to aggregate.
     */
    where?: DiabetesPredictionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiabetesPredictions to fetch.
     */
    orderBy?: DiabetesPredictionOrderByWithRelationInput | DiabetesPredictionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DiabetesPredictionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiabetesPredictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiabetesPredictions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DiabetesPredictions
    **/
    _count?: true | DiabetesPredictionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DiabetesPredictionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DiabetesPredictionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiabetesPredictionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiabetesPredictionMaxAggregateInputType
  }

  export type GetDiabetesPredictionAggregateType<T extends DiabetesPredictionAggregateArgs> = {
        [P in keyof T & keyof AggregateDiabetesPrediction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiabetesPrediction[P]>
      : GetScalarType<T[P], AggregateDiabetesPrediction[P]>
  }




  export type DiabetesPredictionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiabetesPredictionWhereInput
    orderBy?: DiabetesPredictionOrderByWithAggregationInput | DiabetesPredictionOrderByWithAggregationInput[]
    by: DiabetesPredictionScalarFieldEnum[] | DiabetesPredictionScalarFieldEnum
    having?: DiabetesPredictionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiabetesPredictionCountAggregateInputType | true
    _avg?: DiabetesPredictionAvgAggregateInputType
    _sum?: DiabetesPredictionSumAggregateInputType
    _min?: DiabetesPredictionMinAggregateInputType
    _max?: DiabetesPredictionMaxAggregateInputType
  }

  export type DiabetesPredictionGroupByOutputType = {
    prediction_id: number
    user_id: string
    pregnancies: number
    glucose: number
    blood_pressure: number
    skin_thickness: number
    insulin: number
    bmi: number
    diabetes_pedigree_function: number
    age: number
    result: string
    created_at: Date
    _count: DiabetesPredictionCountAggregateOutputType | null
    _avg: DiabetesPredictionAvgAggregateOutputType | null
    _sum: DiabetesPredictionSumAggregateOutputType | null
    _min: DiabetesPredictionMinAggregateOutputType | null
    _max: DiabetesPredictionMaxAggregateOutputType | null
  }

  type GetDiabetesPredictionGroupByPayload<T extends DiabetesPredictionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiabetesPredictionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiabetesPredictionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiabetesPredictionGroupByOutputType[P]>
            : GetScalarType<T[P], DiabetesPredictionGroupByOutputType[P]>
        }
      >
    >


  export type DiabetesPredictionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    prediction_id?: boolean
    user_id?: boolean
    pregnancies?: boolean
    glucose?: boolean
    blood_pressure?: boolean
    skin_thickness?: boolean
    insulin?: boolean
    bmi?: boolean
    diabetes_pedigree_function?: boolean
    age?: boolean
    result?: boolean
    created_at?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diabetesPrediction"]>

  export type DiabetesPredictionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    prediction_id?: boolean
    user_id?: boolean
    pregnancies?: boolean
    glucose?: boolean
    blood_pressure?: boolean
    skin_thickness?: boolean
    insulin?: boolean
    bmi?: boolean
    diabetes_pedigree_function?: boolean
    age?: boolean
    result?: boolean
    created_at?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diabetesPrediction"]>

  export type DiabetesPredictionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    prediction_id?: boolean
    user_id?: boolean
    pregnancies?: boolean
    glucose?: boolean
    blood_pressure?: boolean
    skin_thickness?: boolean
    insulin?: boolean
    bmi?: boolean
    diabetes_pedigree_function?: boolean
    age?: boolean
    result?: boolean
    created_at?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diabetesPrediction"]>

  export type DiabetesPredictionSelectScalar = {
    prediction_id?: boolean
    user_id?: boolean
    pregnancies?: boolean
    glucose?: boolean
    blood_pressure?: boolean
    skin_thickness?: boolean
    insulin?: boolean
    bmi?: boolean
    diabetes_pedigree_function?: boolean
    age?: boolean
    result?: boolean
    created_at?: boolean
  }

  export type DiabetesPredictionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"prediction_id" | "user_id" | "pregnancies" | "glucose" | "blood_pressure" | "skin_thickness" | "insulin" | "bmi" | "diabetes_pedigree_function" | "age" | "result" | "created_at", ExtArgs["result"]["diabetesPrediction"]>
  export type DiabetesPredictionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DiabetesPredictionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DiabetesPredictionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DiabetesPredictionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DiabetesPrediction"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      prediction_id: number
      user_id: string
      pregnancies: number
      glucose: number
      blood_pressure: number
      skin_thickness: number
      insulin: number
      bmi: number
      diabetes_pedigree_function: number
      age: number
      result: string
      created_at: Date
    }, ExtArgs["result"]["diabetesPrediction"]>
    composites: {}
  }

  type DiabetesPredictionGetPayload<S extends boolean | null | undefined | DiabetesPredictionDefaultArgs> = $Result.GetResult<Prisma.$DiabetesPredictionPayload, S>

  type DiabetesPredictionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DiabetesPredictionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DiabetesPredictionCountAggregateInputType | true
    }

  export interface DiabetesPredictionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DiabetesPrediction'], meta: { name: 'DiabetesPrediction' } }
    /**
     * Find zero or one DiabetesPrediction that matches the filter.
     * @param {DiabetesPredictionFindUniqueArgs} args - Arguments to find a DiabetesPrediction
     * @example
     * // Get one DiabetesPrediction
     * const diabetesPrediction = await prisma.diabetesPrediction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DiabetesPredictionFindUniqueArgs>(args: SelectSubset<T, DiabetesPredictionFindUniqueArgs<ExtArgs>>): Prisma__DiabetesPredictionClient<$Result.GetResult<Prisma.$DiabetesPredictionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DiabetesPrediction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DiabetesPredictionFindUniqueOrThrowArgs} args - Arguments to find a DiabetesPrediction
     * @example
     * // Get one DiabetesPrediction
     * const diabetesPrediction = await prisma.diabetesPrediction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DiabetesPredictionFindUniqueOrThrowArgs>(args: SelectSubset<T, DiabetesPredictionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DiabetesPredictionClient<$Result.GetResult<Prisma.$DiabetesPredictionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DiabetesPrediction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiabetesPredictionFindFirstArgs} args - Arguments to find a DiabetesPrediction
     * @example
     * // Get one DiabetesPrediction
     * const diabetesPrediction = await prisma.diabetesPrediction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DiabetesPredictionFindFirstArgs>(args?: SelectSubset<T, DiabetesPredictionFindFirstArgs<ExtArgs>>): Prisma__DiabetesPredictionClient<$Result.GetResult<Prisma.$DiabetesPredictionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DiabetesPrediction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiabetesPredictionFindFirstOrThrowArgs} args - Arguments to find a DiabetesPrediction
     * @example
     * // Get one DiabetesPrediction
     * const diabetesPrediction = await prisma.diabetesPrediction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DiabetesPredictionFindFirstOrThrowArgs>(args?: SelectSubset<T, DiabetesPredictionFindFirstOrThrowArgs<ExtArgs>>): Prisma__DiabetesPredictionClient<$Result.GetResult<Prisma.$DiabetesPredictionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DiabetesPredictions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiabetesPredictionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DiabetesPredictions
     * const diabetesPredictions = await prisma.diabetesPrediction.findMany()
     * 
     * // Get first 10 DiabetesPredictions
     * const diabetesPredictions = await prisma.diabetesPrediction.findMany({ take: 10 })
     * 
     * // Only select the `prediction_id`
     * const diabetesPredictionWithPrediction_idOnly = await prisma.diabetesPrediction.findMany({ select: { prediction_id: true } })
     * 
     */
    findMany<T extends DiabetesPredictionFindManyArgs>(args?: SelectSubset<T, DiabetesPredictionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiabetesPredictionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DiabetesPrediction.
     * @param {DiabetesPredictionCreateArgs} args - Arguments to create a DiabetesPrediction.
     * @example
     * // Create one DiabetesPrediction
     * const DiabetesPrediction = await prisma.diabetesPrediction.create({
     *   data: {
     *     // ... data to create a DiabetesPrediction
     *   }
     * })
     * 
     */
    create<T extends DiabetesPredictionCreateArgs>(args: SelectSubset<T, DiabetesPredictionCreateArgs<ExtArgs>>): Prisma__DiabetesPredictionClient<$Result.GetResult<Prisma.$DiabetesPredictionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DiabetesPredictions.
     * @param {DiabetesPredictionCreateManyArgs} args - Arguments to create many DiabetesPredictions.
     * @example
     * // Create many DiabetesPredictions
     * const diabetesPrediction = await prisma.diabetesPrediction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DiabetesPredictionCreateManyArgs>(args?: SelectSubset<T, DiabetesPredictionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DiabetesPredictions and returns the data saved in the database.
     * @param {DiabetesPredictionCreateManyAndReturnArgs} args - Arguments to create many DiabetesPredictions.
     * @example
     * // Create many DiabetesPredictions
     * const diabetesPrediction = await prisma.diabetesPrediction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DiabetesPredictions and only return the `prediction_id`
     * const diabetesPredictionWithPrediction_idOnly = await prisma.diabetesPrediction.createManyAndReturn({
     *   select: { prediction_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DiabetesPredictionCreateManyAndReturnArgs>(args?: SelectSubset<T, DiabetesPredictionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiabetesPredictionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DiabetesPrediction.
     * @param {DiabetesPredictionDeleteArgs} args - Arguments to delete one DiabetesPrediction.
     * @example
     * // Delete one DiabetesPrediction
     * const DiabetesPrediction = await prisma.diabetesPrediction.delete({
     *   where: {
     *     // ... filter to delete one DiabetesPrediction
     *   }
     * })
     * 
     */
    delete<T extends DiabetesPredictionDeleteArgs>(args: SelectSubset<T, DiabetesPredictionDeleteArgs<ExtArgs>>): Prisma__DiabetesPredictionClient<$Result.GetResult<Prisma.$DiabetesPredictionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DiabetesPrediction.
     * @param {DiabetesPredictionUpdateArgs} args - Arguments to update one DiabetesPrediction.
     * @example
     * // Update one DiabetesPrediction
     * const diabetesPrediction = await prisma.diabetesPrediction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DiabetesPredictionUpdateArgs>(args: SelectSubset<T, DiabetesPredictionUpdateArgs<ExtArgs>>): Prisma__DiabetesPredictionClient<$Result.GetResult<Prisma.$DiabetesPredictionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DiabetesPredictions.
     * @param {DiabetesPredictionDeleteManyArgs} args - Arguments to filter DiabetesPredictions to delete.
     * @example
     * // Delete a few DiabetesPredictions
     * const { count } = await prisma.diabetesPrediction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DiabetesPredictionDeleteManyArgs>(args?: SelectSubset<T, DiabetesPredictionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DiabetesPredictions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiabetesPredictionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DiabetesPredictions
     * const diabetesPrediction = await prisma.diabetesPrediction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DiabetesPredictionUpdateManyArgs>(args: SelectSubset<T, DiabetesPredictionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DiabetesPredictions and returns the data updated in the database.
     * @param {DiabetesPredictionUpdateManyAndReturnArgs} args - Arguments to update many DiabetesPredictions.
     * @example
     * // Update many DiabetesPredictions
     * const diabetesPrediction = await prisma.diabetesPrediction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DiabetesPredictions and only return the `prediction_id`
     * const diabetesPredictionWithPrediction_idOnly = await prisma.diabetesPrediction.updateManyAndReturn({
     *   select: { prediction_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DiabetesPredictionUpdateManyAndReturnArgs>(args: SelectSubset<T, DiabetesPredictionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiabetesPredictionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DiabetesPrediction.
     * @param {DiabetesPredictionUpsertArgs} args - Arguments to update or create a DiabetesPrediction.
     * @example
     * // Update or create a DiabetesPrediction
     * const diabetesPrediction = await prisma.diabetesPrediction.upsert({
     *   create: {
     *     // ... data to create a DiabetesPrediction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DiabetesPrediction we want to update
     *   }
     * })
     */
    upsert<T extends DiabetesPredictionUpsertArgs>(args: SelectSubset<T, DiabetesPredictionUpsertArgs<ExtArgs>>): Prisma__DiabetesPredictionClient<$Result.GetResult<Prisma.$DiabetesPredictionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DiabetesPredictions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiabetesPredictionCountArgs} args - Arguments to filter DiabetesPredictions to count.
     * @example
     * // Count the number of DiabetesPredictions
     * const count = await prisma.diabetesPrediction.count({
     *   where: {
     *     // ... the filter for the DiabetesPredictions we want to count
     *   }
     * })
    **/
    count<T extends DiabetesPredictionCountArgs>(
      args?: Subset<T, DiabetesPredictionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiabetesPredictionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DiabetesPrediction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiabetesPredictionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DiabetesPredictionAggregateArgs>(args: Subset<T, DiabetesPredictionAggregateArgs>): Prisma.PrismaPromise<GetDiabetesPredictionAggregateType<T>>

    /**
     * Group by DiabetesPrediction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiabetesPredictionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DiabetesPredictionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiabetesPredictionGroupByArgs['orderBy'] }
        : { orderBy?: DiabetesPredictionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DiabetesPredictionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiabetesPredictionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DiabetesPrediction model
   */
  readonly fields: DiabetesPredictionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DiabetesPrediction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DiabetesPredictionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DiabetesPrediction model
   */
  interface DiabetesPredictionFieldRefs {
    readonly prediction_id: FieldRef<"DiabetesPrediction", 'Int'>
    readonly user_id: FieldRef<"DiabetesPrediction", 'String'>
    readonly pregnancies: FieldRef<"DiabetesPrediction", 'Int'>
    readonly glucose: FieldRef<"DiabetesPrediction", 'Int'>
    readonly blood_pressure: FieldRef<"DiabetesPrediction", 'Int'>
    readonly skin_thickness: FieldRef<"DiabetesPrediction", 'Int'>
    readonly insulin: FieldRef<"DiabetesPrediction", 'Int'>
    readonly bmi: FieldRef<"DiabetesPrediction", 'Float'>
    readonly diabetes_pedigree_function: FieldRef<"DiabetesPrediction", 'Float'>
    readonly age: FieldRef<"DiabetesPrediction", 'Int'>
    readonly result: FieldRef<"DiabetesPrediction", 'String'>
    readonly created_at: FieldRef<"DiabetesPrediction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DiabetesPrediction findUnique
   */
  export type DiabetesPredictionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiabetesPrediction
     */
    select?: DiabetesPredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiabetesPrediction
     */
    omit?: DiabetesPredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiabetesPredictionInclude<ExtArgs> | null
    /**
     * Filter, which DiabetesPrediction to fetch.
     */
    where: DiabetesPredictionWhereUniqueInput
  }

  /**
   * DiabetesPrediction findUniqueOrThrow
   */
  export type DiabetesPredictionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiabetesPrediction
     */
    select?: DiabetesPredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiabetesPrediction
     */
    omit?: DiabetesPredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiabetesPredictionInclude<ExtArgs> | null
    /**
     * Filter, which DiabetesPrediction to fetch.
     */
    where: DiabetesPredictionWhereUniqueInput
  }

  /**
   * DiabetesPrediction findFirst
   */
  export type DiabetesPredictionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiabetesPrediction
     */
    select?: DiabetesPredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiabetesPrediction
     */
    omit?: DiabetesPredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiabetesPredictionInclude<ExtArgs> | null
    /**
     * Filter, which DiabetesPrediction to fetch.
     */
    where?: DiabetesPredictionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiabetesPredictions to fetch.
     */
    orderBy?: DiabetesPredictionOrderByWithRelationInput | DiabetesPredictionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiabetesPredictions.
     */
    cursor?: DiabetesPredictionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiabetesPredictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiabetesPredictions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiabetesPredictions.
     */
    distinct?: DiabetesPredictionScalarFieldEnum | DiabetesPredictionScalarFieldEnum[]
  }

  /**
   * DiabetesPrediction findFirstOrThrow
   */
  export type DiabetesPredictionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiabetesPrediction
     */
    select?: DiabetesPredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiabetesPrediction
     */
    omit?: DiabetesPredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiabetesPredictionInclude<ExtArgs> | null
    /**
     * Filter, which DiabetesPrediction to fetch.
     */
    where?: DiabetesPredictionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiabetesPredictions to fetch.
     */
    orderBy?: DiabetesPredictionOrderByWithRelationInput | DiabetesPredictionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiabetesPredictions.
     */
    cursor?: DiabetesPredictionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiabetesPredictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiabetesPredictions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiabetesPredictions.
     */
    distinct?: DiabetesPredictionScalarFieldEnum | DiabetesPredictionScalarFieldEnum[]
  }

  /**
   * DiabetesPrediction findMany
   */
  export type DiabetesPredictionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiabetesPrediction
     */
    select?: DiabetesPredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiabetesPrediction
     */
    omit?: DiabetesPredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiabetesPredictionInclude<ExtArgs> | null
    /**
     * Filter, which DiabetesPredictions to fetch.
     */
    where?: DiabetesPredictionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiabetesPredictions to fetch.
     */
    orderBy?: DiabetesPredictionOrderByWithRelationInput | DiabetesPredictionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DiabetesPredictions.
     */
    cursor?: DiabetesPredictionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiabetesPredictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiabetesPredictions.
     */
    skip?: number
    distinct?: DiabetesPredictionScalarFieldEnum | DiabetesPredictionScalarFieldEnum[]
  }

  /**
   * DiabetesPrediction create
   */
  export type DiabetesPredictionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiabetesPrediction
     */
    select?: DiabetesPredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiabetesPrediction
     */
    omit?: DiabetesPredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiabetesPredictionInclude<ExtArgs> | null
    /**
     * The data needed to create a DiabetesPrediction.
     */
    data: XOR<DiabetesPredictionCreateInput, DiabetesPredictionUncheckedCreateInput>
  }

  /**
   * DiabetesPrediction createMany
   */
  export type DiabetesPredictionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DiabetesPredictions.
     */
    data: DiabetesPredictionCreateManyInput | DiabetesPredictionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DiabetesPrediction createManyAndReturn
   */
  export type DiabetesPredictionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiabetesPrediction
     */
    select?: DiabetesPredictionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DiabetesPrediction
     */
    omit?: DiabetesPredictionOmit<ExtArgs> | null
    /**
     * The data used to create many DiabetesPredictions.
     */
    data: DiabetesPredictionCreateManyInput | DiabetesPredictionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiabetesPredictionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DiabetesPrediction update
   */
  export type DiabetesPredictionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiabetesPrediction
     */
    select?: DiabetesPredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiabetesPrediction
     */
    omit?: DiabetesPredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiabetesPredictionInclude<ExtArgs> | null
    /**
     * The data needed to update a DiabetesPrediction.
     */
    data: XOR<DiabetesPredictionUpdateInput, DiabetesPredictionUncheckedUpdateInput>
    /**
     * Choose, which DiabetesPrediction to update.
     */
    where: DiabetesPredictionWhereUniqueInput
  }

  /**
   * DiabetesPrediction updateMany
   */
  export type DiabetesPredictionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DiabetesPredictions.
     */
    data: XOR<DiabetesPredictionUpdateManyMutationInput, DiabetesPredictionUncheckedUpdateManyInput>
    /**
     * Filter which DiabetesPredictions to update
     */
    where?: DiabetesPredictionWhereInput
    /**
     * Limit how many DiabetesPredictions to update.
     */
    limit?: number
  }

  /**
   * DiabetesPrediction updateManyAndReturn
   */
  export type DiabetesPredictionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiabetesPrediction
     */
    select?: DiabetesPredictionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DiabetesPrediction
     */
    omit?: DiabetesPredictionOmit<ExtArgs> | null
    /**
     * The data used to update DiabetesPredictions.
     */
    data: XOR<DiabetesPredictionUpdateManyMutationInput, DiabetesPredictionUncheckedUpdateManyInput>
    /**
     * Filter which DiabetesPredictions to update
     */
    where?: DiabetesPredictionWhereInput
    /**
     * Limit how many DiabetesPredictions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiabetesPredictionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DiabetesPrediction upsert
   */
  export type DiabetesPredictionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiabetesPrediction
     */
    select?: DiabetesPredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiabetesPrediction
     */
    omit?: DiabetesPredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiabetesPredictionInclude<ExtArgs> | null
    /**
     * The filter to search for the DiabetesPrediction to update in case it exists.
     */
    where: DiabetesPredictionWhereUniqueInput
    /**
     * In case the DiabetesPrediction found by the `where` argument doesn't exist, create a new DiabetesPrediction with this data.
     */
    create: XOR<DiabetesPredictionCreateInput, DiabetesPredictionUncheckedCreateInput>
    /**
     * In case the DiabetesPrediction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DiabetesPredictionUpdateInput, DiabetesPredictionUncheckedUpdateInput>
  }

  /**
   * DiabetesPrediction delete
   */
  export type DiabetesPredictionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiabetesPrediction
     */
    select?: DiabetesPredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiabetesPrediction
     */
    omit?: DiabetesPredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiabetesPredictionInclude<ExtArgs> | null
    /**
     * Filter which DiabetesPrediction to delete.
     */
    where: DiabetesPredictionWhereUniqueInput
  }

  /**
   * DiabetesPrediction deleteMany
   */
  export type DiabetesPredictionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiabetesPredictions to delete
     */
    where?: DiabetesPredictionWhereInput
    /**
     * Limit how many DiabetesPredictions to delete.
     */
    limit?: number
  }

  /**
   * DiabetesPrediction without action
   */
  export type DiabetesPredictionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiabetesPrediction
     */
    select?: DiabetesPredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiabetesPrediction
     */
    omit?: DiabetesPredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiabetesPredictionInclude<ExtArgs> | null
  }


  /**
   * Model HeartDiseasePrediction
   */

  export type AggregateHeartDiseasePrediction = {
    _count: HeartDiseasePredictionCountAggregateOutputType | null
    _avg: HeartDiseasePredictionAvgAggregateOutputType | null
    _sum: HeartDiseasePredictionSumAggregateOutputType | null
    _min: HeartDiseasePredictionMinAggregateOutputType | null
    _max: HeartDiseasePredictionMaxAggregateOutputType | null
  }

  export type HeartDiseasePredictionAvgAggregateOutputType = {
    prediction_id: number | null
    age: number | null
    resting_blood_pressure: number | null
    serum_cholesterol: number | null
    resting_ecg: number | null
    max_heart_rate: number | null
    oldpeak: number | null
    num_major_vessels: number | null
  }

  export type HeartDiseasePredictionSumAggregateOutputType = {
    prediction_id: number | null
    age: number | null
    resting_blood_pressure: number | null
    serum_cholesterol: number | null
    resting_ecg: number | null
    max_heart_rate: number | null
    oldpeak: number | null
    num_major_vessels: number | null
  }

  export type HeartDiseasePredictionMinAggregateOutputType = {
    prediction_id: number | null
    user_id: string | null
    age: number | null
    sex: string | null
    chest_pain_type: string | null
    resting_blood_pressure: number | null
    serum_cholesterol: number | null
    fasting_blood_sugar: boolean | null
    resting_ecg: number | null
    max_heart_rate: number | null
    exercise_induced_angina: boolean | null
    oldpeak: number | null
    slope_of_peak_exercise_st_segment: string | null
    num_major_vessels: number | null
    thal: string | null
    result: string | null
    created_at: Date | null
  }

  export type HeartDiseasePredictionMaxAggregateOutputType = {
    prediction_id: number | null
    user_id: string | null
    age: number | null
    sex: string | null
    chest_pain_type: string | null
    resting_blood_pressure: number | null
    serum_cholesterol: number | null
    fasting_blood_sugar: boolean | null
    resting_ecg: number | null
    max_heart_rate: number | null
    exercise_induced_angina: boolean | null
    oldpeak: number | null
    slope_of_peak_exercise_st_segment: string | null
    num_major_vessels: number | null
    thal: string | null
    result: string | null
    created_at: Date | null
  }

  export type HeartDiseasePredictionCountAggregateOutputType = {
    prediction_id: number
    user_id: number
    age: number
    sex: number
    chest_pain_type: number
    resting_blood_pressure: number
    serum_cholesterol: number
    fasting_blood_sugar: number
    resting_ecg: number
    max_heart_rate: number
    exercise_induced_angina: number
    oldpeak: number
    slope_of_peak_exercise_st_segment: number
    num_major_vessels: number
    thal: number
    result: number
    created_at: number
    _all: number
  }


  export type HeartDiseasePredictionAvgAggregateInputType = {
    prediction_id?: true
    age?: true
    resting_blood_pressure?: true
    serum_cholesterol?: true
    resting_ecg?: true
    max_heart_rate?: true
    oldpeak?: true
    num_major_vessels?: true
  }

  export type HeartDiseasePredictionSumAggregateInputType = {
    prediction_id?: true
    age?: true
    resting_blood_pressure?: true
    serum_cholesterol?: true
    resting_ecg?: true
    max_heart_rate?: true
    oldpeak?: true
    num_major_vessels?: true
  }

  export type HeartDiseasePredictionMinAggregateInputType = {
    prediction_id?: true
    user_id?: true
    age?: true
    sex?: true
    chest_pain_type?: true
    resting_blood_pressure?: true
    serum_cholesterol?: true
    fasting_blood_sugar?: true
    resting_ecg?: true
    max_heart_rate?: true
    exercise_induced_angina?: true
    oldpeak?: true
    slope_of_peak_exercise_st_segment?: true
    num_major_vessels?: true
    thal?: true
    result?: true
    created_at?: true
  }

  export type HeartDiseasePredictionMaxAggregateInputType = {
    prediction_id?: true
    user_id?: true
    age?: true
    sex?: true
    chest_pain_type?: true
    resting_blood_pressure?: true
    serum_cholesterol?: true
    fasting_blood_sugar?: true
    resting_ecg?: true
    max_heart_rate?: true
    exercise_induced_angina?: true
    oldpeak?: true
    slope_of_peak_exercise_st_segment?: true
    num_major_vessels?: true
    thal?: true
    result?: true
    created_at?: true
  }

  export type HeartDiseasePredictionCountAggregateInputType = {
    prediction_id?: true
    user_id?: true
    age?: true
    sex?: true
    chest_pain_type?: true
    resting_blood_pressure?: true
    serum_cholesterol?: true
    fasting_blood_sugar?: true
    resting_ecg?: true
    max_heart_rate?: true
    exercise_induced_angina?: true
    oldpeak?: true
    slope_of_peak_exercise_st_segment?: true
    num_major_vessels?: true
    thal?: true
    result?: true
    created_at?: true
    _all?: true
  }

  export type HeartDiseasePredictionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HeartDiseasePrediction to aggregate.
     */
    where?: HeartDiseasePredictionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HeartDiseasePredictions to fetch.
     */
    orderBy?: HeartDiseasePredictionOrderByWithRelationInput | HeartDiseasePredictionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HeartDiseasePredictionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HeartDiseasePredictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HeartDiseasePredictions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HeartDiseasePredictions
    **/
    _count?: true | HeartDiseasePredictionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HeartDiseasePredictionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HeartDiseasePredictionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HeartDiseasePredictionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HeartDiseasePredictionMaxAggregateInputType
  }

  export type GetHeartDiseasePredictionAggregateType<T extends HeartDiseasePredictionAggregateArgs> = {
        [P in keyof T & keyof AggregateHeartDiseasePrediction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHeartDiseasePrediction[P]>
      : GetScalarType<T[P], AggregateHeartDiseasePrediction[P]>
  }




  export type HeartDiseasePredictionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HeartDiseasePredictionWhereInput
    orderBy?: HeartDiseasePredictionOrderByWithAggregationInput | HeartDiseasePredictionOrderByWithAggregationInput[]
    by: HeartDiseasePredictionScalarFieldEnum[] | HeartDiseasePredictionScalarFieldEnum
    having?: HeartDiseasePredictionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HeartDiseasePredictionCountAggregateInputType | true
    _avg?: HeartDiseasePredictionAvgAggregateInputType
    _sum?: HeartDiseasePredictionSumAggregateInputType
    _min?: HeartDiseasePredictionMinAggregateInputType
    _max?: HeartDiseasePredictionMaxAggregateInputType
  }

  export type HeartDiseasePredictionGroupByOutputType = {
    prediction_id: number
    user_id: string
    age: number
    sex: string
    chest_pain_type: string
    resting_blood_pressure: number
    serum_cholesterol: number
    fasting_blood_sugar: boolean
    resting_ecg: number
    max_heart_rate: number
    exercise_induced_angina: boolean
    oldpeak: number
    slope_of_peak_exercise_st_segment: string
    num_major_vessels: number
    thal: string
    result: string
    created_at: Date
    _count: HeartDiseasePredictionCountAggregateOutputType | null
    _avg: HeartDiseasePredictionAvgAggregateOutputType | null
    _sum: HeartDiseasePredictionSumAggregateOutputType | null
    _min: HeartDiseasePredictionMinAggregateOutputType | null
    _max: HeartDiseasePredictionMaxAggregateOutputType | null
  }

  type GetHeartDiseasePredictionGroupByPayload<T extends HeartDiseasePredictionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HeartDiseasePredictionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HeartDiseasePredictionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HeartDiseasePredictionGroupByOutputType[P]>
            : GetScalarType<T[P], HeartDiseasePredictionGroupByOutputType[P]>
        }
      >
    >


  export type HeartDiseasePredictionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    prediction_id?: boolean
    user_id?: boolean
    age?: boolean
    sex?: boolean
    chest_pain_type?: boolean
    resting_blood_pressure?: boolean
    serum_cholesterol?: boolean
    fasting_blood_sugar?: boolean
    resting_ecg?: boolean
    max_heart_rate?: boolean
    exercise_induced_angina?: boolean
    oldpeak?: boolean
    slope_of_peak_exercise_st_segment?: boolean
    num_major_vessels?: boolean
    thal?: boolean
    result?: boolean
    created_at?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["heartDiseasePrediction"]>

  export type HeartDiseasePredictionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    prediction_id?: boolean
    user_id?: boolean
    age?: boolean
    sex?: boolean
    chest_pain_type?: boolean
    resting_blood_pressure?: boolean
    serum_cholesterol?: boolean
    fasting_blood_sugar?: boolean
    resting_ecg?: boolean
    max_heart_rate?: boolean
    exercise_induced_angina?: boolean
    oldpeak?: boolean
    slope_of_peak_exercise_st_segment?: boolean
    num_major_vessels?: boolean
    thal?: boolean
    result?: boolean
    created_at?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["heartDiseasePrediction"]>

  export type HeartDiseasePredictionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    prediction_id?: boolean
    user_id?: boolean
    age?: boolean
    sex?: boolean
    chest_pain_type?: boolean
    resting_blood_pressure?: boolean
    serum_cholesterol?: boolean
    fasting_blood_sugar?: boolean
    resting_ecg?: boolean
    max_heart_rate?: boolean
    exercise_induced_angina?: boolean
    oldpeak?: boolean
    slope_of_peak_exercise_st_segment?: boolean
    num_major_vessels?: boolean
    thal?: boolean
    result?: boolean
    created_at?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["heartDiseasePrediction"]>

  export type HeartDiseasePredictionSelectScalar = {
    prediction_id?: boolean
    user_id?: boolean
    age?: boolean
    sex?: boolean
    chest_pain_type?: boolean
    resting_blood_pressure?: boolean
    serum_cholesterol?: boolean
    fasting_blood_sugar?: boolean
    resting_ecg?: boolean
    max_heart_rate?: boolean
    exercise_induced_angina?: boolean
    oldpeak?: boolean
    slope_of_peak_exercise_st_segment?: boolean
    num_major_vessels?: boolean
    thal?: boolean
    result?: boolean
    created_at?: boolean
  }

  export type HeartDiseasePredictionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"prediction_id" | "user_id" | "age" | "sex" | "chest_pain_type" | "resting_blood_pressure" | "serum_cholesterol" | "fasting_blood_sugar" | "resting_ecg" | "max_heart_rate" | "exercise_induced_angina" | "oldpeak" | "slope_of_peak_exercise_st_segment" | "num_major_vessels" | "thal" | "result" | "created_at", ExtArgs["result"]["heartDiseasePrediction"]>
  export type HeartDiseasePredictionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type HeartDiseasePredictionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type HeartDiseasePredictionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $HeartDiseasePredictionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HeartDiseasePrediction"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      prediction_id: number
      user_id: string
      age: number
      sex: string
      chest_pain_type: string
      resting_blood_pressure: number
      serum_cholesterol: number
      fasting_blood_sugar: boolean
      resting_ecg: number
      max_heart_rate: number
      exercise_induced_angina: boolean
      oldpeak: number
      slope_of_peak_exercise_st_segment: string
      num_major_vessels: number
      thal: string
      result: string
      created_at: Date
    }, ExtArgs["result"]["heartDiseasePrediction"]>
    composites: {}
  }

  type HeartDiseasePredictionGetPayload<S extends boolean | null | undefined | HeartDiseasePredictionDefaultArgs> = $Result.GetResult<Prisma.$HeartDiseasePredictionPayload, S>

  type HeartDiseasePredictionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HeartDiseasePredictionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HeartDiseasePredictionCountAggregateInputType | true
    }

  export interface HeartDiseasePredictionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HeartDiseasePrediction'], meta: { name: 'HeartDiseasePrediction' } }
    /**
     * Find zero or one HeartDiseasePrediction that matches the filter.
     * @param {HeartDiseasePredictionFindUniqueArgs} args - Arguments to find a HeartDiseasePrediction
     * @example
     * // Get one HeartDiseasePrediction
     * const heartDiseasePrediction = await prisma.heartDiseasePrediction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HeartDiseasePredictionFindUniqueArgs>(args: SelectSubset<T, HeartDiseasePredictionFindUniqueArgs<ExtArgs>>): Prisma__HeartDiseasePredictionClient<$Result.GetResult<Prisma.$HeartDiseasePredictionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HeartDiseasePrediction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HeartDiseasePredictionFindUniqueOrThrowArgs} args - Arguments to find a HeartDiseasePrediction
     * @example
     * // Get one HeartDiseasePrediction
     * const heartDiseasePrediction = await prisma.heartDiseasePrediction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HeartDiseasePredictionFindUniqueOrThrowArgs>(args: SelectSubset<T, HeartDiseasePredictionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HeartDiseasePredictionClient<$Result.GetResult<Prisma.$HeartDiseasePredictionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HeartDiseasePrediction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeartDiseasePredictionFindFirstArgs} args - Arguments to find a HeartDiseasePrediction
     * @example
     * // Get one HeartDiseasePrediction
     * const heartDiseasePrediction = await prisma.heartDiseasePrediction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HeartDiseasePredictionFindFirstArgs>(args?: SelectSubset<T, HeartDiseasePredictionFindFirstArgs<ExtArgs>>): Prisma__HeartDiseasePredictionClient<$Result.GetResult<Prisma.$HeartDiseasePredictionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HeartDiseasePrediction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeartDiseasePredictionFindFirstOrThrowArgs} args - Arguments to find a HeartDiseasePrediction
     * @example
     * // Get one HeartDiseasePrediction
     * const heartDiseasePrediction = await prisma.heartDiseasePrediction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HeartDiseasePredictionFindFirstOrThrowArgs>(args?: SelectSubset<T, HeartDiseasePredictionFindFirstOrThrowArgs<ExtArgs>>): Prisma__HeartDiseasePredictionClient<$Result.GetResult<Prisma.$HeartDiseasePredictionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HeartDiseasePredictions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeartDiseasePredictionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HeartDiseasePredictions
     * const heartDiseasePredictions = await prisma.heartDiseasePrediction.findMany()
     * 
     * // Get first 10 HeartDiseasePredictions
     * const heartDiseasePredictions = await prisma.heartDiseasePrediction.findMany({ take: 10 })
     * 
     * // Only select the `prediction_id`
     * const heartDiseasePredictionWithPrediction_idOnly = await prisma.heartDiseasePrediction.findMany({ select: { prediction_id: true } })
     * 
     */
    findMany<T extends HeartDiseasePredictionFindManyArgs>(args?: SelectSubset<T, HeartDiseasePredictionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HeartDiseasePredictionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HeartDiseasePrediction.
     * @param {HeartDiseasePredictionCreateArgs} args - Arguments to create a HeartDiseasePrediction.
     * @example
     * // Create one HeartDiseasePrediction
     * const HeartDiseasePrediction = await prisma.heartDiseasePrediction.create({
     *   data: {
     *     // ... data to create a HeartDiseasePrediction
     *   }
     * })
     * 
     */
    create<T extends HeartDiseasePredictionCreateArgs>(args: SelectSubset<T, HeartDiseasePredictionCreateArgs<ExtArgs>>): Prisma__HeartDiseasePredictionClient<$Result.GetResult<Prisma.$HeartDiseasePredictionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HeartDiseasePredictions.
     * @param {HeartDiseasePredictionCreateManyArgs} args - Arguments to create many HeartDiseasePredictions.
     * @example
     * // Create many HeartDiseasePredictions
     * const heartDiseasePrediction = await prisma.heartDiseasePrediction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HeartDiseasePredictionCreateManyArgs>(args?: SelectSubset<T, HeartDiseasePredictionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HeartDiseasePredictions and returns the data saved in the database.
     * @param {HeartDiseasePredictionCreateManyAndReturnArgs} args - Arguments to create many HeartDiseasePredictions.
     * @example
     * // Create many HeartDiseasePredictions
     * const heartDiseasePrediction = await prisma.heartDiseasePrediction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HeartDiseasePredictions and only return the `prediction_id`
     * const heartDiseasePredictionWithPrediction_idOnly = await prisma.heartDiseasePrediction.createManyAndReturn({
     *   select: { prediction_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HeartDiseasePredictionCreateManyAndReturnArgs>(args?: SelectSubset<T, HeartDiseasePredictionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HeartDiseasePredictionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HeartDiseasePrediction.
     * @param {HeartDiseasePredictionDeleteArgs} args - Arguments to delete one HeartDiseasePrediction.
     * @example
     * // Delete one HeartDiseasePrediction
     * const HeartDiseasePrediction = await prisma.heartDiseasePrediction.delete({
     *   where: {
     *     // ... filter to delete one HeartDiseasePrediction
     *   }
     * })
     * 
     */
    delete<T extends HeartDiseasePredictionDeleteArgs>(args: SelectSubset<T, HeartDiseasePredictionDeleteArgs<ExtArgs>>): Prisma__HeartDiseasePredictionClient<$Result.GetResult<Prisma.$HeartDiseasePredictionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HeartDiseasePrediction.
     * @param {HeartDiseasePredictionUpdateArgs} args - Arguments to update one HeartDiseasePrediction.
     * @example
     * // Update one HeartDiseasePrediction
     * const heartDiseasePrediction = await prisma.heartDiseasePrediction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HeartDiseasePredictionUpdateArgs>(args: SelectSubset<T, HeartDiseasePredictionUpdateArgs<ExtArgs>>): Prisma__HeartDiseasePredictionClient<$Result.GetResult<Prisma.$HeartDiseasePredictionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HeartDiseasePredictions.
     * @param {HeartDiseasePredictionDeleteManyArgs} args - Arguments to filter HeartDiseasePredictions to delete.
     * @example
     * // Delete a few HeartDiseasePredictions
     * const { count } = await prisma.heartDiseasePrediction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HeartDiseasePredictionDeleteManyArgs>(args?: SelectSubset<T, HeartDiseasePredictionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HeartDiseasePredictions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeartDiseasePredictionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HeartDiseasePredictions
     * const heartDiseasePrediction = await prisma.heartDiseasePrediction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HeartDiseasePredictionUpdateManyArgs>(args: SelectSubset<T, HeartDiseasePredictionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HeartDiseasePredictions and returns the data updated in the database.
     * @param {HeartDiseasePredictionUpdateManyAndReturnArgs} args - Arguments to update many HeartDiseasePredictions.
     * @example
     * // Update many HeartDiseasePredictions
     * const heartDiseasePrediction = await prisma.heartDiseasePrediction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HeartDiseasePredictions and only return the `prediction_id`
     * const heartDiseasePredictionWithPrediction_idOnly = await prisma.heartDiseasePrediction.updateManyAndReturn({
     *   select: { prediction_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HeartDiseasePredictionUpdateManyAndReturnArgs>(args: SelectSubset<T, HeartDiseasePredictionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HeartDiseasePredictionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HeartDiseasePrediction.
     * @param {HeartDiseasePredictionUpsertArgs} args - Arguments to update or create a HeartDiseasePrediction.
     * @example
     * // Update or create a HeartDiseasePrediction
     * const heartDiseasePrediction = await prisma.heartDiseasePrediction.upsert({
     *   create: {
     *     // ... data to create a HeartDiseasePrediction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HeartDiseasePrediction we want to update
     *   }
     * })
     */
    upsert<T extends HeartDiseasePredictionUpsertArgs>(args: SelectSubset<T, HeartDiseasePredictionUpsertArgs<ExtArgs>>): Prisma__HeartDiseasePredictionClient<$Result.GetResult<Prisma.$HeartDiseasePredictionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HeartDiseasePredictions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeartDiseasePredictionCountArgs} args - Arguments to filter HeartDiseasePredictions to count.
     * @example
     * // Count the number of HeartDiseasePredictions
     * const count = await prisma.heartDiseasePrediction.count({
     *   where: {
     *     // ... the filter for the HeartDiseasePredictions we want to count
     *   }
     * })
    **/
    count<T extends HeartDiseasePredictionCountArgs>(
      args?: Subset<T, HeartDiseasePredictionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HeartDiseasePredictionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HeartDiseasePrediction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeartDiseasePredictionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HeartDiseasePredictionAggregateArgs>(args: Subset<T, HeartDiseasePredictionAggregateArgs>): Prisma.PrismaPromise<GetHeartDiseasePredictionAggregateType<T>>

    /**
     * Group by HeartDiseasePrediction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeartDiseasePredictionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HeartDiseasePredictionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HeartDiseasePredictionGroupByArgs['orderBy'] }
        : { orderBy?: HeartDiseasePredictionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HeartDiseasePredictionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHeartDiseasePredictionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HeartDiseasePrediction model
   */
  readonly fields: HeartDiseasePredictionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HeartDiseasePrediction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HeartDiseasePredictionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the HeartDiseasePrediction model
   */
  interface HeartDiseasePredictionFieldRefs {
    readonly prediction_id: FieldRef<"HeartDiseasePrediction", 'Int'>
    readonly user_id: FieldRef<"HeartDiseasePrediction", 'String'>
    readonly age: FieldRef<"HeartDiseasePrediction", 'Int'>
    readonly sex: FieldRef<"HeartDiseasePrediction", 'String'>
    readonly chest_pain_type: FieldRef<"HeartDiseasePrediction", 'String'>
    readonly resting_blood_pressure: FieldRef<"HeartDiseasePrediction", 'Int'>
    readonly serum_cholesterol: FieldRef<"HeartDiseasePrediction", 'Int'>
    readonly fasting_blood_sugar: FieldRef<"HeartDiseasePrediction", 'Boolean'>
    readonly resting_ecg: FieldRef<"HeartDiseasePrediction", 'Int'>
    readonly max_heart_rate: FieldRef<"HeartDiseasePrediction", 'Int'>
    readonly exercise_induced_angina: FieldRef<"HeartDiseasePrediction", 'Boolean'>
    readonly oldpeak: FieldRef<"HeartDiseasePrediction", 'Float'>
    readonly slope_of_peak_exercise_st_segment: FieldRef<"HeartDiseasePrediction", 'String'>
    readonly num_major_vessels: FieldRef<"HeartDiseasePrediction", 'Int'>
    readonly thal: FieldRef<"HeartDiseasePrediction", 'String'>
    readonly result: FieldRef<"HeartDiseasePrediction", 'String'>
    readonly created_at: FieldRef<"HeartDiseasePrediction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * HeartDiseasePrediction findUnique
   */
  export type HeartDiseasePredictionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeartDiseasePrediction
     */
    select?: HeartDiseasePredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeartDiseasePrediction
     */
    omit?: HeartDiseasePredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeartDiseasePredictionInclude<ExtArgs> | null
    /**
     * Filter, which HeartDiseasePrediction to fetch.
     */
    where: HeartDiseasePredictionWhereUniqueInput
  }

  /**
   * HeartDiseasePrediction findUniqueOrThrow
   */
  export type HeartDiseasePredictionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeartDiseasePrediction
     */
    select?: HeartDiseasePredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeartDiseasePrediction
     */
    omit?: HeartDiseasePredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeartDiseasePredictionInclude<ExtArgs> | null
    /**
     * Filter, which HeartDiseasePrediction to fetch.
     */
    where: HeartDiseasePredictionWhereUniqueInput
  }

  /**
   * HeartDiseasePrediction findFirst
   */
  export type HeartDiseasePredictionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeartDiseasePrediction
     */
    select?: HeartDiseasePredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeartDiseasePrediction
     */
    omit?: HeartDiseasePredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeartDiseasePredictionInclude<ExtArgs> | null
    /**
     * Filter, which HeartDiseasePrediction to fetch.
     */
    where?: HeartDiseasePredictionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HeartDiseasePredictions to fetch.
     */
    orderBy?: HeartDiseasePredictionOrderByWithRelationInput | HeartDiseasePredictionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HeartDiseasePredictions.
     */
    cursor?: HeartDiseasePredictionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HeartDiseasePredictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HeartDiseasePredictions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HeartDiseasePredictions.
     */
    distinct?: HeartDiseasePredictionScalarFieldEnum | HeartDiseasePredictionScalarFieldEnum[]
  }

  /**
   * HeartDiseasePrediction findFirstOrThrow
   */
  export type HeartDiseasePredictionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeartDiseasePrediction
     */
    select?: HeartDiseasePredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeartDiseasePrediction
     */
    omit?: HeartDiseasePredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeartDiseasePredictionInclude<ExtArgs> | null
    /**
     * Filter, which HeartDiseasePrediction to fetch.
     */
    where?: HeartDiseasePredictionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HeartDiseasePredictions to fetch.
     */
    orderBy?: HeartDiseasePredictionOrderByWithRelationInput | HeartDiseasePredictionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HeartDiseasePredictions.
     */
    cursor?: HeartDiseasePredictionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HeartDiseasePredictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HeartDiseasePredictions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HeartDiseasePredictions.
     */
    distinct?: HeartDiseasePredictionScalarFieldEnum | HeartDiseasePredictionScalarFieldEnum[]
  }

  /**
   * HeartDiseasePrediction findMany
   */
  export type HeartDiseasePredictionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeartDiseasePrediction
     */
    select?: HeartDiseasePredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeartDiseasePrediction
     */
    omit?: HeartDiseasePredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeartDiseasePredictionInclude<ExtArgs> | null
    /**
     * Filter, which HeartDiseasePredictions to fetch.
     */
    where?: HeartDiseasePredictionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HeartDiseasePredictions to fetch.
     */
    orderBy?: HeartDiseasePredictionOrderByWithRelationInput | HeartDiseasePredictionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HeartDiseasePredictions.
     */
    cursor?: HeartDiseasePredictionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HeartDiseasePredictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HeartDiseasePredictions.
     */
    skip?: number
    distinct?: HeartDiseasePredictionScalarFieldEnum | HeartDiseasePredictionScalarFieldEnum[]
  }

  /**
   * HeartDiseasePrediction create
   */
  export type HeartDiseasePredictionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeartDiseasePrediction
     */
    select?: HeartDiseasePredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeartDiseasePrediction
     */
    omit?: HeartDiseasePredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeartDiseasePredictionInclude<ExtArgs> | null
    /**
     * The data needed to create a HeartDiseasePrediction.
     */
    data: XOR<HeartDiseasePredictionCreateInput, HeartDiseasePredictionUncheckedCreateInput>
  }

  /**
   * HeartDiseasePrediction createMany
   */
  export type HeartDiseasePredictionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HeartDiseasePredictions.
     */
    data: HeartDiseasePredictionCreateManyInput | HeartDiseasePredictionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HeartDiseasePrediction createManyAndReturn
   */
  export type HeartDiseasePredictionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeartDiseasePrediction
     */
    select?: HeartDiseasePredictionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HeartDiseasePrediction
     */
    omit?: HeartDiseasePredictionOmit<ExtArgs> | null
    /**
     * The data used to create many HeartDiseasePredictions.
     */
    data: HeartDiseasePredictionCreateManyInput | HeartDiseasePredictionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeartDiseasePredictionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HeartDiseasePrediction update
   */
  export type HeartDiseasePredictionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeartDiseasePrediction
     */
    select?: HeartDiseasePredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeartDiseasePrediction
     */
    omit?: HeartDiseasePredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeartDiseasePredictionInclude<ExtArgs> | null
    /**
     * The data needed to update a HeartDiseasePrediction.
     */
    data: XOR<HeartDiseasePredictionUpdateInput, HeartDiseasePredictionUncheckedUpdateInput>
    /**
     * Choose, which HeartDiseasePrediction to update.
     */
    where: HeartDiseasePredictionWhereUniqueInput
  }

  /**
   * HeartDiseasePrediction updateMany
   */
  export type HeartDiseasePredictionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HeartDiseasePredictions.
     */
    data: XOR<HeartDiseasePredictionUpdateManyMutationInput, HeartDiseasePredictionUncheckedUpdateManyInput>
    /**
     * Filter which HeartDiseasePredictions to update
     */
    where?: HeartDiseasePredictionWhereInput
    /**
     * Limit how many HeartDiseasePredictions to update.
     */
    limit?: number
  }

  /**
   * HeartDiseasePrediction updateManyAndReturn
   */
  export type HeartDiseasePredictionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeartDiseasePrediction
     */
    select?: HeartDiseasePredictionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HeartDiseasePrediction
     */
    omit?: HeartDiseasePredictionOmit<ExtArgs> | null
    /**
     * The data used to update HeartDiseasePredictions.
     */
    data: XOR<HeartDiseasePredictionUpdateManyMutationInput, HeartDiseasePredictionUncheckedUpdateManyInput>
    /**
     * Filter which HeartDiseasePredictions to update
     */
    where?: HeartDiseasePredictionWhereInput
    /**
     * Limit how many HeartDiseasePredictions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeartDiseasePredictionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * HeartDiseasePrediction upsert
   */
  export type HeartDiseasePredictionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeartDiseasePrediction
     */
    select?: HeartDiseasePredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeartDiseasePrediction
     */
    omit?: HeartDiseasePredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeartDiseasePredictionInclude<ExtArgs> | null
    /**
     * The filter to search for the HeartDiseasePrediction to update in case it exists.
     */
    where: HeartDiseasePredictionWhereUniqueInput
    /**
     * In case the HeartDiseasePrediction found by the `where` argument doesn't exist, create a new HeartDiseasePrediction with this data.
     */
    create: XOR<HeartDiseasePredictionCreateInput, HeartDiseasePredictionUncheckedCreateInput>
    /**
     * In case the HeartDiseasePrediction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HeartDiseasePredictionUpdateInput, HeartDiseasePredictionUncheckedUpdateInput>
  }

  /**
   * HeartDiseasePrediction delete
   */
  export type HeartDiseasePredictionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeartDiseasePrediction
     */
    select?: HeartDiseasePredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeartDiseasePrediction
     */
    omit?: HeartDiseasePredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeartDiseasePredictionInclude<ExtArgs> | null
    /**
     * Filter which HeartDiseasePrediction to delete.
     */
    where: HeartDiseasePredictionWhereUniqueInput
  }

  /**
   * HeartDiseasePrediction deleteMany
   */
  export type HeartDiseasePredictionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HeartDiseasePredictions to delete
     */
    where?: HeartDiseasePredictionWhereInput
    /**
     * Limit how many HeartDiseasePredictions to delete.
     */
    limit?: number
  }

  /**
   * HeartDiseasePrediction without action
   */
  export type HeartDiseasePredictionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeartDiseasePrediction
     */
    select?: HeartDiseasePredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeartDiseasePrediction
     */
    omit?: HeartDiseasePredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeartDiseasePredictionInclude<ExtArgs> | null
  }


  /**
   * Model KidneyDiseasePrediction
   */

  export type AggregateKidneyDiseasePrediction = {
    _count: KidneyDiseasePredictionCountAggregateOutputType | null
    _avg: KidneyDiseasePredictionAvgAggregateOutputType | null
    _sum: KidneyDiseasePredictionSumAggregateOutputType | null
    _min: KidneyDiseasePredictionMinAggregateOutputType | null
    _max: KidneyDiseasePredictionMaxAggregateOutputType | null
  }

  export type KidneyDiseasePredictionAvgAggregateOutputType = {
    prediction_id: number | null
    age: number | null
    blood_pressure: number | null
    specific_gravity: number | null
    albumin: number | null
    sugar: number | null
    blood_glucose_random: number | null
    blood_urea: number | null
    serum_creatinine: number | null
    sodium: number | null
    potassium: number | null
    hemoglobin: number | null
    packed_cell_volume: number | null
    white_cell_count: number | null
    red_cell_count: number | null
  }

  export type KidneyDiseasePredictionSumAggregateOutputType = {
    prediction_id: number | null
    age: number | null
    blood_pressure: number | null
    specific_gravity: number | null
    albumin: number | null
    sugar: number | null
    blood_glucose_random: number | null
    blood_urea: number | null
    serum_creatinine: number | null
    sodium: number | null
    potassium: number | null
    hemoglobin: number | null
    packed_cell_volume: number | null
    white_cell_count: number | null
    red_cell_count: number | null
  }

  export type KidneyDiseasePredictionMinAggregateOutputType = {
    prediction_id: number | null
    user_id: string | null
    age: number | null
    blood_pressure: number | null
    specific_gravity: number | null
    albumin: number | null
    sugar: number | null
    red_blood_cells: string | null
    pus_cell: string | null
    pus_cell_clumps: string | null
    bacteria: string | null
    blood_glucose_random: number | null
    blood_urea: number | null
    serum_creatinine: number | null
    sodium: number | null
    potassium: number | null
    hemoglobin: number | null
    packed_cell_volume: number | null
    white_cell_count: number | null
    red_cell_count: number | null
    hypertension: string | null
    diabetes_mellitus: string | null
    coronary_artery_disease: string | null
    appetite: string | null
    pedal_edema: string | null
    anemia: string | null
    classification: string | null
    created_at: Date | null
  }

  export type KidneyDiseasePredictionMaxAggregateOutputType = {
    prediction_id: number | null
    user_id: string | null
    age: number | null
    blood_pressure: number | null
    specific_gravity: number | null
    albumin: number | null
    sugar: number | null
    red_blood_cells: string | null
    pus_cell: string | null
    pus_cell_clumps: string | null
    bacteria: string | null
    blood_glucose_random: number | null
    blood_urea: number | null
    serum_creatinine: number | null
    sodium: number | null
    potassium: number | null
    hemoglobin: number | null
    packed_cell_volume: number | null
    white_cell_count: number | null
    red_cell_count: number | null
    hypertension: string | null
    diabetes_mellitus: string | null
    coronary_artery_disease: string | null
    appetite: string | null
    pedal_edema: string | null
    anemia: string | null
    classification: string | null
    created_at: Date | null
  }

  export type KidneyDiseasePredictionCountAggregateOutputType = {
    prediction_id: number
    user_id: number
    age: number
    blood_pressure: number
    specific_gravity: number
    albumin: number
    sugar: number
    red_blood_cells: number
    pus_cell: number
    pus_cell_clumps: number
    bacteria: number
    blood_glucose_random: number
    blood_urea: number
    serum_creatinine: number
    sodium: number
    potassium: number
    hemoglobin: number
    packed_cell_volume: number
    white_cell_count: number
    red_cell_count: number
    hypertension: number
    diabetes_mellitus: number
    coronary_artery_disease: number
    appetite: number
    pedal_edema: number
    anemia: number
    classification: number
    created_at: number
    _all: number
  }


  export type KidneyDiseasePredictionAvgAggregateInputType = {
    prediction_id?: true
    age?: true
    blood_pressure?: true
    specific_gravity?: true
    albumin?: true
    sugar?: true
    blood_glucose_random?: true
    blood_urea?: true
    serum_creatinine?: true
    sodium?: true
    potassium?: true
    hemoglobin?: true
    packed_cell_volume?: true
    white_cell_count?: true
    red_cell_count?: true
  }

  export type KidneyDiseasePredictionSumAggregateInputType = {
    prediction_id?: true
    age?: true
    blood_pressure?: true
    specific_gravity?: true
    albumin?: true
    sugar?: true
    blood_glucose_random?: true
    blood_urea?: true
    serum_creatinine?: true
    sodium?: true
    potassium?: true
    hemoglobin?: true
    packed_cell_volume?: true
    white_cell_count?: true
    red_cell_count?: true
  }

  export type KidneyDiseasePredictionMinAggregateInputType = {
    prediction_id?: true
    user_id?: true
    age?: true
    blood_pressure?: true
    specific_gravity?: true
    albumin?: true
    sugar?: true
    red_blood_cells?: true
    pus_cell?: true
    pus_cell_clumps?: true
    bacteria?: true
    blood_glucose_random?: true
    blood_urea?: true
    serum_creatinine?: true
    sodium?: true
    potassium?: true
    hemoglobin?: true
    packed_cell_volume?: true
    white_cell_count?: true
    red_cell_count?: true
    hypertension?: true
    diabetes_mellitus?: true
    coronary_artery_disease?: true
    appetite?: true
    pedal_edema?: true
    anemia?: true
    classification?: true
    created_at?: true
  }

  export type KidneyDiseasePredictionMaxAggregateInputType = {
    prediction_id?: true
    user_id?: true
    age?: true
    blood_pressure?: true
    specific_gravity?: true
    albumin?: true
    sugar?: true
    red_blood_cells?: true
    pus_cell?: true
    pus_cell_clumps?: true
    bacteria?: true
    blood_glucose_random?: true
    blood_urea?: true
    serum_creatinine?: true
    sodium?: true
    potassium?: true
    hemoglobin?: true
    packed_cell_volume?: true
    white_cell_count?: true
    red_cell_count?: true
    hypertension?: true
    diabetes_mellitus?: true
    coronary_artery_disease?: true
    appetite?: true
    pedal_edema?: true
    anemia?: true
    classification?: true
    created_at?: true
  }

  export type KidneyDiseasePredictionCountAggregateInputType = {
    prediction_id?: true
    user_id?: true
    age?: true
    blood_pressure?: true
    specific_gravity?: true
    albumin?: true
    sugar?: true
    red_blood_cells?: true
    pus_cell?: true
    pus_cell_clumps?: true
    bacteria?: true
    blood_glucose_random?: true
    blood_urea?: true
    serum_creatinine?: true
    sodium?: true
    potassium?: true
    hemoglobin?: true
    packed_cell_volume?: true
    white_cell_count?: true
    red_cell_count?: true
    hypertension?: true
    diabetes_mellitus?: true
    coronary_artery_disease?: true
    appetite?: true
    pedal_edema?: true
    anemia?: true
    classification?: true
    created_at?: true
    _all?: true
  }

  export type KidneyDiseasePredictionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KidneyDiseasePrediction to aggregate.
     */
    where?: KidneyDiseasePredictionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KidneyDiseasePredictions to fetch.
     */
    orderBy?: KidneyDiseasePredictionOrderByWithRelationInput | KidneyDiseasePredictionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KidneyDiseasePredictionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KidneyDiseasePredictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KidneyDiseasePredictions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned KidneyDiseasePredictions
    **/
    _count?: true | KidneyDiseasePredictionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KidneyDiseasePredictionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KidneyDiseasePredictionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KidneyDiseasePredictionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KidneyDiseasePredictionMaxAggregateInputType
  }

  export type GetKidneyDiseasePredictionAggregateType<T extends KidneyDiseasePredictionAggregateArgs> = {
        [P in keyof T & keyof AggregateKidneyDiseasePrediction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKidneyDiseasePrediction[P]>
      : GetScalarType<T[P], AggregateKidneyDiseasePrediction[P]>
  }




  export type KidneyDiseasePredictionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KidneyDiseasePredictionWhereInput
    orderBy?: KidneyDiseasePredictionOrderByWithAggregationInput | KidneyDiseasePredictionOrderByWithAggregationInput[]
    by: KidneyDiseasePredictionScalarFieldEnum[] | KidneyDiseasePredictionScalarFieldEnum
    having?: KidneyDiseasePredictionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KidneyDiseasePredictionCountAggregateInputType | true
    _avg?: KidneyDiseasePredictionAvgAggregateInputType
    _sum?: KidneyDiseasePredictionSumAggregateInputType
    _min?: KidneyDiseasePredictionMinAggregateInputType
    _max?: KidneyDiseasePredictionMaxAggregateInputType
  }

  export type KidneyDiseasePredictionGroupByOutputType = {
    prediction_id: number
    user_id: string
    age: number
    blood_pressure: number
    specific_gravity: number
    albumin: number
    sugar: number
    red_blood_cells: string
    pus_cell: string
    pus_cell_clumps: string
    bacteria: string
    blood_glucose_random: number
    blood_urea: number
    serum_creatinine: number
    sodium: number
    potassium: number
    hemoglobin: number
    packed_cell_volume: number
    white_cell_count: number
    red_cell_count: number
    hypertension: string
    diabetes_mellitus: string
    coronary_artery_disease: string
    appetite: string
    pedal_edema: string
    anemia: string
    classification: string
    created_at: Date
    _count: KidneyDiseasePredictionCountAggregateOutputType | null
    _avg: KidneyDiseasePredictionAvgAggregateOutputType | null
    _sum: KidneyDiseasePredictionSumAggregateOutputType | null
    _min: KidneyDiseasePredictionMinAggregateOutputType | null
    _max: KidneyDiseasePredictionMaxAggregateOutputType | null
  }

  type GetKidneyDiseasePredictionGroupByPayload<T extends KidneyDiseasePredictionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KidneyDiseasePredictionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KidneyDiseasePredictionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KidneyDiseasePredictionGroupByOutputType[P]>
            : GetScalarType<T[P], KidneyDiseasePredictionGroupByOutputType[P]>
        }
      >
    >


  export type KidneyDiseasePredictionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    prediction_id?: boolean
    user_id?: boolean
    age?: boolean
    blood_pressure?: boolean
    specific_gravity?: boolean
    albumin?: boolean
    sugar?: boolean
    red_blood_cells?: boolean
    pus_cell?: boolean
    pus_cell_clumps?: boolean
    bacteria?: boolean
    blood_glucose_random?: boolean
    blood_urea?: boolean
    serum_creatinine?: boolean
    sodium?: boolean
    potassium?: boolean
    hemoglobin?: boolean
    packed_cell_volume?: boolean
    white_cell_count?: boolean
    red_cell_count?: boolean
    hypertension?: boolean
    diabetes_mellitus?: boolean
    coronary_artery_disease?: boolean
    appetite?: boolean
    pedal_edema?: boolean
    anemia?: boolean
    classification?: boolean
    created_at?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kidneyDiseasePrediction"]>

  export type KidneyDiseasePredictionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    prediction_id?: boolean
    user_id?: boolean
    age?: boolean
    blood_pressure?: boolean
    specific_gravity?: boolean
    albumin?: boolean
    sugar?: boolean
    red_blood_cells?: boolean
    pus_cell?: boolean
    pus_cell_clumps?: boolean
    bacteria?: boolean
    blood_glucose_random?: boolean
    blood_urea?: boolean
    serum_creatinine?: boolean
    sodium?: boolean
    potassium?: boolean
    hemoglobin?: boolean
    packed_cell_volume?: boolean
    white_cell_count?: boolean
    red_cell_count?: boolean
    hypertension?: boolean
    diabetes_mellitus?: boolean
    coronary_artery_disease?: boolean
    appetite?: boolean
    pedal_edema?: boolean
    anemia?: boolean
    classification?: boolean
    created_at?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kidneyDiseasePrediction"]>

  export type KidneyDiseasePredictionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    prediction_id?: boolean
    user_id?: boolean
    age?: boolean
    blood_pressure?: boolean
    specific_gravity?: boolean
    albumin?: boolean
    sugar?: boolean
    red_blood_cells?: boolean
    pus_cell?: boolean
    pus_cell_clumps?: boolean
    bacteria?: boolean
    blood_glucose_random?: boolean
    blood_urea?: boolean
    serum_creatinine?: boolean
    sodium?: boolean
    potassium?: boolean
    hemoglobin?: boolean
    packed_cell_volume?: boolean
    white_cell_count?: boolean
    red_cell_count?: boolean
    hypertension?: boolean
    diabetes_mellitus?: boolean
    coronary_artery_disease?: boolean
    appetite?: boolean
    pedal_edema?: boolean
    anemia?: boolean
    classification?: boolean
    created_at?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kidneyDiseasePrediction"]>

  export type KidneyDiseasePredictionSelectScalar = {
    prediction_id?: boolean
    user_id?: boolean
    age?: boolean
    blood_pressure?: boolean
    specific_gravity?: boolean
    albumin?: boolean
    sugar?: boolean
    red_blood_cells?: boolean
    pus_cell?: boolean
    pus_cell_clumps?: boolean
    bacteria?: boolean
    blood_glucose_random?: boolean
    blood_urea?: boolean
    serum_creatinine?: boolean
    sodium?: boolean
    potassium?: boolean
    hemoglobin?: boolean
    packed_cell_volume?: boolean
    white_cell_count?: boolean
    red_cell_count?: boolean
    hypertension?: boolean
    diabetes_mellitus?: boolean
    coronary_artery_disease?: boolean
    appetite?: boolean
    pedal_edema?: boolean
    anemia?: boolean
    classification?: boolean
    created_at?: boolean
  }

  export type KidneyDiseasePredictionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"prediction_id" | "user_id" | "age" | "blood_pressure" | "specific_gravity" | "albumin" | "sugar" | "red_blood_cells" | "pus_cell" | "pus_cell_clumps" | "bacteria" | "blood_glucose_random" | "blood_urea" | "serum_creatinine" | "sodium" | "potassium" | "hemoglobin" | "packed_cell_volume" | "white_cell_count" | "red_cell_count" | "hypertension" | "diabetes_mellitus" | "coronary_artery_disease" | "appetite" | "pedal_edema" | "anemia" | "classification" | "created_at", ExtArgs["result"]["kidneyDiseasePrediction"]>
  export type KidneyDiseasePredictionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type KidneyDiseasePredictionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type KidneyDiseasePredictionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $KidneyDiseasePredictionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "KidneyDiseasePrediction"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      prediction_id: number
      user_id: string
      age: number
      blood_pressure: number
      specific_gravity: number
      albumin: number
      sugar: number
      red_blood_cells: string
      pus_cell: string
      pus_cell_clumps: string
      bacteria: string
      blood_glucose_random: number
      blood_urea: number
      serum_creatinine: number
      sodium: number
      potassium: number
      hemoglobin: number
      packed_cell_volume: number
      white_cell_count: number
      red_cell_count: number
      hypertension: string
      diabetes_mellitus: string
      coronary_artery_disease: string
      appetite: string
      pedal_edema: string
      anemia: string
      classification: string
      created_at: Date
    }, ExtArgs["result"]["kidneyDiseasePrediction"]>
    composites: {}
  }

  type KidneyDiseasePredictionGetPayload<S extends boolean | null | undefined | KidneyDiseasePredictionDefaultArgs> = $Result.GetResult<Prisma.$KidneyDiseasePredictionPayload, S>

  type KidneyDiseasePredictionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KidneyDiseasePredictionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KidneyDiseasePredictionCountAggregateInputType | true
    }

  export interface KidneyDiseasePredictionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['KidneyDiseasePrediction'], meta: { name: 'KidneyDiseasePrediction' } }
    /**
     * Find zero or one KidneyDiseasePrediction that matches the filter.
     * @param {KidneyDiseasePredictionFindUniqueArgs} args - Arguments to find a KidneyDiseasePrediction
     * @example
     * // Get one KidneyDiseasePrediction
     * const kidneyDiseasePrediction = await prisma.kidneyDiseasePrediction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KidneyDiseasePredictionFindUniqueArgs>(args: SelectSubset<T, KidneyDiseasePredictionFindUniqueArgs<ExtArgs>>): Prisma__KidneyDiseasePredictionClient<$Result.GetResult<Prisma.$KidneyDiseasePredictionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one KidneyDiseasePrediction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KidneyDiseasePredictionFindUniqueOrThrowArgs} args - Arguments to find a KidneyDiseasePrediction
     * @example
     * // Get one KidneyDiseasePrediction
     * const kidneyDiseasePrediction = await prisma.kidneyDiseasePrediction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KidneyDiseasePredictionFindUniqueOrThrowArgs>(args: SelectSubset<T, KidneyDiseasePredictionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KidneyDiseasePredictionClient<$Result.GetResult<Prisma.$KidneyDiseasePredictionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first KidneyDiseasePrediction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KidneyDiseasePredictionFindFirstArgs} args - Arguments to find a KidneyDiseasePrediction
     * @example
     * // Get one KidneyDiseasePrediction
     * const kidneyDiseasePrediction = await prisma.kidneyDiseasePrediction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KidneyDiseasePredictionFindFirstArgs>(args?: SelectSubset<T, KidneyDiseasePredictionFindFirstArgs<ExtArgs>>): Prisma__KidneyDiseasePredictionClient<$Result.GetResult<Prisma.$KidneyDiseasePredictionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first KidneyDiseasePrediction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KidneyDiseasePredictionFindFirstOrThrowArgs} args - Arguments to find a KidneyDiseasePrediction
     * @example
     * // Get one KidneyDiseasePrediction
     * const kidneyDiseasePrediction = await prisma.kidneyDiseasePrediction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KidneyDiseasePredictionFindFirstOrThrowArgs>(args?: SelectSubset<T, KidneyDiseasePredictionFindFirstOrThrowArgs<ExtArgs>>): Prisma__KidneyDiseasePredictionClient<$Result.GetResult<Prisma.$KidneyDiseasePredictionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more KidneyDiseasePredictions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KidneyDiseasePredictionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all KidneyDiseasePredictions
     * const kidneyDiseasePredictions = await prisma.kidneyDiseasePrediction.findMany()
     * 
     * // Get first 10 KidneyDiseasePredictions
     * const kidneyDiseasePredictions = await prisma.kidneyDiseasePrediction.findMany({ take: 10 })
     * 
     * // Only select the `prediction_id`
     * const kidneyDiseasePredictionWithPrediction_idOnly = await prisma.kidneyDiseasePrediction.findMany({ select: { prediction_id: true } })
     * 
     */
    findMany<T extends KidneyDiseasePredictionFindManyArgs>(args?: SelectSubset<T, KidneyDiseasePredictionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KidneyDiseasePredictionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a KidneyDiseasePrediction.
     * @param {KidneyDiseasePredictionCreateArgs} args - Arguments to create a KidneyDiseasePrediction.
     * @example
     * // Create one KidneyDiseasePrediction
     * const KidneyDiseasePrediction = await prisma.kidneyDiseasePrediction.create({
     *   data: {
     *     // ... data to create a KidneyDiseasePrediction
     *   }
     * })
     * 
     */
    create<T extends KidneyDiseasePredictionCreateArgs>(args: SelectSubset<T, KidneyDiseasePredictionCreateArgs<ExtArgs>>): Prisma__KidneyDiseasePredictionClient<$Result.GetResult<Prisma.$KidneyDiseasePredictionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many KidneyDiseasePredictions.
     * @param {KidneyDiseasePredictionCreateManyArgs} args - Arguments to create many KidneyDiseasePredictions.
     * @example
     * // Create many KidneyDiseasePredictions
     * const kidneyDiseasePrediction = await prisma.kidneyDiseasePrediction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KidneyDiseasePredictionCreateManyArgs>(args?: SelectSubset<T, KidneyDiseasePredictionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many KidneyDiseasePredictions and returns the data saved in the database.
     * @param {KidneyDiseasePredictionCreateManyAndReturnArgs} args - Arguments to create many KidneyDiseasePredictions.
     * @example
     * // Create many KidneyDiseasePredictions
     * const kidneyDiseasePrediction = await prisma.kidneyDiseasePrediction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many KidneyDiseasePredictions and only return the `prediction_id`
     * const kidneyDiseasePredictionWithPrediction_idOnly = await prisma.kidneyDiseasePrediction.createManyAndReturn({
     *   select: { prediction_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KidneyDiseasePredictionCreateManyAndReturnArgs>(args?: SelectSubset<T, KidneyDiseasePredictionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KidneyDiseasePredictionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a KidneyDiseasePrediction.
     * @param {KidneyDiseasePredictionDeleteArgs} args - Arguments to delete one KidneyDiseasePrediction.
     * @example
     * // Delete one KidneyDiseasePrediction
     * const KidneyDiseasePrediction = await prisma.kidneyDiseasePrediction.delete({
     *   where: {
     *     // ... filter to delete one KidneyDiseasePrediction
     *   }
     * })
     * 
     */
    delete<T extends KidneyDiseasePredictionDeleteArgs>(args: SelectSubset<T, KidneyDiseasePredictionDeleteArgs<ExtArgs>>): Prisma__KidneyDiseasePredictionClient<$Result.GetResult<Prisma.$KidneyDiseasePredictionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one KidneyDiseasePrediction.
     * @param {KidneyDiseasePredictionUpdateArgs} args - Arguments to update one KidneyDiseasePrediction.
     * @example
     * // Update one KidneyDiseasePrediction
     * const kidneyDiseasePrediction = await prisma.kidneyDiseasePrediction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KidneyDiseasePredictionUpdateArgs>(args: SelectSubset<T, KidneyDiseasePredictionUpdateArgs<ExtArgs>>): Prisma__KidneyDiseasePredictionClient<$Result.GetResult<Prisma.$KidneyDiseasePredictionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more KidneyDiseasePredictions.
     * @param {KidneyDiseasePredictionDeleteManyArgs} args - Arguments to filter KidneyDiseasePredictions to delete.
     * @example
     * // Delete a few KidneyDiseasePredictions
     * const { count } = await prisma.kidneyDiseasePrediction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KidneyDiseasePredictionDeleteManyArgs>(args?: SelectSubset<T, KidneyDiseasePredictionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KidneyDiseasePredictions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KidneyDiseasePredictionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many KidneyDiseasePredictions
     * const kidneyDiseasePrediction = await prisma.kidneyDiseasePrediction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KidneyDiseasePredictionUpdateManyArgs>(args: SelectSubset<T, KidneyDiseasePredictionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KidneyDiseasePredictions and returns the data updated in the database.
     * @param {KidneyDiseasePredictionUpdateManyAndReturnArgs} args - Arguments to update many KidneyDiseasePredictions.
     * @example
     * // Update many KidneyDiseasePredictions
     * const kidneyDiseasePrediction = await prisma.kidneyDiseasePrediction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more KidneyDiseasePredictions and only return the `prediction_id`
     * const kidneyDiseasePredictionWithPrediction_idOnly = await prisma.kidneyDiseasePrediction.updateManyAndReturn({
     *   select: { prediction_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends KidneyDiseasePredictionUpdateManyAndReturnArgs>(args: SelectSubset<T, KidneyDiseasePredictionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KidneyDiseasePredictionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one KidneyDiseasePrediction.
     * @param {KidneyDiseasePredictionUpsertArgs} args - Arguments to update or create a KidneyDiseasePrediction.
     * @example
     * // Update or create a KidneyDiseasePrediction
     * const kidneyDiseasePrediction = await prisma.kidneyDiseasePrediction.upsert({
     *   create: {
     *     // ... data to create a KidneyDiseasePrediction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the KidneyDiseasePrediction we want to update
     *   }
     * })
     */
    upsert<T extends KidneyDiseasePredictionUpsertArgs>(args: SelectSubset<T, KidneyDiseasePredictionUpsertArgs<ExtArgs>>): Prisma__KidneyDiseasePredictionClient<$Result.GetResult<Prisma.$KidneyDiseasePredictionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of KidneyDiseasePredictions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KidneyDiseasePredictionCountArgs} args - Arguments to filter KidneyDiseasePredictions to count.
     * @example
     * // Count the number of KidneyDiseasePredictions
     * const count = await prisma.kidneyDiseasePrediction.count({
     *   where: {
     *     // ... the filter for the KidneyDiseasePredictions we want to count
     *   }
     * })
    **/
    count<T extends KidneyDiseasePredictionCountArgs>(
      args?: Subset<T, KidneyDiseasePredictionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KidneyDiseasePredictionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a KidneyDiseasePrediction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KidneyDiseasePredictionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends KidneyDiseasePredictionAggregateArgs>(args: Subset<T, KidneyDiseasePredictionAggregateArgs>): Prisma.PrismaPromise<GetKidneyDiseasePredictionAggregateType<T>>

    /**
     * Group by KidneyDiseasePrediction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KidneyDiseasePredictionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends KidneyDiseasePredictionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KidneyDiseasePredictionGroupByArgs['orderBy'] }
        : { orderBy?: KidneyDiseasePredictionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, KidneyDiseasePredictionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKidneyDiseasePredictionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the KidneyDiseasePrediction model
   */
  readonly fields: KidneyDiseasePredictionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for KidneyDiseasePrediction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KidneyDiseasePredictionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the KidneyDiseasePrediction model
   */
  interface KidneyDiseasePredictionFieldRefs {
    readonly prediction_id: FieldRef<"KidneyDiseasePrediction", 'Int'>
    readonly user_id: FieldRef<"KidneyDiseasePrediction", 'String'>
    readonly age: FieldRef<"KidneyDiseasePrediction", 'Int'>
    readonly blood_pressure: FieldRef<"KidneyDiseasePrediction", 'Int'>
    readonly specific_gravity: FieldRef<"KidneyDiseasePrediction", 'Float'>
    readonly albumin: FieldRef<"KidneyDiseasePrediction", 'Int'>
    readonly sugar: FieldRef<"KidneyDiseasePrediction", 'Int'>
    readonly red_blood_cells: FieldRef<"KidneyDiseasePrediction", 'String'>
    readonly pus_cell: FieldRef<"KidneyDiseasePrediction", 'String'>
    readonly pus_cell_clumps: FieldRef<"KidneyDiseasePrediction", 'String'>
    readonly bacteria: FieldRef<"KidneyDiseasePrediction", 'String'>
    readonly blood_glucose_random: FieldRef<"KidneyDiseasePrediction", 'Int'>
    readonly blood_urea: FieldRef<"KidneyDiseasePrediction", 'Int'>
    readonly serum_creatinine: FieldRef<"KidneyDiseasePrediction", 'Float'>
    readonly sodium: FieldRef<"KidneyDiseasePrediction", 'Float'>
    readonly potassium: FieldRef<"KidneyDiseasePrediction", 'Float'>
    readonly hemoglobin: FieldRef<"KidneyDiseasePrediction", 'Float'>
    readonly packed_cell_volume: FieldRef<"KidneyDiseasePrediction", 'Float'>
    readonly white_cell_count: FieldRef<"KidneyDiseasePrediction", 'Int'>
    readonly red_cell_count: FieldRef<"KidneyDiseasePrediction", 'Int'>
    readonly hypertension: FieldRef<"KidneyDiseasePrediction", 'String'>
    readonly diabetes_mellitus: FieldRef<"KidneyDiseasePrediction", 'String'>
    readonly coronary_artery_disease: FieldRef<"KidneyDiseasePrediction", 'String'>
    readonly appetite: FieldRef<"KidneyDiseasePrediction", 'String'>
    readonly pedal_edema: FieldRef<"KidneyDiseasePrediction", 'String'>
    readonly anemia: FieldRef<"KidneyDiseasePrediction", 'String'>
    readonly classification: FieldRef<"KidneyDiseasePrediction", 'String'>
    readonly created_at: FieldRef<"KidneyDiseasePrediction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * KidneyDiseasePrediction findUnique
   */
  export type KidneyDiseasePredictionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KidneyDiseasePrediction
     */
    select?: KidneyDiseasePredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KidneyDiseasePrediction
     */
    omit?: KidneyDiseasePredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KidneyDiseasePredictionInclude<ExtArgs> | null
    /**
     * Filter, which KidneyDiseasePrediction to fetch.
     */
    where: KidneyDiseasePredictionWhereUniqueInput
  }

  /**
   * KidneyDiseasePrediction findUniqueOrThrow
   */
  export type KidneyDiseasePredictionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KidneyDiseasePrediction
     */
    select?: KidneyDiseasePredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KidneyDiseasePrediction
     */
    omit?: KidneyDiseasePredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KidneyDiseasePredictionInclude<ExtArgs> | null
    /**
     * Filter, which KidneyDiseasePrediction to fetch.
     */
    where: KidneyDiseasePredictionWhereUniqueInput
  }

  /**
   * KidneyDiseasePrediction findFirst
   */
  export type KidneyDiseasePredictionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KidneyDiseasePrediction
     */
    select?: KidneyDiseasePredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KidneyDiseasePrediction
     */
    omit?: KidneyDiseasePredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KidneyDiseasePredictionInclude<ExtArgs> | null
    /**
     * Filter, which KidneyDiseasePrediction to fetch.
     */
    where?: KidneyDiseasePredictionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KidneyDiseasePredictions to fetch.
     */
    orderBy?: KidneyDiseasePredictionOrderByWithRelationInput | KidneyDiseasePredictionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KidneyDiseasePredictions.
     */
    cursor?: KidneyDiseasePredictionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KidneyDiseasePredictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KidneyDiseasePredictions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KidneyDiseasePredictions.
     */
    distinct?: KidneyDiseasePredictionScalarFieldEnum | KidneyDiseasePredictionScalarFieldEnum[]
  }

  /**
   * KidneyDiseasePrediction findFirstOrThrow
   */
  export type KidneyDiseasePredictionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KidneyDiseasePrediction
     */
    select?: KidneyDiseasePredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KidneyDiseasePrediction
     */
    omit?: KidneyDiseasePredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KidneyDiseasePredictionInclude<ExtArgs> | null
    /**
     * Filter, which KidneyDiseasePrediction to fetch.
     */
    where?: KidneyDiseasePredictionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KidneyDiseasePredictions to fetch.
     */
    orderBy?: KidneyDiseasePredictionOrderByWithRelationInput | KidneyDiseasePredictionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KidneyDiseasePredictions.
     */
    cursor?: KidneyDiseasePredictionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KidneyDiseasePredictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KidneyDiseasePredictions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KidneyDiseasePredictions.
     */
    distinct?: KidneyDiseasePredictionScalarFieldEnum | KidneyDiseasePredictionScalarFieldEnum[]
  }

  /**
   * KidneyDiseasePrediction findMany
   */
  export type KidneyDiseasePredictionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KidneyDiseasePrediction
     */
    select?: KidneyDiseasePredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KidneyDiseasePrediction
     */
    omit?: KidneyDiseasePredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KidneyDiseasePredictionInclude<ExtArgs> | null
    /**
     * Filter, which KidneyDiseasePredictions to fetch.
     */
    where?: KidneyDiseasePredictionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KidneyDiseasePredictions to fetch.
     */
    orderBy?: KidneyDiseasePredictionOrderByWithRelationInput | KidneyDiseasePredictionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing KidneyDiseasePredictions.
     */
    cursor?: KidneyDiseasePredictionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KidneyDiseasePredictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KidneyDiseasePredictions.
     */
    skip?: number
    distinct?: KidneyDiseasePredictionScalarFieldEnum | KidneyDiseasePredictionScalarFieldEnum[]
  }

  /**
   * KidneyDiseasePrediction create
   */
  export type KidneyDiseasePredictionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KidneyDiseasePrediction
     */
    select?: KidneyDiseasePredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KidneyDiseasePrediction
     */
    omit?: KidneyDiseasePredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KidneyDiseasePredictionInclude<ExtArgs> | null
    /**
     * The data needed to create a KidneyDiseasePrediction.
     */
    data: XOR<KidneyDiseasePredictionCreateInput, KidneyDiseasePredictionUncheckedCreateInput>
  }

  /**
   * KidneyDiseasePrediction createMany
   */
  export type KidneyDiseasePredictionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many KidneyDiseasePredictions.
     */
    data: KidneyDiseasePredictionCreateManyInput | KidneyDiseasePredictionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * KidneyDiseasePrediction createManyAndReturn
   */
  export type KidneyDiseasePredictionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KidneyDiseasePrediction
     */
    select?: KidneyDiseasePredictionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the KidneyDiseasePrediction
     */
    omit?: KidneyDiseasePredictionOmit<ExtArgs> | null
    /**
     * The data used to create many KidneyDiseasePredictions.
     */
    data: KidneyDiseasePredictionCreateManyInput | KidneyDiseasePredictionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KidneyDiseasePredictionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * KidneyDiseasePrediction update
   */
  export type KidneyDiseasePredictionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KidneyDiseasePrediction
     */
    select?: KidneyDiseasePredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KidneyDiseasePrediction
     */
    omit?: KidneyDiseasePredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KidneyDiseasePredictionInclude<ExtArgs> | null
    /**
     * The data needed to update a KidneyDiseasePrediction.
     */
    data: XOR<KidneyDiseasePredictionUpdateInput, KidneyDiseasePredictionUncheckedUpdateInput>
    /**
     * Choose, which KidneyDiseasePrediction to update.
     */
    where: KidneyDiseasePredictionWhereUniqueInput
  }

  /**
   * KidneyDiseasePrediction updateMany
   */
  export type KidneyDiseasePredictionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update KidneyDiseasePredictions.
     */
    data: XOR<KidneyDiseasePredictionUpdateManyMutationInput, KidneyDiseasePredictionUncheckedUpdateManyInput>
    /**
     * Filter which KidneyDiseasePredictions to update
     */
    where?: KidneyDiseasePredictionWhereInput
    /**
     * Limit how many KidneyDiseasePredictions to update.
     */
    limit?: number
  }

  /**
   * KidneyDiseasePrediction updateManyAndReturn
   */
  export type KidneyDiseasePredictionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KidneyDiseasePrediction
     */
    select?: KidneyDiseasePredictionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the KidneyDiseasePrediction
     */
    omit?: KidneyDiseasePredictionOmit<ExtArgs> | null
    /**
     * The data used to update KidneyDiseasePredictions.
     */
    data: XOR<KidneyDiseasePredictionUpdateManyMutationInput, KidneyDiseasePredictionUncheckedUpdateManyInput>
    /**
     * Filter which KidneyDiseasePredictions to update
     */
    where?: KidneyDiseasePredictionWhereInput
    /**
     * Limit how many KidneyDiseasePredictions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KidneyDiseasePredictionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * KidneyDiseasePrediction upsert
   */
  export type KidneyDiseasePredictionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KidneyDiseasePrediction
     */
    select?: KidneyDiseasePredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KidneyDiseasePrediction
     */
    omit?: KidneyDiseasePredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KidneyDiseasePredictionInclude<ExtArgs> | null
    /**
     * The filter to search for the KidneyDiseasePrediction to update in case it exists.
     */
    where: KidneyDiseasePredictionWhereUniqueInput
    /**
     * In case the KidneyDiseasePrediction found by the `where` argument doesn't exist, create a new KidneyDiseasePrediction with this data.
     */
    create: XOR<KidneyDiseasePredictionCreateInput, KidneyDiseasePredictionUncheckedCreateInput>
    /**
     * In case the KidneyDiseasePrediction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KidneyDiseasePredictionUpdateInput, KidneyDiseasePredictionUncheckedUpdateInput>
  }

  /**
   * KidneyDiseasePrediction delete
   */
  export type KidneyDiseasePredictionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KidneyDiseasePrediction
     */
    select?: KidneyDiseasePredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KidneyDiseasePrediction
     */
    omit?: KidneyDiseasePredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KidneyDiseasePredictionInclude<ExtArgs> | null
    /**
     * Filter which KidneyDiseasePrediction to delete.
     */
    where: KidneyDiseasePredictionWhereUniqueInput
  }

  /**
   * KidneyDiseasePrediction deleteMany
   */
  export type KidneyDiseasePredictionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KidneyDiseasePredictions to delete
     */
    where?: KidneyDiseasePredictionWhereInput
    /**
     * Limit how many KidneyDiseasePredictions to delete.
     */
    limit?: number
  }

  /**
   * KidneyDiseasePrediction without action
   */
  export type KidneyDiseasePredictionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KidneyDiseasePrediction
     */
    select?: KidneyDiseasePredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KidneyDiseasePrediction
     */
    omit?: KidneyDiseasePredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KidneyDiseasePredictionInclude<ExtArgs> | null
  }


  /**
   * Model ParkinsonsPrediction
   */

  export type AggregateParkinsonsPrediction = {
    _count: ParkinsonsPredictionCountAggregateOutputType | null
    _avg: ParkinsonsPredictionAvgAggregateOutputType | null
    _sum: ParkinsonsPredictionSumAggregateOutputType | null
    _min: ParkinsonsPredictionMinAggregateOutputType | null
    _max: ParkinsonsPredictionMaxAggregateOutputType | null
  }

  export type ParkinsonsPredictionAvgAggregateOutputType = {
    prediction_id: number | null
    recording_number: number | null
    mdvp_fo: number | null
    mdvp_fhi: number | null
    mdvp_flo: number | null
    mdvp_jitter_percentage: number | null
    mdvp_jitter_abs: number | null
    mdvp_rap: number | null
    mdvp_ppq: number | null
    jitter_ddp: number | null
    mdvp_shimmer: number | null
    mdvp_shimmer_db: number | null
    shimmer_apq3: number | null
    shimmer_apq5: number | null
    mdvp_apq: number | null
    shimmer_dda: number | null
    nhr: number | null
    hnr: number | null
    status: number | null
    rpde: number | null
    d2: number | null
    dfa: number | null
    spread1: number | null
    spread2: number | null
    ppe: number | null
  }

  export type ParkinsonsPredictionSumAggregateOutputType = {
    prediction_id: number | null
    recording_number: number | null
    mdvp_fo: number | null
    mdvp_fhi: number | null
    mdvp_flo: number | null
    mdvp_jitter_percentage: number | null
    mdvp_jitter_abs: number | null
    mdvp_rap: number | null
    mdvp_ppq: number | null
    jitter_ddp: number | null
    mdvp_shimmer: number | null
    mdvp_shimmer_db: number | null
    shimmer_apq3: number | null
    shimmer_apq5: number | null
    mdvp_apq: number | null
    shimmer_dda: number | null
    nhr: number | null
    hnr: number | null
    status: number | null
    rpde: number | null
    d2: number | null
    dfa: number | null
    spread1: number | null
    spread2: number | null
    ppe: number | null
  }

  export type ParkinsonsPredictionMinAggregateOutputType = {
    prediction_id: number | null
    user_id: string | null
    ascii_subject_name: string | null
    recording_number: number | null
    mdvp_fo: number | null
    mdvp_fhi: number | null
    mdvp_flo: number | null
    mdvp_jitter_percentage: number | null
    mdvp_jitter_abs: number | null
    mdvp_rap: number | null
    mdvp_ppq: number | null
    jitter_ddp: number | null
    mdvp_shimmer: number | null
    mdvp_shimmer_db: number | null
    shimmer_apq3: number | null
    shimmer_apq5: number | null
    mdvp_apq: number | null
    shimmer_dda: number | null
    nhr: number | null
    hnr: number | null
    status: number | null
    rpde: number | null
    d2: number | null
    dfa: number | null
    spread1: number | null
    spread2: number | null
    ppe: number | null
    result: string | null
    created_at: Date | null
  }

  export type ParkinsonsPredictionMaxAggregateOutputType = {
    prediction_id: number | null
    user_id: string | null
    ascii_subject_name: string | null
    recording_number: number | null
    mdvp_fo: number | null
    mdvp_fhi: number | null
    mdvp_flo: number | null
    mdvp_jitter_percentage: number | null
    mdvp_jitter_abs: number | null
    mdvp_rap: number | null
    mdvp_ppq: number | null
    jitter_ddp: number | null
    mdvp_shimmer: number | null
    mdvp_shimmer_db: number | null
    shimmer_apq3: number | null
    shimmer_apq5: number | null
    mdvp_apq: number | null
    shimmer_dda: number | null
    nhr: number | null
    hnr: number | null
    status: number | null
    rpde: number | null
    d2: number | null
    dfa: number | null
    spread1: number | null
    spread2: number | null
    ppe: number | null
    result: string | null
    created_at: Date | null
  }

  export type ParkinsonsPredictionCountAggregateOutputType = {
    prediction_id: number
    user_id: number
    ascii_subject_name: number
    recording_number: number
    mdvp_fo: number
    mdvp_fhi: number
    mdvp_flo: number
    mdvp_jitter_percentage: number
    mdvp_jitter_abs: number
    mdvp_rap: number
    mdvp_ppq: number
    jitter_ddp: number
    mdvp_shimmer: number
    mdvp_shimmer_db: number
    shimmer_apq3: number
    shimmer_apq5: number
    mdvp_apq: number
    shimmer_dda: number
    nhr: number
    hnr: number
    status: number
    rpde: number
    d2: number
    dfa: number
    spread1: number
    spread2: number
    ppe: number
    result: number
    created_at: number
    _all: number
  }


  export type ParkinsonsPredictionAvgAggregateInputType = {
    prediction_id?: true
    recording_number?: true
    mdvp_fo?: true
    mdvp_fhi?: true
    mdvp_flo?: true
    mdvp_jitter_percentage?: true
    mdvp_jitter_abs?: true
    mdvp_rap?: true
    mdvp_ppq?: true
    jitter_ddp?: true
    mdvp_shimmer?: true
    mdvp_shimmer_db?: true
    shimmer_apq3?: true
    shimmer_apq5?: true
    mdvp_apq?: true
    shimmer_dda?: true
    nhr?: true
    hnr?: true
    status?: true
    rpde?: true
    d2?: true
    dfa?: true
    spread1?: true
    spread2?: true
    ppe?: true
  }

  export type ParkinsonsPredictionSumAggregateInputType = {
    prediction_id?: true
    recording_number?: true
    mdvp_fo?: true
    mdvp_fhi?: true
    mdvp_flo?: true
    mdvp_jitter_percentage?: true
    mdvp_jitter_abs?: true
    mdvp_rap?: true
    mdvp_ppq?: true
    jitter_ddp?: true
    mdvp_shimmer?: true
    mdvp_shimmer_db?: true
    shimmer_apq3?: true
    shimmer_apq5?: true
    mdvp_apq?: true
    shimmer_dda?: true
    nhr?: true
    hnr?: true
    status?: true
    rpde?: true
    d2?: true
    dfa?: true
    spread1?: true
    spread2?: true
    ppe?: true
  }

  export type ParkinsonsPredictionMinAggregateInputType = {
    prediction_id?: true
    user_id?: true
    ascii_subject_name?: true
    recording_number?: true
    mdvp_fo?: true
    mdvp_fhi?: true
    mdvp_flo?: true
    mdvp_jitter_percentage?: true
    mdvp_jitter_abs?: true
    mdvp_rap?: true
    mdvp_ppq?: true
    jitter_ddp?: true
    mdvp_shimmer?: true
    mdvp_shimmer_db?: true
    shimmer_apq3?: true
    shimmer_apq5?: true
    mdvp_apq?: true
    shimmer_dda?: true
    nhr?: true
    hnr?: true
    status?: true
    rpde?: true
    d2?: true
    dfa?: true
    spread1?: true
    spread2?: true
    ppe?: true
    result?: true
    created_at?: true
  }

  export type ParkinsonsPredictionMaxAggregateInputType = {
    prediction_id?: true
    user_id?: true
    ascii_subject_name?: true
    recording_number?: true
    mdvp_fo?: true
    mdvp_fhi?: true
    mdvp_flo?: true
    mdvp_jitter_percentage?: true
    mdvp_jitter_abs?: true
    mdvp_rap?: true
    mdvp_ppq?: true
    jitter_ddp?: true
    mdvp_shimmer?: true
    mdvp_shimmer_db?: true
    shimmer_apq3?: true
    shimmer_apq5?: true
    mdvp_apq?: true
    shimmer_dda?: true
    nhr?: true
    hnr?: true
    status?: true
    rpde?: true
    d2?: true
    dfa?: true
    spread1?: true
    spread2?: true
    ppe?: true
    result?: true
    created_at?: true
  }

  export type ParkinsonsPredictionCountAggregateInputType = {
    prediction_id?: true
    user_id?: true
    ascii_subject_name?: true
    recording_number?: true
    mdvp_fo?: true
    mdvp_fhi?: true
    mdvp_flo?: true
    mdvp_jitter_percentage?: true
    mdvp_jitter_abs?: true
    mdvp_rap?: true
    mdvp_ppq?: true
    jitter_ddp?: true
    mdvp_shimmer?: true
    mdvp_shimmer_db?: true
    shimmer_apq3?: true
    shimmer_apq5?: true
    mdvp_apq?: true
    shimmer_dda?: true
    nhr?: true
    hnr?: true
    status?: true
    rpde?: true
    d2?: true
    dfa?: true
    spread1?: true
    spread2?: true
    ppe?: true
    result?: true
    created_at?: true
    _all?: true
  }

  export type ParkinsonsPredictionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParkinsonsPrediction to aggregate.
     */
    where?: ParkinsonsPredictionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkinsonsPredictions to fetch.
     */
    orderBy?: ParkinsonsPredictionOrderByWithRelationInput | ParkinsonsPredictionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParkinsonsPredictionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkinsonsPredictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkinsonsPredictions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ParkinsonsPredictions
    **/
    _count?: true | ParkinsonsPredictionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParkinsonsPredictionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParkinsonsPredictionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParkinsonsPredictionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParkinsonsPredictionMaxAggregateInputType
  }

  export type GetParkinsonsPredictionAggregateType<T extends ParkinsonsPredictionAggregateArgs> = {
        [P in keyof T & keyof AggregateParkinsonsPrediction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParkinsonsPrediction[P]>
      : GetScalarType<T[P], AggregateParkinsonsPrediction[P]>
  }




  export type ParkinsonsPredictionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParkinsonsPredictionWhereInput
    orderBy?: ParkinsonsPredictionOrderByWithAggregationInput | ParkinsonsPredictionOrderByWithAggregationInput[]
    by: ParkinsonsPredictionScalarFieldEnum[] | ParkinsonsPredictionScalarFieldEnum
    having?: ParkinsonsPredictionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParkinsonsPredictionCountAggregateInputType | true
    _avg?: ParkinsonsPredictionAvgAggregateInputType
    _sum?: ParkinsonsPredictionSumAggregateInputType
    _min?: ParkinsonsPredictionMinAggregateInputType
    _max?: ParkinsonsPredictionMaxAggregateInputType
  }

  export type ParkinsonsPredictionGroupByOutputType = {
    prediction_id: number
    user_id: string
    ascii_subject_name: string
    recording_number: number
    mdvp_fo: number
    mdvp_fhi: number
    mdvp_flo: number
    mdvp_jitter_percentage: number
    mdvp_jitter_abs: number
    mdvp_rap: number
    mdvp_ppq: number
    jitter_ddp: number
    mdvp_shimmer: number
    mdvp_shimmer_db: number
    shimmer_apq3: number
    shimmer_apq5: number
    mdvp_apq: number
    shimmer_dda: number
    nhr: number
    hnr: number
    status: number
    rpde: number
    d2: number
    dfa: number
    spread1: number
    spread2: number
    ppe: number
    result: string
    created_at: Date
    _count: ParkinsonsPredictionCountAggregateOutputType | null
    _avg: ParkinsonsPredictionAvgAggregateOutputType | null
    _sum: ParkinsonsPredictionSumAggregateOutputType | null
    _min: ParkinsonsPredictionMinAggregateOutputType | null
    _max: ParkinsonsPredictionMaxAggregateOutputType | null
  }

  type GetParkinsonsPredictionGroupByPayload<T extends ParkinsonsPredictionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParkinsonsPredictionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParkinsonsPredictionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParkinsonsPredictionGroupByOutputType[P]>
            : GetScalarType<T[P], ParkinsonsPredictionGroupByOutputType[P]>
        }
      >
    >


  export type ParkinsonsPredictionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    prediction_id?: boolean
    user_id?: boolean
    ascii_subject_name?: boolean
    recording_number?: boolean
    mdvp_fo?: boolean
    mdvp_fhi?: boolean
    mdvp_flo?: boolean
    mdvp_jitter_percentage?: boolean
    mdvp_jitter_abs?: boolean
    mdvp_rap?: boolean
    mdvp_ppq?: boolean
    jitter_ddp?: boolean
    mdvp_shimmer?: boolean
    mdvp_shimmer_db?: boolean
    shimmer_apq3?: boolean
    shimmer_apq5?: boolean
    mdvp_apq?: boolean
    shimmer_dda?: boolean
    nhr?: boolean
    hnr?: boolean
    status?: boolean
    rpde?: boolean
    d2?: boolean
    dfa?: boolean
    spread1?: boolean
    spread2?: boolean
    ppe?: boolean
    result?: boolean
    created_at?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parkinsonsPrediction"]>

  export type ParkinsonsPredictionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    prediction_id?: boolean
    user_id?: boolean
    ascii_subject_name?: boolean
    recording_number?: boolean
    mdvp_fo?: boolean
    mdvp_fhi?: boolean
    mdvp_flo?: boolean
    mdvp_jitter_percentage?: boolean
    mdvp_jitter_abs?: boolean
    mdvp_rap?: boolean
    mdvp_ppq?: boolean
    jitter_ddp?: boolean
    mdvp_shimmer?: boolean
    mdvp_shimmer_db?: boolean
    shimmer_apq3?: boolean
    shimmer_apq5?: boolean
    mdvp_apq?: boolean
    shimmer_dda?: boolean
    nhr?: boolean
    hnr?: boolean
    status?: boolean
    rpde?: boolean
    d2?: boolean
    dfa?: boolean
    spread1?: boolean
    spread2?: boolean
    ppe?: boolean
    result?: boolean
    created_at?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parkinsonsPrediction"]>

  export type ParkinsonsPredictionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    prediction_id?: boolean
    user_id?: boolean
    ascii_subject_name?: boolean
    recording_number?: boolean
    mdvp_fo?: boolean
    mdvp_fhi?: boolean
    mdvp_flo?: boolean
    mdvp_jitter_percentage?: boolean
    mdvp_jitter_abs?: boolean
    mdvp_rap?: boolean
    mdvp_ppq?: boolean
    jitter_ddp?: boolean
    mdvp_shimmer?: boolean
    mdvp_shimmer_db?: boolean
    shimmer_apq3?: boolean
    shimmer_apq5?: boolean
    mdvp_apq?: boolean
    shimmer_dda?: boolean
    nhr?: boolean
    hnr?: boolean
    status?: boolean
    rpde?: boolean
    d2?: boolean
    dfa?: boolean
    spread1?: boolean
    spread2?: boolean
    ppe?: boolean
    result?: boolean
    created_at?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parkinsonsPrediction"]>

  export type ParkinsonsPredictionSelectScalar = {
    prediction_id?: boolean
    user_id?: boolean
    ascii_subject_name?: boolean
    recording_number?: boolean
    mdvp_fo?: boolean
    mdvp_fhi?: boolean
    mdvp_flo?: boolean
    mdvp_jitter_percentage?: boolean
    mdvp_jitter_abs?: boolean
    mdvp_rap?: boolean
    mdvp_ppq?: boolean
    jitter_ddp?: boolean
    mdvp_shimmer?: boolean
    mdvp_shimmer_db?: boolean
    shimmer_apq3?: boolean
    shimmer_apq5?: boolean
    mdvp_apq?: boolean
    shimmer_dda?: boolean
    nhr?: boolean
    hnr?: boolean
    status?: boolean
    rpde?: boolean
    d2?: boolean
    dfa?: boolean
    spread1?: boolean
    spread2?: boolean
    ppe?: boolean
    result?: boolean
    created_at?: boolean
  }

  export type ParkinsonsPredictionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"prediction_id" | "user_id" | "ascii_subject_name" | "recording_number" | "mdvp_fo" | "mdvp_fhi" | "mdvp_flo" | "mdvp_jitter_percentage" | "mdvp_jitter_abs" | "mdvp_rap" | "mdvp_ppq" | "jitter_ddp" | "mdvp_shimmer" | "mdvp_shimmer_db" | "shimmer_apq3" | "shimmer_apq5" | "mdvp_apq" | "shimmer_dda" | "nhr" | "hnr" | "status" | "rpde" | "d2" | "dfa" | "spread1" | "spread2" | "ppe" | "result" | "created_at", ExtArgs["result"]["parkinsonsPrediction"]>
  export type ParkinsonsPredictionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ParkinsonsPredictionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ParkinsonsPredictionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ParkinsonsPredictionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ParkinsonsPrediction"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      prediction_id: number
      user_id: string
      ascii_subject_name: string
      recording_number: number
      mdvp_fo: number
      mdvp_fhi: number
      mdvp_flo: number
      mdvp_jitter_percentage: number
      mdvp_jitter_abs: number
      mdvp_rap: number
      mdvp_ppq: number
      jitter_ddp: number
      mdvp_shimmer: number
      mdvp_shimmer_db: number
      shimmer_apq3: number
      shimmer_apq5: number
      mdvp_apq: number
      shimmer_dda: number
      nhr: number
      hnr: number
      status: number
      rpde: number
      d2: number
      dfa: number
      spread1: number
      spread2: number
      ppe: number
      result: string
      created_at: Date
    }, ExtArgs["result"]["parkinsonsPrediction"]>
    composites: {}
  }

  type ParkinsonsPredictionGetPayload<S extends boolean | null | undefined | ParkinsonsPredictionDefaultArgs> = $Result.GetResult<Prisma.$ParkinsonsPredictionPayload, S>

  type ParkinsonsPredictionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParkinsonsPredictionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParkinsonsPredictionCountAggregateInputType | true
    }

  export interface ParkinsonsPredictionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ParkinsonsPrediction'], meta: { name: 'ParkinsonsPrediction' } }
    /**
     * Find zero or one ParkinsonsPrediction that matches the filter.
     * @param {ParkinsonsPredictionFindUniqueArgs} args - Arguments to find a ParkinsonsPrediction
     * @example
     * // Get one ParkinsonsPrediction
     * const parkinsonsPrediction = await prisma.parkinsonsPrediction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParkinsonsPredictionFindUniqueArgs>(args: SelectSubset<T, ParkinsonsPredictionFindUniqueArgs<ExtArgs>>): Prisma__ParkinsonsPredictionClient<$Result.GetResult<Prisma.$ParkinsonsPredictionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ParkinsonsPrediction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParkinsonsPredictionFindUniqueOrThrowArgs} args - Arguments to find a ParkinsonsPrediction
     * @example
     * // Get one ParkinsonsPrediction
     * const parkinsonsPrediction = await prisma.parkinsonsPrediction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParkinsonsPredictionFindUniqueOrThrowArgs>(args: SelectSubset<T, ParkinsonsPredictionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParkinsonsPredictionClient<$Result.GetResult<Prisma.$ParkinsonsPredictionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ParkinsonsPrediction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkinsonsPredictionFindFirstArgs} args - Arguments to find a ParkinsonsPrediction
     * @example
     * // Get one ParkinsonsPrediction
     * const parkinsonsPrediction = await prisma.parkinsonsPrediction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParkinsonsPredictionFindFirstArgs>(args?: SelectSubset<T, ParkinsonsPredictionFindFirstArgs<ExtArgs>>): Prisma__ParkinsonsPredictionClient<$Result.GetResult<Prisma.$ParkinsonsPredictionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ParkinsonsPrediction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkinsonsPredictionFindFirstOrThrowArgs} args - Arguments to find a ParkinsonsPrediction
     * @example
     * // Get one ParkinsonsPrediction
     * const parkinsonsPrediction = await prisma.parkinsonsPrediction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParkinsonsPredictionFindFirstOrThrowArgs>(args?: SelectSubset<T, ParkinsonsPredictionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParkinsonsPredictionClient<$Result.GetResult<Prisma.$ParkinsonsPredictionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ParkinsonsPredictions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkinsonsPredictionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ParkinsonsPredictions
     * const parkinsonsPredictions = await prisma.parkinsonsPrediction.findMany()
     * 
     * // Get first 10 ParkinsonsPredictions
     * const parkinsonsPredictions = await prisma.parkinsonsPrediction.findMany({ take: 10 })
     * 
     * // Only select the `prediction_id`
     * const parkinsonsPredictionWithPrediction_idOnly = await prisma.parkinsonsPrediction.findMany({ select: { prediction_id: true } })
     * 
     */
    findMany<T extends ParkinsonsPredictionFindManyArgs>(args?: SelectSubset<T, ParkinsonsPredictionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkinsonsPredictionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ParkinsonsPrediction.
     * @param {ParkinsonsPredictionCreateArgs} args - Arguments to create a ParkinsonsPrediction.
     * @example
     * // Create one ParkinsonsPrediction
     * const ParkinsonsPrediction = await prisma.parkinsonsPrediction.create({
     *   data: {
     *     // ... data to create a ParkinsonsPrediction
     *   }
     * })
     * 
     */
    create<T extends ParkinsonsPredictionCreateArgs>(args: SelectSubset<T, ParkinsonsPredictionCreateArgs<ExtArgs>>): Prisma__ParkinsonsPredictionClient<$Result.GetResult<Prisma.$ParkinsonsPredictionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ParkinsonsPredictions.
     * @param {ParkinsonsPredictionCreateManyArgs} args - Arguments to create many ParkinsonsPredictions.
     * @example
     * // Create many ParkinsonsPredictions
     * const parkinsonsPrediction = await prisma.parkinsonsPrediction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParkinsonsPredictionCreateManyArgs>(args?: SelectSubset<T, ParkinsonsPredictionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ParkinsonsPredictions and returns the data saved in the database.
     * @param {ParkinsonsPredictionCreateManyAndReturnArgs} args - Arguments to create many ParkinsonsPredictions.
     * @example
     * // Create many ParkinsonsPredictions
     * const parkinsonsPrediction = await prisma.parkinsonsPrediction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ParkinsonsPredictions and only return the `prediction_id`
     * const parkinsonsPredictionWithPrediction_idOnly = await prisma.parkinsonsPrediction.createManyAndReturn({
     *   select: { prediction_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParkinsonsPredictionCreateManyAndReturnArgs>(args?: SelectSubset<T, ParkinsonsPredictionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkinsonsPredictionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ParkinsonsPrediction.
     * @param {ParkinsonsPredictionDeleteArgs} args - Arguments to delete one ParkinsonsPrediction.
     * @example
     * // Delete one ParkinsonsPrediction
     * const ParkinsonsPrediction = await prisma.parkinsonsPrediction.delete({
     *   where: {
     *     // ... filter to delete one ParkinsonsPrediction
     *   }
     * })
     * 
     */
    delete<T extends ParkinsonsPredictionDeleteArgs>(args: SelectSubset<T, ParkinsonsPredictionDeleteArgs<ExtArgs>>): Prisma__ParkinsonsPredictionClient<$Result.GetResult<Prisma.$ParkinsonsPredictionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ParkinsonsPrediction.
     * @param {ParkinsonsPredictionUpdateArgs} args - Arguments to update one ParkinsonsPrediction.
     * @example
     * // Update one ParkinsonsPrediction
     * const parkinsonsPrediction = await prisma.parkinsonsPrediction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParkinsonsPredictionUpdateArgs>(args: SelectSubset<T, ParkinsonsPredictionUpdateArgs<ExtArgs>>): Prisma__ParkinsonsPredictionClient<$Result.GetResult<Prisma.$ParkinsonsPredictionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ParkinsonsPredictions.
     * @param {ParkinsonsPredictionDeleteManyArgs} args - Arguments to filter ParkinsonsPredictions to delete.
     * @example
     * // Delete a few ParkinsonsPredictions
     * const { count } = await prisma.parkinsonsPrediction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParkinsonsPredictionDeleteManyArgs>(args?: SelectSubset<T, ParkinsonsPredictionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParkinsonsPredictions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkinsonsPredictionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ParkinsonsPredictions
     * const parkinsonsPrediction = await prisma.parkinsonsPrediction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParkinsonsPredictionUpdateManyArgs>(args: SelectSubset<T, ParkinsonsPredictionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParkinsonsPredictions and returns the data updated in the database.
     * @param {ParkinsonsPredictionUpdateManyAndReturnArgs} args - Arguments to update many ParkinsonsPredictions.
     * @example
     * // Update many ParkinsonsPredictions
     * const parkinsonsPrediction = await prisma.parkinsonsPrediction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ParkinsonsPredictions and only return the `prediction_id`
     * const parkinsonsPredictionWithPrediction_idOnly = await prisma.parkinsonsPrediction.updateManyAndReturn({
     *   select: { prediction_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ParkinsonsPredictionUpdateManyAndReturnArgs>(args: SelectSubset<T, ParkinsonsPredictionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkinsonsPredictionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ParkinsonsPrediction.
     * @param {ParkinsonsPredictionUpsertArgs} args - Arguments to update or create a ParkinsonsPrediction.
     * @example
     * // Update or create a ParkinsonsPrediction
     * const parkinsonsPrediction = await prisma.parkinsonsPrediction.upsert({
     *   create: {
     *     // ... data to create a ParkinsonsPrediction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ParkinsonsPrediction we want to update
     *   }
     * })
     */
    upsert<T extends ParkinsonsPredictionUpsertArgs>(args: SelectSubset<T, ParkinsonsPredictionUpsertArgs<ExtArgs>>): Prisma__ParkinsonsPredictionClient<$Result.GetResult<Prisma.$ParkinsonsPredictionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ParkinsonsPredictions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkinsonsPredictionCountArgs} args - Arguments to filter ParkinsonsPredictions to count.
     * @example
     * // Count the number of ParkinsonsPredictions
     * const count = await prisma.parkinsonsPrediction.count({
     *   where: {
     *     // ... the filter for the ParkinsonsPredictions we want to count
     *   }
     * })
    **/
    count<T extends ParkinsonsPredictionCountArgs>(
      args?: Subset<T, ParkinsonsPredictionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParkinsonsPredictionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ParkinsonsPrediction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkinsonsPredictionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ParkinsonsPredictionAggregateArgs>(args: Subset<T, ParkinsonsPredictionAggregateArgs>): Prisma.PrismaPromise<GetParkinsonsPredictionAggregateType<T>>

    /**
     * Group by ParkinsonsPrediction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkinsonsPredictionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ParkinsonsPredictionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParkinsonsPredictionGroupByArgs['orderBy'] }
        : { orderBy?: ParkinsonsPredictionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ParkinsonsPredictionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParkinsonsPredictionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ParkinsonsPrediction model
   */
  readonly fields: ParkinsonsPredictionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ParkinsonsPrediction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParkinsonsPredictionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ParkinsonsPrediction model
   */
  interface ParkinsonsPredictionFieldRefs {
    readonly prediction_id: FieldRef<"ParkinsonsPrediction", 'Int'>
    readonly user_id: FieldRef<"ParkinsonsPrediction", 'String'>
    readonly ascii_subject_name: FieldRef<"ParkinsonsPrediction", 'String'>
    readonly recording_number: FieldRef<"ParkinsonsPrediction", 'Int'>
    readonly mdvp_fo: FieldRef<"ParkinsonsPrediction", 'Float'>
    readonly mdvp_fhi: FieldRef<"ParkinsonsPrediction", 'Float'>
    readonly mdvp_flo: FieldRef<"ParkinsonsPrediction", 'Float'>
    readonly mdvp_jitter_percentage: FieldRef<"ParkinsonsPrediction", 'Float'>
    readonly mdvp_jitter_abs: FieldRef<"ParkinsonsPrediction", 'Float'>
    readonly mdvp_rap: FieldRef<"ParkinsonsPrediction", 'Float'>
    readonly mdvp_ppq: FieldRef<"ParkinsonsPrediction", 'Float'>
    readonly jitter_ddp: FieldRef<"ParkinsonsPrediction", 'Float'>
    readonly mdvp_shimmer: FieldRef<"ParkinsonsPrediction", 'Float'>
    readonly mdvp_shimmer_db: FieldRef<"ParkinsonsPrediction", 'Float'>
    readonly shimmer_apq3: FieldRef<"ParkinsonsPrediction", 'Float'>
    readonly shimmer_apq5: FieldRef<"ParkinsonsPrediction", 'Float'>
    readonly mdvp_apq: FieldRef<"ParkinsonsPrediction", 'Float'>
    readonly shimmer_dda: FieldRef<"ParkinsonsPrediction", 'Float'>
    readonly nhr: FieldRef<"ParkinsonsPrediction", 'Float'>
    readonly hnr: FieldRef<"ParkinsonsPrediction", 'Float'>
    readonly status: FieldRef<"ParkinsonsPrediction", 'Int'>
    readonly rpde: FieldRef<"ParkinsonsPrediction", 'Float'>
    readonly d2: FieldRef<"ParkinsonsPrediction", 'Float'>
    readonly dfa: FieldRef<"ParkinsonsPrediction", 'Float'>
    readonly spread1: FieldRef<"ParkinsonsPrediction", 'Float'>
    readonly spread2: FieldRef<"ParkinsonsPrediction", 'Float'>
    readonly ppe: FieldRef<"ParkinsonsPrediction", 'Float'>
    readonly result: FieldRef<"ParkinsonsPrediction", 'String'>
    readonly created_at: FieldRef<"ParkinsonsPrediction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ParkinsonsPrediction findUnique
   */
  export type ParkinsonsPredictionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkinsonsPrediction
     */
    select?: ParkinsonsPredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkinsonsPrediction
     */
    omit?: ParkinsonsPredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkinsonsPredictionInclude<ExtArgs> | null
    /**
     * Filter, which ParkinsonsPrediction to fetch.
     */
    where: ParkinsonsPredictionWhereUniqueInput
  }

  /**
   * ParkinsonsPrediction findUniqueOrThrow
   */
  export type ParkinsonsPredictionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkinsonsPrediction
     */
    select?: ParkinsonsPredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkinsonsPrediction
     */
    omit?: ParkinsonsPredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkinsonsPredictionInclude<ExtArgs> | null
    /**
     * Filter, which ParkinsonsPrediction to fetch.
     */
    where: ParkinsonsPredictionWhereUniqueInput
  }

  /**
   * ParkinsonsPrediction findFirst
   */
  export type ParkinsonsPredictionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkinsonsPrediction
     */
    select?: ParkinsonsPredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkinsonsPrediction
     */
    omit?: ParkinsonsPredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkinsonsPredictionInclude<ExtArgs> | null
    /**
     * Filter, which ParkinsonsPrediction to fetch.
     */
    where?: ParkinsonsPredictionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkinsonsPredictions to fetch.
     */
    orderBy?: ParkinsonsPredictionOrderByWithRelationInput | ParkinsonsPredictionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParkinsonsPredictions.
     */
    cursor?: ParkinsonsPredictionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkinsonsPredictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkinsonsPredictions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParkinsonsPredictions.
     */
    distinct?: ParkinsonsPredictionScalarFieldEnum | ParkinsonsPredictionScalarFieldEnum[]
  }

  /**
   * ParkinsonsPrediction findFirstOrThrow
   */
  export type ParkinsonsPredictionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkinsonsPrediction
     */
    select?: ParkinsonsPredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkinsonsPrediction
     */
    omit?: ParkinsonsPredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkinsonsPredictionInclude<ExtArgs> | null
    /**
     * Filter, which ParkinsonsPrediction to fetch.
     */
    where?: ParkinsonsPredictionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkinsonsPredictions to fetch.
     */
    orderBy?: ParkinsonsPredictionOrderByWithRelationInput | ParkinsonsPredictionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParkinsonsPredictions.
     */
    cursor?: ParkinsonsPredictionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkinsonsPredictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkinsonsPredictions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParkinsonsPredictions.
     */
    distinct?: ParkinsonsPredictionScalarFieldEnum | ParkinsonsPredictionScalarFieldEnum[]
  }

  /**
   * ParkinsonsPrediction findMany
   */
  export type ParkinsonsPredictionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkinsonsPrediction
     */
    select?: ParkinsonsPredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkinsonsPrediction
     */
    omit?: ParkinsonsPredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkinsonsPredictionInclude<ExtArgs> | null
    /**
     * Filter, which ParkinsonsPredictions to fetch.
     */
    where?: ParkinsonsPredictionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkinsonsPredictions to fetch.
     */
    orderBy?: ParkinsonsPredictionOrderByWithRelationInput | ParkinsonsPredictionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ParkinsonsPredictions.
     */
    cursor?: ParkinsonsPredictionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkinsonsPredictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkinsonsPredictions.
     */
    skip?: number
    distinct?: ParkinsonsPredictionScalarFieldEnum | ParkinsonsPredictionScalarFieldEnum[]
  }

  /**
   * ParkinsonsPrediction create
   */
  export type ParkinsonsPredictionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkinsonsPrediction
     */
    select?: ParkinsonsPredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkinsonsPrediction
     */
    omit?: ParkinsonsPredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkinsonsPredictionInclude<ExtArgs> | null
    /**
     * The data needed to create a ParkinsonsPrediction.
     */
    data: XOR<ParkinsonsPredictionCreateInput, ParkinsonsPredictionUncheckedCreateInput>
  }

  /**
   * ParkinsonsPrediction createMany
   */
  export type ParkinsonsPredictionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ParkinsonsPredictions.
     */
    data: ParkinsonsPredictionCreateManyInput | ParkinsonsPredictionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ParkinsonsPrediction createManyAndReturn
   */
  export type ParkinsonsPredictionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkinsonsPrediction
     */
    select?: ParkinsonsPredictionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ParkinsonsPrediction
     */
    omit?: ParkinsonsPredictionOmit<ExtArgs> | null
    /**
     * The data used to create many ParkinsonsPredictions.
     */
    data: ParkinsonsPredictionCreateManyInput | ParkinsonsPredictionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkinsonsPredictionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ParkinsonsPrediction update
   */
  export type ParkinsonsPredictionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkinsonsPrediction
     */
    select?: ParkinsonsPredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkinsonsPrediction
     */
    omit?: ParkinsonsPredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkinsonsPredictionInclude<ExtArgs> | null
    /**
     * The data needed to update a ParkinsonsPrediction.
     */
    data: XOR<ParkinsonsPredictionUpdateInput, ParkinsonsPredictionUncheckedUpdateInput>
    /**
     * Choose, which ParkinsonsPrediction to update.
     */
    where: ParkinsonsPredictionWhereUniqueInput
  }

  /**
   * ParkinsonsPrediction updateMany
   */
  export type ParkinsonsPredictionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ParkinsonsPredictions.
     */
    data: XOR<ParkinsonsPredictionUpdateManyMutationInput, ParkinsonsPredictionUncheckedUpdateManyInput>
    /**
     * Filter which ParkinsonsPredictions to update
     */
    where?: ParkinsonsPredictionWhereInput
    /**
     * Limit how many ParkinsonsPredictions to update.
     */
    limit?: number
  }

  /**
   * ParkinsonsPrediction updateManyAndReturn
   */
  export type ParkinsonsPredictionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkinsonsPrediction
     */
    select?: ParkinsonsPredictionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ParkinsonsPrediction
     */
    omit?: ParkinsonsPredictionOmit<ExtArgs> | null
    /**
     * The data used to update ParkinsonsPredictions.
     */
    data: XOR<ParkinsonsPredictionUpdateManyMutationInput, ParkinsonsPredictionUncheckedUpdateManyInput>
    /**
     * Filter which ParkinsonsPredictions to update
     */
    where?: ParkinsonsPredictionWhereInput
    /**
     * Limit how many ParkinsonsPredictions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkinsonsPredictionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ParkinsonsPrediction upsert
   */
  export type ParkinsonsPredictionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkinsonsPrediction
     */
    select?: ParkinsonsPredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkinsonsPrediction
     */
    omit?: ParkinsonsPredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkinsonsPredictionInclude<ExtArgs> | null
    /**
     * The filter to search for the ParkinsonsPrediction to update in case it exists.
     */
    where: ParkinsonsPredictionWhereUniqueInput
    /**
     * In case the ParkinsonsPrediction found by the `where` argument doesn't exist, create a new ParkinsonsPrediction with this data.
     */
    create: XOR<ParkinsonsPredictionCreateInput, ParkinsonsPredictionUncheckedCreateInput>
    /**
     * In case the ParkinsonsPrediction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParkinsonsPredictionUpdateInput, ParkinsonsPredictionUncheckedUpdateInput>
  }

  /**
   * ParkinsonsPrediction delete
   */
  export type ParkinsonsPredictionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkinsonsPrediction
     */
    select?: ParkinsonsPredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkinsonsPrediction
     */
    omit?: ParkinsonsPredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkinsonsPredictionInclude<ExtArgs> | null
    /**
     * Filter which ParkinsonsPrediction to delete.
     */
    where: ParkinsonsPredictionWhereUniqueInput
  }

  /**
   * ParkinsonsPrediction deleteMany
   */
  export type ParkinsonsPredictionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParkinsonsPredictions to delete
     */
    where?: ParkinsonsPredictionWhereInput
    /**
     * Limit how many ParkinsonsPredictions to delete.
     */
    limit?: number
  }

  /**
   * ParkinsonsPrediction without action
   */
  export type ParkinsonsPredictionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkinsonsPrediction
     */
    select?: ParkinsonsPredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkinsonsPrediction
     */
    omit?: ParkinsonsPredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkinsonsPredictionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AccountScalarFieldEnum: {
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

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const BreastCancerPredictionScalarFieldEnum: {
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

  export type BreastCancerPredictionScalarFieldEnum = (typeof BreastCancerPredictionScalarFieldEnum)[keyof typeof BreastCancerPredictionScalarFieldEnum]


  export const DiabetesPredictionScalarFieldEnum: {
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

  export type DiabetesPredictionScalarFieldEnum = (typeof DiabetesPredictionScalarFieldEnum)[keyof typeof DiabetesPredictionScalarFieldEnum]


  export const HeartDiseasePredictionScalarFieldEnum: {
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

  export type HeartDiseasePredictionScalarFieldEnum = (typeof HeartDiseasePredictionScalarFieldEnum)[keyof typeof HeartDiseasePredictionScalarFieldEnum]


  export const KidneyDiseasePredictionScalarFieldEnum: {
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

  export type KidneyDiseasePredictionScalarFieldEnum = (typeof KidneyDiseasePredictionScalarFieldEnum)[keyof typeof KidneyDiseasePredictionScalarFieldEnum]


  export const ParkinsonsPredictionScalarFieldEnum: {
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

  export type ParkinsonsPredictionScalarFieldEnum = (typeof ParkinsonsPredictionScalarFieldEnum)[keyof typeof ParkinsonsPredictionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    accounts?: AccountListRelationFilter
    BreastCancerPrediction?: BreastCancerPredictionListRelationFilter
    DiabetesPrediction?: DiabetesPredictionListRelationFilter
    HeartDiseasePrediction?: HeartDiseasePredictionListRelationFilter
    KidneyDiseasePrediction?: KidneyDiseasePredictionListRelationFilter
    ParkinsonsPrediction?: ParkinsonsPredictionListRelationFilter
    sessions?: SessionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    BreastCancerPrediction?: BreastCancerPredictionOrderByRelationAggregateInput
    DiabetesPrediction?: DiabetesPredictionOrderByRelationAggregateInput
    HeartDiseasePrediction?: HeartDiseasePredictionOrderByRelationAggregateInput
    KidneyDiseasePrediction?: KidneyDiseasePredictionOrderByRelationAggregateInput
    ParkinsonsPrediction?: ParkinsonsPredictionOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    accounts?: AccountListRelationFilter
    BreastCancerPrediction?: BreastCancerPredictionListRelationFilter
    DiabetesPrediction?: DiabetesPredictionListRelationFilter
    HeartDiseasePrediction?: HeartDiseasePredictionListRelationFilter
    KidneyDiseasePrediction?: KidneyDiseasePredictionListRelationFilter
    ParkinsonsPrediction?: ParkinsonsPredictionListRelationFilter
    sessions?: SessionListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type BreastCancerPredictionWhereInput = {
    AND?: BreastCancerPredictionWhereInput | BreastCancerPredictionWhereInput[]
    OR?: BreastCancerPredictionWhereInput[]
    NOT?: BreastCancerPredictionWhereInput | BreastCancerPredictionWhereInput[]
    prediction_id?: IntFilter<"BreastCancerPrediction"> | number
    user_id?: StringFilter<"BreastCancerPrediction"> | string
    radius_mean?: FloatFilter<"BreastCancerPrediction"> | number
    texture_mean?: FloatFilter<"BreastCancerPrediction"> | number
    perimeter_mean?: FloatFilter<"BreastCancerPrediction"> | number
    area_mean?: FloatFilter<"BreastCancerPrediction"> | number
    smoothness_mean?: FloatFilter<"BreastCancerPrediction"> | number
    result?: StringFilter<"BreastCancerPrediction"> | string
    created_at?: DateTimeFilter<"BreastCancerPrediction"> | Date | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type BreastCancerPredictionOrderByWithRelationInput = {
    prediction_id?: SortOrder
    user_id?: SortOrder
    radius_mean?: SortOrder
    texture_mean?: SortOrder
    perimeter_mean?: SortOrder
    area_mean?: SortOrder
    smoothness_mean?: SortOrder
    result?: SortOrder
    created_at?: SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type BreastCancerPredictionWhereUniqueInput = Prisma.AtLeast<{
    prediction_id?: number
    AND?: BreastCancerPredictionWhereInput | BreastCancerPredictionWhereInput[]
    OR?: BreastCancerPredictionWhereInput[]
    NOT?: BreastCancerPredictionWhereInput | BreastCancerPredictionWhereInput[]
    user_id?: StringFilter<"BreastCancerPrediction"> | string
    radius_mean?: FloatFilter<"BreastCancerPrediction"> | number
    texture_mean?: FloatFilter<"BreastCancerPrediction"> | number
    perimeter_mean?: FloatFilter<"BreastCancerPrediction"> | number
    area_mean?: FloatFilter<"BreastCancerPrediction"> | number
    smoothness_mean?: FloatFilter<"BreastCancerPrediction"> | number
    result?: StringFilter<"BreastCancerPrediction"> | string
    created_at?: DateTimeFilter<"BreastCancerPrediction"> | Date | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "prediction_id">

  export type BreastCancerPredictionOrderByWithAggregationInput = {
    prediction_id?: SortOrder
    user_id?: SortOrder
    radius_mean?: SortOrder
    texture_mean?: SortOrder
    perimeter_mean?: SortOrder
    area_mean?: SortOrder
    smoothness_mean?: SortOrder
    result?: SortOrder
    created_at?: SortOrder
    _count?: BreastCancerPredictionCountOrderByAggregateInput
    _avg?: BreastCancerPredictionAvgOrderByAggregateInput
    _max?: BreastCancerPredictionMaxOrderByAggregateInput
    _min?: BreastCancerPredictionMinOrderByAggregateInput
    _sum?: BreastCancerPredictionSumOrderByAggregateInput
  }

  export type BreastCancerPredictionScalarWhereWithAggregatesInput = {
    AND?: BreastCancerPredictionScalarWhereWithAggregatesInput | BreastCancerPredictionScalarWhereWithAggregatesInput[]
    OR?: BreastCancerPredictionScalarWhereWithAggregatesInput[]
    NOT?: BreastCancerPredictionScalarWhereWithAggregatesInput | BreastCancerPredictionScalarWhereWithAggregatesInput[]
    prediction_id?: IntWithAggregatesFilter<"BreastCancerPrediction"> | number
    user_id?: StringWithAggregatesFilter<"BreastCancerPrediction"> | string
    radius_mean?: FloatWithAggregatesFilter<"BreastCancerPrediction"> | number
    texture_mean?: FloatWithAggregatesFilter<"BreastCancerPrediction"> | number
    perimeter_mean?: FloatWithAggregatesFilter<"BreastCancerPrediction"> | number
    area_mean?: FloatWithAggregatesFilter<"BreastCancerPrediction"> | number
    smoothness_mean?: FloatWithAggregatesFilter<"BreastCancerPrediction"> | number
    result?: StringWithAggregatesFilter<"BreastCancerPrediction"> | string
    created_at?: DateTimeWithAggregatesFilter<"BreastCancerPrediction"> | Date | string
  }

  export type DiabetesPredictionWhereInput = {
    AND?: DiabetesPredictionWhereInput | DiabetesPredictionWhereInput[]
    OR?: DiabetesPredictionWhereInput[]
    NOT?: DiabetesPredictionWhereInput | DiabetesPredictionWhereInput[]
    prediction_id?: IntFilter<"DiabetesPrediction"> | number
    user_id?: StringFilter<"DiabetesPrediction"> | string
    pregnancies?: IntFilter<"DiabetesPrediction"> | number
    glucose?: IntFilter<"DiabetesPrediction"> | number
    blood_pressure?: IntFilter<"DiabetesPrediction"> | number
    skin_thickness?: IntFilter<"DiabetesPrediction"> | number
    insulin?: IntFilter<"DiabetesPrediction"> | number
    bmi?: FloatFilter<"DiabetesPrediction"> | number
    diabetes_pedigree_function?: FloatFilter<"DiabetesPrediction"> | number
    age?: IntFilter<"DiabetesPrediction"> | number
    result?: StringFilter<"DiabetesPrediction"> | string
    created_at?: DateTimeFilter<"DiabetesPrediction"> | Date | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type DiabetesPredictionOrderByWithRelationInput = {
    prediction_id?: SortOrder
    user_id?: SortOrder
    pregnancies?: SortOrder
    glucose?: SortOrder
    blood_pressure?: SortOrder
    skin_thickness?: SortOrder
    insulin?: SortOrder
    bmi?: SortOrder
    diabetes_pedigree_function?: SortOrder
    age?: SortOrder
    result?: SortOrder
    created_at?: SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type DiabetesPredictionWhereUniqueInput = Prisma.AtLeast<{
    prediction_id?: number
    AND?: DiabetesPredictionWhereInput | DiabetesPredictionWhereInput[]
    OR?: DiabetesPredictionWhereInput[]
    NOT?: DiabetesPredictionWhereInput | DiabetesPredictionWhereInput[]
    user_id?: StringFilter<"DiabetesPrediction"> | string
    pregnancies?: IntFilter<"DiabetesPrediction"> | number
    glucose?: IntFilter<"DiabetesPrediction"> | number
    blood_pressure?: IntFilter<"DiabetesPrediction"> | number
    skin_thickness?: IntFilter<"DiabetesPrediction"> | number
    insulin?: IntFilter<"DiabetesPrediction"> | number
    bmi?: FloatFilter<"DiabetesPrediction"> | number
    diabetes_pedigree_function?: FloatFilter<"DiabetesPrediction"> | number
    age?: IntFilter<"DiabetesPrediction"> | number
    result?: StringFilter<"DiabetesPrediction"> | string
    created_at?: DateTimeFilter<"DiabetesPrediction"> | Date | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "prediction_id">

  export type DiabetesPredictionOrderByWithAggregationInput = {
    prediction_id?: SortOrder
    user_id?: SortOrder
    pregnancies?: SortOrder
    glucose?: SortOrder
    blood_pressure?: SortOrder
    skin_thickness?: SortOrder
    insulin?: SortOrder
    bmi?: SortOrder
    diabetes_pedigree_function?: SortOrder
    age?: SortOrder
    result?: SortOrder
    created_at?: SortOrder
    _count?: DiabetesPredictionCountOrderByAggregateInput
    _avg?: DiabetesPredictionAvgOrderByAggregateInput
    _max?: DiabetesPredictionMaxOrderByAggregateInput
    _min?: DiabetesPredictionMinOrderByAggregateInput
    _sum?: DiabetesPredictionSumOrderByAggregateInput
  }

  export type DiabetesPredictionScalarWhereWithAggregatesInput = {
    AND?: DiabetesPredictionScalarWhereWithAggregatesInput | DiabetesPredictionScalarWhereWithAggregatesInput[]
    OR?: DiabetesPredictionScalarWhereWithAggregatesInput[]
    NOT?: DiabetesPredictionScalarWhereWithAggregatesInput | DiabetesPredictionScalarWhereWithAggregatesInput[]
    prediction_id?: IntWithAggregatesFilter<"DiabetesPrediction"> | number
    user_id?: StringWithAggregatesFilter<"DiabetesPrediction"> | string
    pregnancies?: IntWithAggregatesFilter<"DiabetesPrediction"> | number
    glucose?: IntWithAggregatesFilter<"DiabetesPrediction"> | number
    blood_pressure?: IntWithAggregatesFilter<"DiabetesPrediction"> | number
    skin_thickness?: IntWithAggregatesFilter<"DiabetesPrediction"> | number
    insulin?: IntWithAggregatesFilter<"DiabetesPrediction"> | number
    bmi?: FloatWithAggregatesFilter<"DiabetesPrediction"> | number
    diabetes_pedigree_function?: FloatWithAggregatesFilter<"DiabetesPrediction"> | number
    age?: IntWithAggregatesFilter<"DiabetesPrediction"> | number
    result?: StringWithAggregatesFilter<"DiabetesPrediction"> | string
    created_at?: DateTimeWithAggregatesFilter<"DiabetesPrediction"> | Date | string
  }

  export type HeartDiseasePredictionWhereInput = {
    AND?: HeartDiseasePredictionWhereInput | HeartDiseasePredictionWhereInput[]
    OR?: HeartDiseasePredictionWhereInput[]
    NOT?: HeartDiseasePredictionWhereInput | HeartDiseasePredictionWhereInput[]
    prediction_id?: IntFilter<"HeartDiseasePrediction"> | number
    user_id?: StringFilter<"HeartDiseasePrediction"> | string
    age?: IntFilter<"HeartDiseasePrediction"> | number
    sex?: StringFilter<"HeartDiseasePrediction"> | string
    chest_pain_type?: StringFilter<"HeartDiseasePrediction"> | string
    resting_blood_pressure?: IntFilter<"HeartDiseasePrediction"> | number
    serum_cholesterol?: IntFilter<"HeartDiseasePrediction"> | number
    fasting_blood_sugar?: BoolFilter<"HeartDiseasePrediction"> | boolean
    resting_ecg?: IntFilter<"HeartDiseasePrediction"> | number
    max_heart_rate?: IntFilter<"HeartDiseasePrediction"> | number
    exercise_induced_angina?: BoolFilter<"HeartDiseasePrediction"> | boolean
    oldpeak?: FloatFilter<"HeartDiseasePrediction"> | number
    slope_of_peak_exercise_st_segment?: StringFilter<"HeartDiseasePrediction"> | string
    num_major_vessels?: IntFilter<"HeartDiseasePrediction"> | number
    thal?: StringFilter<"HeartDiseasePrediction"> | string
    result?: StringFilter<"HeartDiseasePrediction"> | string
    created_at?: DateTimeFilter<"HeartDiseasePrediction"> | Date | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type HeartDiseasePredictionOrderByWithRelationInput = {
    prediction_id?: SortOrder
    user_id?: SortOrder
    age?: SortOrder
    sex?: SortOrder
    chest_pain_type?: SortOrder
    resting_blood_pressure?: SortOrder
    serum_cholesterol?: SortOrder
    fasting_blood_sugar?: SortOrder
    resting_ecg?: SortOrder
    max_heart_rate?: SortOrder
    exercise_induced_angina?: SortOrder
    oldpeak?: SortOrder
    slope_of_peak_exercise_st_segment?: SortOrder
    num_major_vessels?: SortOrder
    thal?: SortOrder
    result?: SortOrder
    created_at?: SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type HeartDiseasePredictionWhereUniqueInput = Prisma.AtLeast<{
    prediction_id?: number
    AND?: HeartDiseasePredictionWhereInput | HeartDiseasePredictionWhereInput[]
    OR?: HeartDiseasePredictionWhereInput[]
    NOT?: HeartDiseasePredictionWhereInput | HeartDiseasePredictionWhereInput[]
    user_id?: StringFilter<"HeartDiseasePrediction"> | string
    age?: IntFilter<"HeartDiseasePrediction"> | number
    sex?: StringFilter<"HeartDiseasePrediction"> | string
    chest_pain_type?: StringFilter<"HeartDiseasePrediction"> | string
    resting_blood_pressure?: IntFilter<"HeartDiseasePrediction"> | number
    serum_cholesterol?: IntFilter<"HeartDiseasePrediction"> | number
    fasting_blood_sugar?: BoolFilter<"HeartDiseasePrediction"> | boolean
    resting_ecg?: IntFilter<"HeartDiseasePrediction"> | number
    max_heart_rate?: IntFilter<"HeartDiseasePrediction"> | number
    exercise_induced_angina?: BoolFilter<"HeartDiseasePrediction"> | boolean
    oldpeak?: FloatFilter<"HeartDiseasePrediction"> | number
    slope_of_peak_exercise_st_segment?: StringFilter<"HeartDiseasePrediction"> | string
    num_major_vessels?: IntFilter<"HeartDiseasePrediction"> | number
    thal?: StringFilter<"HeartDiseasePrediction"> | string
    result?: StringFilter<"HeartDiseasePrediction"> | string
    created_at?: DateTimeFilter<"HeartDiseasePrediction"> | Date | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "prediction_id">

  export type HeartDiseasePredictionOrderByWithAggregationInput = {
    prediction_id?: SortOrder
    user_id?: SortOrder
    age?: SortOrder
    sex?: SortOrder
    chest_pain_type?: SortOrder
    resting_blood_pressure?: SortOrder
    serum_cholesterol?: SortOrder
    fasting_blood_sugar?: SortOrder
    resting_ecg?: SortOrder
    max_heart_rate?: SortOrder
    exercise_induced_angina?: SortOrder
    oldpeak?: SortOrder
    slope_of_peak_exercise_st_segment?: SortOrder
    num_major_vessels?: SortOrder
    thal?: SortOrder
    result?: SortOrder
    created_at?: SortOrder
    _count?: HeartDiseasePredictionCountOrderByAggregateInput
    _avg?: HeartDiseasePredictionAvgOrderByAggregateInput
    _max?: HeartDiseasePredictionMaxOrderByAggregateInput
    _min?: HeartDiseasePredictionMinOrderByAggregateInput
    _sum?: HeartDiseasePredictionSumOrderByAggregateInput
  }

  export type HeartDiseasePredictionScalarWhereWithAggregatesInput = {
    AND?: HeartDiseasePredictionScalarWhereWithAggregatesInput | HeartDiseasePredictionScalarWhereWithAggregatesInput[]
    OR?: HeartDiseasePredictionScalarWhereWithAggregatesInput[]
    NOT?: HeartDiseasePredictionScalarWhereWithAggregatesInput | HeartDiseasePredictionScalarWhereWithAggregatesInput[]
    prediction_id?: IntWithAggregatesFilter<"HeartDiseasePrediction"> | number
    user_id?: StringWithAggregatesFilter<"HeartDiseasePrediction"> | string
    age?: IntWithAggregatesFilter<"HeartDiseasePrediction"> | number
    sex?: StringWithAggregatesFilter<"HeartDiseasePrediction"> | string
    chest_pain_type?: StringWithAggregatesFilter<"HeartDiseasePrediction"> | string
    resting_blood_pressure?: IntWithAggregatesFilter<"HeartDiseasePrediction"> | number
    serum_cholesterol?: IntWithAggregatesFilter<"HeartDiseasePrediction"> | number
    fasting_blood_sugar?: BoolWithAggregatesFilter<"HeartDiseasePrediction"> | boolean
    resting_ecg?: IntWithAggregatesFilter<"HeartDiseasePrediction"> | number
    max_heart_rate?: IntWithAggregatesFilter<"HeartDiseasePrediction"> | number
    exercise_induced_angina?: BoolWithAggregatesFilter<"HeartDiseasePrediction"> | boolean
    oldpeak?: FloatWithAggregatesFilter<"HeartDiseasePrediction"> | number
    slope_of_peak_exercise_st_segment?: StringWithAggregatesFilter<"HeartDiseasePrediction"> | string
    num_major_vessels?: IntWithAggregatesFilter<"HeartDiseasePrediction"> | number
    thal?: StringWithAggregatesFilter<"HeartDiseasePrediction"> | string
    result?: StringWithAggregatesFilter<"HeartDiseasePrediction"> | string
    created_at?: DateTimeWithAggregatesFilter<"HeartDiseasePrediction"> | Date | string
  }

  export type KidneyDiseasePredictionWhereInput = {
    AND?: KidneyDiseasePredictionWhereInput | KidneyDiseasePredictionWhereInput[]
    OR?: KidneyDiseasePredictionWhereInput[]
    NOT?: KidneyDiseasePredictionWhereInput | KidneyDiseasePredictionWhereInput[]
    prediction_id?: IntFilter<"KidneyDiseasePrediction"> | number
    user_id?: StringFilter<"KidneyDiseasePrediction"> | string
    age?: IntFilter<"KidneyDiseasePrediction"> | number
    blood_pressure?: IntFilter<"KidneyDiseasePrediction"> | number
    specific_gravity?: FloatFilter<"KidneyDiseasePrediction"> | number
    albumin?: IntFilter<"KidneyDiseasePrediction"> | number
    sugar?: IntFilter<"KidneyDiseasePrediction"> | number
    red_blood_cells?: StringFilter<"KidneyDiseasePrediction"> | string
    pus_cell?: StringFilter<"KidneyDiseasePrediction"> | string
    pus_cell_clumps?: StringFilter<"KidneyDiseasePrediction"> | string
    bacteria?: StringFilter<"KidneyDiseasePrediction"> | string
    blood_glucose_random?: IntFilter<"KidneyDiseasePrediction"> | number
    blood_urea?: IntFilter<"KidneyDiseasePrediction"> | number
    serum_creatinine?: FloatFilter<"KidneyDiseasePrediction"> | number
    sodium?: FloatFilter<"KidneyDiseasePrediction"> | number
    potassium?: FloatFilter<"KidneyDiseasePrediction"> | number
    hemoglobin?: FloatFilter<"KidneyDiseasePrediction"> | number
    packed_cell_volume?: FloatFilter<"KidneyDiseasePrediction"> | number
    white_cell_count?: IntFilter<"KidneyDiseasePrediction"> | number
    red_cell_count?: IntFilter<"KidneyDiseasePrediction"> | number
    hypertension?: StringFilter<"KidneyDiseasePrediction"> | string
    diabetes_mellitus?: StringFilter<"KidneyDiseasePrediction"> | string
    coronary_artery_disease?: StringFilter<"KidneyDiseasePrediction"> | string
    appetite?: StringFilter<"KidneyDiseasePrediction"> | string
    pedal_edema?: StringFilter<"KidneyDiseasePrediction"> | string
    anemia?: StringFilter<"KidneyDiseasePrediction"> | string
    classification?: StringFilter<"KidneyDiseasePrediction"> | string
    created_at?: DateTimeFilter<"KidneyDiseasePrediction"> | Date | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type KidneyDiseasePredictionOrderByWithRelationInput = {
    prediction_id?: SortOrder
    user_id?: SortOrder
    age?: SortOrder
    blood_pressure?: SortOrder
    specific_gravity?: SortOrder
    albumin?: SortOrder
    sugar?: SortOrder
    red_blood_cells?: SortOrder
    pus_cell?: SortOrder
    pus_cell_clumps?: SortOrder
    bacteria?: SortOrder
    blood_glucose_random?: SortOrder
    blood_urea?: SortOrder
    serum_creatinine?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
    hemoglobin?: SortOrder
    packed_cell_volume?: SortOrder
    white_cell_count?: SortOrder
    red_cell_count?: SortOrder
    hypertension?: SortOrder
    diabetes_mellitus?: SortOrder
    coronary_artery_disease?: SortOrder
    appetite?: SortOrder
    pedal_edema?: SortOrder
    anemia?: SortOrder
    classification?: SortOrder
    created_at?: SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type KidneyDiseasePredictionWhereUniqueInput = Prisma.AtLeast<{
    prediction_id?: number
    AND?: KidneyDiseasePredictionWhereInput | KidneyDiseasePredictionWhereInput[]
    OR?: KidneyDiseasePredictionWhereInput[]
    NOT?: KidneyDiseasePredictionWhereInput | KidneyDiseasePredictionWhereInput[]
    user_id?: StringFilter<"KidneyDiseasePrediction"> | string
    age?: IntFilter<"KidneyDiseasePrediction"> | number
    blood_pressure?: IntFilter<"KidneyDiseasePrediction"> | number
    specific_gravity?: FloatFilter<"KidneyDiseasePrediction"> | number
    albumin?: IntFilter<"KidneyDiseasePrediction"> | number
    sugar?: IntFilter<"KidneyDiseasePrediction"> | number
    red_blood_cells?: StringFilter<"KidneyDiseasePrediction"> | string
    pus_cell?: StringFilter<"KidneyDiseasePrediction"> | string
    pus_cell_clumps?: StringFilter<"KidneyDiseasePrediction"> | string
    bacteria?: StringFilter<"KidneyDiseasePrediction"> | string
    blood_glucose_random?: IntFilter<"KidneyDiseasePrediction"> | number
    blood_urea?: IntFilter<"KidneyDiseasePrediction"> | number
    serum_creatinine?: FloatFilter<"KidneyDiseasePrediction"> | number
    sodium?: FloatFilter<"KidneyDiseasePrediction"> | number
    potassium?: FloatFilter<"KidneyDiseasePrediction"> | number
    hemoglobin?: FloatFilter<"KidneyDiseasePrediction"> | number
    packed_cell_volume?: FloatFilter<"KidneyDiseasePrediction"> | number
    white_cell_count?: IntFilter<"KidneyDiseasePrediction"> | number
    red_cell_count?: IntFilter<"KidneyDiseasePrediction"> | number
    hypertension?: StringFilter<"KidneyDiseasePrediction"> | string
    diabetes_mellitus?: StringFilter<"KidneyDiseasePrediction"> | string
    coronary_artery_disease?: StringFilter<"KidneyDiseasePrediction"> | string
    appetite?: StringFilter<"KidneyDiseasePrediction"> | string
    pedal_edema?: StringFilter<"KidneyDiseasePrediction"> | string
    anemia?: StringFilter<"KidneyDiseasePrediction"> | string
    classification?: StringFilter<"KidneyDiseasePrediction"> | string
    created_at?: DateTimeFilter<"KidneyDiseasePrediction"> | Date | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "prediction_id">

  export type KidneyDiseasePredictionOrderByWithAggregationInput = {
    prediction_id?: SortOrder
    user_id?: SortOrder
    age?: SortOrder
    blood_pressure?: SortOrder
    specific_gravity?: SortOrder
    albumin?: SortOrder
    sugar?: SortOrder
    red_blood_cells?: SortOrder
    pus_cell?: SortOrder
    pus_cell_clumps?: SortOrder
    bacteria?: SortOrder
    blood_glucose_random?: SortOrder
    blood_urea?: SortOrder
    serum_creatinine?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
    hemoglobin?: SortOrder
    packed_cell_volume?: SortOrder
    white_cell_count?: SortOrder
    red_cell_count?: SortOrder
    hypertension?: SortOrder
    diabetes_mellitus?: SortOrder
    coronary_artery_disease?: SortOrder
    appetite?: SortOrder
    pedal_edema?: SortOrder
    anemia?: SortOrder
    classification?: SortOrder
    created_at?: SortOrder
    _count?: KidneyDiseasePredictionCountOrderByAggregateInput
    _avg?: KidneyDiseasePredictionAvgOrderByAggregateInput
    _max?: KidneyDiseasePredictionMaxOrderByAggregateInput
    _min?: KidneyDiseasePredictionMinOrderByAggregateInput
    _sum?: KidneyDiseasePredictionSumOrderByAggregateInput
  }

  export type KidneyDiseasePredictionScalarWhereWithAggregatesInput = {
    AND?: KidneyDiseasePredictionScalarWhereWithAggregatesInput | KidneyDiseasePredictionScalarWhereWithAggregatesInput[]
    OR?: KidneyDiseasePredictionScalarWhereWithAggregatesInput[]
    NOT?: KidneyDiseasePredictionScalarWhereWithAggregatesInput | KidneyDiseasePredictionScalarWhereWithAggregatesInput[]
    prediction_id?: IntWithAggregatesFilter<"KidneyDiseasePrediction"> | number
    user_id?: StringWithAggregatesFilter<"KidneyDiseasePrediction"> | string
    age?: IntWithAggregatesFilter<"KidneyDiseasePrediction"> | number
    blood_pressure?: IntWithAggregatesFilter<"KidneyDiseasePrediction"> | number
    specific_gravity?: FloatWithAggregatesFilter<"KidneyDiseasePrediction"> | number
    albumin?: IntWithAggregatesFilter<"KidneyDiseasePrediction"> | number
    sugar?: IntWithAggregatesFilter<"KidneyDiseasePrediction"> | number
    red_blood_cells?: StringWithAggregatesFilter<"KidneyDiseasePrediction"> | string
    pus_cell?: StringWithAggregatesFilter<"KidneyDiseasePrediction"> | string
    pus_cell_clumps?: StringWithAggregatesFilter<"KidneyDiseasePrediction"> | string
    bacteria?: StringWithAggregatesFilter<"KidneyDiseasePrediction"> | string
    blood_glucose_random?: IntWithAggregatesFilter<"KidneyDiseasePrediction"> | number
    blood_urea?: IntWithAggregatesFilter<"KidneyDiseasePrediction"> | number
    serum_creatinine?: FloatWithAggregatesFilter<"KidneyDiseasePrediction"> | number
    sodium?: FloatWithAggregatesFilter<"KidneyDiseasePrediction"> | number
    potassium?: FloatWithAggregatesFilter<"KidneyDiseasePrediction"> | number
    hemoglobin?: FloatWithAggregatesFilter<"KidneyDiseasePrediction"> | number
    packed_cell_volume?: FloatWithAggregatesFilter<"KidneyDiseasePrediction"> | number
    white_cell_count?: IntWithAggregatesFilter<"KidneyDiseasePrediction"> | number
    red_cell_count?: IntWithAggregatesFilter<"KidneyDiseasePrediction"> | number
    hypertension?: StringWithAggregatesFilter<"KidneyDiseasePrediction"> | string
    diabetes_mellitus?: StringWithAggregatesFilter<"KidneyDiseasePrediction"> | string
    coronary_artery_disease?: StringWithAggregatesFilter<"KidneyDiseasePrediction"> | string
    appetite?: StringWithAggregatesFilter<"KidneyDiseasePrediction"> | string
    pedal_edema?: StringWithAggregatesFilter<"KidneyDiseasePrediction"> | string
    anemia?: StringWithAggregatesFilter<"KidneyDiseasePrediction"> | string
    classification?: StringWithAggregatesFilter<"KidneyDiseasePrediction"> | string
    created_at?: DateTimeWithAggregatesFilter<"KidneyDiseasePrediction"> | Date | string
  }

  export type ParkinsonsPredictionWhereInput = {
    AND?: ParkinsonsPredictionWhereInput | ParkinsonsPredictionWhereInput[]
    OR?: ParkinsonsPredictionWhereInput[]
    NOT?: ParkinsonsPredictionWhereInput | ParkinsonsPredictionWhereInput[]
    prediction_id?: IntFilter<"ParkinsonsPrediction"> | number
    user_id?: StringFilter<"ParkinsonsPrediction"> | string
    ascii_subject_name?: StringFilter<"ParkinsonsPrediction"> | string
    recording_number?: IntFilter<"ParkinsonsPrediction"> | number
    mdvp_fo?: FloatFilter<"ParkinsonsPrediction"> | number
    mdvp_fhi?: FloatFilter<"ParkinsonsPrediction"> | number
    mdvp_flo?: FloatFilter<"ParkinsonsPrediction"> | number
    mdvp_jitter_percentage?: FloatFilter<"ParkinsonsPrediction"> | number
    mdvp_jitter_abs?: FloatFilter<"ParkinsonsPrediction"> | number
    mdvp_rap?: FloatFilter<"ParkinsonsPrediction"> | number
    mdvp_ppq?: FloatFilter<"ParkinsonsPrediction"> | number
    jitter_ddp?: FloatFilter<"ParkinsonsPrediction"> | number
    mdvp_shimmer?: FloatFilter<"ParkinsonsPrediction"> | number
    mdvp_shimmer_db?: FloatFilter<"ParkinsonsPrediction"> | number
    shimmer_apq3?: FloatFilter<"ParkinsonsPrediction"> | number
    shimmer_apq5?: FloatFilter<"ParkinsonsPrediction"> | number
    mdvp_apq?: FloatFilter<"ParkinsonsPrediction"> | number
    shimmer_dda?: FloatFilter<"ParkinsonsPrediction"> | number
    nhr?: FloatFilter<"ParkinsonsPrediction"> | number
    hnr?: FloatFilter<"ParkinsonsPrediction"> | number
    status?: IntFilter<"ParkinsonsPrediction"> | number
    rpde?: FloatFilter<"ParkinsonsPrediction"> | number
    d2?: FloatFilter<"ParkinsonsPrediction"> | number
    dfa?: FloatFilter<"ParkinsonsPrediction"> | number
    spread1?: FloatFilter<"ParkinsonsPrediction"> | number
    spread2?: FloatFilter<"ParkinsonsPrediction"> | number
    ppe?: FloatFilter<"ParkinsonsPrediction"> | number
    result?: StringFilter<"ParkinsonsPrediction"> | string
    created_at?: DateTimeFilter<"ParkinsonsPrediction"> | Date | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ParkinsonsPredictionOrderByWithRelationInput = {
    prediction_id?: SortOrder
    user_id?: SortOrder
    ascii_subject_name?: SortOrder
    recording_number?: SortOrder
    mdvp_fo?: SortOrder
    mdvp_fhi?: SortOrder
    mdvp_flo?: SortOrder
    mdvp_jitter_percentage?: SortOrder
    mdvp_jitter_abs?: SortOrder
    mdvp_rap?: SortOrder
    mdvp_ppq?: SortOrder
    jitter_ddp?: SortOrder
    mdvp_shimmer?: SortOrder
    mdvp_shimmer_db?: SortOrder
    shimmer_apq3?: SortOrder
    shimmer_apq5?: SortOrder
    mdvp_apq?: SortOrder
    shimmer_dda?: SortOrder
    nhr?: SortOrder
    hnr?: SortOrder
    status?: SortOrder
    rpde?: SortOrder
    d2?: SortOrder
    dfa?: SortOrder
    spread1?: SortOrder
    spread2?: SortOrder
    ppe?: SortOrder
    result?: SortOrder
    created_at?: SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type ParkinsonsPredictionWhereUniqueInput = Prisma.AtLeast<{
    prediction_id?: number
    AND?: ParkinsonsPredictionWhereInput | ParkinsonsPredictionWhereInput[]
    OR?: ParkinsonsPredictionWhereInput[]
    NOT?: ParkinsonsPredictionWhereInput | ParkinsonsPredictionWhereInput[]
    user_id?: StringFilter<"ParkinsonsPrediction"> | string
    ascii_subject_name?: StringFilter<"ParkinsonsPrediction"> | string
    recording_number?: IntFilter<"ParkinsonsPrediction"> | number
    mdvp_fo?: FloatFilter<"ParkinsonsPrediction"> | number
    mdvp_fhi?: FloatFilter<"ParkinsonsPrediction"> | number
    mdvp_flo?: FloatFilter<"ParkinsonsPrediction"> | number
    mdvp_jitter_percentage?: FloatFilter<"ParkinsonsPrediction"> | number
    mdvp_jitter_abs?: FloatFilter<"ParkinsonsPrediction"> | number
    mdvp_rap?: FloatFilter<"ParkinsonsPrediction"> | number
    mdvp_ppq?: FloatFilter<"ParkinsonsPrediction"> | number
    jitter_ddp?: FloatFilter<"ParkinsonsPrediction"> | number
    mdvp_shimmer?: FloatFilter<"ParkinsonsPrediction"> | number
    mdvp_shimmer_db?: FloatFilter<"ParkinsonsPrediction"> | number
    shimmer_apq3?: FloatFilter<"ParkinsonsPrediction"> | number
    shimmer_apq5?: FloatFilter<"ParkinsonsPrediction"> | number
    mdvp_apq?: FloatFilter<"ParkinsonsPrediction"> | number
    shimmer_dda?: FloatFilter<"ParkinsonsPrediction"> | number
    nhr?: FloatFilter<"ParkinsonsPrediction"> | number
    hnr?: FloatFilter<"ParkinsonsPrediction"> | number
    status?: IntFilter<"ParkinsonsPrediction"> | number
    rpde?: FloatFilter<"ParkinsonsPrediction"> | number
    d2?: FloatFilter<"ParkinsonsPrediction"> | number
    dfa?: FloatFilter<"ParkinsonsPrediction"> | number
    spread1?: FloatFilter<"ParkinsonsPrediction"> | number
    spread2?: FloatFilter<"ParkinsonsPrediction"> | number
    ppe?: FloatFilter<"ParkinsonsPrediction"> | number
    result?: StringFilter<"ParkinsonsPrediction"> | string
    created_at?: DateTimeFilter<"ParkinsonsPrediction"> | Date | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "prediction_id">

  export type ParkinsonsPredictionOrderByWithAggregationInput = {
    prediction_id?: SortOrder
    user_id?: SortOrder
    ascii_subject_name?: SortOrder
    recording_number?: SortOrder
    mdvp_fo?: SortOrder
    mdvp_fhi?: SortOrder
    mdvp_flo?: SortOrder
    mdvp_jitter_percentage?: SortOrder
    mdvp_jitter_abs?: SortOrder
    mdvp_rap?: SortOrder
    mdvp_ppq?: SortOrder
    jitter_ddp?: SortOrder
    mdvp_shimmer?: SortOrder
    mdvp_shimmer_db?: SortOrder
    shimmer_apq3?: SortOrder
    shimmer_apq5?: SortOrder
    mdvp_apq?: SortOrder
    shimmer_dda?: SortOrder
    nhr?: SortOrder
    hnr?: SortOrder
    status?: SortOrder
    rpde?: SortOrder
    d2?: SortOrder
    dfa?: SortOrder
    spread1?: SortOrder
    spread2?: SortOrder
    ppe?: SortOrder
    result?: SortOrder
    created_at?: SortOrder
    _count?: ParkinsonsPredictionCountOrderByAggregateInput
    _avg?: ParkinsonsPredictionAvgOrderByAggregateInput
    _max?: ParkinsonsPredictionMaxOrderByAggregateInput
    _min?: ParkinsonsPredictionMinOrderByAggregateInput
    _sum?: ParkinsonsPredictionSumOrderByAggregateInput
  }

  export type ParkinsonsPredictionScalarWhereWithAggregatesInput = {
    AND?: ParkinsonsPredictionScalarWhereWithAggregatesInput | ParkinsonsPredictionScalarWhereWithAggregatesInput[]
    OR?: ParkinsonsPredictionScalarWhereWithAggregatesInput[]
    NOT?: ParkinsonsPredictionScalarWhereWithAggregatesInput | ParkinsonsPredictionScalarWhereWithAggregatesInput[]
    prediction_id?: IntWithAggregatesFilter<"ParkinsonsPrediction"> | number
    user_id?: StringWithAggregatesFilter<"ParkinsonsPrediction"> | string
    ascii_subject_name?: StringWithAggregatesFilter<"ParkinsonsPrediction"> | string
    recording_number?: IntWithAggregatesFilter<"ParkinsonsPrediction"> | number
    mdvp_fo?: FloatWithAggregatesFilter<"ParkinsonsPrediction"> | number
    mdvp_fhi?: FloatWithAggregatesFilter<"ParkinsonsPrediction"> | number
    mdvp_flo?: FloatWithAggregatesFilter<"ParkinsonsPrediction"> | number
    mdvp_jitter_percentage?: FloatWithAggregatesFilter<"ParkinsonsPrediction"> | number
    mdvp_jitter_abs?: FloatWithAggregatesFilter<"ParkinsonsPrediction"> | number
    mdvp_rap?: FloatWithAggregatesFilter<"ParkinsonsPrediction"> | number
    mdvp_ppq?: FloatWithAggregatesFilter<"ParkinsonsPrediction"> | number
    jitter_ddp?: FloatWithAggregatesFilter<"ParkinsonsPrediction"> | number
    mdvp_shimmer?: FloatWithAggregatesFilter<"ParkinsonsPrediction"> | number
    mdvp_shimmer_db?: FloatWithAggregatesFilter<"ParkinsonsPrediction"> | number
    shimmer_apq3?: FloatWithAggregatesFilter<"ParkinsonsPrediction"> | number
    shimmer_apq5?: FloatWithAggregatesFilter<"ParkinsonsPrediction"> | number
    mdvp_apq?: FloatWithAggregatesFilter<"ParkinsonsPrediction"> | number
    shimmer_dda?: FloatWithAggregatesFilter<"ParkinsonsPrediction"> | number
    nhr?: FloatWithAggregatesFilter<"ParkinsonsPrediction"> | number
    hnr?: FloatWithAggregatesFilter<"ParkinsonsPrediction"> | number
    status?: IntWithAggregatesFilter<"ParkinsonsPrediction"> | number
    rpde?: FloatWithAggregatesFilter<"ParkinsonsPrediction"> | number
    d2?: FloatWithAggregatesFilter<"ParkinsonsPrediction"> | number
    dfa?: FloatWithAggregatesFilter<"ParkinsonsPrediction"> | number
    spread1?: FloatWithAggregatesFilter<"ParkinsonsPrediction"> | number
    spread2?: FloatWithAggregatesFilter<"ParkinsonsPrediction"> | number
    ppe?: FloatWithAggregatesFilter<"ParkinsonsPrediction"> | number
    result?: StringWithAggregatesFilter<"ParkinsonsPrediction"> | string
    created_at?: DateTimeWithAggregatesFilter<"ParkinsonsPrediction"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    BreastCancerPrediction?: BreastCancerPredictionCreateNestedManyWithoutUserInput
    DiabetesPrediction?: DiabetesPredictionCreateNestedManyWithoutUserInput
    HeartDiseasePrediction?: HeartDiseasePredictionCreateNestedManyWithoutUserInput
    KidneyDiseasePrediction?: KidneyDiseasePredictionCreateNestedManyWithoutUserInput
    ParkinsonsPrediction?: ParkinsonsPredictionCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    BreastCancerPrediction?: BreastCancerPredictionUncheckedCreateNestedManyWithoutUserInput
    DiabetesPrediction?: DiabetesPredictionUncheckedCreateNestedManyWithoutUserInput
    HeartDiseasePrediction?: HeartDiseasePredictionUncheckedCreateNestedManyWithoutUserInput
    KidneyDiseasePrediction?: KidneyDiseasePredictionUncheckedCreateNestedManyWithoutUserInput
    ParkinsonsPrediction?: ParkinsonsPredictionUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    BreastCancerPrediction?: BreastCancerPredictionUpdateManyWithoutUserNestedInput
    DiabetesPrediction?: DiabetesPredictionUpdateManyWithoutUserNestedInput
    HeartDiseasePrediction?: HeartDiseasePredictionUpdateManyWithoutUserNestedInput
    KidneyDiseasePrediction?: KidneyDiseasePredictionUpdateManyWithoutUserNestedInput
    ParkinsonsPrediction?: ParkinsonsPredictionUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    BreastCancerPrediction?: BreastCancerPredictionUncheckedUpdateManyWithoutUserNestedInput
    DiabetesPrediction?: DiabetesPredictionUncheckedUpdateManyWithoutUserNestedInput
    HeartDiseasePrediction?: HeartDiseasePredictionUncheckedUpdateManyWithoutUserNestedInput
    KidneyDiseasePrediction?: KidneyDiseasePredictionUncheckedUpdateManyWithoutUserNestedInput
    ParkinsonsPrediction?: ParkinsonsPredictionUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BreastCancerPredictionCreateInput = {
    radius_mean: number
    texture_mean: number
    perimeter_mean: number
    area_mean: number
    smoothness_mean: number
    result: string
    created_at?: Date | string
    User: UserCreateNestedOneWithoutBreastCancerPredictionInput
  }

  export type BreastCancerPredictionUncheckedCreateInput = {
    prediction_id?: number
    user_id: string
    radius_mean: number
    texture_mean: number
    perimeter_mean: number
    area_mean: number
    smoothness_mean: number
    result: string
    created_at?: Date | string
  }

  export type BreastCancerPredictionUpdateInput = {
    radius_mean?: FloatFieldUpdateOperationsInput | number
    texture_mean?: FloatFieldUpdateOperationsInput | number
    perimeter_mean?: FloatFieldUpdateOperationsInput | number
    area_mean?: FloatFieldUpdateOperationsInput | number
    smoothness_mean?: FloatFieldUpdateOperationsInput | number
    result?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutBreastCancerPredictionNestedInput
  }

  export type BreastCancerPredictionUncheckedUpdateInput = {
    prediction_id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    radius_mean?: FloatFieldUpdateOperationsInput | number
    texture_mean?: FloatFieldUpdateOperationsInput | number
    perimeter_mean?: FloatFieldUpdateOperationsInput | number
    area_mean?: FloatFieldUpdateOperationsInput | number
    smoothness_mean?: FloatFieldUpdateOperationsInput | number
    result?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BreastCancerPredictionCreateManyInput = {
    prediction_id?: number
    user_id: string
    radius_mean: number
    texture_mean: number
    perimeter_mean: number
    area_mean: number
    smoothness_mean: number
    result: string
    created_at?: Date | string
  }

  export type BreastCancerPredictionUpdateManyMutationInput = {
    radius_mean?: FloatFieldUpdateOperationsInput | number
    texture_mean?: FloatFieldUpdateOperationsInput | number
    perimeter_mean?: FloatFieldUpdateOperationsInput | number
    area_mean?: FloatFieldUpdateOperationsInput | number
    smoothness_mean?: FloatFieldUpdateOperationsInput | number
    result?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BreastCancerPredictionUncheckedUpdateManyInput = {
    prediction_id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    radius_mean?: FloatFieldUpdateOperationsInput | number
    texture_mean?: FloatFieldUpdateOperationsInput | number
    perimeter_mean?: FloatFieldUpdateOperationsInput | number
    area_mean?: FloatFieldUpdateOperationsInput | number
    smoothness_mean?: FloatFieldUpdateOperationsInput | number
    result?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiabetesPredictionCreateInput = {
    pregnancies: number
    glucose: number
    blood_pressure: number
    skin_thickness: number
    insulin: number
    bmi: number
    diabetes_pedigree_function: number
    age: number
    result: string
    created_at?: Date | string
    User: UserCreateNestedOneWithoutDiabetesPredictionInput
  }

  export type DiabetesPredictionUncheckedCreateInput = {
    prediction_id?: number
    user_id: string
    pregnancies: number
    glucose: number
    blood_pressure: number
    skin_thickness: number
    insulin: number
    bmi: number
    diabetes_pedigree_function: number
    age: number
    result: string
    created_at?: Date | string
  }

  export type DiabetesPredictionUpdateInput = {
    pregnancies?: IntFieldUpdateOperationsInput | number
    glucose?: IntFieldUpdateOperationsInput | number
    blood_pressure?: IntFieldUpdateOperationsInput | number
    skin_thickness?: IntFieldUpdateOperationsInput | number
    insulin?: IntFieldUpdateOperationsInput | number
    bmi?: FloatFieldUpdateOperationsInput | number
    diabetes_pedigree_function?: FloatFieldUpdateOperationsInput | number
    age?: IntFieldUpdateOperationsInput | number
    result?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutDiabetesPredictionNestedInput
  }

  export type DiabetesPredictionUncheckedUpdateInput = {
    prediction_id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    pregnancies?: IntFieldUpdateOperationsInput | number
    glucose?: IntFieldUpdateOperationsInput | number
    blood_pressure?: IntFieldUpdateOperationsInput | number
    skin_thickness?: IntFieldUpdateOperationsInput | number
    insulin?: IntFieldUpdateOperationsInput | number
    bmi?: FloatFieldUpdateOperationsInput | number
    diabetes_pedigree_function?: FloatFieldUpdateOperationsInput | number
    age?: IntFieldUpdateOperationsInput | number
    result?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiabetesPredictionCreateManyInput = {
    prediction_id?: number
    user_id: string
    pregnancies: number
    glucose: number
    blood_pressure: number
    skin_thickness: number
    insulin: number
    bmi: number
    diabetes_pedigree_function: number
    age: number
    result: string
    created_at?: Date | string
  }

  export type DiabetesPredictionUpdateManyMutationInput = {
    pregnancies?: IntFieldUpdateOperationsInput | number
    glucose?: IntFieldUpdateOperationsInput | number
    blood_pressure?: IntFieldUpdateOperationsInput | number
    skin_thickness?: IntFieldUpdateOperationsInput | number
    insulin?: IntFieldUpdateOperationsInput | number
    bmi?: FloatFieldUpdateOperationsInput | number
    diabetes_pedigree_function?: FloatFieldUpdateOperationsInput | number
    age?: IntFieldUpdateOperationsInput | number
    result?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiabetesPredictionUncheckedUpdateManyInput = {
    prediction_id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    pregnancies?: IntFieldUpdateOperationsInput | number
    glucose?: IntFieldUpdateOperationsInput | number
    blood_pressure?: IntFieldUpdateOperationsInput | number
    skin_thickness?: IntFieldUpdateOperationsInput | number
    insulin?: IntFieldUpdateOperationsInput | number
    bmi?: FloatFieldUpdateOperationsInput | number
    diabetes_pedigree_function?: FloatFieldUpdateOperationsInput | number
    age?: IntFieldUpdateOperationsInput | number
    result?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HeartDiseasePredictionCreateInput = {
    age: number
    sex: string
    chest_pain_type: string
    resting_blood_pressure: number
    serum_cholesterol: number
    fasting_blood_sugar: boolean
    resting_ecg: number
    max_heart_rate: number
    exercise_induced_angina: boolean
    oldpeak: number
    slope_of_peak_exercise_st_segment: string
    num_major_vessels: number
    thal: string
    result: string
    created_at?: Date | string
    User: UserCreateNestedOneWithoutHeartDiseasePredictionInput
  }

  export type HeartDiseasePredictionUncheckedCreateInput = {
    prediction_id?: number
    user_id: string
    age: number
    sex: string
    chest_pain_type: string
    resting_blood_pressure: number
    serum_cholesterol: number
    fasting_blood_sugar: boolean
    resting_ecg: number
    max_heart_rate: number
    exercise_induced_angina: boolean
    oldpeak: number
    slope_of_peak_exercise_st_segment: string
    num_major_vessels: number
    thal: string
    result: string
    created_at?: Date | string
  }

  export type HeartDiseasePredictionUpdateInput = {
    age?: IntFieldUpdateOperationsInput | number
    sex?: StringFieldUpdateOperationsInput | string
    chest_pain_type?: StringFieldUpdateOperationsInput | string
    resting_blood_pressure?: IntFieldUpdateOperationsInput | number
    serum_cholesterol?: IntFieldUpdateOperationsInput | number
    fasting_blood_sugar?: BoolFieldUpdateOperationsInput | boolean
    resting_ecg?: IntFieldUpdateOperationsInput | number
    max_heart_rate?: IntFieldUpdateOperationsInput | number
    exercise_induced_angina?: BoolFieldUpdateOperationsInput | boolean
    oldpeak?: FloatFieldUpdateOperationsInput | number
    slope_of_peak_exercise_st_segment?: StringFieldUpdateOperationsInput | string
    num_major_vessels?: IntFieldUpdateOperationsInput | number
    thal?: StringFieldUpdateOperationsInput | string
    result?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutHeartDiseasePredictionNestedInput
  }

  export type HeartDiseasePredictionUncheckedUpdateInput = {
    prediction_id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    sex?: StringFieldUpdateOperationsInput | string
    chest_pain_type?: StringFieldUpdateOperationsInput | string
    resting_blood_pressure?: IntFieldUpdateOperationsInput | number
    serum_cholesterol?: IntFieldUpdateOperationsInput | number
    fasting_blood_sugar?: BoolFieldUpdateOperationsInput | boolean
    resting_ecg?: IntFieldUpdateOperationsInput | number
    max_heart_rate?: IntFieldUpdateOperationsInput | number
    exercise_induced_angina?: BoolFieldUpdateOperationsInput | boolean
    oldpeak?: FloatFieldUpdateOperationsInput | number
    slope_of_peak_exercise_st_segment?: StringFieldUpdateOperationsInput | string
    num_major_vessels?: IntFieldUpdateOperationsInput | number
    thal?: StringFieldUpdateOperationsInput | string
    result?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HeartDiseasePredictionCreateManyInput = {
    prediction_id?: number
    user_id: string
    age: number
    sex: string
    chest_pain_type: string
    resting_blood_pressure: number
    serum_cholesterol: number
    fasting_blood_sugar: boolean
    resting_ecg: number
    max_heart_rate: number
    exercise_induced_angina: boolean
    oldpeak: number
    slope_of_peak_exercise_st_segment: string
    num_major_vessels: number
    thal: string
    result: string
    created_at?: Date | string
  }

  export type HeartDiseasePredictionUpdateManyMutationInput = {
    age?: IntFieldUpdateOperationsInput | number
    sex?: StringFieldUpdateOperationsInput | string
    chest_pain_type?: StringFieldUpdateOperationsInput | string
    resting_blood_pressure?: IntFieldUpdateOperationsInput | number
    serum_cholesterol?: IntFieldUpdateOperationsInput | number
    fasting_blood_sugar?: BoolFieldUpdateOperationsInput | boolean
    resting_ecg?: IntFieldUpdateOperationsInput | number
    max_heart_rate?: IntFieldUpdateOperationsInput | number
    exercise_induced_angina?: BoolFieldUpdateOperationsInput | boolean
    oldpeak?: FloatFieldUpdateOperationsInput | number
    slope_of_peak_exercise_st_segment?: StringFieldUpdateOperationsInput | string
    num_major_vessels?: IntFieldUpdateOperationsInput | number
    thal?: StringFieldUpdateOperationsInput | string
    result?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HeartDiseasePredictionUncheckedUpdateManyInput = {
    prediction_id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    sex?: StringFieldUpdateOperationsInput | string
    chest_pain_type?: StringFieldUpdateOperationsInput | string
    resting_blood_pressure?: IntFieldUpdateOperationsInput | number
    serum_cholesterol?: IntFieldUpdateOperationsInput | number
    fasting_blood_sugar?: BoolFieldUpdateOperationsInput | boolean
    resting_ecg?: IntFieldUpdateOperationsInput | number
    max_heart_rate?: IntFieldUpdateOperationsInput | number
    exercise_induced_angina?: BoolFieldUpdateOperationsInput | boolean
    oldpeak?: FloatFieldUpdateOperationsInput | number
    slope_of_peak_exercise_st_segment?: StringFieldUpdateOperationsInput | string
    num_major_vessels?: IntFieldUpdateOperationsInput | number
    thal?: StringFieldUpdateOperationsInput | string
    result?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KidneyDiseasePredictionCreateInput = {
    age: number
    blood_pressure: number
    specific_gravity: number
    albumin: number
    sugar: number
    red_blood_cells: string
    pus_cell: string
    pus_cell_clumps: string
    bacteria: string
    blood_glucose_random: number
    blood_urea: number
    serum_creatinine: number
    sodium: number
    potassium: number
    hemoglobin: number
    packed_cell_volume: number
    white_cell_count: number
    red_cell_count: number
    hypertension: string
    diabetes_mellitus: string
    coronary_artery_disease: string
    appetite: string
    pedal_edema: string
    anemia: string
    classification: string
    created_at?: Date | string
    User: UserCreateNestedOneWithoutKidneyDiseasePredictionInput
  }

  export type KidneyDiseasePredictionUncheckedCreateInput = {
    prediction_id?: number
    user_id: string
    age: number
    blood_pressure: number
    specific_gravity: number
    albumin: number
    sugar: number
    red_blood_cells: string
    pus_cell: string
    pus_cell_clumps: string
    bacteria: string
    blood_glucose_random: number
    blood_urea: number
    serum_creatinine: number
    sodium: number
    potassium: number
    hemoglobin: number
    packed_cell_volume: number
    white_cell_count: number
    red_cell_count: number
    hypertension: string
    diabetes_mellitus: string
    coronary_artery_disease: string
    appetite: string
    pedal_edema: string
    anemia: string
    classification: string
    created_at?: Date | string
  }

  export type KidneyDiseasePredictionUpdateInput = {
    age?: IntFieldUpdateOperationsInput | number
    blood_pressure?: IntFieldUpdateOperationsInput | number
    specific_gravity?: FloatFieldUpdateOperationsInput | number
    albumin?: IntFieldUpdateOperationsInput | number
    sugar?: IntFieldUpdateOperationsInput | number
    red_blood_cells?: StringFieldUpdateOperationsInput | string
    pus_cell?: StringFieldUpdateOperationsInput | string
    pus_cell_clumps?: StringFieldUpdateOperationsInput | string
    bacteria?: StringFieldUpdateOperationsInput | string
    blood_glucose_random?: IntFieldUpdateOperationsInput | number
    blood_urea?: IntFieldUpdateOperationsInput | number
    serum_creatinine?: FloatFieldUpdateOperationsInput | number
    sodium?: FloatFieldUpdateOperationsInput | number
    potassium?: FloatFieldUpdateOperationsInput | number
    hemoglobin?: FloatFieldUpdateOperationsInput | number
    packed_cell_volume?: FloatFieldUpdateOperationsInput | number
    white_cell_count?: IntFieldUpdateOperationsInput | number
    red_cell_count?: IntFieldUpdateOperationsInput | number
    hypertension?: StringFieldUpdateOperationsInput | string
    diabetes_mellitus?: StringFieldUpdateOperationsInput | string
    coronary_artery_disease?: StringFieldUpdateOperationsInput | string
    appetite?: StringFieldUpdateOperationsInput | string
    pedal_edema?: StringFieldUpdateOperationsInput | string
    anemia?: StringFieldUpdateOperationsInput | string
    classification?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutKidneyDiseasePredictionNestedInput
  }

  export type KidneyDiseasePredictionUncheckedUpdateInput = {
    prediction_id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    blood_pressure?: IntFieldUpdateOperationsInput | number
    specific_gravity?: FloatFieldUpdateOperationsInput | number
    albumin?: IntFieldUpdateOperationsInput | number
    sugar?: IntFieldUpdateOperationsInput | number
    red_blood_cells?: StringFieldUpdateOperationsInput | string
    pus_cell?: StringFieldUpdateOperationsInput | string
    pus_cell_clumps?: StringFieldUpdateOperationsInput | string
    bacteria?: StringFieldUpdateOperationsInput | string
    blood_glucose_random?: IntFieldUpdateOperationsInput | number
    blood_urea?: IntFieldUpdateOperationsInput | number
    serum_creatinine?: FloatFieldUpdateOperationsInput | number
    sodium?: FloatFieldUpdateOperationsInput | number
    potassium?: FloatFieldUpdateOperationsInput | number
    hemoglobin?: FloatFieldUpdateOperationsInput | number
    packed_cell_volume?: FloatFieldUpdateOperationsInput | number
    white_cell_count?: IntFieldUpdateOperationsInput | number
    red_cell_count?: IntFieldUpdateOperationsInput | number
    hypertension?: StringFieldUpdateOperationsInput | string
    diabetes_mellitus?: StringFieldUpdateOperationsInput | string
    coronary_artery_disease?: StringFieldUpdateOperationsInput | string
    appetite?: StringFieldUpdateOperationsInput | string
    pedal_edema?: StringFieldUpdateOperationsInput | string
    anemia?: StringFieldUpdateOperationsInput | string
    classification?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KidneyDiseasePredictionCreateManyInput = {
    prediction_id?: number
    user_id: string
    age: number
    blood_pressure: number
    specific_gravity: number
    albumin: number
    sugar: number
    red_blood_cells: string
    pus_cell: string
    pus_cell_clumps: string
    bacteria: string
    blood_glucose_random: number
    blood_urea: number
    serum_creatinine: number
    sodium: number
    potassium: number
    hemoglobin: number
    packed_cell_volume: number
    white_cell_count: number
    red_cell_count: number
    hypertension: string
    diabetes_mellitus: string
    coronary_artery_disease: string
    appetite: string
    pedal_edema: string
    anemia: string
    classification: string
    created_at?: Date | string
  }

  export type KidneyDiseasePredictionUpdateManyMutationInput = {
    age?: IntFieldUpdateOperationsInput | number
    blood_pressure?: IntFieldUpdateOperationsInput | number
    specific_gravity?: FloatFieldUpdateOperationsInput | number
    albumin?: IntFieldUpdateOperationsInput | number
    sugar?: IntFieldUpdateOperationsInput | number
    red_blood_cells?: StringFieldUpdateOperationsInput | string
    pus_cell?: StringFieldUpdateOperationsInput | string
    pus_cell_clumps?: StringFieldUpdateOperationsInput | string
    bacteria?: StringFieldUpdateOperationsInput | string
    blood_glucose_random?: IntFieldUpdateOperationsInput | number
    blood_urea?: IntFieldUpdateOperationsInput | number
    serum_creatinine?: FloatFieldUpdateOperationsInput | number
    sodium?: FloatFieldUpdateOperationsInput | number
    potassium?: FloatFieldUpdateOperationsInput | number
    hemoglobin?: FloatFieldUpdateOperationsInput | number
    packed_cell_volume?: FloatFieldUpdateOperationsInput | number
    white_cell_count?: IntFieldUpdateOperationsInput | number
    red_cell_count?: IntFieldUpdateOperationsInput | number
    hypertension?: StringFieldUpdateOperationsInput | string
    diabetes_mellitus?: StringFieldUpdateOperationsInput | string
    coronary_artery_disease?: StringFieldUpdateOperationsInput | string
    appetite?: StringFieldUpdateOperationsInput | string
    pedal_edema?: StringFieldUpdateOperationsInput | string
    anemia?: StringFieldUpdateOperationsInput | string
    classification?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KidneyDiseasePredictionUncheckedUpdateManyInput = {
    prediction_id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    blood_pressure?: IntFieldUpdateOperationsInput | number
    specific_gravity?: FloatFieldUpdateOperationsInput | number
    albumin?: IntFieldUpdateOperationsInput | number
    sugar?: IntFieldUpdateOperationsInput | number
    red_blood_cells?: StringFieldUpdateOperationsInput | string
    pus_cell?: StringFieldUpdateOperationsInput | string
    pus_cell_clumps?: StringFieldUpdateOperationsInput | string
    bacteria?: StringFieldUpdateOperationsInput | string
    blood_glucose_random?: IntFieldUpdateOperationsInput | number
    blood_urea?: IntFieldUpdateOperationsInput | number
    serum_creatinine?: FloatFieldUpdateOperationsInput | number
    sodium?: FloatFieldUpdateOperationsInput | number
    potassium?: FloatFieldUpdateOperationsInput | number
    hemoglobin?: FloatFieldUpdateOperationsInput | number
    packed_cell_volume?: FloatFieldUpdateOperationsInput | number
    white_cell_count?: IntFieldUpdateOperationsInput | number
    red_cell_count?: IntFieldUpdateOperationsInput | number
    hypertension?: StringFieldUpdateOperationsInput | string
    diabetes_mellitus?: StringFieldUpdateOperationsInput | string
    coronary_artery_disease?: StringFieldUpdateOperationsInput | string
    appetite?: StringFieldUpdateOperationsInput | string
    pedal_edema?: StringFieldUpdateOperationsInput | string
    anemia?: StringFieldUpdateOperationsInput | string
    classification?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkinsonsPredictionCreateInput = {
    ascii_subject_name: string
    recording_number: number
    mdvp_fo: number
    mdvp_fhi: number
    mdvp_flo: number
    mdvp_jitter_percentage: number
    mdvp_jitter_abs: number
    mdvp_rap: number
    mdvp_ppq: number
    jitter_ddp: number
    mdvp_shimmer: number
    mdvp_shimmer_db: number
    shimmer_apq3: number
    shimmer_apq5: number
    mdvp_apq: number
    shimmer_dda: number
    nhr: number
    hnr: number
    status: number
    rpde: number
    d2: number
    dfa: number
    spread1: number
    spread2: number
    ppe: number
    result: string
    created_at?: Date | string
    User: UserCreateNestedOneWithoutParkinsonsPredictionInput
  }

  export type ParkinsonsPredictionUncheckedCreateInput = {
    prediction_id?: number
    user_id: string
    ascii_subject_name: string
    recording_number: number
    mdvp_fo: number
    mdvp_fhi: number
    mdvp_flo: number
    mdvp_jitter_percentage: number
    mdvp_jitter_abs: number
    mdvp_rap: number
    mdvp_ppq: number
    jitter_ddp: number
    mdvp_shimmer: number
    mdvp_shimmer_db: number
    shimmer_apq3: number
    shimmer_apq5: number
    mdvp_apq: number
    shimmer_dda: number
    nhr: number
    hnr: number
    status: number
    rpde: number
    d2: number
    dfa: number
    spread1: number
    spread2: number
    ppe: number
    result: string
    created_at?: Date | string
  }

  export type ParkinsonsPredictionUpdateInput = {
    ascii_subject_name?: StringFieldUpdateOperationsInput | string
    recording_number?: IntFieldUpdateOperationsInput | number
    mdvp_fo?: FloatFieldUpdateOperationsInput | number
    mdvp_fhi?: FloatFieldUpdateOperationsInput | number
    mdvp_flo?: FloatFieldUpdateOperationsInput | number
    mdvp_jitter_percentage?: FloatFieldUpdateOperationsInput | number
    mdvp_jitter_abs?: FloatFieldUpdateOperationsInput | number
    mdvp_rap?: FloatFieldUpdateOperationsInput | number
    mdvp_ppq?: FloatFieldUpdateOperationsInput | number
    jitter_ddp?: FloatFieldUpdateOperationsInput | number
    mdvp_shimmer?: FloatFieldUpdateOperationsInput | number
    mdvp_shimmer_db?: FloatFieldUpdateOperationsInput | number
    shimmer_apq3?: FloatFieldUpdateOperationsInput | number
    shimmer_apq5?: FloatFieldUpdateOperationsInput | number
    mdvp_apq?: FloatFieldUpdateOperationsInput | number
    shimmer_dda?: FloatFieldUpdateOperationsInput | number
    nhr?: FloatFieldUpdateOperationsInput | number
    hnr?: FloatFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    rpde?: FloatFieldUpdateOperationsInput | number
    d2?: FloatFieldUpdateOperationsInput | number
    dfa?: FloatFieldUpdateOperationsInput | number
    spread1?: FloatFieldUpdateOperationsInput | number
    spread2?: FloatFieldUpdateOperationsInput | number
    ppe?: FloatFieldUpdateOperationsInput | number
    result?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutParkinsonsPredictionNestedInput
  }

  export type ParkinsonsPredictionUncheckedUpdateInput = {
    prediction_id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    ascii_subject_name?: StringFieldUpdateOperationsInput | string
    recording_number?: IntFieldUpdateOperationsInput | number
    mdvp_fo?: FloatFieldUpdateOperationsInput | number
    mdvp_fhi?: FloatFieldUpdateOperationsInput | number
    mdvp_flo?: FloatFieldUpdateOperationsInput | number
    mdvp_jitter_percentage?: FloatFieldUpdateOperationsInput | number
    mdvp_jitter_abs?: FloatFieldUpdateOperationsInput | number
    mdvp_rap?: FloatFieldUpdateOperationsInput | number
    mdvp_ppq?: FloatFieldUpdateOperationsInput | number
    jitter_ddp?: FloatFieldUpdateOperationsInput | number
    mdvp_shimmer?: FloatFieldUpdateOperationsInput | number
    mdvp_shimmer_db?: FloatFieldUpdateOperationsInput | number
    shimmer_apq3?: FloatFieldUpdateOperationsInput | number
    shimmer_apq5?: FloatFieldUpdateOperationsInput | number
    mdvp_apq?: FloatFieldUpdateOperationsInput | number
    shimmer_dda?: FloatFieldUpdateOperationsInput | number
    nhr?: FloatFieldUpdateOperationsInput | number
    hnr?: FloatFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    rpde?: FloatFieldUpdateOperationsInput | number
    d2?: FloatFieldUpdateOperationsInput | number
    dfa?: FloatFieldUpdateOperationsInput | number
    spread1?: FloatFieldUpdateOperationsInput | number
    spread2?: FloatFieldUpdateOperationsInput | number
    ppe?: FloatFieldUpdateOperationsInput | number
    result?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkinsonsPredictionCreateManyInput = {
    prediction_id?: number
    user_id: string
    ascii_subject_name: string
    recording_number: number
    mdvp_fo: number
    mdvp_fhi: number
    mdvp_flo: number
    mdvp_jitter_percentage: number
    mdvp_jitter_abs: number
    mdvp_rap: number
    mdvp_ppq: number
    jitter_ddp: number
    mdvp_shimmer: number
    mdvp_shimmer_db: number
    shimmer_apq3: number
    shimmer_apq5: number
    mdvp_apq: number
    shimmer_dda: number
    nhr: number
    hnr: number
    status: number
    rpde: number
    d2: number
    dfa: number
    spread1: number
    spread2: number
    ppe: number
    result: string
    created_at?: Date | string
  }

  export type ParkinsonsPredictionUpdateManyMutationInput = {
    ascii_subject_name?: StringFieldUpdateOperationsInput | string
    recording_number?: IntFieldUpdateOperationsInput | number
    mdvp_fo?: FloatFieldUpdateOperationsInput | number
    mdvp_fhi?: FloatFieldUpdateOperationsInput | number
    mdvp_flo?: FloatFieldUpdateOperationsInput | number
    mdvp_jitter_percentage?: FloatFieldUpdateOperationsInput | number
    mdvp_jitter_abs?: FloatFieldUpdateOperationsInput | number
    mdvp_rap?: FloatFieldUpdateOperationsInput | number
    mdvp_ppq?: FloatFieldUpdateOperationsInput | number
    jitter_ddp?: FloatFieldUpdateOperationsInput | number
    mdvp_shimmer?: FloatFieldUpdateOperationsInput | number
    mdvp_shimmer_db?: FloatFieldUpdateOperationsInput | number
    shimmer_apq3?: FloatFieldUpdateOperationsInput | number
    shimmer_apq5?: FloatFieldUpdateOperationsInput | number
    mdvp_apq?: FloatFieldUpdateOperationsInput | number
    shimmer_dda?: FloatFieldUpdateOperationsInput | number
    nhr?: FloatFieldUpdateOperationsInput | number
    hnr?: FloatFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    rpde?: FloatFieldUpdateOperationsInput | number
    d2?: FloatFieldUpdateOperationsInput | number
    dfa?: FloatFieldUpdateOperationsInput | number
    spread1?: FloatFieldUpdateOperationsInput | number
    spread2?: FloatFieldUpdateOperationsInput | number
    ppe?: FloatFieldUpdateOperationsInput | number
    result?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkinsonsPredictionUncheckedUpdateManyInput = {
    prediction_id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    ascii_subject_name?: StringFieldUpdateOperationsInput | string
    recording_number?: IntFieldUpdateOperationsInput | number
    mdvp_fo?: FloatFieldUpdateOperationsInput | number
    mdvp_fhi?: FloatFieldUpdateOperationsInput | number
    mdvp_flo?: FloatFieldUpdateOperationsInput | number
    mdvp_jitter_percentage?: FloatFieldUpdateOperationsInput | number
    mdvp_jitter_abs?: FloatFieldUpdateOperationsInput | number
    mdvp_rap?: FloatFieldUpdateOperationsInput | number
    mdvp_ppq?: FloatFieldUpdateOperationsInput | number
    jitter_ddp?: FloatFieldUpdateOperationsInput | number
    mdvp_shimmer?: FloatFieldUpdateOperationsInput | number
    mdvp_shimmer_db?: FloatFieldUpdateOperationsInput | number
    shimmer_apq3?: FloatFieldUpdateOperationsInput | number
    shimmer_apq5?: FloatFieldUpdateOperationsInput | number
    mdvp_apq?: FloatFieldUpdateOperationsInput | number
    shimmer_dda?: FloatFieldUpdateOperationsInput | number
    nhr?: FloatFieldUpdateOperationsInput | number
    hnr?: FloatFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    rpde?: FloatFieldUpdateOperationsInput | number
    d2?: FloatFieldUpdateOperationsInput | number
    dfa?: FloatFieldUpdateOperationsInput | number
    spread1?: FloatFieldUpdateOperationsInput | number
    spread2?: FloatFieldUpdateOperationsInput | number
    ppe?: FloatFieldUpdateOperationsInput | number
    result?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type BreastCancerPredictionListRelationFilter = {
    every?: BreastCancerPredictionWhereInput
    some?: BreastCancerPredictionWhereInput
    none?: BreastCancerPredictionWhereInput
  }

  export type DiabetesPredictionListRelationFilter = {
    every?: DiabetesPredictionWhereInput
    some?: DiabetesPredictionWhereInput
    none?: DiabetesPredictionWhereInput
  }

  export type HeartDiseasePredictionListRelationFilter = {
    every?: HeartDiseasePredictionWhereInput
    some?: HeartDiseasePredictionWhereInput
    none?: HeartDiseasePredictionWhereInput
  }

  export type KidneyDiseasePredictionListRelationFilter = {
    every?: KidneyDiseasePredictionWhereInput
    some?: KidneyDiseasePredictionWhereInput
    none?: KidneyDiseasePredictionWhereInput
  }

  export type ParkinsonsPredictionListRelationFilter = {
    every?: ParkinsonsPredictionWhereInput
    some?: ParkinsonsPredictionWhereInput
    none?: ParkinsonsPredictionWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BreastCancerPredictionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DiabetesPredictionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HeartDiseasePredictionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type KidneyDiseasePredictionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ParkinsonsPredictionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BreastCancerPredictionCountOrderByAggregateInput = {
    prediction_id?: SortOrder
    user_id?: SortOrder
    radius_mean?: SortOrder
    texture_mean?: SortOrder
    perimeter_mean?: SortOrder
    area_mean?: SortOrder
    smoothness_mean?: SortOrder
    result?: SortOrder
    created_at?: SortOrder
  }

  export type BreastCancerPredictionAvgOrderByAggregateInput = {
    prediction_id?: SortOrder
    radius_mean?: SortOrder
    texture_mean?: SortOrder
    perimeter_mean?: SortOrder
    area_mean?: SortOrder
    smoothness_mean?: SortOrder
  }

  export type BreastCancerPredictionMaxOrderByAggregateInput = {
    prediction_id?: SortOrder
    user_id?: SortOrder
    radius_mean?: SortOrder
    texture_mean?: SortOrder
    perimeter_mean?: SortOrder
    area_mean?: SortOrder
    smoothness_mean?: SortOrder
    result?: SortOrder
    created_at?: SortOrder
  }

  export type BreastCancerPredictionMinOrderByAggregateInput = {
    prediction_id?: SortOrder
    user_id?: SortOrder
    radius_mean?: SortOrder
    texture_mean?: SortOrder
    perimeter_mean?: SortOrder
    area_mean?: SortOrder
    smoothness_mean?: SortOrder
    result?: SortOrder
    created_at?: SortOrder
  }

  export type BreastCancerPredictionSumOrderByAggregateInput = {
    prediction_id?: SortOrder
    radius_mean?: SortOrder
    texture_mean?: SortOrder
    perimeter_mean?: SortOrder
    area_mean?: SortOrder
    smoothness_mean?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DiabetesPredictionCountOrderByAggregateInput = {
    prediction_id?: SortOrder
    user_id?: SortOrder
    pregnancies?: SortOrder
    glucose?: SortOrder
    blood_pressure?: SortOrder
    skin_thickness?: SortOrder
    insulin?: SortOrder
    bmi?: SortOrder
    diabetes_pedigree_function?: SortOrder
    age?: SortOrder
    result?: SortOrder
    created_at?: SortOrder
  }

  export type DiabetesPredictionAvgOrderByAggregateInput = {
    prediction_id?: SortOrder
    pregnancies?: SortOrder
    glucose?: SortOrder
    blood_pressure?: SortOrder
    skin_thickness?: SortOrder
    insulin?: SortOrder
    bmi?: SortOrder
    diabetes_pedigree_function?: SortOrder
    age?: SortOrder
  }

  export type DiabetesPredictionMaxOrderByAggregateInput = {
    prediction_id?: SortOrder
    user_id?: SortOrder
    pregnancies?: SortOrder
    glucose?: SortOrder
    blood_pressure?: SortOrder
    skin_thickness?: SortOrder
    insulin?: SortOrder
    bmi?: SortOrder
    diabetes_pedigree_function?: SortOrder
    age?: SortOrder
    result?: SortOrder
    created_at?: SortOrder
  }

  export type DiabetesPredictionMinOrderByAggregateInput = {
    prediction_id?: SortOrder
    user_id?: SortOrder
    pregnancies?: SortOrder
    glucose?: SortOrder
    blood_pressure?: SortOrder
    skin_thickness?: SortOrder
    insulin?: SortOrder
    bmi?: SortOrder
    diabetes_pedigree_function?: SortOrder
    age?: SortOrder
    result?: SortOrder
    created_at?: SortOrder
  }

  export type DiabetesPredictionSumOrderByAggregateInput = {
    prediction_id?: SortOrder
    pregnancies?: SortOrder
    glucose?: SortOrder
    blood_pressure?: SortOrder
    skin_thickness?: SortOrder
    insulin?: SortOrder
    bmi?: SortOrder
    diabetes_pedigree_function?: SortOrder
    age?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type HeartDiseasePredictionCountOrderByAggregateInput = {
    prediction_id?: SortOrder
    user_id?: SortOrder
    age?: SortOrder
    sex?: SortOrder
    chest_pain_type?: SortOrder
    resting_blood_pressure?: SortOrder
    serum_cholesterol?: SortOrder
    fasting_blood_sugar?: SortOrder
    resting_ecg?: SortOrder
    max_heart_rate?: SortOrder
    exercise_induced_angina?: SortOrder
    oldpeak?: SortOrder
    slope_of_peak_exercise_st_segment?: SortOrder
    num_major_vessels?: SortOrder
    thal?: SortOrder
    result?: SortOrder
    created_at?: SortOrder
  }

  export type HeartDiseasePredictionAvgOrderByAggregateInput = {
    prediction_id?: SortOrder
    age?: SortOrder
    resting_blood_pressure?: SortOrder
    serum_cholesterol?: SortOrder
    resting_ecg?: SortOrder
    max_heart_rate?: SortOrder
    oldpeak?: SortOrder
    num_major_vessels?: SortOrder
  }

  export type HeartDiseasePredictionMaxOrderByAggregateInput = {
    prediction_id?: SortOrder
    user_id?: SortOrder
    age?: SortOrder
    sex?: SortOrder
    chest_pain_type?: SortOrder
    resting_blood_pressure?: SortOrder
    serum_cholesterol?: SortOrder
    fasting_blood_sugar?: SortOrder
    resting_ecg?: SortOrder
    max_heart_rate?: SortOrder
    exercise_induced_angina?: SortOrder
    oldpeak?: SortOrder
    slope_of_peak_exercise_st_segment?: SortOrder
    num_major_vessels?: SortOrder
    thal?: SortOrder
    result?: SortOrder
    created_at?: SortOrder
  }

  export type HeartDiseasePredictionMinOrderByAggregateInput = {
    prediction_id?: SortOrder
    user_id?: SortOrder
    age?: SortOrder
    sex?: SortOrder
    chest_pain_type?: SortOrder
    resting_blood_pressure?: SortOrder
    serum_cholesterol?: SortOrder
    fasting_blood_sugar?: SortOrder
    resting_ecg?: SortOrder
    max_heart_rate?: SortOrder
    exercise_induced_angina?: SortOrder
    oldpeak?: SortOrder
    slope_of_peak_exercise_st_segment?: SortOrder
    num_major_vessels?: SortOrder
    thal?: SortOrder
    result?: SortOrder
    created_at?: SortOrder
  }

  export type HeartDiseasePredictionSumOrderByAggregateInput = {
    prediction_id?: SortOrder
    age?: SortOrder
    resting_blood_pressure?: SortOrder
    serum_cholesterol?: SortOrder
    resting_ecg?: SortOrder
    max_heart_rate?: SortOrder
    oldpeak?: SortOrder
    num_major_vessels?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type KidneyDiseasePredictionCountOrderByAggregateInput = {
    prediction_id?: SortOrder
    user_id?: SortOrder
    age?: SortOrder
    blood_pressure?: SortOrder
    specific_gravity?: SortOrder
    albumin?: SortOrder
    sugar?: SortOrder
    red_blood_cells?: SortOrder
    pus_cell?: SortOrder
    pus_cell_clumps?: SortOrder
    bacteria?: SortOrder
    blood_glucose_random?: SortOrder
    blood_urea?: SortOrder
    serum_creatinine?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
    hemoglobin?: SortOrder
    packed_cell_volume?: SortOrder
    white_cell_count?: SortOrder
    red_cell_count?: SortOrder
    hypertension?: SortOrder
    diabetes_mellitus?: SortOrder
    coronary_artery_disease?: SortOrder
    appetite?: SortOrder
    pedal_edema?: SortOrder
    anemia?: SortOrder
    classification?: SortOrder
    created_at?: SortOrder
  }

  export type KidneyDiseasePredictionAvgOrderByAggregateInput = {
    prediction_id?: SortOrder
    age?: SortOrder
    blood_pressure?: SortOrder
    specific_gravity?: SortOrder
    albumin?: SortOrder
    sugar?: SortOrder
    blood_glucose_random?: SortOrder
    blood_urea?: SortOrder
    serum_creatinine?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
    hemoglobin?: SortOrder
    packed_cell_volume?: SortOrder
    white_cell_count?: SortOrder
    red_cell_count?: SortOrder
  }

  export type KidneyDiseasePredictionMaxOrderByAggregateInput = {
    prediction_id?: SortOrder
    user_id?: SortOrder
    age?: SortOrder
    blood_pressure?: SortOrder
    specific_gravity?: SortOrder
    albumin?: SortOrder
    sugar?: SortOrder
    red_blood_cells?: SortOrder
    pus_cell?: SortOrder
    pus_cell_clumps?: SortOrder
    bacteria?: SortOrder
    blood_glucose_random?: SortOrder
    blood_urea?: SortOrder
    serum_creatinine?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
    hemoglobin?: SortOrder
    packed_cell_volume?: SortOrder
    white_cell_count?: SortOrder
    red_cell_count?: SortOrder
    hypertension?: SortOrder
    diabetes_mellitus?: SortOrder
    coronary_artery_disease?: SortOrder
    appetite?: SortOrder
    pedal_edema?: SortOrder
    anemia?: SortOrder
    classification?: SortOrder
    created_at?: SortOrder
  }

  export type KidneyDiseasePredictionMinOrderByAggregateInput = {
    prediction_id?: SortOrder
    user_id?: SortOrder
    age?: SortOrder
    blood_pressure?: SortOrder
    specific_gravity?: SortOrder
    albumin?: SortOrder
    sugar?: SortOrder
    red_blood_cells?: SortOrder
    pus_cell?: SortOrder
    pus_cell_clumps?: SortOrder
    bacteria?: SortOrder
    blood_glucose_random?: SortOrder
    blood_urea?: SortOrder
    serum_creatinine?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
    hemoglobin?: SortOrder
    packed_cell_volume?: SortOrder
    white_cell_count?: SortOrder
    red_cell_count?: SortOrder
    hypertension?: SortOrder
    diabetes_mellitus?: SortOrder
    coronary_artery_disease?: SortOrder
    appetite?: SortOrder
    pedal_edema?: SortOrder
    anemia?: SortOrder
    classification?: SortOrder
    created_at?: SortOrder
  }

  export type KidneyDiseasePredictionSumOrderByAggregateInput = {
    prediction_id?: SortOrder
    age?: SortOrder
    blood_pressure?: SortOrder
    specific_gravity?: SortOrder
    albumin?: SortOrder
    sugar?: SortOrder
    blood_glucose_random?: SortOrder
    blood_urea?: SortOrder
    serum_creatinine?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
    hemoglobin?: SortOrder
    packed_cell_volume?: SortOrder
    white_cell_count?: SortOrder
    red_cell_count?: SortOrder
  }

  export type ParkinsonsPredictionCountOrderByAggregateInput = {
    prediction_id?: SortOrder
    user_id?: SortOrder
    ascii_subject_name?: SortOrder
    recording_number?: SortOrder
    mdvp_fo?: SortOrder
    mdvp_fhi?: SortOrder
    mdvp_flo?: SortOrder
    mdvp_jitter_percentage?: SortOrder
    mdvp_jitter_abs?: SortOrder
    mdvp_rap?: SortOrder
    mdvp_ppq?: SortOrder
    jitter_ddp?: SortOrder
    mdvp_shimmer?: SortOrder
    mdvp_shimmer_db?: SortOrder
    shimmer_apq3?: SortOrder
    shimmer_apq5?: SortOrder
    mdvp_apq?: SortOrder
    shimmer_dda?: SortOrder
    nhr?: SortOrder
    hnr?: SortOrder
    status?: SortOrder
    rpde?: SortOrder
    d2?: SortOrder
    dfa?: SortOrder
    spread1?: SortOrder
    spread2?: SortOrder
    ppe?: SortOrder
    result?: SortOrder
    created_at?: SortOrder
  }

  export type ParkinsonsPredictionAvgOrderByAggregateInput = {
    prediction_id?: SortOrder
    recording_number?: SortOrder
    mdvp_fo?: SortOrder
    mdvp_fhi?: SortOrder
    mdvp_flo?: SortOrder
    mdvp_jitter_percentage?: SortOrder
    mdvp_jitter_abs?: SortOrder
    mdvp_rap?: SortOrder
    mdvp_ppq?: SortOrder
    jitter_ddp?: SortOrder
    mdvp_shimmer?: SortOrder
    mdvp_shimmer_db?: SortOrder
    shimmer_apq3?: SortOrder
    shimmer_apq5?: SortOrder
    mdvp_apq?: SortOrder
    shimmer_dda?: SortOrder
    nhr?: SortOrder
    hnr?: SortOrder
    status?: SortOrder
    rpde?: SortOrder
    d2?: SortOrder
    dfa?: SortOrder
    spread1?: SortOrder
    spread2?: SortOrder
    ppe?: SortOrder
  }

  export type ParkinsonsPredictionMaxOrderByAggregateInput = {
    prediction_id?: SortOrder
    user_id?: SortOrder
    ascii_subject_name?: SortOrder
    recording_number?: SortOrder
    mdvp_fo?: SortOrder
    mdvp_fhi?: SortOrder
    mdvp_flo?: SortOrder
    mdvp_jitter_percentage?: SortOrder
    mdvp_jitter_abs?: SortOrder
    mdvp_rap?: SortOrder
    mdvp_ppq?: SortOrder
    jitter_ddp?: SortOrder
    mdvp_shimmer?: SortOrder
    mdvp_shimmer_db?: SortOrder
    shimmer_apq3?: SortOrder
    shimmer_apq5?: SortOrder
    mdvp_apq?: SortOrder
    shimmer_dda?: SortOrder
    nhr?: SortOrder
    hnr?: SortOrder
    status?: SortOrder
    rpde?: SortOrder
    d2?: SortOrder
    dfa?: SortOrder
    spread1?: SortOrder
    spread2?: SortOrder
    ppe?: SortOrder
    result?: SortOrder
    created_at?: SortOrder
  }

  export type ParkinsonsPredictionMinOrderByAggregateInput = {
    prediction_id?: SortOrder
    user_id?: SortOrder
    ascii_subject_name?: SortOrder
    recording_number?: SortOrder
    mdvp_fo?: SortOrder
    mdvp_fhi?: SortOrder
    mdvp_flo?: SortOrder
    mdvp_jitter_percentage?: SortOrder
    mdvp_jitter_abs?: SortOrder
    mdvp_rap?: SortOrder
    mdvp_ppq?: SortOrder
    jitter_ddp?: SortOrder
    mdvp_shimmer?: SortOrder
    mdvp_shimmer_db?: SortOrder
    shimmer_apq3?: SortOrder
    shimmer_apq5?: SortOrder
    mdvp_apq?: SortOrder
    shimmer_dda?: SortOrder
    nhr?: SortOrder
    hnr?: SortOrder
    status?: SortOrder
    rpde?: SortOrder
    d2?: SortOrder
    dfa?: SortOrder
    spread1?: SortOrder
    spread2?: SortOrder
    ppe?: SortOrder
    result?: SortOrder
    created_at?: SortOrder
  }

  export type ParkinsonsPredictionSumOrderByAggregateInput = {
    prediction_id?: SortOrder
    recording_number?: SortOrder
    mdvp_fo?: SortOrder
    mdvp_fhi?: SortOrder
    mdvp_flo?: SortOrder
    mdvp_jitter_percentage?: SortOrder
    mdvp_jitter_abs?: SortOrder
    mdvp_rap?: SortOrder
    mdvp_ppq?: SortOrder
    jitter_ddp?: SortOrder
    mdvp_shimmer?: SortOrder
    mdvp_shimmer_db?: SortOrder
    shimmer_apq3?: SortOrder
    shimmer_apq5?: SortOrder
    mdvp_apq?: SortOrder
    shimmer_dda?: SortOrder
    nhr?: SortOrder
    hnr?: SortOrder
    status?: SortOrder
    rpde?: SortOrder
    d2?: SortOrder
    dfa?: SortOrder
    spread1?: SortOrder
    spread2?: SortOrder
    ppe?: SortOrder
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type BreastCancerPredictionCreateNestedManyWithoutUserInput = {
    create?: XOR<BreastCancerPredictionCreateWithoutUserInput, BreastCancerPredictionUncheckedCreateWithoutUserInput> | BreastCancerPredictionCreateWithoutUserInput[] | BreastCancerPredictionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BreastCancerPredictionCreateOrConnectWithoutUserInput | BreastCancerPredictionCreateOrConnectWithoutUserInput[]
    createMany?: BreastCancerPredictionCreateManyUserInputEnvelope
    connect?: BreastCancerPredictionWhereUniqueInput | BreastCancerPredictionWhereUniqueInput[]
  }

  export type DiabetesPredictionCreateNestedManyWithoutUserInput = {
    create?: XOR<DiabetesPredictionCreateWithoutUserInput, DiabetesPredictionUncheckedCreateWithoutUserInput> | DiabetesPredictionCreateWithoutUserInput[] | DiabetesPredictionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DiabetesPredictionCreateOrConnectWithoutUserInput | DiabetesPredictionCreateOrConnectWithoutUserInput[]
    createMany?: DiabetesPredictionCreateManyUserInputEnvelope
    connect?: DiabetesPredictionWhereUniqueInput | DiabetesPredictionWhereUniqueInput[]
  }

  export type HeartDiseasePredictionCreateNestedManyWithoutUserInput = {
    create?: XOR<HeartDiseasePredictionCreateWithoutUserInput, HeartDiseasePredictionUncheckedCreateWithoutUserInput> | HeartDiseasePredictionCreateWithoutUserInput[] | HeartDiseasePredictionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HeartDiseasePredictionCreateOrConnectWithoutUserInput | HeartDiseasePredictionCreateOrConnectWithoutUserInput[]
    createMany?: HeartDiseasePredictionCreateManyUserInputEnvelope
    connect?: HeartDiseasePredictionWhereUniqueInput | HeartDiseasePredictionWhereUniqueInput[]
  }

  export type KidneyDiseasePredictionCreateNestedManyWithoutUserInput = {
    create?: XOR<KidneyDiseasePredictionCreateWithoutUserInput, KidneyDiseasePredictionUncheckedCreateWithoutUserInput> | KidneyDiseasePredictionCreateWithoutUserInput[] | KidneyDiseasePredictionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: KidneyDiseasePredictionCreateOrConnectWithoutUserInput | KidneyDiseasePredictionCreateOrConnectWithoutUserInput[]
    createMany?: KidneyDiseasePredictionCreateManyUserInputEnvelope
    connect?: KidneyDiseasePredictionWhereUniqueInput | KidneyDiseasePredictionWhereUniqueInput[]
  }

  export type ParkinsonsPredictionCreateNestedManyWithoutUserInput = {
    create?: XOR<ParkinsonsPredictionCreateWithoutUserInput, ParkinsonsPredictionUncheckedCreateWithoutUserInput> | ParkinsonsPredictionCreateWithoutUserInput[] | ParkinsonsPredictionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ParkinsonsPredictionCreateOrConnectWithoutUserInput | ParkinsonsPredictionCreateOrConnectWithoutUserInput[]
    createMany?: ParkinsonsPredictionCreateManyUserInputEnvelope
    connect?: ParkinsonsPredictionWhereUniqueInput | ParkinsonsPredictionWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type BreastCancerPredictionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BreastCancerPredictionCreateWithoutUserInput, BreastCancerPredictionUncheckedCreateWithoutUserInput> | BreastCancerPredictionCreateWithoutUserInput[] | BreastCancerPredictionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BreastCancerPredictionCreateOrConnectWithoutUserInput | BreastCancerPredictionCreateOrConnectWithoutUserInput[]
    createMany?: BreastCancerPredictionCreateManyUserInputEnvelope
    connect?: BreastCancerPredictionWhereUniqueInput | BreastCancerPredictionWhereUniqueInput[]
  }

  export type DiabetesPredictionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DiabetesPredictionCreateWithoutUserInput, DiabetesPredictionUncheckedCreateWithoutUserInput> | DiabetesPredictionCreateWithoutUserInput[] | DiabetesPredictionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DiabetesPredictionCreateOrConnectWithoutUserInput | DiabetesPredictionCreateOrConnectWithoutUserInput[]
    createMany?: DiabetesPredictionCreateManyUserInputEnvelope
    connect?: DiabetesPredictionWhereUniqueInput | DiabetesPredictionWhereUniqueInput[]
  }

  export type HeartDiseasePredictionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<HeartDiseasePredictionCreateWithoutUserInput, HeartDiseasePredictionUncheckedCreateWithoutUserInput> | HeartDiseasePredictionCreateWithoutUserInput[] | HeartDiseasePredictionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HeartDiseasePredictionCreateOrConnectWithoutUserInput | HeartDiseasePredictionCreateOrConnectWithoutUserInput[]
    createMany?: HeartDiseasePredictionCreateManyUserInputEnvelope
    connect?: HeartDiseasePredictionWhereUniqueInput | HeartDiseasePredictionWhereUniqueInput[]
  }

  export type KidneyDiseasePredictionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<KidneyDiseasePredictionCreateWithoutUserInput, KidneyDiseasePredictionUncheckedCreateWithoutUserInput> | KidneyDiseasePredictionCreateWithoutUserInput[] | KidneyDiseasePredictionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: KidneyDiseasePredictionCreateOrConnectWithoutUserInput | KidneyDiseasePredictionCreateOrConnectWithoutUserInput[]
    createMany?: KidneyDiseasePredictionCreateManyUserInputEnvelope
    connect?: KidneyDiseasePredictionWhereUniqueInput | KidneyDiseasePredictionWhereUniqueInput[]
  }

  export type ParkinsonsPredictionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ParkinsonsPredictionCreateWithoutUserInput, ParkinsonsPredictionUncheckedCreateWithoutUserInput> | ParkinsonsPredictionCreateWithoutUserInput[] | ParkinsonsPredictionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ParkinsonsPredictionCreateOrConnectWithoutUserInput | ParkinsonsPredictionCreateOrConnectWithoutUserInput[]
    createMany?: ParkinsonsPredictionCreateManyUserInputEnvelope
    connect?: ParkinsonsPredictionWhereUniqueInput | ParkinsonsPredictionWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type BreastCancerPredictionUpdateManyWithoutUserNestedInput = {
    create?: XOR<BreastCancerPredictionCreateWithoutUserInput, BreastCancerPredictionUncheckedCreateWithoutUserInput> | BreastCancerPredictionCreateWithoutUserInput[] | BreastCancerPredictionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BreastCancerPredictionCreateOrConnectWithoutUserInput | BreastCancerPredictionCreateOrConnectWithoutUserInput[]
    upsert?: BreastCancerPredictionUpsertWithWhereUniqueWithoutUserInput | BreastCancerPredictionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BreastCancerPredictionCreateManyUserInputEnvelope
    set?: BreastCancerPredictionWhereUniqueInput | BreastCancerPredictionWhereUniqueInput[]
    disconnect?: BreastCancerPredictionWhereUniqueInput | BreastCancerPredictionWhereUniqueInput[]
    delete?: BreastCancerPredictionWhereUniqueInput | BreastCancerPredictionWhereUniqueInput[]
    connect?: BreastCancerPredictionWhereUniqueInput | BreastCancerPredictionWhereUniqueInput[]
    update?: BreastCancerPredictionUpdateWithWhereUniqueWithoutUserInput | BreastCancerPredictionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BreastCancerPredictionUpdateManyWithWhereWithoutUserInput | BreastCancerPredictionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BreastCancerPredictionScalarWhereInput | BreastCancerPredictionScalarWhereInput[]
  }

  export type DiabetesPredictionUpdateManyWithoutUserNestedInput = {
    create?: XOR<DiabetesPredictionCreateWithoutUserInput, DiabetesPredictionUncheckedCreateWithoutUserInput> | DiabetesPredictionCreateWithoutUserInput[] | DiabetesPredictionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DiabetesPredictionCreateOrConnectWithoutUserInput | DiabetesPredictionCreateOrConnectWithoutUserInput[]
    upsert?: DiabetesPredictionUpsertWithWhereUniqueWithoutUserInput | DiabetesPredictionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DiabetesPredictionCreateManyUserInputEnvelope
    set?: DiabetesPredictionWhereUniqueInput | DiabetesPredictionWhereUniqueInput[]
    disconnect?: DiabetesPredictionWhereUniqueInput | DiabetesPredictionWhereUniqueInput[]
    delete?: DiabetesPredictionWhereUniqueInput | DiabetesPredictionWhereUniqueInput[]
    connect?: DiabetesPredictionWhereUniqueInput | DiabetesPredictionWhereUniqueInput[]
    update?: DiabetesPredictionUpdateWithWhereUniqueWithoutUserInput | DiabetesPredictionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DiabetesPredictionUpdateManyWithWhereWithoutUserInput | DiabetesPredictionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DiabetesPredictionScalarWhereInput | DiabetesPredictionScalarWhereInput[]
  }

  export type HeartDiseasePredictionUpdateManyWithoutUserNestedInput = {
    create?: XOR<HeartDiseasePredictionCreateWithoutUserInput, HeartDiseasePredictionUncheckedCreateWithoutUserInput> | HeartDiseasePredictionCreateWithoutUserInput[] | HeartDiseasePredictionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HeartDiseasePredictionCreateOrConnectWithoutUserInput | HeartDiseasePredictionCreateOrConnectWithoutUserInput[]
    upsert?: HeartDiseasePredictionUpsertWithWhereUniqueWithoutUserInput | HeartDiseasePredictionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HeartDiseasePredictionCreateManyUserInputEnvelope
    set?: HeartDiseasePredictionWhereUniqueInput | HeartDiseasePredictionWhereUniqueInput[]
    disconnect?: HeartDiseasePredictionWhereUniqueInput | HeartDiseasePredictionWhereUniqueInput[]
    delete?: HeartDiseasePredictionWhereUniqueInput | HeartDiseasePredictionWhereUniqueInput[]
    connect?: HeartDiseasePredictionWhereUniqueInput | HeartDiseasePredictionWhereUniqueInput[]
    update?: HeartDiseasePredictionUpdateWithWhereUniqueWithoutUserInput | HeartDiseasePredictionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HeartDiseasePredictionUpdateManyWithWhereWithoutUserInput | HeartDiseasePredictionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HeartDiseasePredictionScalarWhereInput | HeartDiseasePredictionScalarWhereInput[]
  }

  export type KidneyDiseasePredictionUpdateManyWithoutUserNestedInput = {
    create?: XOR<KidneyDiseasePredictionCreateWithoutUserInput, KidneyDiseasePredictionUncheckedCreateWithoutUserInput> | KidneyDiseasePredictionCreateWithoutUserInput[] | KidneyDiseasePredictionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: KidneyDiseasePredictionCreateOrConnectWithoutUserInput | KidneyDiseasePredictionCreateOrConnectWithoutUserInput[]
    upsert?: KidneyDiseasePredictionUpsertWithWhereUniqueWithoutUserInput | KidneyDiseasePredictionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: KidneyDiseasePredictionCreateManyUserInputEnvelope
    set?: KidneyDiseasePredictionWhereUniqueInput | KidneyDiseasePredictionWhereUniqueInput[]
    disconnect?: KidneyDiseasePredictionWhereUniqueInput | KidneyDiseasePredictionWhereUniqueInput[]
    delete?: KidneyDiseasePredictionWhereUniqueInput | KidneyDiseasePredictionWhereUniqueInput[]
    connect?: KidneyDiseasePredictionWhereUniqueInput | KidneyDiseasePredictionWhereUniqueInput[]
    update?: KidneyDiseasePredictionUpdateWithWhereUniqueWithoutUserInput | KidneyDiseasePredictionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: KidneyDiseasePredictionUpdateManyWithWhereWithoutUserInput | KidneyDiseasePredictionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: KidneyDiseasePredictionScalarWhereInput | KidneyDiseasePredictionScalarWhereInput[]
  }

  export type ParkinsonsPredictionUpdateManyWithoutUserNestedInput = {
    create?: XOR<ParkinsonsPredictionCreateWithoutUserInput, ParkinsonsPredictionUncheckedCreateWithoutUserInput> | ParkinsonsPredictionCreateWithoutUserInput[] | ParkinsonsPredictionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ParkinsonsPredictionCreateOrConnectWithoutUserInput | ParkinsonsPredictionCreateOrConnectWithoutUserInput[]
    upsert?: ParkinsonsPredictionUpsertWithWhereUniqueWithoutUserInput | ParkinsonsPredictionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ParkinsonsPredictionCreateManyUserInputEnvelope
    set?: ParkinsonsPredictionWhereUniqueInput | ParkinsonsPredictionWhereUniqueInput[]
    disconnect?: ParkinsonsPredictionWhereUniqueInput | ParkinsonsPredictionWhereUniqueInput[]
    delete?: ParkinsonsPredictionWhereUniqueInput | ParkinsonsPredictionWhereUniqueInput[]
    connect?: ParkinsonsPredictionWhereUniqueInput | ParkinsonsPredictionWhereUniqueInput[]
    update?: ParkinsonsPredictionUpdateWithWhereUniqueWithoutUserInput | ParkinsonsPredictionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ParkinsonsPredictionUpdateManyWithWhereWithoutUserInput | ParkinsonsPredictionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ParkinsonsPredictionScalarWhereInput | ParkinsonsPredictionScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type BreastCancerPredictionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BreastCancerPredictionCreateWithoutUserInput, BreastCancerPredictionUncheckedCreateWithoutUserInput> | BreastCancerPredictionCreateWithoutUserInput[] | BreastCancerPredictionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BreastCancerPredictionCreateOrConnectWithoutUserInput | BreastCancerPredictionCreateOrConnectWithoutUserInput[]
    upsert?: BreastCancerPredictionUpsertWithWhereUniqueWithoutUserInput | BreastCancerPredictionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BreastCancerPredictionCreateManyUserInputEnvelope
    set?: BreastCancerPredictionWhereUniqueInput | BreastCancerPredictionWhereUniqueInput[]
    disconnect?: BreastCancerPredictionWhereUniqueInput | BreastCancerPredictionWhereUniqueInput[]
    delete?: BreastCancerPredictionWhereUniqueInput | BreastCancerPredictionWhereUniqueInput[]
    connect?: BreastCancerPredictionWhereUniqueInput | BreastCancerPredictionWhereUniqueInput[]
    update?: BreastCancerPredictionUpdateWithWhereUniqueWithoutUserInput | BreastCancerPredictionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BreastCancerPredictionUpdateManyWithWhereWithoutUserInput | BreastCancerPredictionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BreastCancerPredictionScalarWhereInput | BreastCancerPredictionScalarWhereInput[]
  }

  export type DiabetesPredictionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DiabetesPredictionCreateWithoutUserInput, DiabetesPredictionUncheckedCreateWithoutUserInput> | DiabetesPredictionCreateWithoutUserInput[] | DiabetesPredictionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DiabetesPredictionCreateOrConnectWithoutUserInput | DiabetesPredictionCreateOrConnectWithoutUserInput[]
    upsert?: DiabetesPredictionUpsertWithWhereUniqueWithoutUserInput | DiabetesPredictionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DiabetesPredictionCreateManyUserInputEnvelope
    set?: DiabetesPredictionWhereUniqueInput | DiabetesPredictionWhereUniqueInput[]
    disconnect?: DiabetesPredictionWhereUniqueInput | DiabetesPredictionWhereUniqueInput[]
    delete?: DiabetesPredictionWhereUniqueInput | DiabetesPredictionWhereUniqueInput[]
    connect?: DiabetesPredictionWhereUniqueInput | DiabetesPredictionWhereUniqueInput[]
    update?: DiabetesPredictionUpdateWithWhereUniqueWithoutUserInput | DiabetesPredictionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DiabetesPredictionUpdateManyWithWhereWithoutUserInput | DiabetesPredictionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DiabetesPredictionScalarWhereInput | DiabetesPredictionScalarWhereInput[]
  }

  export type HeartDiseasePredictionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<HeartDiseasePredictionCreateWithoutUserInput, HeartDiseasePredictionUncheckedCreateWithoutUserInput> | HeartDiseasePredictionCreateWithoutUserInput[] | HeartDiseasePredictionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HeartDiseasePredictionCreateOrConnectWithoutUserInput | HeartDiseasePredictionCreateOrConnectWithoutUserInput[]
    upsert?: HeartDiseasePredictionUpsertWithWhereUniqueWithoutUserInput | HeartDiseasePredictionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HeartDiseasePredictionCreateManyUserInputEnvelope
    set?: HeartDiseasePredictionWhereUniqueInput | HeartDiseasePredictionWhereUniqueInput[]
    disconnect?: HeartDiseasePredictionWhereUniqueInput | HeartDiseasePredictionWhereUniqueInput[]
    delete?: HeartDiseasePredictionWhereUniqueInput | HeartDiseasePredictionWhereUniqueInput[]
    connect?: HeartDiseasePredictionWhereUniqueInput | HeartDiseasePredictionWhereUniqueInput[]
    update?: HeartDiseasePredictionUpdateWithWhereUniqueWithoutUserInput | HeartDiseasePredictionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HeartDiseasePredictionUpdateManyWithWhereWithoutUserInput | HeartDiseasePredictionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HeartDiseasePredictionScalarWhereInput | HeartDiseasePredictionScalarWhereInput[]
  }

  export type KidneyDiseasePredictionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<KidneyDiseasePredictionCreateWithoutUserInput, KidneyDiseasePredictionUncheckedCreateWithoutUserInput> | KidneyDiseasePredictionCreateWithoutUserInput[] | KidneyDiseasePredictionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: KidneyDiseasePredictionCreateOrConnectWithoutUserInput | KidneyDiseasePredictionCreateOrConnectWithoutUserInput[]
    upsert?: KidneyDiseasePredictionUpsertWithWhereUniqueWithoutUserInput | KidneyDiseasePredictionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: KidneyDiseasePredictionCreateManyUserInputEnvelope
    set?: KidneyDiseasePredictionWhereUniqueInput | KidneyDiseasePredictionWhereUniqueInput[]
    disconnect?: KidneyDiseasePredictionWhereUniqueInput | KidneyDiseasePredictionWhereUniqueInput[]
    delete?: KidneyDiseasePredictionWhereUniqueInput | KidneyDiseasePredictionWhereUniqueInput[]
    connect?: KidneyDiseasePredictionWhereUniqueInput | KidneyDiseasePredictionWhereUniqueInput[]
    update?: KidneyDiseasePredictionUpdateWithWhereUniqueWithoutUserInput | KidneyDiseasePredictionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: KidneyDiseasePredictionUpdateManyWithWhereWithoutUserInput | KidneyDiseasePredictionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: KidneyDiseasePredictionScalarWhereInput | KidneyDiseasePredictionScalarWhereInput[]
  }

  export type ParkinsonsPredictionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ParkinsonsPredictionCreateWithoutUserInput, ParkinsonsPredictionUncheckedCreateWithoutUserInput> | ParkinsonsPredictionCreateWithoutUserInput[] | ParkinsonsPredictionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ParkinsonsPredictionCreateOrConnectWithoutUserInput | ParkinsonsPredictionCreateOrConnectWithoutUserInput[]
    upsert?: ParkinsonsPredictionUpsertWithWhereUniqueWithoutUserInput | ParkinsonsPredictionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ParkinsonsPredictionCreateManyUserInputEnvelope
    set?: ParkinsonsPredictionWhereUniqueInput | ParkinsonsPredictionWhereUniqueInput[]
    disconnect?: ParkinsonsPredictionWhereUniqueInput | ParkinsonsPredictionWhereUniqueInput[]
    delete?: ParkinsonsPredictionWhereUniqueInput | ParkinsonsPredictionWhereUniqueInput[]
    connect?: ParkinsonsPredictionWhereUniqueInput | ParkinsonsPredictionWhereUniqueInput[]
    update?: ParkinsonsPredictionUpdateWithWhereUniqueWithoutUserInput | ParkinsonsPredictionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ParkinsonsPredictionUpdateManyWithWhereWithoutUserInput | ParkinsonsPredictionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ParkinsonsPredictionScalarWhereInput | ParkinsonsPredictionScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutBreastCancerPredictionInput = {
    create?: XOR<UserCreateWithoutBreastCancerPredictionInput, UserUncheckedCreateWithoutBreastCancerPredictionInput>
    connectOrCreate?: UserCreateOrConnectWithoutBreastCancerPredictionInput
    connect?: UserWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutBreastCancerPredictionNestedInput = {
    create?: XOR<UserCreateWithoutBreastCancerPredictionInput, UserUncheckedCreateWithoutBreastCancerPredictionInput>
    connectOrCreate?: UserCreateOrConnectWithoutBreastCancerPredictionInput
    upsert?: UserUpsertWithoutBreastCancerPredictionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBreastCancerPredictionInput, UserUpdateWithoutBreastCancerPredictionInput>, UserUncheckedUpdateWithoutBreastCancerPredictionInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCreateNestedOneWithoutDiabetesPredictionInput = {
    create?: XOR<UserCreateWithoutDiabetesPredictionInput, UserUncheckedCreateWithoutDiabetesPredictionInput>
    connectOrCreate?: UserCreateOrConnectWithoutDiabetesPredictionInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutDiabetesPredictionNestedInput = {
    create?: XOR<UserCreateWithoutDiabetesPredictionInput, UserUncheckedCreateWithoutDiabetesPredictionInput>
    connectOrCreate?: UserCreateOrConnectWithoutDiabetesPredictionInput
    upsert?: UserUpsertWithoutDiabetesPredictionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDiabetesPredictionInput, UserUpdateWithoutDiabetesPredictionInput>, UserUncheckedUpdateWithoutDiabetesPredictionInput>
  }

  export type UserCreateNestedOneWithoutHeartDiseasePredictionInput = {
    create?: XOR<UserCreateWithoutHeartDiseasePredictionInput, UserUncheckedCreateWithoutHeartDiseasePredictionInput>
    connectOrCreate?: UserCreateOrConnectWithoutHeartDiseasePredictionInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutHeartDiseasePredictionNestedInput = {
    create?: XOR<UserCreateWithoutHeartDiseasePredictionInput, UserUncheckedCreateWithoutHeartDiseasePredictionInput>
    connectOrCreate?: UserCreateOrConnectWithoutHeartDiseasePredictionInput
    upsert?: UserUpsertWithoutHeartDiseasePredictionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutHeartDiseasePredictionInput, UserUpdateWithoutHeartDiseasePredictionInput>, UserUncheckedUpdateWithoutHeartDiseasePredictionInput>
  }

  export type UserCreateNestedOneWithoutKidneyDiseasePredictionInput = {
    create?: XOR<UserCreateWithoutKidneyDiseasePredictionInput, UserUncheckedCreateWithoutKidneyDiseasePredictionInput>
    connectOrCreate?: UserCreateOrConnectWithoutKidneyDiseasePredictionInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutKidneyDiseasePredictionNestedInput = {
    create?: XOR<UserCreateWithoutKidneyDiseasePredictionInput, UserUncheckedCreateWithoutKidneyDiseasePredictionInput>
    connectOrCreate?: UserCreateOrConnectWithoutKidneyDiseasePredictionInput
    upsert?: UserUpsertWithoutKidneyDiseasePredictionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutKidneyDiseasePredictionInput, UserUpdateWithoutKidneyDiseasePredictionInput>, UserUncheckedUpdateWithoutKidneyDiseasePredictionInput>
  }

  export type UserCreateNestedOneWithoutParkinsonsPredictionInput = {
    create?: XOR<UserCreateWithoutParkinsonsPredictionInput, UserUncheckedCreateWithoutParkinsonsPredictionInput>
    connectOrCreate?: UserCreateOrConnectWithoutParkinsonsPredictionInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutParkinsonsPredictionNestedInput = {
    create?: XOR<UserCreateWithoutParkinsonsPredictionInput, UserUncheckedCreateWithoutParkinsonsPredictionInput>
    connectOrCreate?: UserCreateOrConnectWithoutParkinsonsPredictionInput
    upsert?: UserUpsertWithoutParkinsonsPredictionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutParkinsonsPredictionInput, UserUpdateWithoutParkinsonsPredictionInput>, UserUncheckedUpdateWithoutParkinsonsPredictionInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BreastCancerPredictionCreateWithoutUserInput = {
    radius_mean: number
    texture_mean: number
    perimeter_mean: number
    area_mean: number
    smoothness_mean: number
    result: string
    created_at?: Date | string
  }

  export type BreastCancerPredictionUncheckedCreateWithoutUserInput = {
    prediction_id?: number
    radius_mean: number
    texture_mean: number
    perimeter_mean: number
    area_mean: number
    smoothness_mean: number
    result: string
    created_at?: Date | string
  }

  export type BreastCancerPredictionCreateOrConnectWithoutUserInput = {
    where: BreastCancerPredictionWhereUniqueInput
    create: XOR<BreastCancerPredictionCreateWithoutUserInput, BreastCancerPredictionUncheckedCreateWithoutUserInput>
  }

  export type BreastCancerPredictionCreateManyUserInputEnvelope = {
    data: BreastCancerPredictionCreateManyUserInput | BreastCancerPredictionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DiabetesPredictionCreateWithoutUserInput = {
    pregnancies: number
    glucose: number
    blood_pressure: number
    skin_thickness: number
    insulin: number
    bmi: number
    diabetes_pedigree_function: number
    age: number
    result: string
    created_at?: Date | string
  }

  export type DiabetesPredictionUncheckedCreateWithoutUserInput = {
    prediction_id?: number
    pregnancies: number
    glucose: number
    blood_pressure: number
    skin_thickness: number
    insulin: number
    bmi: number
    diabetes_pedigree_function: number
    age: number
    result: string
    created_at?: Date | string
  }

  export type DiabetesPredictionCreateOrConnectWithoutUserInput = {
    where: DiabetesPredictionWhereUniqueInput
    create: XOR<DiabetesPredictionCreateWithoutUserInput, DiabetesPredictionUncheckedCreateWithoutUserInput>
  }

  export type DiabetesPredictionCreateManyUserInputEnvelope = {
    data: DiabetesPredictionCreateManyUserInput | DiabetesPredictionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type HeartDiseasePredictionCreateWithoutUserInput = {
    age: number
    sex: string
    chest_pain_type: string
    resting_blood_pressure: number
    serum_cholesterol: number
    fasting_blood_sugar: boolean
    resting_ecg: number
    max_heart_rate: number
    exercise_induced_angina: boolean
    oldpeak: number
    slope_of_peak_exercise_st_segment: string
    num_major_vessels: number
    thal: string
    result: string
    created_at?: Date | string
  }

  export type HeartDiseasePredictionUncheckedCreateWithoutUserInput = {
    prediction_id?: number
    age: number
    sex: string
    chest_pain_type: string
    resting_blood_pressure: number
    serum_cholesterol: number
    fasting_blood_sugar: boolean
    resting_ecg: number
    max_heart_rate: number
    exercise_induced_angina: boolean
    oldpeak: number
    slope_of_peak_exercise_st_segment: string
    num_major_vessels: number
    thal: string
    result: string
    created_at?: Date | string
  }

  export type HeartDiseasePredictionCreateOrConnectWithoutUserInput = {
    where: HeartDiseasePredictionWhereUniqueInput
    create: XOR<HeartDiseasePredictionCreateWithoutUserInput, HeartDiseasePredictionUncheckedCreateWithoutUserInput>
  }

  export type HeartDiseasePredictionCreateManyUserInputEnvelope = {
    data: HeartDiseasePredictionCreateManyUserInput | HeartDiseasePredictionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type KidneyDiseasePredictionCreateWithoutUserInput = {
    age: number
    blood_pressure: number
    specific_gravity: number
    albumin: number
    sugar: number
    red_blood_cells: string
    pus_cell: string
    pus_cell_clumps: string
    bacteria: string
    blood_glucose_random: number
    blood_urea: number
    serum_creatinine: number
    sodium: number
    potassium: number
    hemoglobin: number
    packed_cell_volume: number
    white_cell_count: number
    red_cell_count: number
    hypertension: string
    diabetes_mellitus: string
    coronary_artery_disease: string
    appetite: string
    pedal_edema: string
    anemia: string
    classification: string
    created_at?: Date | string
  }

  export type KidneyDiseasePredictionUncheckedCreateWithoutUserInput = {
    prediction_id?: number
    age: number
    blood_pressure: number
    specific_gravity: number
    albumin: number
    sugar: number
    red_blood_cells: string
    pus_cell: string
    pus_cell_clumps: string
    bacteria: string
    blood_glucose_random: number
    blood_urea: number
    serum_creatinine: number
    sodium: number
    potassium: number
    hemoglobin: number
    packed_cell_volume: number
    white_cell_count: number
    red_cell_count: number
    hypertension: string
    diabetes_mellitus: string
    coronary_artery_disease: string
    appetite: string
    pedal_edema: string
    anemia: string
    classification: string
    created_at?: Date | string
  }

  export type KidneyDiseasePredictionCreateOrConnectWithoutUserInput = {
    where: KidneyDiseasePredictionWhereUniqueInput
    create: XOR<KidneyDiseasePredictionCreateWithoutUserInput, KidneyDiseasePredictionUncheckedCreateWithoutUserInput>
  }

  export type KidneyDiseasePredictionCreateManyUserInputEnvelope = {
    data: KidneyDiseasePredictionCreateManyUserInput | KidneyDiseasePredictionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ParkinsonsPredictionCreateWithoutUserInput = {
    ascii_subject_name: string
    recording_number: number
    mdvp_fo: number
    mdvp_fhi: number
    mdvp_flo: number
    mdvp_jitter_percentage: number
    mdvp_jitter_abs: number
    mdvp_rap: number
    mdvp_ppq: number
    jitter_ddp: number
    mdvp_shimmer: number
    mdvp_shimmer_db: number
    shimmer_apq3: number
    shimmer_apq5: number
    mdvp_apq: number
    shimmer_dda: number
    nhr: number
    hnr: number
    status: number
    rpde: number
    d2: number
    dfa: number
    spread1: number
    spread2: number
    ppe: number
    result: string
    created_at?: Date | string
  }

  export type ParkinsonsPredictionUncheckedCreateWithoutUserInput = {
    prediction_id?: number
    ascii_subject_name: string
    recording_number: number
    mdvp_fo: number
    mdvp_fhi: number
    mdvp_flo: number
    mdvp_jitter_percentage: number
    mdvp_jitter_abs: number
    mdvp_rap: number
    mdvp_ppq: number
    jitter_ddp: number
    mdvp_shimmer: number
    mdvp_shimmer_db: number
    shimmer_apq3: number
    shimmer_apq5: number
    mdvp_apq: number
    shimmer_dda: number
    nhr: number
    hnr: number
    status: number
    rpde: number
    d2: number
    dfa: number
    spread1: number
    spread2: number
    ppe: number
    result: string
    created_at?: Date | string
  }

  export type ParkinsonsPredictionCreateOrConnectWithoutUserInput = {
    where: ParkinsonsPredictionWhereUniqueInput
    create: XOR<ParkinsonsPredictionCreateWithoutUserInput, ParkinsonsPredictionUncheckedCreateWithoutUserInput>
  }

  export type ParkinsonsPredictionCreateManyUserInputEnvelope = {
    data: ParkinsonsPredictionCreateManyUserInput | ParkinsonsPredictionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
  }

  export type BreastCancerPredictionUpsertWithWhereUniqueWithoutUserInput = {
    where: BreastCancerPredictionWhereUniqueInput
    update: XOR<BreastCancerPredictionUpdateWithoutUserInput, BreastCancerPredictionUncheckedUpdateWithoutUserInput>
    create: XOR<BreastCancerPredictionCreateWithoutUserInput, BreastCancerPredictionUncheckedCreateWithoutUserInput>
  }

  export type BreastCancerPredictionUpdateWithWhereUniqueWithoutUserInput = {
    where: BreastCancerPredictionWhereUniqueInput
    data: XOR<BreastCancerPredictionUpdateWithoutUserInput, BreastCancerPredictionUncheckedUpdateWithoutUserInput>
  }

  export type BreastCancerPredictionUpdateManyWithWhereWithoutUserInput = {
    where: BreastCancerPredictionScalarWhereInput
    data: XOR<BreastCancerPredictionUpdateManyMutationInput, BreastCancerPredictionUncheckedUpdateManyWithoutUserInput>
  }

  export type BreastCancerPredictionScalarWhereInput = {
    AND?: BreastCancerPredictionScalarWhereInput | BreastCancerPredictionScalarWhereInput[]
    OR?: BreastCancerPredictionScalarWhereInput[]
    NOT?: BreastCancerPredictionScalarWhereInput | BreastCancerPredictionScalarWhereInput[]
    prediction_id?: IntFilter<"BreastCancerPrediction"> | number
    user_id?: StringFilter<"BreastCancerPrediction"> | string
    radius_mean?: FloatFilter<"BreastCancerPrediction"> | number
    texture_mean?: FloatFilter<"BreastCancerPrediction"> | number
    perimeter_mean?: FloatFilter<"BreastCancerPrediction"> | number
    area_mean?: FloatFilter<"BreastCancerPrediction"> | number
    smoothness_mean?: FloatFilter<"BreastCancerPrediction"> | number
    result?: StringFilter<"BreastCancerPrediction"> | string
    created_at?: DateTimeFilter<"BreastCancerPrediction"> | Date | string
  }

  export type DiabetesPredictionUpsertWithWhereUniqueWithoutUserInput = {
    where: DiabetesPredictionWhereUniqueInput
    update: XOR<DiabetesPredictionUpdateWithoutUserInput, DiabetesPredictionUncheckedUpdateWithoutUserInput>
    create: XOR<DiabetesPredictionCreateWithoutUserInput, DiabetesPredictionUncheckedCreateWithoutUserInput>
  }

  export type DiabetesPredictionUpdateWithWhereUniqueWithoutUserInput = {
    where: DiabetesPredictionWhereUniqueInput
    data: XOR<DiabetesPredictionUpdateWithoutUserInput, DiabetesPredictionUncheckedUpdateWithoutUserInput>
  }

  export type DiabetesPredictionUpdateManyWithWhereWithoutUserInput = {
    where: DiabetesPredictionScalarWhereInput
    data: XOR<DiabetesPredictionUpdateManyMutationInput, DiabetesPredictionUncheckedUpdateManyWithoutUserInput>
  }

  export type DiabetesPredictionScalarWhereInput = {
    AND?: DiabetesPredictionScalarWhereInput | DiabetesPredictionScalarWhereInput[]
    OR?: DiabetesPredictionScalarWhereInput[]
    NOT?: DiabetesPredictionScalarWhereInput | DiabetesPredictionScalarWhereInput[]
    prediction_id?: IntFilter<"DiabetesPrediction"> | number
    user_id?: StringFilter<"DiabetesPrediction"> | string
    pregnancies?: IntFilter<"DiabetesPrediction"> | number
    glucose?: IntFilter<"DiabetesPrediction"> | number
    blood_pressure?: IntFilter<"DiabetesPrediction"> | number
    skin_thickness?: IntFilter<"DiabetesPrediction"> | number
    insulin?: IntFilter<"DiabetesPrediction"> | number
    bmi?: FloatFilter<"DiabetesPrediction"> | number
    diabetes_pedigree_function?: FloatFilter<"DiabetesPrediction"> | number
    age?: IntFilter<"DiabetesPrediction"> | number
    result?: StringFilter<"DiabetesPrediction"> | string
    created_at?: DateTimeFilter<"DiabetesPrediction"> | Date | string
  }

  export type HeartDiseasePredictionUpsertWithWhereUniqueWithoutUserInput = {
    where: HeartDiseasePredictionWhereUniqueInput
    update: XOR<HeartDiseasePredictionUpdateWithoutUserInput, HeartDiseasePredictionUncheckedUpdateWithoutUserInput>
    create: XOR<HeartDiseasePredictionCreateWithoutUserInput, HeartDiseasePredictionUncheckedCreateWithoutUserInput>
  }

  export type HeartDiseasePredictionUpdateWithWhereUniqueWithoutUserInput = {
    where: HeartDiseasePredictionWhereUniqueInput
    data: XOR<HeartDiseasePredictionUpdateWithoutUserInput, HeartDiseasePredictionUncheckedUpdateWithoutUserInput>
  }

  export type HeartDiseasePredictionUpdateManyWithWhereWithoutUserInput = {
    where: HeartDiseasePredictionScalarWhereInput
    data: XOR<HeartDiseasePredictionUpdateManyMutationInput, HeartDiseasePredictionUncheckedUpdateManyWithoutUserInput>
  }

  export type HeartDiseasePredictionScalarWhereInput = {
    AND?: HeartDiseasePredictionScalarWhereInput | HeartDiseasePredictionScalarWhereInput[]
    OR?: HeartDiseasePredictionScalarWhereInput[]
    NOT?: HeartDiseasePredictionScalarWhereInput | HeartDiseasePredictionScalarWhereInput[]
    prediction_id?: IntFilter<"HeartDiseasePrediction"> | number
    user_id?: StringFilter<"HeartDiseasePrediction"> | string
    age?: IntFilter<"HeartDiseasePrediction"> | number
    sex?: StringFilter<"HeartDiseasePrediction"> | string
    chest_pain_type?: StringFilter<"HeartDiseasePrediction"> | string
    resting_blood_pressure?: IntFilter<"HeartDiseasePrediction"> | number
    serum_cholesterol?: IntFilter<"HeartDiseasePrediction"> | number
    fasting_blood_sugar?: BoolFilter<"HeartDiseasePrediction"> | boolean
    resting_ecg?: IntFilter<"HeartDiseasePrediction"> | number
    max_heart_rate?: IntFilter<"HeartDiseasePrediction"> | number
    exercise_induced_angina?: BoolFilter<"HeartDiseasePrediction"> | boolean
    oldpeak?: FloatFilter<"HeartDiseasePrediction"> | number
    slope_of_peak_exercise_st_segment?: StringFilter<"HeartDiseasePrediction"> | string
    num_major_vessels?: IntFilter<"HeartDiseasePrediction"> | number
    thal?: StringFilter<"HeartDiseasePrediction"> | string
    result?: StringFilter<"HeartDiseasePrediction"> | string
    created_at?: DateTimeFilter<"HeartDiseasePrediction"> | Date | string
  }

  export type KidneyDiseasePredictionUpsertWithWhereUniqueWithoutUserInput = {
    where: KidneyDiseasePredictionWhereUniqueInput
    update: XOR<KidneyDiseasePredictionUpdateWithoutUserInput, KidneyDiseasePredictionUncheckedUpdateWithoutUserInput>
    create: XOR<KidneyDiseasePredictionCreateWithoutUserInput, KidneyDiseasePredictionUncheckedCreateWithoutUserInput>
  }

  export type KidneyDiseasePredictionUpdateWithWhereUniqueWithoutUserInput = {
    where: KidneyDiseasePredictionWhereUniqueInput
    data: XOR<KidneyDiseasePredictionUpdateWithoutUserInput, KidneyDiseasePredictionUncheckedUpdateWithoutUserInput>
  }

  export type KidneyDiseasePredictionUpdateManyWithWhereWithoutUserInput = {
    where: KidneyDiseasePredictionScalarWhereInput
    data: XOR<KidneyDiseasePredictionUpdateManyMutationInput, KidneyDiseasePredictionUncheckedUpdateManyWithoutUserInput>
  }

  export type KidneyDiseasePredictionScalarWhereInput = {
    AND?: KidneyDiseasePredictionScalarWhereInput | KidneyDiseasePredictionScalarWhereInput[]
    OR?: KidneyDiseasePredictionScalarWhereInput[]
    NOT?: KidneyDiseasePredictionScalarWhereInput | KidneyDiseasePredictionScalarWhereInput[]
    prediction_id?: IntFilter<"KidneyDiseasePrediction"> | number
    user_id?: StringFilter<"KidneyDiseasePrediction"> | string
    age?: IntFilter<"KidneyDiseasePrediction"> | number
    blood_pressure?: IntFilter<"KidneyDiseasePrediction"> | number
    specific_gravity?: FloatFilter<"KidneyDiseasePrediction"> | number
    albumin?: IntFilter<"KidneyDiseasePrediction"> | number
    sugar?: IntFilter<"KidneyDiseasePrediction"> | number
    red_blood_cells?: StringFilter<"KidneyDiseasePrediction"> | string
    pus_cell?: StringFilter<"KidneyDiseasePrediction"> | string
    pus_cell_clumps?: StringFilter<"KidneyDiseasePrediction"> | string
    bacteria?: StringFilter<"KidneyDiseasePrediction"> | string
    blood_glucose_random?: IntFilter<"KidneyDiseasePrediction"> | number
    blood_urea?: IntFilter<"KidneyDiseasePrediction"> | number
    serum_creatinine?: FloatFilter<"KidneyDiseasePrediction"> | number
    sodium?: FloatFilter<"KidneyDiseasePrediction"> | number
    potassium?: FloatFilter<"KidneyDiseasePrediction"> | number
    hemoglobin?: FloatFilter<"KidneyDiseasePrediction"> | number
    packed_cell_volume?: FloatFilter<"KidneyDiseasePrediction"> | number
    white_cell_count?: IntFilter<"KidneyDiseasePrediction"> | number
    red_cell_count?: IntFilter<"KidneyDiseasePrediction"> | number
    hypertension?: StringFilter<"KidneyDiseasePrediction"> | string
    diabetes_mellitus?: StringFilter<"KidneyDiseasePrediction"> | string
    coronary_artery_disease?: StringFilter<"KidneyDiseasePrediction"> | string
    appetite?: StringFilter<"KidneyDiseasePrediction"> | string
    pedal_edema?: StringFilter<"KidneyDiseasePrediction"> | string
    anemia?: StringFilter<"KidneyDiseasePrediction"> | string
    classification?: StringFilter<"KidneyDiseasePrediction"> | string
    created_at?: DateTimeFilter<"KidneyDiseasePrediction"> | Date | string
  }

  export type ParkinsonsPredictionUpsertWithWhereUniqueWithoutUserInput = {
    where: ParkinsonsPredictionWhereUniqueInput
    update: XOR<ParkinsonsPredictionUpdateWithoutUserInput, ParkinsonsPredictionUncheckedUpdateWithoutUserInput>
    create: XOR<ParkinsonsPredictionCreateWithoutUserInput, ParkinsonsPredictionUncheckedCreateWithoutUserInput>
  }

  export type ParkinsonsPredictionUpdateWithWhereUniqueWithoutUserInput = {
    where: ParkinsonsPredictionWhereUniqueInput
    data: XOR<ParkinsonsPredictionUpdateWithoutUserInput, ParkinsonsPredictionUncheckedUpdateWithoutUserInput>
  }

  export type ParkinsonsPredictionUpdateManyWithWhereWithoutUserInput = {
    where: ParkinsonsPredictionScalarWhereInput
    data: XOR<ParkinsonsPredictionUpdateManyMutationInput, ParkinsonsPredictionUncheckedUpdateManyWithoutUserInput>
  }

  export type ParkinsonsPredictionScalarWhereInput = {
    AND?: ParkinsonsPredictionScalarWhereInput | ParkinsonsPredictionScalarWhereInput[]
    OR?: ParkinsonsPredictionScalarWhereInput[]
    NOT?: ParkinsonsPredictionScalarWhereInput | ParkinsonsPredictionScalarWhereInput[]
    prediction_id?: IntFilter<"ParkinsonsPrediction"> | number
    user_id?: StringFilter<"ParkinsonsPrediction"> | string
    ascii_subject_name?: StringFilter<"ParkinsonsPrediction"> | string
    recording_number?: IntFilter<"ParkinsonsPrediction"> | number
    mdvp_fo?: FloatFilter<"ParkinsonsPrediction"> | number
    mdvp_fhi?: FloatFilter<"ParkinsonsPrediction"> | number
    mdvp_flo?: FloatFilter<"ParkinsonsPrediction"> | number
    mdvp_jitter_percentage?: FloatFilter<"ParkinsonsPrediction"> | number
    mdvp_jitter_abs?: FloatFilter<"ParkinsonsPrediction"> | number
    mdvp_rap?: FloatFilter<"ParkinsonsPrediction"> | number
    mdvp_ppq?: FloatFilter<"ParkinsonsPrediction"> | number
    jitter_ddp?: FloatFilter<"ParkinsonsPrediction"> | number
    mdvp_shimmer?: FloatFilter<"ParkinsonsPrediction"> | number
    mdvp_shimmer_db?: FloatFilter<"ParkinsonsPrediction"> | number
    shimmer_apq3?: FloatFilter<"ParkinsonsPrediction"> | number
    shimmer_apq5?: FloatFilter<"ParkinsonsPrediction"> | number
    mdvp_apq?: FloatFilter<"ParkinsonsPrediction"> | number
    shimmer_dda?: FloatFilter<"ParkinsonsPrediction"> | number
    nhr?: FloatFilter<"ParkinsonsPrediction"> | number
    hnr?: FloatFilter<"ParkinsonsPrediction"> | number
    status?: IntFilter<"ParkinsonsPrediction"> | number
    rpde?: FloatFilter<"ParkinsonsPrediction"> | number
    d2?: FloatFilter<"ParkinsonsPrediction"> | number
    dfa?: FloatFilter<"ParkinsonsPrediction"> | number
    spread1?: FloatFilter<"ParkinsonsPrediction"> | number
    spread2?: FloatFilter<"ParkinsonsPrediction"> | number
    ppe?: FloatFilter<"ParkinsonsPrediction"> | number
    result?: StringFilter<"ParkinsonsPrediction"> | string
    created_at?: DateTimeFilter<"ParkinsonsPrediction"> | Date | string
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    BreastCancerPrediction?: BreastCancerPredictionCreateNestedManyWithoutUserInput
    DiabetesPrediction?: DiabetesPredictionCreateNestedManyWithoutUserInput
    HeartDiseasePrediction?: HeartDiseasePredictionCreateNestedManyWithoutUserInput
    KidneyDiseasePrediction?: KidneyDiseasePredictionCreateNestedManyWithoutUserInput
    ParkinsonsPrediction?: ParkinsonsPredictionCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    BreastCancerPrediction?: BreastCancerPredictionUncheckedCreateNestedManyWithoutUserInput
    DiabetesPrediction?: DiabetesPredictionUncheckedCreateNestedManyWithoutUserInput
    HeartDiseasePrediction?: HeartDiseasePredictionUncheckedCreateNestedManyWithoutUserInput
    KidneyDiseasePrediction?: KidneyDiseasePredictionUncheckedCreateNestedManyWithoutUserInput
    ParkinsonsPrediction?: ParkinsonsPredictionUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    BreastCancerPrediction?: BreastCancerPredictionUpdateManyWithoutUserNestedInput
    DiabetesPrediction?: DiabetesPredictionUpdateManyWithoutUserNestedInput
    HeartDiseasePrediction?: HeartDiseasePredictionUpdateManyWithoutUserNestedInput
    KidneyDiseasePrediction?: KidneyDiseasePredictionUpdateManyWithoutUserNestedInput
    ParkinsonsPrediction?: ParkinsonsPredictionUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    BreastCancerPrediction?: BreastCancerPredictionUncheckedUpdateManyWithoutUserNestedInput
    DiabetesPrediction?: DiabetesPredictionUncheckedUpdateManyWithoutUserNestedInput
    HeartDiseasePrediction?: HeartDiseasePredictionUncheckedUpdateManyWithoutUserNestedInput
    KidneyDiseasePrediction?: KidneyDiseasePredictionUncheckedUpdateManyWithoutUserNestedInput
    ParkinsonsPrediction?: ParkinsonsPredictionUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    BreastCancerPrediction?: BreastCancerPredictionCreateNestedManyWithoutUserInput
    DiabetesPrediction?: DiabetesPredictionCreateNestedManyWithoutUserInput
    HeartDiseasePrediction?: HeartDiseasePredictionCreateNestedManyWithoutUserInput
    KidneyDiseasePrediction?: KidneyDiseasePredictionCreateNestedManyWithoutUserInput
    ParkinsonsPrediction?: ParkinsonsPredictionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    BreastCancerPrediction?: BreastCancerPredictionUncheckedCreateNestedManyWithoutUserInput
    DiabetesPrediction?: DiabetesPredictionUncheckedCreateNestedManyWithoutUserInput
    HeartDiseasePrediction?: HeartDiseasePredictionUncheckedCreateNestedManyWithoutUserInput
    KidneyDiseasePrediction?: KidneyDiseasePredictionUncheckedCreateNestedManyWithoutUserInput
    ParkinsonsPrediction?: ParkinsonsPredictionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    BreastCancerPrediction?: BreastCancerPredictionUpdateManyWithoutUserNestedInput
    DiabetesPrediction?: DiabetesPredictionUpdateManyWithoutUserNestedInput
    HeartDiseasePrediction?: HeartDiseasePredictionUpdateManyWithoutUserNestedInput
    KidneyDiseasePrediction?: KidneyDiseasePredictionUpdateManyWithoutUserNestedInput
    ParkinsonsPrediction?: ParkinsonsPredictionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    BreastCancerPrediction?: BreastCancerPredictionUncheckedUpdateManyWithoutUserNestedInput
    DiabetesPrediction?: DiabetesPredictionUncheckedUpdateManyWithoutUserNestedInput
    HeartDiseasePrediction?: HeartDiseasePredictionUncheckedUpdateManyWithoutUserNestedInput
    KidneyDiseasePrediction?: KidneyDiseasePredictionUncheckedUpdateManyWithoutUserNestedInput
    ParkinsonsPrediction?: ParkinsonsPredictionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutBreastCancerPredictionInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    DiabetesPrediction?: DiabetesPredictionCreateNestedManyWithoutUserInput
    HeartDiseasePrediction?: HeartDiseasePredictionCreateNestedManyWithoutUserInput
    KidneyDiseasePrediction?: KidneyDiseasePredictionCreateNestedManyWithoutUserInput
    ParkinsonsPrediction?: ParkinsonsPredictionCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBreastCancerPredictionInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    DiabetesPrediction?: DiabetesPredictionUncheckedCreateNestedManyWithoutUserInput
    HeartDiseasePrediction?: HeartDiseasePredictionUncheckedCreateNestedManyWithoutUserInput
    KidneyDiseasePrediction?: KidneyDiseasePredictionUncheckedCreateNestedManyWithoutUserInput
    ParkinsonsPrediction?: ParkinsonsPredictionUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBreastCancerPredictionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBreastCancerPredictionInput, UserUncheckedCreateWithoutBreastCancerPredictionInput>
  }

  export type UserUpsertWithoutBreastCancerPredictionInput = {
    update: XOR<UserUpdateWithoutBreastCancerPredictionInput, UserUncheckedUpdateWithoutBreastCancerPredictionInput>
    create: XOR<UserCreateWithoutBreastCancerPredictionInput, UserUncheckedCreateWithoutBreastCancerPredictionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBreastCancerPredictionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBreastCancerPredictionInput, UserUncheckedUpdateWithoutBreastCancerPredictionInput>
  }

  export type UserUpdateWithoutBreastCancerPredictionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    DiabetesPrediction?: DiabetesPredictionUpdateManyWithoutUserNestedInput
    HeartDiseasePrediction?: HeartDiseasePredictionUpdateManyWithoutUserNestedInput
    KidneyDiseasePrediction?: KidneyDiseasePredictionUpdateManyWithoutUserNestedInput
    ParkinsonsPrediction?: ParkinsonsPredictionUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBreastCancerPredictionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    DiabetesPrediction?: DiabetesPredictionUncheckedUpdateManyWithoutUserNestedInput
    HeartDiseasePrediction?: HeartDiseasePredictionUncheckedUpdateManyWithoutUserNestedInput
    KidneyDiseasePrediction?: KidneyDiseasePredictionUncheckedUpdateManyWithoutUserNestedInput
    ParkinsonsPrediction?: ParkinsonsPredictionUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutDiabetesPredictionInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    BreastCancerPrediction?: BreastCancerPredictionCreateNestedManyWithoutUserInput
    HeartDiseasePrediction?: HeartDiseasePredictionCreateNestedManyWithoutUserInput
    KidneyDiseasePrediction?: KidneyDiseasePredictionCreateNestedManyWithoutUserInput
    ParkinsonsPrediction?: ParkinsonsPredictionCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDiabetesPredictionInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    BreastCancerPrediction?: BreastCancerPredictionUncheckedCreateNestedManyWithoutUserInput
    HeartDiseasePrediction?: HeartDiseasePredictionUncheckedCreateNestedManyWithoutUserInput
    KidneyDiseasePrediction?: KidneyDiseasePredictionUncheckedCreateNestedManyWithoutUserInput
    ParkinsonsPrediction?: ParkinsonsPredictionUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDiabetesPredictionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDiabetesPredictionInput, UserUncheckedCreateWithoutDiabetesPredictionInput>
  }

  export type UserUpsertWithoutDiabetesPredictionInput = {
    update: XOR<UserUpdateWithoutDiabetesPredictionInput, UserUncheckedUpdateWithoutDiabetesPredictionInput>
    create: XOR<UserCreateWithoutDiabetesPredictionInput, UserUncheckedCreateWithoutDiabetesPredictionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDiabetesPredictionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDiabetesPredictionInput, UserUncheckedUpdateWithoutDiabetesPredictionInput>
  }

  export type UserUpdateWithoutDiabetesPredictionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    BreastCancerPrediction?: BreastCancerPredictionUpdateManyWithoutUserNestedInput
    HeartDiseasePrediction?: HeartDiseasePredictionUpdateManyWithoutUserNestedInput
    KidneyDiseasePrediction?: KidneyDiseasePredictionUpdateManyWithoutUserNestedInput
    ParkinsonsPrediction?: ParkinsonsPredictionUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDiabetesPredictionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    BreastCancerPrediction?: BreastCancerPredictionUncheckedUpdateManyWithoutUserNestedInput
    HeartDiseasePrediction?: HeartDiseasePredictionUncheckedUpdateManyWithoutUserNestedInput
    KidneyDiseasePrediction?: KidneyDiseasePredictionUncheckedUpdateManyWithoutUserNestedInput
    ParkinsonsPrediction?: ParkinsonsPredictionUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutHeartDiseasePredictionInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    BreastCancerPrediction?: BreastCancerPredictionCreateNestedManyWithoutUserInput
    DiabetesPrediction?: DiabetesPredictionCreateNestedManyWithoutUserInput
    KidneyDiseasePrediction?: KidneyDiseasePredictionCreateNestedManyWithoutUserInput
    ParkinsonsPrediction?: ParkinsonsPredictionCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutHeartDiseasePredictionInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    BreastCancerPrediction?: BreastCancerPredictionUncheckedCreateNestedManyWithoutUserInput
    DiabetesPrediction?: DiabetesPredictionUncheckedCreateNestedManyWithoutUserInput
    KidneyDiseasePrediction?: KidneyDiseasePredictionUncheckedCreateNestedManyWithoutUserInput
    ParkinsonsPrediction?: ParkinsonsPredictionUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutHeartDiseasePredictionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHeartDiseasePredictionInput, UserUncheckedCreateWithoutHeartDiseasePredictionInput>
  }

  export type UserUpsertWithoutHeartDiseasePredictionInput = {
    update: XOR<UserUpdateWithoutHeartDiseasePredictionInput, UserUncheckedUpdateWithoutHeartDiseasePredictionInput>
    create: XOR<UserCreateWithoutHeartDiseasePredictionInput, UserUncheckedCreateWithoutHeartDiseasePredictionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutHeartDiseasePredictionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutHeartDiseasePredictionInput, UserUncheckedUpdateWithoutHeartDiseasePredictionInput>
  }

  export type UserUpdateWithoutHeartDiseasePredictionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    BreastCancerPrediction?: BreastCancerPredictionUpdateManyWithoutUserNestedInput
    DiabetesPrediction?: DiabetesPredictionUpdateManyWithoutUserNestedInput
    KidneyDiseasePrediction?: KidneyDiseasePredictionUpdateManyWithoutUserNestedInput
    ParkinsonsPrediction?: ParkinsonsPredictionUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutHeartDiseasePredictionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    BreastCancerPrediction?: BreastCancerPredictionUncheckedUpdateManyWithoutUserNestedInput
    DiabetesPrediction?: DiabetesPredictionUncheckedUpdateManyWithoutUserNestedInput
    KidneyDiseasePrediction?: KidneyDiseasePredictionUncheckedUpdateManyWithoutUserNestedInput
    ParkinsonsPrediction?: ParkinsonsPredictionUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutKidneyDiseasePredictionInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    BreastCancerPrediction?: BreastCancerPredictionCreateNestedManyWithoutUserInput
    DiabetesPrediction?: DiabetesPredictionCreateNestedManyWithoutUserInput
    HeartDiseasePrediction?: HeartDiseasePredictionCreateNestedManyWithoutUserInput
    ParkinsonsPrediction?: ParkinsonsPredictionCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutKidneyDiseasePredictionInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    BreastCancerPrediction?: BreastCancerPredictionUncheckedCreateNestedManyWithoutUserInput
    DiabetesPrediction?: DiabetesPredictionUncheckedCreateNestedManyWithoutUserInput
    HeartDiseasePrediction?: HeartDiseasePredictionUncheckedCreateNestedManyWithoutUserInput
    ParkinsonsPrediction?: ParkinsonsPredictionUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutKidneyDiseasePredictionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutKidneyDiseasePredictionInput, UserUncheckedCreateWithoutKidneyDiseasePredictionInput>
  }

  export type UserUpsertWithoutKidneyDiseasePredictionInput = {
    update: XOR<UserUpdateWithoutKidneyDiseasePredictionInput, UserUncheckedUpdateWithoutKidneyDiseasePredictionInput>
    create: XOR<UserCreateWithoutKidneyDiseasePredictionInput, UserUncheckedCreateWithoutKidneyDiseasePredictionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutKidneyDiseasePredictionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutKidneyDiseasePredictionInput, UserUncheckedUpdateWithoutKidneyDiseasePredictionInput>
  }

  export type UserUpdateWithoutKidneyDiseasePredictionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    BreastCancerPrediction?: BreastCancerPredictionUpdateManyWithoutUserNestedInput
    DiabetesPrediction?: DiabetesPredictionUpdateManyWithoutUserNestedInput
    HeartDiseasePrediction?: HeartDiseasePredictionUpdateManyWithoutUserNestedInput
    ParkinsonsPrediction?: ParkinsonsPredictionUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutKidneyDiseasePredictionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    BreastCancerPrediction?: BreastCancerPredictionUncheckedUpdateManyWithoutUserNestedInput
    DiabetesPrediction?: DiabetesPredictionUncheckedUpdateManyWithoutUserNestedInput
    HeartDiseasePrediction?: HeartDiseasePredictionUncheckedUpdateManyWithoutUserNestedInput
    ParkinsonsPrediction?: ParkinsonsPredictionUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutParkinsonsPredictionInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    BreastCancerPrediction?: BreastCancerPredictionCreateNestedManyWithoutUserInput
    DiabetesPrediction?: DiabetesPredictionCreateNestedManyWithoutUserInput
    HeartDiseasePrediction?: HeartDiseasePredictionCreateNestedManyWithoutUserInput
    KidneyDiseasePrediction?: KidneyDiseasePredictionCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutParkinsonsPredictionInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    BreastCancerPrediction?: BreastCancerPredictionUncheckedCreateNestedManyWithoutUserInput
    DiabetesPrediction?: DiabetesPredictionUncheckedCreateNestedManyWithoutUserInput
    HeartDiseasePrediction?: HeartDiseasePredictionUncheckedCreateNestedManyWithoutUserInput
    KidneyDiseasePrediction?: KidneyDiseasePredictionUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutParkinsonsPredictionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutParkinsonsPredictionInput, UserUncheckedCreateWithoutParkinsonsPredictionInput>
  }

  export type UserUpsertWithoutParkinsonsPredictionInput = {
    update: XOR<UserUpdateWithoutParkinsonsPredictionInput, UserUncheckedUpdateWithoutParkinsonsPredictionInput>
    create: XOR<UserCreateWithoutParkinsonsPredictionInput, UserUncheckedCreateWithoutParkinsonsPredictionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutParkinsonsPredictionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutParkinsonsPredictionInput, UserUncheckedUpdateWithoutParkinsonsPredictionInput>
  }

  export type UserUpdateWithoutParkinsonsPredictionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    BreastCancerPrediction?: BreastCancerPredictionUpdateManyWithoutUserNestedInput
    DiabetesPrediction?: DiabetesPredictionUpdateManyWithoutUserNestedInput
    HeartDiseasePrediction?: HeartDiseasePredictionUpdateManyWithoutUserNestedInput
    KidneyDiseasePrediction?: KidneyDiseasePredictionUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutParkinsonsPredictionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    BreastCancerPrediction?: BreastCancerPredictionUncheckedUpdateManyWithoutUserNestedInput
    DiabetesPrediction?: DiabetesPredictionUncheckedUpdateManyWithoutUserNestedInput
    HeartDiseasePrediction?: HeartDiseasePredictionUncheckedUpdateManyWithoutUserNestedInput
    KidneyDiseasePrediction?: KidneyDiseasePredictionUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type BreastCancerPredictionCreateManyUserInput = {
    prediction_id?: number
    radius_mean: number
    texture_mean: number
    perimeter_mean: number
    area_mean: number
    smoothness_mean: number
    result: string
    created_at?: Date | string
  }

  export type DiabetesPredictionCreateManyUserInput = {
    prediction_id?: number
    pregnancies: number
    glucose: number
    blood_pressure: number
    skin_thickness: number
    insulin: number
    bmi: number
    diabetes_pedigree_function: number
    age: number
    result: string
    created_at?: Date | string
  }

  export type HeartDiseasePredictionCreateManyUserInput = {
    prediction_id?: number
    age: number
    sex: string
    chest_pain_type: string
    resting_blood_pressure: number
    serum_cholesterol: number
    fasting_blood_sugar: boolean
    resting_ecg: number
    max_heart_rate: number
    exercise_induced_angina: boolean
    oldpeak: number
    slope_of_peak_exercise_st_segment: string
    num_major_vessels: number
    thal: string
    result: string
    created_at?: Date | string
  }

  export type KidneyDiseasePredictionCreateManyUserInput = {
    prediction_id?: number
    age: number
    blood_pressure: number
    specific_gravity: number
    albumin: number
    sugar: number
    red_blood_cells: string
    pus_cell: string
    pus_cell_clumps: string
    bacteria: string
    blood_glucose_random: number
    blood_urea: number
    serum_creatinine: number
    sodium: number
    potassium: number
    hemoglobin: number
    packed_cell_volume: number
    white_cell_count: number
    red_cell_count: number
    hypertension: string
    diabetes_mellitus: string
    coronary_artery_disease: string
    appetite: string
    pedal_edema: string
    anemia: string
    classification: string
    created_at?: Date | string
  }

  export type ParkinsonsPredictionCreateManyUserInput = {
    prediction_id?: number
    ascii_subject_name: string
    recording_number: number
    mdvp_fo: number
    mdvp_fhi: number
    mdvp_flo: number
    mdvp_jitter_percentage: number
    mdvp_jitter_abs: number
    mdvp_rap: number
    mdvp_ppq: number
    jitter_ddp: number
    mdvp_shimmer: number
    mdvp_shimmer_db: number
    shimmer_apq3: number
    shimmer_apq5: number
    mdvp_apq: number
    shimmer_dda: number
    nhr: number
    hnr: number
    status: number
    rpde: number
    d2: number
    dfa: number
    spread1: number
    spread2: number
    ppe: number
    result: string
    created_at?: Date | string
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BreastCancerPredictionUpdateWithoutUserInput = {
    radius_mean?: FloatFieldUpdateOperationsInput | number
    texture_mean?: FloatFieldUpdateOperationsInput | number
    perimeter_mean?: FloatFieldUpdateOperationsInput | number
    area_mean?: FloatFieldUpdateOperationsInput | number
    smoothness_mean?: FloatFieldUpdateOperationsInput | number
    result?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BreastCancerPredictionUncheckedUpdateWithoutUserInput = {
    prediction_id?: IntFieldUpdateOperationsInput | number
    radius_mean?: FloatFieldUpdateOperationsInput | number
    texture_mean?: FloatFieldUpdateOperationsInput | number
    perimeter_mean?: FloatFieldUpdateOperationsInput | number
    area_mean?: FloatFieldUpdateOperationsInput | number
    smoothness_mean?: FloatFieldUpdateOperationsInput | number
    result?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BreastCancerPredictionUncheckedUpdateManyWithoutUserInput = {
    prediction_id?: IntFieldUpdateOperationsInput | number
    radius_mean?: FloatFieldUpdateOperationsInput | number
    texture_mean?: FloatFieldUpdateOperationsInput | number
    perimeter_mean?: FloatFieldUpdateOperationsInput | number
    area_mean?: FloatFieldUpdateOperationsInput | number
    smoothness_mean?: FloatFieldUpdateOperationsInput | number
    result?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiabetesPredictionUpdateWithoutUserInput = {
    pregnancies?: IntFieldUpdateOperationsInput | number
    glucose?: IntFieldUpdateOperationsInput | number
    blood_pressure?: IntFieldUpdateOperationsInput | number
    skin_thickness?: IntFieldUpdateOperationsInput | number
    insulin?: IntFieldUpdateOperationsInput | number
    bmi?: FloatFieldUpdateOperationsInput | number
    diabetes_pedigree_function?: FloatFieldUpdateOperationsInput | number
    age?: IntFieldUpdateOperationsInput | number
    result?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiabetesPredictionUncheckedUpdateWithoutUserInput = {
    prediction_id?: IntFieldUpdateOperationsInput | number
    pregnancies?: IntFieldUpdateOperationsInput | number
    glucose?: IntFieldUpdateOperationsInput | number
    blood_pressure?: IntFieldUpdateOperationsInput | number
    skin_thickness?: IntFieldUpdateOperationsInput | number
    insulin?: IntFieldUpdateOperationsInput | number
    bmi?: FloatFieldUpdateOperationsInput | number
    diabetes_pedigree_function?: FloatFieldUpdateOperationsInput | number
    age?: IntFieldUpdateOperationsInput | number
    result?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiabetesPredictionUncheckedUpdateManyWithoutUserInput = {
    prediction_id?: IntFieldUpdateOperationsInput | number
    pregnancies?: IntFieldUpdateOperationsInput | number
    glucose?: IntFieldUpdateOperationsInput | number
    blood_pressure?: IntFieldUpdateOperationsInput | number
    skin_thickness?: IntFieldUpdateOperationsInput | number
    insulin?: IntFieldUpdateOperationsInput | number
    bmi?: FloatFieldUpdateOperationsInput | number
    diabetes_pedigree_function?: FloatFieldUpdateOperationsInput | number
    age?: IntFieldUpdateOperationsInput | number
    result?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HeartDiseasePredictionUpdateWithoutUserInput = {
    age?: IntFieldUpdateOperationsInput | number
    sex?: StringFieldUpdateOperationsInput | string
    chest_pain_type?: StringFieldUpdateOperationsInput | string
    resting_blood_pressure?: IntFieldUpdateOperationsInput | number
    serum_cholesterol?: IntFieldUpdateOperationsInput | number
    fasting_blood_sugar?: BoolFieldUpdateOperationsInput | boolean
    resting_ecg?: IntFieldUpdateOperationsInput | number
    max_heart_rate?: IntFieldUpdateOperationsInput | number
    exercise_induced_angina?: BoolFieldUpdateOperationsInput | boolean
    oldpeak?: FloatFieldUpdateOperationsInput | number
    slope_of_peak_exercise_st_segment?: StringFieldUpdateOperationsInput | string
    num_major_vessels?: IntFieldUpdateOperationsInput | number
    thal?: StringFieldUpdateOperationsInput | string
    result?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HeartDiseasePredictionUncheckedUpdateWithoutUserInput = {
    prediction_id?: IntFieldUpdateOperationsInput | number
    age?: IntFieldUpdateOperationsInput | number
    sex?: StringFieldUpdateOperationsInput | string
    chest_pain_type?: StringFieldUpdateOperationsInput | string
    resting_blood_pressure?: IntFieldUpdateOperationsInput | number
    serum_cholesterol?: IntFieldUpdateOperationsInput | number
    fasting_blood_sugar?: BoolFieldUpdateOperationsInput | boolean
    resting_ecg?: IntFieldUpdateOperationsInput | number
    max_heart_rate?: IntFieldUpdateOperationsInput | number
    exercise_induced_angina?: BoolFieldUpdateOperationsInput | boolean
    oldpeak?: FloatFieldUpdateOperationsInput | number
    slope_of_peak_exercise_st_segment?: StringFieldUpdateOperationsInput | string
    num_major_vessels?: IntFieldUpdateOperationsInput | number
    thal?: StringFieldUpdateOperationsInput | string
    result?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HeartDiseasePredictionUncheckedUpdateManyWithoutUserInput = {
    prediction_id?: IntFieldUpdateOperationsInput | number
    age?: IntFieldUpdateOperationsInput | number
    sex?: StringFieldUpdateOperationsInput | string
    chest_pain_type?: StringFieldUpdateOperationsInput | string
    resting_blood_pressure?: IntFieldUpdateOperationsInput | number
    serum_cholesterol?: IntFieldUpdateOperationsInput | number
    fasting_blood_sugar?: BoolFieldUpdateOperationsInput | boolean
    resting_ecg?: IntFieldUpdateOperationsInput | number
    max_heart_rate?: IntFieldUpdateOperationsInput | number
    exercise_induced_angina?: BoolFieldUpdateOperationsInput | boolean
    oldpeak?: FloatFieldUpdateOperationsInput | number
    slope_of_peak_exercise_st_segment?: StringFieldUpdateOperationsInput | string
    num_major_vessels?: IntFieldUpdateOperationsInput | number
    thal?: StringFieldUpdateOperationsInput | string
    result?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KidneyDiseasePredictionUpdateWithoutUserInput = {
    age?: IntFieldUpdateOperationsInput | number
    blood_pressure?: IntFieldUpdateOperationsInput | number
    specific_gravity?: FloatFieldUpdateOperationsInput | number
    albumin?: IntFieldUpdateOperationsInput | number
    sugar?: IntFieldUpdateOperationsInput | number
    red_blood_cells?: StringFieldUpdateOperationsInput | string
    pus_cell?: StringFieldUpdateOperationsInput | string
    pus_cell_clumps?: StringFieldUpdateOperationsInput | string
    bacteria?: StringFieldUpdateOperationsInput | string
    blood_glucose_random?: IntFieldUpdateOperationsInput | number
    blood_urea?: IntFieldUpdateOperationsInput | number
    serum_creatinine?: FloatFieldUpdateOperationsInput | number
    sodium?: FloatFieldUpdateOperationsInput | number
    potassium?: FloatFieldUpdateOperationsInput | number
    hemoglobin?: FloatFieldUpdateOperationsInput | number
    packed_cell_volume?: FloatFieldUpdateOperationsInput | number
    white_cell_count?: IntFieldUpdateOperationsInput | number
    red_cell_count?: IntFieldUpdateOperationsInput | number
    hypertension?: StringFieldUpdateOperationsInput | string
    diabetes_mellitus?: StringFieldUpdateOperationsInput | string
    coronary_artery_disease?: StringFieldUpdateOperationsInput | string
    appetite?: StringFieldUpdateOperationsInput | string
    pedal_edema?: StringFieldUpdateOperationsInput | string
    anemia?: StringFieldUpdateOperationsInput | string
    classification?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KidneyDiseasePredictionUncheckedUpdateWithoutUserInput = {
    prediction_id?: IntFieldUpdateOperationsInput | number
    age?: IntFieldUpdateOperationsInput | number
    blood_pressure?: IntFieldUpdateOperationsInput | number
    specific_gravity?: FloatFieldUpdateOperationsInput | number
    albumin?: IntFieldUpdateOperationsInput | number
    sugar?: IntFieldUpdateOperationsInput | number
    red_blood_cells?: StringFieldUpdateOperationsInput | string
    pus_cell?: StringFieldUpdateOperationsInput | string
    pus_cell_clumps?: StringFieldUpdateOperationsInput | string
    bacteria?: StringFieldUpdateOperationsInput | string
    blood_glucose_random?: IntFieldUpdateOperationsInput | number
    blood_urea?: IntFieldUpdateOperationsInput | number
    serum_creatinine?: FloatFieldUpdateOperationsInput | number
    sodium?: FloatFieldUpdateOperationsInput | number
    potassium?: FloatFieldUpdateOperationsInput | number
    hemoglobin?: FloatFieldUpdateOperationsInput | number
    packed_cell_volume?: FloatFieldUpdateOperationsInput | number
    white_cell_count?: IntFieldUpdateOperationsInput | number
    red_cell_count?: IntFieldUpdateOperationsInput | number
    hypertension?: StringFieldUpdateOperationsInput | string
    diabetes_mellitus?: StringFieldUpdateOperationsInput | string
    coronary_artery_disease?: StringFieldUpdateOperationsInput | string
    appetite?: StringFieldUpdateOperationsInput | string
    pedal_edema?: StringFieldUpdateOperationsInput | string
    anemia?: StringFieldUpdateOperationsInput | string
    classification?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KidneyDiseasePredictionUncheckedUpdateManyWithoutUserInput = {
    prediction_id?: IntFieldUpdateOperationsInput | number
    age?: IntFieldUpdateOperationsInput | number
    blood_pressure?: IntFieldUpdateOperationsInput | number
    specific_gravity?: FloatFieldUpdateOperationsInput | number
    albumin?: IntFieldUpdateOperationsInput | number
    sugar?: IntFieldUpdateOperationsInput | number
    red_blood_cells?: StringFieldUpdateOperationsInput | string
    pus_cell?: StringFieldUpdateOperationsInput | string
    pus_cell_clumps?: StringFieldUpdateOperationsInput | string
    bacteria?: StringFieldUpdateOperationsInput | string
    blood_glucose_random?: IntFieldUpdateOperationsInput | number
    blood_urea?: IntFieldUpdateOperationsInput | number
    serum_creatinine?: FloatFieldUpdateOperationsInput | number
    sodium?: FloatFieldUpdateOperationsInput | number
    potassium?: FloatFieldUpdateOperationsInput | number
    hemoglobin?: FloatFieldUpdateOperationsInput | number
    packed_cell_volume?: FloatFieldUpdateOperationsInput | number
    white_cell_count?: IntFieldUpdateOperationsInput | number
    red_cell_count?: IntFieldUpdateOperationsInput | number
    hypertension?: StringFieldUpdateOperationsInput | string
    diabetes_mellitus?: StringFieldUpdateOperationsInput | string
    coronary_artery_disease?: StringFieldUpdateOperationsInput | string
    appetite?: StringFieldUpdateOperationsInput | string
    pedal_edema?: StringFieldUpdateOperationsInput | string
    anemia?: StringFieldUpdateOperationsInput | string
    classification?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkinsonsPredictionUpdateWithoutUserInput = {
    ascii_subject_name?: StringFieldUpdateOperationsInput | string
    recording_number?: IntFieldUpdateOperationsInput | number
    mdvp_fo?: FloatFieldUpdateOperationsInput | number
    mdvp_fhi?: FloatFieldUpdateOperationsInput | number
    mdvp_flo?: FloatFieldUpdateOperationsInput | number
    mdvp_jitter_percentage?: FloatFieldUpdateOperationsInput | number
    mdvp_jitter_abs?: FloatFieldUpdateOperationsInput | number
    mdvp_rap?: FloatFieldUpdateOperationsInput | number
    mdvp_ppq?: FloatFieldUpdateOperationsInput | number
    jitter_ddp?: FloatFieldUpdateOperationsInput | number
    mdvp_shimmer?: FloatFieldUpdateOperationsInput | number
    mdvp_shimmer_db?: FloatFieldUpdateOperationsInput | number
    shimmer_apq3?: FloatFieldUpdateOperationsInput | number
    shimmer_apq5?: FloatFieldUpdateOperationsInput | number
    mdvp_apq?: FloatFieldUpdateOperationsInput | number
    shimmer_dda?: FloatFieldUpdateOperationsInput | number
    nhr?: FloatFieldUpdateOperationsInput | number
    hnr?: FloatFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    rpde?: FloatFieldUpdateOperationsInput | number
    d2?: FloatFieldUpdateOperationsInput | number
    dfa?: FloatFieldUpdateOperationsInput | number
    spread1?: FloatFieldUpdateOperationsInput | number
    spread2?: FloatFieldUpdateOperationsInput | number
    ppe?: FloatFieldUpdateOperationsInput | number
    result?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkinsonsPredictionUncheckedUpdateWithoutUserInput = {
    prediction_id?: IntFieldUpdateOperationsInput | number
    ascii_subject_name?: StringFieldUpdateOperationsInput | string
    recording_number?: IntFieldUpdateOperationsInput | number
    mdvp_fo?: FloatFieldUpdateOperationsInput | number
    mdvp_fhi?: FloatFieldUpdateOperationsInput | number
    mdvp_flo?: FloatFieldUpdateOperationsInput | number
    mdvp_jitter_percentage?: FloatFieldUpdateOperationsInput | number
    mdvp_jitter_abs?: FloatFieldUpdateOperationsInput | number
    mdvp_rap?: FloatFieldUpdateOperationsInput | number
    mdvp_ppq?: FloatFieldUpdateOperationsInput | number
    jitter_ddp?: FloatFieldUpdateOperationsInput | number
    mdvp_shimmer?: FloatFieldUpdateOperationsInput | number
    mdvp_shimmer_db?: FloatFieldUpdateOperationsInput | number
    shimmer_apq3?: FloatFieldUpdateOperationsInput | number
    shimmer_apq5?: FloatFieldUpdateOperationsInput | number
    mdvp_apq?: FloatFieldUpdateOperationsInput | number
    shimmer_dda?: FloatFieldUpdateOperationsInput | number
    nhr?: FloatFieldUpdateOperationsInput | number
    hnr?: FloatFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    rpde?: FloatFieldUpdateOperationsInput | number
    d2?: FloatFieldUpdateOperationsInput | number
    dfa?: FloatFieldUpdateOperationsInput | number
    spread1?: FloatFieldUpdateOperationsInput | number
    spread2?: FloatFieldUpdateOperationsInput | number
    ppe?: FloatFieldUpdateOperationsInput | number
    result?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkinsonsPredictionUncheckedUpdateManyWithoutUserInput = {
    prediction_id?: IntFieldUpdateOperationsInput | number
    ascii_subject_name?: StringFieldUpdateOperationsInput | string
    recording_number?: IntFieldUpdateOperationsInput | number
    mdvp_fo?: FloatFieldUpdateOperationsInput | number
    mdvp_fhi?: FloatFieldUpdateOperationsInput | number
    mdvp_flo?: FloatFieldUpdateOperationsInput | number
    mdvp_jitter_percentage?: FloatFieldUpdateOperationsInput | number
    mdvp_jitter_abs?: FloatFieldUpdateOperationsInput | number
    mdvp_rap?: FloatFieldUpdateOperationsInput | number
    mdvp_ppq?: FloatFieldUpdateOperationsInput | number
    jitter_ddp?: FloatFieldUpdateOperationsInput | number
    mdvp_shimmer?: FloatFieldUpdateOperationsInput | number
    mdvp_shimmer_db?: FloatFieldUpdateOperationsInput | number
    shimmer_apq3?: FloatFieldUpdateOperationsInput | number
    shimmer_apq5?: FloatFieldUpdateOperationsInput | number
    mdvp_apq?: FloatFieldUpdateOperationsInput | number
    shimmer_dda?: FloatFieldUpdateOperationsInput | number
    nhr?: FloatFieldUpdateOperationsInput | number
    hnr?: FloatFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    rpde?: FloatFieldUpdateOperationsInput | number
    d2?: FloatFieldUpdateOperationsInput | number
    dfa?: FloatFieldUpdateOperationsInput | number
    spread1?: FloatFieldUpdateOperationsInput | number
    spread2?: FloatFieldUpdateOperationsInput | number
    ppe?: FloatFieldUpdateOperationsInput | number
    result?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}