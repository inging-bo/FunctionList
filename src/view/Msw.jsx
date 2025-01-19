const Msw = () => {
    return (
        <>
            <h1>MSW 사용법 숙지하기</h1>
            <h2>MSW란?</h2>
            <h3>- MSW(mocking service worker)는 API를 mocking할 수 있는 라이브러리</h3>
            <h3>- 서비스 워커(Service Worker)를 사용하여 HTTP 네트워크 호출을 가로채는 API 모킹(mocking) 라이브러리</h3>
            <h2>장점</h2>
            <h3>- 테스트 코드의 의존성을 덜어내 독립적인 테스트 코드를 작성할 수 있다.</h3>
            <h3>- 실제 응답을 기다리지 않기 때문에, 속도 측면에서 비용절감이 될 수 있다.</h3>
            <h2>설치법</h2>
            <h3>1단계 : 설치</h3>
            <p>프로젝트에서 다음 명령을 실행하여 MSW를 종속성으로 설치하세요.</p>
            <p>npm install msw@latest --save-dev</p>
            <h3>2단계 : 설명</h3>
            <p>다음으로, 요청 핸들러 (예 http.get(): , )를 사용하여 네트워크를 설명합니다 graphql.query(). 요청 핸들러는 요청을 가로채고 응답을 처리하는 역할을 하는데 ,
                응답은 모의 응답, 실제 응답과 모의 응답의 조합, 또는 트래픽에 영향을 미치지 않고 모니터링만 하려는 경우에는 아무것도 하지 않을 수 있습니다.
                이 튜토리얼에서는 요청에 대한 단일 HTTP 요청 핸들러를 정의 GET https://example.com/user하고 모의 JSON 응답으로 응답해 보겠습니다.</p>

        </>

    )
}
export default Msw;