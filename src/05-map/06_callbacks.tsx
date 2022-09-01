import React from "react";

export const User = ()=>{

    const deleteUser = (event:MouseEvent<HTMLButtonElement>) => {
        event.currentTarget
    }
    const onSave = () =>{
        alert('ugl')
    }

const onNameChanged = () => {

}
const focusLostHandler = () => {

    console.log('gjhv')
}

    return <div><textarea onChange={onNameChanged}>Dimych</textarea>
        <textarea onBlur={focusLostHandler}>Dimych</textarea>
        <button onClick={deleteUser}>delete</button>
        <button onClick={deleteUser}>save</button>
    </div>
}