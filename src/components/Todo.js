import React from "react";

// props nimmt 2 Parameter an - wer kann das versehen???
// const Todo = (props) => {
//    <h1>{props.description} == {props.done ? "Fertig!" : "Noch zu erledigen!"}</h1>

const Todo = ({ description, done, onChangeTodo, onDeleteTodo, index }) => {

  // changeTodo wartet auf Klick - changeTodo() führt sofort aus! 

  return (
    <div>
      <div
        className={
          done
            ? "flex justify-between p-2 items-center bg-green-400 text-decoration-line: line-through"
            : "flex justify-between p-2 items-center bg-red-400"
        }
      >
        <h1 className="text-lg cursor-pointer" onClick={() => { onChangeTodo(index) }}>
          {description} </h1>
        <h1>({done ? "Fertig!" : "Noch zu erledigen!"})</h1>

        <button
          className="text-lg bg-green-800 p-2 text-white"
          onClick={() => { onDeleteTodo(index) }}>
          Löschen
        </button>
      </div>

      {/* Anzeige props.done mit (logischer) Bedingung: ? = DANN und : = SONST 
            <h1>{description} == {done ? "Fertig!" : "Noch zu erledigen!"}</h1> 
            <h1>{done ? "Fertig!" : "Noch zu erledigen!"}</h1> */}
    </div>
  );
};

export default Todo;


//        done = !done;
//        console.log(done); 
