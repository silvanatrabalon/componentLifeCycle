import React, { Component } from 'react';

class MyComponent extends Component {
  /*Mounting*/
  constructor(props) {
    super(props);
    this.name = this.props.name;
    console.log('MyComponent constructor')
  }
  componentWillMount() {
    console.log('MyComponent will mount')
  }
  componentDidMount() {
    console.log('MyComponent did mount')
  }
  /*Mounting*/

  /*Updating*/
  componentWillUpdate() {
    console.log('MyComponent will update')
  }
  shouldComponentUpdate() {
    console.log('MyComponent should update?')
    return true;
    //return false;

  }
  componentDidUpdate() {
    console.log('MyComponent did update')
  }
  /*Updating*/

  /*Unmounting*/
  componentWillUnmount() {
    console.log('MyComponent will unmount')
  }
  /*Unmounting*/
  render() {
    console.log('MyComponent render')
    return (
      <>
        <div>
          My Component name: {this.name}
        </div>
      </>
    );
  }
}

export default MyComponent;
