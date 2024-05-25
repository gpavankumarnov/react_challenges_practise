import * as actions from './ActionTypes'


export const addTask = (payload) => {
    console.log("payload", payload)
    return {
        type: actions.Add,
        payload:payload
    }
}

export const updateTask = (payload) => {
    console.log("update", payload)
    return {
        type: actions.Update,
        payload:payload
    }
}

export const deleteTask = (payload) => {
    return {
        type: actions.Delete,
        payload:payload
    }
}



