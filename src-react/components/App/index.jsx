import React, { Component } from 'react'
import Header from '../Header'
import List from '../List'
import Footer from '../Footer'
import './index.scss'

const computedCheckItem = (arr, curIndex) => {
  arr.splice(curIndex, 1)
  return arr
}

class App extends Component {
  state = {
    listArr: [],
    doneList: [],
    isShowInput: false,
    inputVal: ''
  }

  getInputData = (val) => {
    const { listArr } = this.state
    this.setState({
      listArr: [val, ...listArr]
    })
  }

  addDoneData = (item, index) => {
    const { listArr, doneList } = this.state
    const progessArr = computedCheckItem(listArr, index)
    this.setState({
      listArr: progessArr,
      doneList: [item, ...doneList]
    })
  }

  addProcessData = (item, index) => {
    const { listArr, doneList } = this.state
    const progessArr = computedCheckItem(doneList, index)
    this.setState({
      listArr: [item, ...listArr],
      doneList: progessArr
    })
  }

  delProcessData = (curItem, index) => {
    const { listArr } = this.state
    const progessArr = computedCheckItem(listArr, index)
    this.setState({
      listArr: progessArr,
    })
  }

  delDoneData = (curItem, index) => {
    const { doneList } = this.state
    const progessArr = computedCheckItem(doneList, index)
    this.setState({
      doneList: progessArr,
    })
  }

  changeProInputVal = (val, curIndex) => {
    const valArr = [...this.state.listArr]
    valArr.splice(curIndex, 1, val)
    this.setState({
      listArr: valArr
    })
  }

  render() {
    const { listArr, doneList, isShowInput, inputVal } = this.state
    return (
      <div>
        <Header 
          getInputData={this.getInputData} 
        />
        <List  
          listArr={listArr}
          doneList={doneList}
          isShowInput={isShowInput}
          inputVal={inputVal}
          addDoneData={this.addDoneData}
          addProcessData={this.addProcessData}
          delProcessData={this.delProcessData}
          delDoneData={this.delDoneData}
          changeProInputVal={this.changeProInputVal}
        />
        <Footer />
      </div>
    )
  }
}

export default App