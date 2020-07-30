import React from 'react';

function FormField({label, type, name , value, onChange}) {
    return ( 
        <div>
        <label>
             {label}:
             <input
               type={type}
               value={value.nome}
               name={name}
               onChange={onChange}
             />
           </label>
        </div> 
    )
}

export default FormField;