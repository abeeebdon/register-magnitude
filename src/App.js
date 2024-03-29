import { Route, Routes } from 'react-router-dom'
import Success from './Success'
import Home from './Home/Index'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  )
}
export default App
