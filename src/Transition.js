import React, { Component } from 'react'
import './transition.css'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
class TransitionDemo extends Component {
    constructor (props) {
        super(props)
        this.state = {
            status: true,
            list:[]
        }
    }
    render () {
        return (
            <div>
                <CSSTransition
                    in={this.state.status} 
                    timeout={1000}
                    classNames="test"
                    unmountOnExit
                    appear={true}
                    onEntered={(el)=>{ el.style.color = "blue"}}
                >
                    <p>过渡{this.state.status?'显示':'隐藏'}</p>
                </CSSTransition>
                <button onClick={this.btnClick.bind(this)}>toggle</button>
                <TransitionGroup>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <CSSTransition
                                    timeout={1000}
                                    classNames="test"
                                    unmountOnExit
                                    appear={true}
                                    key={index}
                                    onEntered={(el)=>{ el.style.color = "blue"}}
                                >
                                    <li>{item}</li>
                                </CSSTransition>
                            )
                        })
                    }
                </TransitionGroup>
                <button onClick={this.btnClick2.bind(this)}>一组元素过渡</button>
            </div>
        )
    }
    btnClick () {
        this.setState({
            status: !this.state.status
        })
    }
    btnClick2 () {
        this.setState({
            list: [...this.state.list, 'item']
        })
    }
}
export default TransitionDemo