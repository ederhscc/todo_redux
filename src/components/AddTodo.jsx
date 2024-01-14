import { useState } from "react";
import {useDispatch} from "react-redux"
import {addTodo} from "../slices/todoSlice"

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()

    if(input.trim() === "") return

    dispatch(addTodo(input))
    setInput("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Adicionar uma tarefa..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit"> Enviar</button>
    </form>
  );
};

export default AddTodo;
