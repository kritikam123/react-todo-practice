import type { Todo } from "../types/todo";

type TodoItemProps = {
    todo: Todo;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
    onEdit: (id: string, newText: string) => void;
}

export function TodoItems({todo, onToggle, onDelete, onEdit} : TodoItemProps) {

    const handleEdit = () => {
        const newText = prompt("Edit your todo", todo.text);

        if(newText !== null && newText.trim() !== "")
        {
            onEdit(todo.id, newText.trim());
        }
    };
    return(
        <li>
            

            <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)} />
            <span onClick={() => onToggle(todo.id)}>{todo.text}</span>

            <button type="button" onClick={handleEdit}>Edit</button>
            <button onClick={() => onDelete(todo.id)}>Delete</button>

        </li>
    );
}