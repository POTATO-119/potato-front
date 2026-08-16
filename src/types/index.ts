// 전역 공통 타입 정의
export type ApiResponse<T> = {
  data: T
  message: string
  status: number
}
