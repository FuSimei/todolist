import React, { Component } from 'react'

class List extends Component {
  // 进行中更改选中状态为完成
  changeProToDone = (e, item, index) => {
    this.props.addDoneData(item, index)
  }

  changeDoneToPro = (e, item, index) => {
    this.props.addProcessData(item, index)
  }

  clickProcessData = (item, index) => {
    this.props.delProcessData(item, index)
  }

  clickDoneData = (item, index) => {
    this.props.delDoneData(item, index)
  }

  changeInputVal = (e, index) => {
    this.props.changeProInputVal(e.target.value, index)
  }

  createProgessList = (listArr) => {
    return listArr.map((item, index) => {
      return (
        <li key={`${item}_${index}`}>
          <input
            type='checkbox'
            onChange={(e) => this.changeProToDone(e, item, index)}
          />
          <p>
            <input
              value={item}
              onChange={(e) => this.changeInputVal(e, index)}
            />
          </p>
          <a
            href="javascript:remove(2)"
            onClick={() => this.clickProcessData(item, index)}
          >
            -
          </a>
        </li>
      )
    })
  }

  createDoneList = (list) => {
    return list.map((item, index) => (
      <li key={`${item}_${index}`}>
        <input
          type='checkbox'
          checked={true}
          onChange={(e) => this.changeDoneToPro(e, item, index)}
        />
        <p>{item}</p>
        <a
          href="javascript:remove(2)"
          onClick={() => this.clickDoneData(item, index)}
        >
          -
          </a>
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
        {
          !!doneList.length &&
          <>
            <h2>
              已经完成
              <span id="donecount">{doneList.length}</span>
            </h2>
            <ul id="donelist">
              {this.createDoneList(doneList)}
            </ul>
          </>
        }
      </section>
    )
  }
}

export default List