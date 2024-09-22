import React from 'react'

export default function GInput({ label, type, placeholder, helperText }) {
    return (
        <div className="form-group my-3">
            <label className='text-capitalize'>{label}</label>
            <input type={type} placeholder={placeholder} className="form-control" />
            <span class="form-text m-b-5">{helperText}</span>
        </div>
    )
}
