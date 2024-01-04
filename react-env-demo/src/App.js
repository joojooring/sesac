import { useEffect } from 'react'

function App() {
  const getData = async () => {
    // npm start 명령어로 실행 시
    console.log('HOST:', process.env.REACT_APP_HOST) // http://localhost:8000
    console.log('TEST:', process.env.REACT_APP_ENV_TEST) // develop
    // # npm run build > # serve -s build 명령어로 실행 시 아래와 같이 출력됨.
    // http://000.000.000.000:8000
    // prod

    // [API 요청 예시에 적용]
    // const response = await fetch(`${process.env.REACT_APP_HOST}/api/get`)
    // const data = await response.json()
  }
  useEffect(() => {
    getData()
  }, [])
  return <div className="App"></div>
}

export default App
