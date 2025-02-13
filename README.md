
# DRIP front-end team 입니다!
<img width="486" alt="DRIP_메인페이지" src="https://user-images.githubusercontent.com/67620484/125184605-288a0500-e25a-11eb-9d49-0c802de12536.png">
<br>  

다양한 체험을 제공하는 [Frip](https://www.frip.com)을 모티브로 한 프로젝트
<br><br>

## Deploy 사이트

[![Netlify Status](https://api.netlify.com/api/v1/badges/ae631648-37fd-4ed1-a5ad-731b1f885ce3/deploy-status)](https://21st-weare-drip.netlify.app/) <b>백엔드 서버 다운으로 인하여 메인페이지만 노출</b>
<br><br>

## 프로젝트 계획 및 기간

📆 2021.06.21 ~ 07.02

- 1st Sprint : 개발환경 초기세팅, 전체 레이아웃, 컴포넌트화
- 2nd Sprint : 컴포넌트 별 기능 구현, 프론트-백 통신, 코드 리팩토링, conflict 수정 작업

## 본인 기능 구현 목록
### 공통

- React 기반의 커머스 홈페이지 제작
- CRA를 사용한 초기 세팅
- 2명의 팀원들이 공통 `styled-component` 사용
- 공통부분인 Nav, Footer 컴포넌트 제작

### [소셜 로그인 페이지]

- 카카오 로그인 API를 활용한 구성
- 카카오를 통해 Token을 받고 Backend와의 통신이 완료되면 Backend로부터 Token을 받아 Localstorage에 저장
- 카카오 로그아웃 API를 통해 로그아웃을 실행하고 성공하면 Localstorage에 저장 된 Token 삭제
<br>  

![DRIP_로그인](https://user-images.githubusercontent.com/67620484/125184628-5707e000-e25a-11eb-9e35-19c65d68c998.gif)

### [제품 상세 페이지]
- 백엔드와의 통신을 통해 상품 데이터를 렌더링
- 카카오 지도 API를 활용하여 수신된 주소 값을 기반으로 지도 출력
- 상세페이지 내 찜하기 기능 활성화
<br>

![DRIP_상세페이지](https://user-images.githubusercontent.com/67620484/125184669-a3532000-e25a-11eb-8639-ecb6c9629a83.gif)

### [찜 페이지]
- 찜한 상품들 노출
<br>

![DRIP_찜](https://github.com/AutumnWithJay/21-2nd-Drip-frontend/blob/master/public/Review/Images/DRIP_%EC%B0%9C.gif?raw=true)

### [마이 페이지]

- 주문 페이지를 통해 넘어온 주문 데이터를 렌더링
- 현재 예약한 체험 내역과 지난 예약 분리하여 노출
- 지난 예약 내역에서 후기 작성 페이지로 넘어갈 수 있도록 버튼 생성
<br>  


### [후기 페이지]
- 상품 ID를 기반으로 후기 리스트 수신하여 노출
- 후기 별 **도움이 됐어요** 버튼을 클릭하면 숫자 카운트가 증가
- 최신순, 도움순으로 후기 리스트 필터링
<br>

![DRIP_후기](https://github.com/AutumnWithJay/21-2nd-Drip-frontend/blob/master/public/Review/Images/DRIP_%ED%9B%84%EA%B8%B0%ED%8E%98%EC%9D%B4%EC%A7%80.gif?raw=true)


### 후기 작성 페이지 (박준우)
- 폼 데이터를 활용한 사진, 후기 내용, 별점이 포함된 후기 데이터 전송

### Drip 유튜브 링크

<a href="https://youtu.be/cxtBWz6Fbss">
    <img src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white/"
        style="height : auto; margin-left : 10px; margin-right : 10px;"/>
</a>

## 🛠 사용한 기술

### Front-End

<br><img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/><img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/><img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/><img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"/><img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/><img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"/>


## 🛠 사용한 툴

<img src="https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white"/><img alt="Trello" src="https://img.shields.io/badge/Trello-%23026AA7.svg?style=for-the-badge&logo=Trello&logoColor=white"/><img alt="Git" src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white"/><img alt="GitHub" src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"/><img alt="Postman" src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=red" /></a>
<img src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white">
<br>

## 👥 팀원

- 프론트 : [박준우](https://github.com/AutumnWithJay), [신미영](https://github.com/smy0102)
- 벡엔드 : [박준영](https://github.com/SkyStar-K), [송준](https://github.com/riassuc), [최승리](https://github.com/araaaaan)
  (드립 벡앤드팀 [깃허브](https://github.com/wecode-bootcamp-korea/21-2nd-Drip-backend))

## Reference

이 프로젝트는 [프립](https://www.frip.co.kr) 사이트를 참조하여 학습목적으로 만들었습니다.
실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
이 프로젝트에서 사용하고 있는 사진 대부분은 위코드에서 구매한 것이므로 해당 프로젝트 외부인이 사용할 수 없습니다.
