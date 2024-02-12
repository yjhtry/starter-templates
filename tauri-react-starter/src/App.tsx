import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <button className="text-black px-3 py-2 rounded-md m-20 bg-gray-300" onClick={() => setCount(v => v + 1)}>{count}</button>
    </>
  )
}

export default App
