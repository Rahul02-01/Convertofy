import React from 'react'

export default function Alert(props) {
    return (
        <div style={{height : '50px'}}>
        <div className={`alert alert-${props.alert.message}`} role="alert">
            <strong>{props.alert.message }</strong> { props.alert.info}
        </div>
        </div>
    )
}
