import { ADD_ITEM, REMOVE_EVENT, CHECK_TASK } from './../actions/actionType';


const initialState = {
    items: [
        { label: 'yrtyrty', checked: false, id: 1 }
    ]
}

export function motionReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        case REMOVE_EVENT:
            return {
                ...state,
                items: state.items.filter(el => el.id !== action.id)
            }
        case CHECK_TASK:
            return {
                ...state,
                items: state.items.map(el => el.id === action.id ? { ...el, checked: !el.checked } : el)
            }
        default:
            return {
                ...state
            }
    }
}