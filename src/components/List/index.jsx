import React, { Component } from 'react'

class List extends Component {
  handleChangeStatus = (item) => {
    this.props.getClickItem(item)
  }

  createProgessList = (listArr) => {
    return listArr.map((item, index) => {
      return (
        <li
          key={`${item}_{index}`}
          onDoubleClick={() => this.handleChangeStatus(item)}
        >
          <input type='checkbox' />
          <p>{item}</p>
          <a href="javascript:remove(2)">-</a>
        </li>
      )
    })
  }

  createDoneList = (list) => {
    return list.map((item, index) => (
      <li key={`${item}_{index}`}>
        {item}
      </li>
    ))
  }

  render() {
    const { listArr, doneList } = this.props
    return (
      <section>
        <h2>
          正在进行
          <span id="todocount">{listArr.length}</span>
        </h2>
        <ol id="todolist" className="demo-box">
          {this.createProgessList(listArr)}
        </ol>
        <h2>
          已经完成
          <span id="donecount">{doneList.length}</span>
        </h2>
        <ul id="donelist">
          {this.createDoneList(doneList)}
        </ul>
      </section>
    )
  }
}

export default List