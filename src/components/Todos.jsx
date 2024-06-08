/* eslint-disable react/prop-types */
import TodoItem from './TodoItem';

const Todos = ({ todos, toggleCompleted, deleteTodo }) => {
    return (
        <div className="flex flex-col">
            {todos.map((todo) => (
                <div key={todo.id} className="mb-4">
                    <TodoItem
                        todo={todo}
                        toggleCompleted={toggleCompleted}
                        deleteTodo={deleteTodo}
                    />
                </div>
            ))}
        </div>
    );
};

export default Todos;
