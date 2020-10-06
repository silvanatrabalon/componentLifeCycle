import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './Components/MyComponent';


class App extends Component {
  /*Mounting*/
  constructor() {
    super();
    this.state = {
      name: 'Anto'
    }
    console.log('App constructor')
  }
  componentWillMount() {
    console.log('App will mount')
  }
  componentDidMount() {
    console.log('App did mount')
    console.log('----------------------------')
  }
  /*Mounting*/

  /*Updating*/
  componentWillUpdate() {
    console.log('App will update')
  }
  shouldComponentUpdate() {
    console.log('app should update?')
    return true;
  }
  componentDidUpdate() {
    console.log('App did update')
    console.log('----------------------------')
  }
  /*Updating*/

  /*Unmounting*/
  componentWillUnmount() {
    console.log('App will unmount')
  }
  /*Unmounting*/


  changeState(){
    this.setState({
      name: 'silvana'
    });
  }
  unMountMyComponent(){
    this.setState({
      name: 'belen'
    })
  }
  render() {
    console.log('app render')
    if (this.state.name === 'belen'){
      return(<div>Unmounting</div>)
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p> Component Life Cycle</p>
          <div>
            App name: {this.state.name}
          </div>
          <MyComponent name={this.state.name} />
          <button onClick = {this.changeState.bind(this)}>change state</button>
          <button onClick = {this.unMountMyComponent.bind(this)}>unMount MyComponent </button>
        </header>
      </div>
    );
  }
}

export default App;
