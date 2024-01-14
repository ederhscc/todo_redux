import React from "react";

const TodoList = () => {
  return (
    <div>
      <button>Todas</button>
      <button>Completas</button>
      <button>Incompletas</button>
      <ul>
        <li>
          <span>Algum texto de tarefa</span>
          <button>Remover</button>
        </li>
        <li>
          <span className="line-through">Algum texto de tarefa</span>
          <button>Remover</button>
        </li>
      </ul>
    </div>
  );
};

export default TodoList;
