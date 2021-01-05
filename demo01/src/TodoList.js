import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'

const data = [
  '8am Morning meeting',
  '9am Meeting with project manager',
  '10am Coding'
]

class TodoList extends Component {

  render() {
    return (
      <div style={{ margin: '10px' }}>
        <div>
          <Input
            placeHolder='Write Something'
            style={{ width: '250px', marginRight: '10px' }}
          />
          <Button type="primary">Add</Button>
        </div>
        <div style={{ margin: '10px', width: '300px' }}>
          <List
            bordered
            dataSource={data}
            renderItem={item => (<List.Item>{item}</List.Item>)}
          />
        </div>
      </div>
    );
  }
}

export default TodoList;