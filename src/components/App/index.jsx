import React, { Component } from 'react'
import Header from '../Header'
import List from '../List'
import Footer from '../Footer'
import './index.scss'

class App extends Component {
  state = {
    listArr: [],
    doneList: []
  }

  getInputData = (val) => {
    const { listArr } = this.state
    this.setState({
      listArr: [val, ...listArr]
    })
  }

  getClickItem = (item) => {
    const { listArr, doneList } = this.state
    const progessArr = listArr.filter(list => list !== item)
    this.setState({
      listArr: progessArr,
      doneList: [item, ...doneList]
    })
  }

  render() {
    const { listArr, doneList } = this.state
    return (
      <div>
        <Header 
          getInputData={this.getInputData} 
        />
        <List  
          listArr={listArr}
          doneList={doneList}
          getClickItem={this.getClickItem}
        />
        <Footer />
      </div>
    )
  }
}

export default App