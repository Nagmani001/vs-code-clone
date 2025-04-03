import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ThemeProvider } from "./contexts/ThemeToggle"
import Landing from "./pages/Landing"
import Practice from "./pages/Practice"

function App() {
  return <div>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/practice" element={<Practice />} />
        </Routes>
      </BrowserRouter>

    </ThemeProvider>
  </div>
}

export default App
