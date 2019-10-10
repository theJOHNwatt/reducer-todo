import React, {useState, useReducer} from "react";
import {initialState, reducer} from "../reducers/TodoReducer";


export const TodoList = () => {

    const [state, dispatch] = useReducer(reducer, initialState);
    const [input, setInput] = useState();

    
    

    const handleChanges = e => {
        e.preventDefault()
        setInput(e.target.value)
    }

  
    // console.log('this is input',input)
    
    return(
        <div>
            <form>
                <input
                    className="inputField"
                    type="text"
                    value={input}
                    placeholder= 'Enter Todo Items'
                    name="item"
                    onChange={e => handleChanges(e)}
                />
            </form>

            <button onClick={() => 
            dispatch({type:"ADD_ITEM", payload: input})} > 
            Add </button>
            
            {state.todo.map(item => (
                <div key={item.id} onClick={() => dispatch({type: 'TOGGLE_TODO', payload: {item}})}>
                <p >{item.item}</p>
                </div>
            ))} 
            <button onClick={() => dispatch({type:'CLEAR_COMPLETED'})}>Clear Completed</button>
        </div>
    )
}
export default TodoList;