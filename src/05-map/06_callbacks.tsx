import React, {ChangeEvent} from "react";

export const User = ()=>{

    const deleteUser = (event:MouseEvent<HTMLButtonElement>) => {
        return (event.currentTarget.name)
    }
    const onSave = () =>{
        alert('ugl')
    }

const onNameChanged = () => {

}

const onAgeChanged = (event:ChangeEvent<HTMLInputElement>) => {
return ('age change: ' + event.currentTarget.value)
}
const focusLostHandler = () => {

    console.log('gjhv')
}

    return <div><textarea onChange={onNameChanged}
                          onBlur={focusLostHandler}>Dimych</textarea>
        <input onChange={onAgeChanged} type={'number'}/>
        <button name='delete' onClick={deleteUser}>delete</button>
        <button name='save' onClick={deleteUser}>save</button>
    </div>
}