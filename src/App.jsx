import React, { Component} from 'react';

class App extends Component {

  state = {
    step: this.props.step || 1,
    value: this.props.value ||0
  }

  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.up = this.up.bind(this);
    this.down = this.down.bind(this);
    this.reset = this.reset.bind(this);
  }
  up() {
    let state = this.state;
    state.counter+= this.state.step;
    this.setState(state);
  }
  down(){
    let state = this.state;
    state.counter -= this.state.step;
    this.setState(state);
  }
  reset() {
    let state = this.state;
    if(state.counter === 0){
      alert("O contator já está zerado!!");
      return;
    }
    state.counter = 0;
    this.setState(state);
  }

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <div>
            <label>Step:</label>
            <input 
              id="myInput"
              type="number"
              value={this.state.step}
              onChange={e => this.setState({step: +e.target.value})}
              style={{width:'50px',marginLeft:'10px'}}/>
        </div>
        <button onClick={this.down}>-</button>
        {this.state.counter}
        <button onClick={this.up}>+</button>
        <div>
          <button onClick={this.reset}>RESET</button>
          </div>
      </div>
    );
  }
}

export default App;