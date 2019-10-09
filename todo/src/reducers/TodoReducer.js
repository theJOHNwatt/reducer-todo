export const initialState = {todo:[]};


export const reducer = (state = initialState, action) => {
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
        case 'TOGGLE_COMPLETED':
            return state.todo.map(item => {
                if (item.id !== action.id) {
                    return item;
                }
                return {
                    ...item,
                    completed: !item.completed
                }
            })
        case 'CLEAR_COMPLETED':
            return {
                ...state,
                state: state.filter(item => !item.completed)

            }
            default:
                return state;
    }
}