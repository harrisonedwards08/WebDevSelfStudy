import React, {useState} from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './components/model';
import TodoList from './components/TodoList';

// component type react functional component
// could also be React.ReactNode
const App: React.FC = () =>  {

  const [todo, setTodo] = useState<string>("");
  const[todos, setTodos] = useState<Todo[]>([]);


  //exit focus on enter or "add"
  const handleAdd = (e: React.FormEvent) => { 
    e.preventDefault();

    if(todo){
      setTodos([...todos,{id: Date.now(),todo,isDone:false}]);
      setTodo("");
        }
  };

   return(
    <div className = "App">
      <span className= 'heading'> ToDo before Death</span>
      <InputField todo={todo} setTodo={setTodo}handleAdd={handleAdd}/>
      <TodoList todos = {todos} setTodos = {setTodos}/>

    </div>
  );
}

export default App;
