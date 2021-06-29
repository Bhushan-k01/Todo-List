import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const Form = ({ count, setCount, selectedTodo, setSelectedTodo, description, setDescription, inputText, setInputText, todos, setTodos, setStatus, saveLocalTodos }) => {
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    }


    const descriptionHandler = (e) => {
        setDescription(e.target.value)
        console.log(e.target.value);
        console.log(todos.description);
    }


    const submitHandler = (e) => {
        e.preventDefault();
        if (selectedTodo) {
            setTodos(previous => {
                return previous.map((todo) => {
                    if (todo.id === selectedTodo.id) {
                        return {
                            ...selectedTodo, text: inputText, description, editedDate: new Date().toLocaleString(("en-US"), { timeZone: 'Asia/Kolkata' })
                        }
                    } else {
                        return todo;
                    }
                })
            })
            setSelectedTodo(null);
        } else {

            setTodos([
                ...todos, { text: inputText, completed: false, id: Math.random() * 1000, description: description, createdDate: new Date().toLocaleString(("en-US"), { timeZone: 'Asia/Kolkata' }), editedDate: '' },
            ]);
        }
        setInputText('');
        setDescription('');


        saveLocalTodos([
            ...todos, description, { text: inputText, completed: false, id: Math.random() * 1000 },
        ]);
    };
    const statusHandler = (e) => {
        setStatus(e.target.value);

    }
    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '25ch',
            },
        },
    }));


    return (

        <div className='form-class' autocomplete="off">
            <br />
            <TextField id="outlined-basic" label="Title" variant="outlined" onChange={inputTextHandler} autocomplete="off" type="text" className='input1' value={inputText} />
            <br />
            <br />
            <TextField id="outlined-basic" label="Description" variant="outlined" type='text' onChange={descriptionHandler} value={description} />
            <br />
            <br />
            <Button variant="contained" color="secondary" onClick={submitHandler} type='submit' >
                Submit
            </Button>
            <br />
            <div className='select'>
                <select onChange={statusHandler} name='todos' className='filter-todo'>
                    <option value='all'>All</option>
                    <option value='Completed'>Completed</option>
                    <option value='Uncompleted'>Uncompleted</option>

                </select>
            </div>
        </div>


    );
}

export default Form;
