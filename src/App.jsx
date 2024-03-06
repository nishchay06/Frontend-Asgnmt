import Main from "./components/Main"
import TopBar from "./components/TopBar"
import YouMayAlsoLike from "./components/YouMayAlsoLike"

function App() {
  return (
    <>
      <div>
        <TopBar />
      </div>
      <div>
        <Main />
      </div>
      <div>
        <YouMayAlsoLike />
      </div>
    </>
  )
}

export default App
