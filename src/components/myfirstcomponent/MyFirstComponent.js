import React from 'react'
import "./MyFirstComponent.css";

export const MyFirstComponent = (props) => {
    return (
        <React.Fragment>
            <h1 className="mfc__header"> 
            {props.name} 
            {props.age}
            </h1>
        </React.Fragment>
    )
}