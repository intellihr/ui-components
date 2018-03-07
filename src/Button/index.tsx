import React from 'react'

export interface ButtonProps {
    children?: any;
    className?: string;
    type?: string;
    onClick?: React.ReactEventHandler<any>;
}

export const Button: React.SFC<ButtonProps> = props => (
    <button> Sample Button </button>
)
