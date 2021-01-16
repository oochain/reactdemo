import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST } from './actionType'

const defaultState = {
    inputValue: 'Write Something',
    list: []
}
export default (state = defaultState, action) => {
    // In here Reducer can only receive 'state' and cannot change 'state'
    let newState = JSON.parse(JSON.stringify(state))
    if (action.type === CHANGE_INPUT) {
        newState.inputValue = action.value
        return newState
    }

    if (action.type === ADD_ITEM) {
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }

    if (action.type === DELETE_ITEM) {
        newState.list.splice(action.index, 1)
        return newState
    }

    if (action.type === GET_LIST) {
        newState.list = action.data.data.list
        return newState
    }

    return state
}