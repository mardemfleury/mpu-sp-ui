import React from 'react'
import './Input.css'
import { useForm } from 'react-hook-form';

declare interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
}

const Input: React.FC<InputProps> = (props) => {

    return <div className='AppInput'>
        <label>
            <span >{ props.label }</span>
            
            <input  
                { ...props }
            />
        </label>
    </div>
}

export default Input