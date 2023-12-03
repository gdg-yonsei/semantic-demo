/**
 * ### 콜백
 *
 * 콜백 함수 타입입니다.
 */
export type Callback = () => void;

/**
 * ### ValueOf
 *
 * key-value 객체에서 value의 타입을 추출합니다.
 */
export type ValueOf<T> = T[keyof T];

/**
 * ### Recursive Partial
 *
 * 재귀적으로 모든 프로퍼티를 partial로 만듭니다.
 */
export type RecursivePartial<T> = {
  [P in keyof T]?: T[P] extends (infer U)[]
    ? RecursivePartial<U>[]
    : T[P] extends object | undefined
    ? RecursivePartial<T[P]>
    : T[P];
};

/**
 * ### Nullable type
 *
 * 해당 타입에 null 가능함을 추가합니다.
 */
export type Nullable<T> = T | null;
