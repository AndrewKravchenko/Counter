import React from 'react';
import './App.css';

type ButtonType = {
    title: string
    disabled: boolean
    onClick: () => void
}

export function Button(props: ButtonType) {
    return (
        <button className="button"
            title={props.title}
                disabled={props.disabled}
                onClick={props.onClick}>
            {props.title}
        </button>
    )
}
