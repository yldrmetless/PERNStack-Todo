import './App.css'
import InputTodo from './components/InputTodo'
import ListTodos from './components/ListTodos'

function App() {

  return (
    <div className='w-full py-36 flex justify-center items-center flex-col gap-y-12'>
      <InputTodo/>
      <ListTodos/>  
    </div>
  )
}

export default App
