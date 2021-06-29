import React from "react";
import { Button } from "@material-ui/core";


const Todo = ({ setSelectedTodo, setDescription, setInputText, text, todo, todos, setTodos }) => {
    function deleteHandler() {
        setTodos(todos.filter(el => el.id !== todo.id))
        console.log(todo);
        setInputText('');
        setDescription('');
        // setPrice('')

    }
    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))

    }

    const editHandler = () => {
        console.log(todo);
        setInputText(text);
        setDescription(todo.description);
        setSelectedTodo(todo);
    }
    return (
        < >
            <tr>

                <td>{text}</td>
                <td>{todo.description}</td>
                <td>{todo.createdDate}</td>
                <td>{todo.editedDate}</td>

                <td className='all-bts'>
                    <Button onClick={completeHandler} variant="contained" className='complete-btn'>✔<i className=''></i></Button>
                    <br />
                    <br />
                    <Button variant="contained" color="primary" onClick={editHandler} >Edit</Button>
                    <br />
                    <br />
                    <Button onClick={deleteHandler} variant="contained" color="secondary" className='delete-button'>Delete</Button>
                </td>

            </tr>
        </ >
    );

}

export default Todo;