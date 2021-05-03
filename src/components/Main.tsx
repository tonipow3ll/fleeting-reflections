import React, {useEffect} from 'react';
import { Columns, Container } from 'react-bulma-components';

export function Thought(props:any) {
    const { thought, removeThought } = props;

    const handleRemoveClick = () => {
        removeThought(thought.id)
    }

    useEffect(() => {
        const timeRemaining = thought.expiresAt - Date.now();
        const timeout = setTimeout(() => {
            removeThought(thought.id)
        }, timeRemaining)
    }, [thought])

    return(
      <div>
        <Container className="screamcontainer">
       {/* <Columns className="is-centered justify-content-center">
        <Columns.Column  size="one-quarter"> */}
        <li className="thought">
        <button
          aria-label="Remove thought"
          className="remove-button"
          onClick={handleRemoveClick}
        >
          &times;
        </button>
        <div className="text">{thought.text}</div>
      </li>
      {/* </Columns.Column>
        </Columns> */}
        </Container>
      </div>
    )
}