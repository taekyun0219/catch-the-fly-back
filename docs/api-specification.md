**API 명세서**

**Base URL**: `https://port-0-catch-the-fly-back-m3ed3zhxf5f64d23.sel4.cloudtype.app`

---

## 1. 유저의 파리 잡는 시간 저장 API

### 요청 설명

- **Method**: `POST`
- **Endpoint**: `/save-time`
- **Headers**:
  - `Content-Type`: `application/json`

### 요청 바디

```json
{
  "username": "string",
  "difficulty": "string", // "easy", "medium", "hard" 중 하나
  "time": number // 파리 잡는데 걸린 시간 (단위: 초)
}
```

- **필드 설명**:
  - `username` (string): 사용자 이름 (필수)
  - `difficulty` (string): 난이도 ("easy", "medium", "hard") (필수)
  - `time` (number): 걸린 시간 (초 단위) (필수)

### 응답

- **성공 (HTTP 200 OK)**

  ```json
  {
    "message": "시간이 성공적으로 저장되었습니다.",
    "rank": number // 현재 난이도에서의 사용자 순위
  }
  ```

- **에러 응답**

  - **400 Bad Request**

    ```json
    {
      "error": "유효하지 않은 입력 데이터입니다."
    }
    ```

  - **500 Internal Server Error**

    ```json
    {
      "error": "서버 오류가 발생했습니다."
    }
    ```

---

## 2. 난이도별 현재 랭킹 조회 API (1위 ~ 5위)

### 요청 설명

- **Method**: `GET`
- **Endpoint**: `/rankings/{difficulty}`
- **URL 매개변수**:
  - `difficulty` (string): 조회할 난이도 ("easy", "medium", "hard") (필수)

### 요청 예시

```
GET /rankings/easy
```

### 응답

- **성공 (HTTP 200 OK)**

  ```json
  {
    "difficulty": "easy",
    "rankings": [
      {
        "rank": 1,
        "username": "string",
        "time": number
      },
      {
        "rank": 2,
        "username": "string",
        "time": number
      },
      // 최대 5개의 랭킹 정보 제공
    ]
  }
  ```

- **에러 응답**

  - **400 Bad Request**

    ```json
    {
      "error": "유효하지 않은 난이도입니다."
    }
    ```

  - **500 Internal Server Error**

    ```json
    {
      "error": "서버 오류가 발생했습니다."
    }
    ```

---

**공통 사항**

- 모든 요청과 응답은 `application/json` 형식을 사용합니다.
- 요청 시 `Content-Type` 헤더를 정확하게 설정해야 합니다.
- 에러 메시지는 상황에 따라 적절하게 조정될 수 있습니다.

---

**예시**

### 1. 시간 저장 요청 예시

**요청**

```
POST /save-time
Content-Type: application/json

{
  "username": "Player1",
  "difficulty": "medium",
  "time": 15.6
}
```

**응답**

```json
{
  "message": "시간이 성공적으로 저장되었습니다.",
  "rank": 3
}
```

### 2. 랭킹 조회 요청 예시

**요청**

```
GET /rankings/medium
```

**응답**

```json
{
  "difficulty": "medium",
  "rankings": [
    {
      "rank": 1,
      "username": "Player2",
      "time": 12.3
    },
    {
      "rank": 2,
      "username": "Player3",
      "time": 14.1
    },
    {
      "rank": 3,
      "username": "Player1",
      "time": 15.6
    }
    // 최대 5위까지 표시
  ]
}
```

---

이 API 명세서를 참고하여 프론트엔드와 백엔드 개발을 진행하시면 됩니다. 추가적인 문의 사항이나 수정이 필요하면 알려주세요.