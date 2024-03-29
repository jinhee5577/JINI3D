# JINI3D

<p align="center">
  <img width="950" alt="jini3dimg" src="https://github.com/jinhee5577/jiniDash/assets/82584287/d713a4f5-12f9-47c4-816b-0bb903deff1b">
</p>
<p align="center">
  <img width="950" alt="jini3d4" src="https://github.com/jinhee5577/Jinhee_PF/assets/82584287/4ff14fc3-f402-4feb-a1c7-cf9f8506611f">
</p>
<p align="center">
  <img width="950" alt="jini3d2" src="https://github.com/jinhee5577/Jinhee_PF/assets/82584287/6ef5c00d-afb3-4131-93ec-138fddb5f787">
</p>
<p align="center">
  <img width="950" alt="jini3d3" src="https://github.com/jinhee5577/Jinhee_PF/assets/82584287/4da8ba9c-4b94-43cb-a696-ec0546015dde">
</p>


새로운시도로 웹메인페이지 내용을 3D로 구현하여 창의적이며 입체적인 UX를 선보이기위해 현재도 계속
개발진행중인 프로젝트입니다. PC와 모바일에서 보기 적합하도록 반응형 웹사이트 로 제작하였습니다.


3D구현은 라이브러리를 전혀 이용하지않고, React와 순수Javascript, CSS를 이용하여 입체적인 메인페이지를 
개발 완성했습니다. 또한 간단한 프로필페이지에서 선택한 이미지와, 이름을 Localstorage에 영구적으로 
저정하고 불러오며 회원처럼 보여줍니다.	
저장할 이미지url을 base64인코딩으로 변환하여 Localstorage에 영구저장이 가능하도록 개발하였습니다.


아파트매매가 조회는 프로필을저장한 고객만 보이며, 데이터는 국토교통부 api를 각지역 옵션창에서 선택한 
선택한 시/도와 구/군을 해당법정동코드list에서 찾은후 지역코드를 뽑아서 요청 URL파라미터에 입력되어 
해당지역 아파트매매정보를 가져옵니다.


#### 진행 기간 및 규모 : 2022년 12월 ~ 2023년 현재진행중, 개발 1명(본인).
#### 사용 기술 : React, Redux, Javascript, Localstorage, Node.js, express, 국토교통부API
#### 배포  : firebase

성과 : 웹메인을 3D로 놀라운UX를 구현하기위해 다양한고민과 끈임없는시도를 통하여 개발하였습니다. 아직 버그가 존재하지만 
수정진행중입니다. 저장할 이미지url을 base64인코딩으로 변환하여 Localstorage에 영구저장이 가능하도록 개발하였습니다.

각각의 선택한 지역별 select옵션창이 만들어지며, 선택한 시/도와 구/군을 해당법정동코드list에서 찾은후 지역코드를 뽑아서
요청 URL파라미터에 입력되어 해당지역 아파트매매정보를 가져옵니다.
요청한 국토부api의 cors에러를 해결하고자 직접 node.js의 express를 활용하여 간단한 proxy-server를 개발하여,
server에서 api요청에 의해 받은 결과를 프론트로 전송해 주도록 개발하였습니다.

### 제가 개발한 JINI3D 사이트 링크는 : https://jinipro-a2903.web.app/ 입니다.

