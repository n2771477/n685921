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
    if (e.keyCode === 13 && this.state.value != '') {
      const newlist1 = JSON.parse(JSON.stringify(global.list));
      const Note = { name: this.state.value, displayListValue: 1, value: [] };
      newlist1.push(Note);
      global.list = JSON.parse(JSON.stringify(newlist1));

      history.push('/');
    } else if (e.keyCode === 13 && this.state.value == '') {
      history.goBack();
    }
  };
  onSetClass = (listClassName, setValue) => {
    console.log(listClassName);
    const newlist = this.state.list.map(value => {
      if (value.name == listClassName) {
        value.name = setValue;
        return value;
      } else {
        return value;
      }
    });
    this.setState({
      list: newlist,
    });
  };
  // 添加便签
  setClass = e => {
    console.log(this.state.value);
    console.log('>>>>>>>>>>>>>>');
    if (this.state.value === '') {
      history.goBack();
    } else {
      const newlist1 = JSON.parse(JSON.stringify(global.list));
      const listClassName = this.props.location.query.id;
      const newlist = newlist1.map(value => {
        if (value.name == listClassName) {
          value.name = this.state.value;
          return value;
        } else {
          return value;
        }
      });
      global.list = JSON.parse(JSON.stringify(newlist));
      history.push('/');
    }
  };
  // 修改分类

  // list任务显示状态
  render() {
    console.log(this.props.location.query.id, '<<<<<<');
    return (
      <Fragment>
        {/* 修改分类 */}
        <div className="Category">
          <div className="CategoryHead">
            <div
              onClick={() => {
                history.goBack();
              }}
            >
              取消
            </div>
            <div>修改分类</div>
            <div
              onClick={() => {
                this.setClass();
              }}
            >
              保存
            </div>
          </div>
          <div className="line1"></div>
          <div className="Categorybody">
            <div>
              修改分类<span style={{ color: 'red' }}>*</span>
            </div>
            <input
              className="inputadd"
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </div>
        </div>
      </Fragment>
    );
  }
}
