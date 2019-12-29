import React, { Component } from 'react'

class Header extends Component {
  state = {
    inputVal: ''
  }

  changInputVal = (e) => {
    const event = e || window.event
    this.setState({
      inputVal: event.target.value
    })
  }

  // 键盘回车时获取到输入数据并清空输入框
  getInputVal = (e) => {
    const event = e || window.event
    if (event.keyCode === 13) {
      this.props.getInputData(this.state.inputVal)
      this.setState({
        inputVal: ''
      })
    }
  }

  render() {
    const { inputVal } = this.state
    return (
      <header>
        <section>
          <div>
            <label>ToDoList</label>
            <input
              value={inputVal}
              placeholder="添加ToDo"
              required="required"
              onChange={this.changInputVal}
              onKeyUp={this.getInputVal}
            />
          </div>
        </section>
      </header>
    )
  }
}

export default Header