import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';

function Todos() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <div>Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li key={todo.id}>
            <div>{todo.text}</div>
            <button onClick={() => dispatch(removeTodo(todo.id))}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;


