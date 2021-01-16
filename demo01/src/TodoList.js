import React, { Component } from 'react';
import store from './store'
import { changeInputAction, addItemAction, deleteItemAction, getListAction } from './store/actionCreators'
import TodoListUI from './TodoListUI'
import axios from 'axios'

class TodoList extends Component {

    constructor(props) {
        super(props)
        this.state = store.getState()
        // console.log(this.state)
        this.changeInputValue = this.changeInputValue.bind(this)
        this.clickBtn = this.clickBtn.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange)
    }

    render() {
        return (
            <TodoListUI
                inputValue={this.state.inputValue}
                changeInputValue={this.changeInputValue}
                clickBtn={this.clickBtn}
                list={this.state.list}
                deleteItem={this.deleteItem}
            />
        );
    }

    componentDidMount() {
        axios.get('http://localhost:7300/mock/5ffc3f93ecdc71001838a5a7/example/getList')
            .then((res) => {
                const data = res.data
                const action = getListAction(data)
                store.dispatch(action)
            })
    }

    changeInputValue(e) {
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
    }

    storeChange() {
        this.setState(store.getState)
    }

    clickBtn() {
        const action = addItemAction()
        store.dispatch(action)
    }

    deleteItem(index) {
        const action = deleteItemAction(index)
        store.dispatch(action)
    }
}

export default TodoList;