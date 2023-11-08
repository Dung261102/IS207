import React, { useState } from 'react'

const EX2 = () => {
    const [name] = useState("Adam");
    const [age] = useState(35);
    return (
        <>
            <p>My name is {name}</p>
            <p>My age is {age}</p>
        </>
    );
}

export default EX2