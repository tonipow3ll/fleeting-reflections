import React, { useState } from 'react';
import { Columns } from 'react-bulma-components';
import { createExpirationTime, createId } from '../utils/expiration';


export function NewThoughtForm(props:any) {
    const [text, setText] = useState('')

    const handleTextChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setText(event.target.value);
    };

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault()
        const post = {
            id: createId(),
            text: text,
            expiresAt: createExpirationTime()
        }

        if (text.length > 0){
            props.addThought(post)
            setText('')
        }
    }
    return(
       
        <Columns className="screamcontainer is-centered justify-content-center pt-5">
        <Columns.Column  size="one-quarter">
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            aria-label="What's on your mind?"
            placeholder="What's on your mind?"
            value={text}
            onChange={handleTextChange}
            />
            <input className="addBtn" type="submit" value="+" />
        </form>
        </Columns.Column>
        </Columns>
        
    )
}

