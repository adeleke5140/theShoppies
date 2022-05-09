import Header from "../components/Header.jsx"
import Main from "../components/Main.jsx"

import { Toaster } from "react-hot-toast"

const App = () => {
  return (
    <div className="App">
      <Header title="the shoppies" />
      <Main />
      <Toaster />
    </div>
  )
}

export default App
