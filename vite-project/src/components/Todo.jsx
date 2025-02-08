
import React, { useRef, useState } from "react"
import Todos from '../assets/todo_icon.png'
import TodoItems from './TodoItems'

const todo = () => {
  const [todoList,setTodoList] = useState([])

  const inputRef = useRef()
  const add = () => {
        const inputText = inputRef.current.value.trim();
        if(inputText === ""){
          return null ;
        }
        const newTodo = {
          id: Date.now(),
          text: inputText,
          isComplete: false,
        }
        setTodoList((prev) => [...prev,newTodo]
        

        )
        inputRef.current.value = "";
  }






  return (
    <div className='bg-white place-self-center  w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>


      {/* -------------------title---------------- */}
      <div className='flex items-center mt-7 gap-2 '>
       
    <img className="w-9" src={Todos} alt="todo-icon" />
        <h1 className='text-3xl font-semibold'>TO-DO</h1>


      </div>
      {/* ------------------input box-------- */}
      <div className="flex items-center my-7 bg-gray-200 rounded-full">
        <input ref={inputRef} className="bg-transparent border-0 outline-0 flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600" type="text" name="" placeholder="add your task" />
        <button onClick={add} className="border-none rounded-full w-32 h-14 text-white text-lg cursor-pointer bg-orange-600 font-md">ADD +</button>
      </div>
      {/* --------------------todo list----------- */}

      <div>
        
        <TodoItems text="learn coding"/>
        <TodoItems text="learn   gratestack"/>
        
      </div>


    </div>
  )
}

export default todo
