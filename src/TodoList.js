import React, {Component,Fragment} from 'react'
import './style.css'
import TodoItemList from './TodoItemList'
class TodoList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inputValue: '',
      list: []
    }
    this.handleButton = this.handleButton.bind(this)
  }
  render(){
    return (
      <Fragment>
        <div className="box" ref = 'box'>
          {
            //todolist deomo  注释方法一
          }
          <label htmlFor="ipt">关联input</label>
          <input 
            id = "ipt"
            className = "input"
            value = {this.state.inputValue}
            onChange = {this.handleInput.bind(this)}
            ref = {(input) => {this.input = input}}
          />
          {/* todolistdemo 注释方法二 */}
          <button onClick = {this.handleButton.bind(this)}>提交</button>
        </div>
        <TodoItemList 
          list = {this.state.list}  
          deleteItem = {this.handleItem.bind(this)}
        />
      </Fragment>
    )
  }
  handleInput (e) {
    // const value =  e.target.value
    // const value = this.input.value
    this.setState({
      inputValue: this.input.value
    })
  }
  handleButton () {
    if (this.state.inputValue) {
      this.setState({
        list: [...this.state.list,this.state.inputValue],
        inputValue: ''
      })
    }
  }
  handleItem (index) {
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({ list })
  }
}
export default TodoList