import React from 'react'
const validationComponent = (props)=> {
    return (
    props.InputLength < 5 ? 
    <p>Text Too Short</p>:
    <p>Text Long Enough</p>
    
    )
}

export default validationComponent;