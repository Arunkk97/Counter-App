import './App.css'
import Counter from './component/Counter'


function App() {

  return (
    <>
    <h3 className=' text-center mt-4 fw-bolder'>Counter App</h3>
    
    <div style={{height:"80vh"}} className='d-flex justify-content-center'>
      <Counter/>
    </div>
   
      
    </>
  )
}

export default App
