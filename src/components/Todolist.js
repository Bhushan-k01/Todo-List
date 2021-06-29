import Todo from './Todo';


const Todolist = ({ count, setCount, price, setPrice, setSelectedTodo, description, setDescription, inputText, setInputText, todos, setTodos, status, filteredTodos }) => {


    return (
        <div className='todo-container'>
            {/* <ul className='todo-list'> */}

            <table className={`todo-item1 `}>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Created Date</th>
                    <th>Edited Date</th>
                    <th>Actions</th>
                </tr>
                {filteredTodos.map((todo) => (
                    <Todo
                        setSelectedTodo={setSelectedTodo}
                        setTodos={setTodos}
                        setDescription={setDescription}
                        todos={todos}
                        key={todo.id}
                        todo={todo}
                        text={todo.text}
                        status={status}
                        filteredTodos={filteredTodos}
                        setInputText={setInputText}
                        inputText={inputText}
                    />
                ))
                }
            </table>


        </div>
    );
}

export default Todolist;