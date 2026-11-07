import { TodoItems } from "./TodoItems";
import type { Todo } from "../types/todo";

type TaskListProps = {
    todos: Todo[];
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
    onEdit: (id: string, newText: string) => void;

}

export function TodoList({todos, onToggle, onDelete, onEdit} : TaskListProps) {
    if(todos.length === 0) {
        return <p>No task here.</p>
    }
    return(
        <div>
            <ul>
                {todos.map((todo) => (
                    <TodoItems key={todo.id}
                    todo={todo}
                    onToggle={onToggle}
                    onEdit={onEdit}
                    onDelete={onDelete} />
                ))}

            </ul>
        </div>
    );
}
