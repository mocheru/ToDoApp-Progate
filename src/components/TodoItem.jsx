/* eslint-disable react/prop-types */

const TodoItem = ({ todo, toggleCompleted, deleteTodo }) => {
    const getTodoTitleStyle = () => {
        return todo.completed ? 'line-through text-slate-400' : 'none';
    }

    return (
        <div className="flex flex-col bg-slate-200 p-4 rounded-lg shadow-xl">
            <div className="flex items-center">
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleCompleted(todo.id, !todo.completed)}
                    className="mr-2"
                />
                <p className={`flex-grow my-2 ${getTodoTitleStyle()}`}>{todo.title}</p>

                <button
                    onClick={() => deleteTodo(todo.id)}
                    className="bg-red-500 text-white  w-14 h-8 flex items-center justify-center rounded"
                >
                    Delete
                </button>
            </div>
        </div>
    );
}


export default TodoItem;
