import { useLoaderData } from 'react-router-dom'
import './App.css'

function App() {

  const coffees = useLoaderData();
  
  return (
    <>
     
      <h1 className='text-4xl text-purple-600 text-center'>Coffee Store</h1>
      
    </>
  )
}

export default App
