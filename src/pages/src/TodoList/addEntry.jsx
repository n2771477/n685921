import React, { Component } from 'react';
import { Fragment } from 'react';
import { history } from 'umi';
export default class Tag extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    value: '',
  };

  handleChange = e => {
    console.log(e.target.value);
    console.log(this.state.value);
    this.setState({
      value: e.target.value,
    });
  };
  // 回车键对于的方法通过父组件添加数据
  handleKeyUP = e => {
    console.log('>>>>>>>>>>');
    if (e.keyCode === 13 && this.state.value != '') {
      this.addEntry();
    } else if (e.keyCode === 13 && this.state.value == '') {
      history.goBack();
    }
  };
  // 添加条目
  addEntry = () => {
    console.log(this.state.value);
    console.log(this.props.location.query.id, '>>>>>>>>>>>>>>');

    const taskObj = {
      id: new Date().getTime(),
      taskname: this.state.value,
      status: 0,
    };
    if (this.state.value === '') {
      history.push('/');
    } else if (this.props.location.query.id != undefined) {
      const newlist1 = JSON.parse(JSON.stringify(global.list));
      const taskObj = {
        id: new Date().getTime(),
        taskname: this.state.value,
        status: 0,
      };
      newlist1[this.props.location.query.id].value.push(taskObj);
      console.log(newlist1);
      global.list = JSON.parse(JSON.stringify(newlist1));
      history.push('/');
    } else {
      history.goBack();
    }
  };

  render() {
    return (
      <Fragment>
        {/* 添加条目html*/}
        <div
          className="Category"
          style={{
            display: this.state.displayEntry === 0 ? 'none' : 'block',
          }}
        >
          <div className="CategoryHead">
            <div
              onClick={() => {
                history.goBack();
              }}
            >
              取消
            </div>
            <div>
              {this.props.location.query.id === undefined
                ? '数据有误请点 （取消）'
                : '添加任务'}
            </div>
            <div
              onClick={() => {
                this.addEntry();
              }}
            >
              保存
            </div>
          </div>
          <div className="line1"></div>
          <div className="Categorybody">
            <div>
              任务计划<span style={{ color: 'red' }}>*</span>
            </div>
            <input
              className="inputadd"
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
              onKeyUp={this.handleKeyUP}
            />
          </div>
        </div>
      </Fragment>
    );
  }
}
