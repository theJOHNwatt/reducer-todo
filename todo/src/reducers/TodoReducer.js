export const initialState = {todo:[{item: 'Clean', id: 1, completed: false}, {item: 'Grocery Shopping', id: 2, completed: false}]};


export const reducer = (state , action) => {
    console.log(state)
    switch(action.type){
        case "ADD_ITEM":
            const newItem = {
                item: action.payload,
                id: Date.now(),
                completed: false
            }
        
            return{
                ...state, todo: [...state.todo, newItem]
            };
             case 'TOGGLE_TODO':
            return  { todo: state.todo.map(item => {

                if (item.id !== action.payload.id) {
                    return {
                        ...item,
                        completed: !item.completed
                    }
                }
                else {
                    return item
                
            }
            })}
        case 'CLEAR_COMPLETED':
            return {
                ...state,
                todo: state.todo.filter(item => item.completed)

            }
            default:
                return state;
    }
}