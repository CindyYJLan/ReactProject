import React, { Component } from "react";

class Slide extends Component {
  componentDidMount() {
    this.initialTitle = document.title;
    document.title = this.props.title;
  }
  componentDidUpdate() {
    document.title = this.props.title;
  }
  conponentWillUnmount() {
    document.title = this.initialTitle;
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.content}</p>
      </div>
    );
  }
}

export default Slide;
