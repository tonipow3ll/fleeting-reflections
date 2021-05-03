import React, { useState } from 'react';
import { createExpirationTime, createId } from '../utils/expiration';

export function NewThoughtForm(props:any) {
    const [text, setText] = useState('')

    const handleTextChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setText(event.target.value);
    };

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault()
        const thought = {
            id: createId(),
            text: text,
            expiresAt: createExpirationTime()
        }

        if (text.length > 0){
            props.addThought(thought)
            setText('')
        }
    }
    return(
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            aria-label="What's on your mind?"
            placeholder="What's on your mind?"
            value={text}
            onChange={handleTextChange}
            />
            <input type="submit" value="+" />
        </form>
    )
}

