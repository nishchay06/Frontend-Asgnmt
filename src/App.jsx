import Main from "./components/Main"
import RightBar from "./components/RightBar"
import TopBar from "./components/TopBar"

function App() {
  return (
    <>
      <div>
        <TopBar />
      </div>
      <div>
        <div>
          <Main />
        </div>
        <div>
          <RightBar />
        </div>
      </div>
    </>
  )
}

export default App
