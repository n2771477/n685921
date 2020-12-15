import React, { Component } from 'react';
class Form extends Component {
  state = {
    value: '',
  };
  // input键入值时对于的获取数据
  handleChange = e => {
    console.log(e.target.value);
    console.log(this.state.value);
    this.setState({
      value: e.target.value,
    });
  };
  // 回车键对于的方法通过父组件添加数据
  handleKeyUP = e => {
    console.log(e);
    if (e.keyCode === 13) {
      this.props.onReceiveKeyWords(this.state.value);

      this.setState({
        value: '',
      });
    }
  };
  // 添加数据因获取数据少
  addTask = e => {
    console.log(this.state.value);
    this.props.onReceiveKeyWords(this.state.value);

    this.setState({
      value: '',
    });
  };

  // 输入数据
  render() {
    return (
      <div className="input">
        <input
          className="inputaddtest"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          onKeyUp={this.handleKeyUP}
        />
        <button className="button" onClick={this.addTask}>
          添加任务
        </button>
      </div>
    );
  }
}
export default Form;
