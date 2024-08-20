import { BrowserRouter } from "react-router-dom"
import Routes from "./Routes"
import { Provider } from "react-redux"
import { store } from "./services/store"
import { Toaster } from "sonner"

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
        <Toaster richColors position="top-center" />
      </BrowserRouter>
    </Provider>
  )
}

export default App
