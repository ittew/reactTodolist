import React from 'react'
import PropTypes from 'prop-types'
class TodoItemList extends React.Component {
    render () {
        console.log('child render')
        return <ul>{this.getItem()}</ul>
    }
    handleItem (index) {
        this.props.deleteItem(index)
    }
    getItem () {
        return  this.props.list.map((item, index) => {
            return (
                <li 
                    key = {index}
                    onClick = {this.handleItem.bind(this, index)}
                    dangerouslySetInnerHTML = {{__html: item}}
                ></li>
            )
        })
    }
    shouldComponentUpdate (nextProps, nextState) {
        console.log(nextProps)
        if (nextProps.list !== this.props.list) {
            return true
        } else {
            return false
        }
    }
}
TodoItemList.propTypes = {
    list: PropTypes.array,
    deleteItem: PropTypes.func,
    test: PropTypes.string.isRequired
}
TodoItemList.defaultProps = {
    test: 'test'
}
export default TodoItemList