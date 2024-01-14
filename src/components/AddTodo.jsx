import { useState } from "react";

const AddTodo = () => {
  const [task, setTask] = useState("");
  return (
    <form>
      <input
        type="text"
        placeholder="Adicionar uma tarefa..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit"> Enviar</button>
    </form>
  );
};

export default AddTodo;
