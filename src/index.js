import React from 'react';
import ReactDOM from 'react-dom';
let q = 123
function App() {
  return (
    <div className="App">baba<Son abc={q} /></div>
  )
}

class Son extends React.Component {
  constructor() {
    super()
    this.state = {
      n: 0
    }
  }
  add() {
    this.setState({ n: this.state.n + 1 })
    console.log(this.n)
    console.log(this.state.n)//是吧原来的n进行更改的，不过时异步的更改
  }
  render() {
    return (
      <div className="son">
        儿子 n:{this.state.n} {this.props.abc}
        <button onClick={() => { this.add() }}>+1
        </button>
        <Grandson abc="abc" />
      </div>
    )
  }
}


const Grandson = (props) => {
  const [n, setN] = React.useState(0)
  return (
    <div className="FFF">
      算子n:{n} {props.abc}
      <button onClick={() => setN(n + 1)}>+1</button>
    </div>
  )//setN永远不会改变n，产生一个新的N
}
ReactDOM.render(<App />, document.getElementById('root'))