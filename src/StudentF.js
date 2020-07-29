import React from 'react';

// function component
const Student = props => {
    return (
            <div>
              <h1>Welcome Again,</h1>
              <h1>Hi,I am a Student name is {props.name}</h1>
            </div>
        )
}

// export function component
export default Student;