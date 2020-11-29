import { REMOVE_EVENT, ADD_ITEM, CHECK_TASK } from './actionType'

export function removeEvent(id) {
    return {
        type: REMOVE_EVENT,
        id
    }
}

export function checkTask(id) {
    return {
        type: CHECK_TASK,
        id
    }
}

export function add(item, id) {
    return {
        type: ADD_ITEM,
        payload: {
            label: item,
            checked: false,
            id
        }
    }
}