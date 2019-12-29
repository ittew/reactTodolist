import React, { Component } from 'react'
class Todo extends Component {
    constructor(props){
        super(props)
        this.state = {
            inputValue: '',
            list: []
        }
    }
    render(){
        return (
            <div>
                <input 
                    value={this.state.inputValue} 
                    onChange={this.changeInput.bind(this)}
                />
                <button onClick={this.btnHandle.bind(this)} >提交</button>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return <li key={index} onClick={this.ItemClickDelete.bind(this, index)}>{item}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
    changeInput(e){
        this.setState({
            inputValue: e.target.value
        })
    }
    btnHandle () {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })

    }
    ItemClickDelete (index) {
        const list = [...this.state.list]
        list.splice(index, 1)
        this.setState({list})
    }
}
export default Todo