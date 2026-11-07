import { useState } from "react";

interface TodoFormProps{
    onAdd:(text: string) => void;
}

export function TodoForm({onAdd} : TodoFormProps) {
    const [text, setText] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(!text.trim()) return;
        onAdd(text.trim());
        setText("");

    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label> Add Your Task</label>
                <input type="text" value={text} placeholder="Enter your task" id="input" onChange={(e) => setText(e.target.value) } />
                <button type="button">Add</button>
                
            </form>
        </div>
    );
}