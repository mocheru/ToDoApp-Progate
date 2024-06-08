/* eslint-disable react/prop-types */
import { useState } from 'react';

const TodoForm = ({ addTodo }) => {
    const [title, setTitle] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        addTodo(title);
        setTitle('');
    };

    const handleChangeTitle = (event) => {
        setTitle(event.target.value);
    };

    console.log(title);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Add your Todo"
                    onChange={handleChangeTitle}
                    value={title}
                    className="border border-gray-300 p-2 flex-grow mr-2 w-3/4 my-4 rounded"
                />
                <button className="bg-blue-500 text-white p-2 rounded">Add Todo</button>
            </form>
        </div>
    );
};


export default TodoForm;
