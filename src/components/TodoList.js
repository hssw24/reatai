import React from "react";
import {useState, useEffect} from "react";

// Verbindung zu Todo.js Uaaahhhh ..... Hilfe!!!
import Todo from "./Todo";

// Array mit 2 Spalten und 3 Zeilen; wird überflüssig dur "Add Todo"
//const alltodos = [
//    { description: "Einkaufen", done: true},
//    { description: "Sport", done: true},
//    { description: "Programmieren", done: false},
//];

const TodoList = () => {
    
    const[opencount, countOpenTodos] = useState(0);
    const[todos, setTodos] = useState(() => {
        const items = localStorage.getItem("items");
        const parsed = JSON.parse(items);
        return parsed || [];
    }); 
//    {/*alltodos wird in useState durch [] ersetzt (siehe const alltodos)*/ */}
//    um gespeicherte items auch wieder zu laden, wird [] ersetzt durch Funktion ...
    const[textinput, settextinput] = useState("");

    const changeText = (e) => {
        console.log(e.target.value);
        settextinput(e.target.value);
    }

    const submit = (e) => {
        e.preventDefault();
        const newTodos = [...todos, { description: textinput, done: false }];
        setTodos(newTodos);
        settextinput("");
    }

    const countOpen = () => {
        const donetodos = todos.filter((item) => {
            return !item.done;
        })
        countOpenTodos(donetodos.length)
    };

    const changeTodo = (index) => {
        console.log(index+" change");
        const newTodos = [...todos];
        if(newTodos[index].done) {
            newTodos[index].done=false;
        } else {
            newTodos[index].done=true;
        }
        setTodos(newTodos);
    };

    const deleteTodo = (index) => {
        console.log(index+" delete");
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    useEffect(()=>{
        countOpen();
        localStorage.setItem("items", JSON.stringify(todos));
    }, [todos]);

    return (
        <div className="shadow-xl hover:shadow-lg">
            <div className="text-center bg-gray-500 text-white py-4 font-semibold">
                <h1 className="text-3xl">Unsere Todos</h1>
                <h2>offene Todos: {opencount}</h2>
                <form className="grid grid-cols-3 py-2">
                    <input 
                        onChange={changeText}
                        type="text"
                        value={textinput}
                        placeholder="Neues Todo ..."
                        className="col-span-2 p-2 text-gray-900">
                    </input>
                    <input 
                        onClick={submit}
                        type="submit"
                        value="Add Todo"
                        className="col-span-1 bg-yellow-500 text-gray-900 cursor-pointer">
                    </input>
                </form>
            </div>
            {/* index in .map, damit Browserhinweis auf "unique key" verschwindet */}
            {todos.map((item, index) => {
                return <Todo 
                    description={item.description} 
                    done={item.done} 
                    key={index}
                    index={index}
                    onChangeTodo={changeTodo}
                    onDeleteTodo={deleteTodo}
                ></Todo>
            }
            )}

            {/* Übergabe an Todo.js mit 2 Parametern 
            <Todo description={todos[0].description} done={todos[0].done}></Todo>
            <Todo description={todos[1].description} done={todos[1].done}></Todo>
            <Todo description={todos[2].description} done={todos[2].done}></Todo>*/}
        </div>
    )
};

export default TodoList;