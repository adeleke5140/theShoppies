import { QueryClient, QueryClientProvider } from "react-query"

import { ReactQueryDevtools } from "react-query/devtools"

const queryClient = new QueryClient()
import Header from "../components/Header.jsx"
import Main from "../components/Main.jsx"

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Header title="the shoppies" />
        <Main />
      </div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default App
