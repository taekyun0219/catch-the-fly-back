**프로젝트 개요**

순발력 테스트 게임은 사용자가 날아다니는 파리를 모두 잡는 데 걸리는 시간을 측정하는 간단한 게임입니다. 사용자들은 이름을 입력하고 난이도(Easy, Medium, Hard)를 선택하여 게임을 시작할 수 있습니다. 게임은 최대한 단순한 UI로 구성되며, 난이도별 랭킹을 제공하여 사용자들이 자신의 기록을 비교할 수 있습니다. MVP 단계에서는 서버 메모리를 활용하여 데이터를 관리하며, 복잡한 기능보다는 핵심 기능의 완성도에 집중합니다.

---

**유저 플로우**

1. **홈 화면**
   - **게임 설명**: 게임의 목적과 방법에 대한 간단한 설명을 제공합니다.
   - **유저 이름 입력**: 사용자가 자신의 이름을 입력합니다.
   - **난이도 선택**: Easy, Medium, Hard 중 하나의 난이도를 선택합니다.
   - **게임 시작 버튼**: 설정을 완료한 후 게임을 시작합니다.

2. **게임 화면**
   - **시작 버튼**: 게임을 시작하는 버튼입니다.
   - **파리잡기 화면**: 화면에 난이도에 따라 날아다니는 파리들이 나타납니다.
   - **게임 정보창**: 남은 파리 수, 경과 시간 등의 게임 정보를 표시합니다.
   - **랭킹창**: 현재 난이도의 상위 랭킹을 실시간으로 보여줍니다.

3. **게임 진행**
   - 시작 버튼을 누르면 파리들이 나타나기 시작합니다.
   - 사용자는 화면의 파리를 클릭하여 잡습니다.
   - 모든 파리를 잡으면 게임이 종료되고 소요 시간이 기록됩니다.
   - 게임 종료 후 랭킹이 업데이트되고, 게임 정보창에 최종 시간이 표시됩니다.

---

**핵심 기능**

1. **사용자 입력 및 설정**
   - **이름 입력**: 사용자 식별을 위한 이름 입력 기능.
   - **난이도 선택**: Easy, Medium, Hard 난이도 선택 기능.

2. **게임 시작 및 진행**
   - **시작 버튼 활성화**: 게임 화면에서 시작 버튼을 통해 게임을 시작.
   - **파리 생성 및 움직임**: 난이도에 따른 파리의 수와 속도 조절.
   - **파리 잡기 인터랙션**: 사용자가 파리를 클릭하여 제거하는 기능.
   - **시간 측정**: 게임 시작부터 모든 파리를 잡을 때까지의 시간 기록.

3. **랭킹 시스템**
   - **시간 기록 저장**: 사용자 이름, 난이도, 소요 시간을 서버 메모리에 저장.
   - **난이도별 랭킹 표시**: 현재 난이도의 상위 랭킹을 게임 화면에 표시.

4. **게임 정보 표시**
   - **남은 파리 수 표시**: 게임 진행 중 남은 파리의 수를 실시간으로 표시.
   - **경과 시간 표시**: 게임 진행 중 경과된 시간을 표시.

---

**기술스택**

- **프론트엔드 (FE)**
  - **필수**: Next.js, TailwindCSS
  - **추가**:
    - JavaScript 기본 문법과 함수 활용 (추가적인 외부 라이브러리 최대한 미사용)
    - 게임 로직 및 인터랙션 구현을 위한 기본 DOM 조작

- **백엔드 (BE)**
  - **필수**: Nest.js
  - **추가**:
    - 서버 메모리를 활용한 데이터 관리 (MVP 단계에서 데이터베이스 미사용)
    - RESTful API 개발
    - API 명세서는 Markdown으로 관리

---

**MVP 기능 개발 이후 추가 개선사항**

1. **데이터베이스 연동**
   - 서버 재시작 후에도 데이터 유지를 위한 데이터베이스 도입.
   - 사용자별 기록 저장 및 관리.

2. **UI/UX 개선**
   - 반응형 디자인 적용으로 다양한 디바이스 지원.
   - 게임 내 애니메이션 효과 및 사운드 추가.

3. **소셜 기능 추가**
   - 친구 초대 및 경쟁 기능.
   - 소셜 미디어를 통한 기록 공유 기능.

4. **게임 모드 확장**
   - 다양한 난이도와 모드 추가 (예: 타임어택, 생존 모드 등).
   - 파리 외에 다른 객체 추가로 게임 다양성 확대.

5. **보안 및 성능 개선**
   - 데이터 저장 및 전송 시 보안 강화.
   - 서버 및 클라이언트 최적화를 통한 성능 향상.

6. **테스트 및 배포 자동화**
   - 유닛 테스트 및 통합 테스트 도입.
   - CI/CD 파이프라인 구축으로 개발 효율성 향상.

---

이 PRD는 최소 기능 제품(MVP)의 개발에 초점을 맞추고 있으며, 이후 단계에서 추가적인 기능과 개선 사항을 통해 사용자 경험을 향상시킬 수 있습니다.