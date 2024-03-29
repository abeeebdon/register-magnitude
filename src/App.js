import Signup from './signup/Signup'
import { useState } from 'react'
function App() {
  const [success, setSuccess] = useState(false)
  return (
    <main className="w-full max-w-[400px]  mx-auto my-auto mt-8 px-2 py-4">
      <Signup success={success} setSuccess={setSuccess} />
    </main>
  )
}
export default App
