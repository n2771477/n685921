import React, { Component } from 'react';
import leftArrow from '../image/left.png';
import bottomArrow from '../image/bottom.png';
import { Fragment } from 'react';
import { history } from 'umi';
export default class Tag extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    displayEntry: 0,
    value: '',
    displayDelCategory: 0,
    displaySetClass: 0,
  };
  // 添加条目

  // input传值
  handleChange = e => {
    console.log(e.target.value);
    console.log(this.state.value);
    this.setState({
      value: e.target.value,
    });
  };
  // 添加条目状态框
  displayEntry = () => {
    this.state.displayEntry = this.state.displayEntry == 0 ? 1 : 0;
    console.log(this.state.displayEntry);
    this.setState({
      displayEntry: this.state.displayEntry,
    });
  };
  // 显示删除分类确认框
  // displayDelCategory = () => {
  //   this.state.displayDelCategory = this.state.displayDelCategory == 0 ? 1 : 0;
  //   console.log(this.state.displayDelCategory);
  //   this.setState({
  //     displayDelCategory: this.state.displayDelCategory,
  //   });
  // };

  // 设置分类状态框
  displaySetClass = () => {
    console.log(this.props, '>>>>>>>>>>>>>');
  };
  // 修改分类
  // setClass = listClassName => {
  //   console.log(listClassName);
  //   this.props.setClass(listClassName, this.state.value);
  //   this.setState({
  //     displaySetClass: 0,
  //     value: '',
  //   });
  // };
  // list任务显示状态
  displaySetList = (dispaly, tag) => {
    console.log('状态', dispaly, tag);
    this.props.setList(dispaly, tag);
  };
  render() {
    console.log(this.props);
    return (
      <Fragment>
        {/* 分类标签 */}
        <div className="tag">
          <div className="tagTitle">{this.props.tag}</div>
          <div className="tagImg">
            {/* 添加条目 */}
            <img
              src={require('../image/add.png')}
              onClick={() => {
                history.push(
                  '/src/Todolist/addEntry?id=' + this.props.listClassIndex,
                );
              }}
            />
            {/* 删除分类 */}
            <img
              src={require('../image/del.png')}
              onClick={() => {
                history.push('/src/Todolist/Delclass?id=' + this.props.tag);
              }}
            />
            {/* 修改分类 */}

            <img
              src={require('../image/config.png')}
              onClick={() => {
                history.push('/src/Todolist/Setclass?id=' + this.props.tag);
              }}
            />
            {/* 分类任务显示状态 */}
            <img
              src={leftArrow}
              src={this.props.displayListValue === 0 ? leftArrow : bottomArrow}
              onClick={() => {
                this.displaySetList(
                  this.props.displayListValue,
                  this.props.tag,
                );
              }}
            />
          </div>
        </div>

        {/* 修改分类 */}
        {/* <div
          className="Category"
          style={{
            display: this.state.displaySetClass === 0 ? 'none' : 'block',
          }}
        >
          <div className="CategoryHead">
            <div onClick={this.displaySetClass}>取消</div>
            <div>添加计划</div>
            <div
              onClick={() => {
                this.setClass(this.props.listClassName);
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
        </div> */}
      </Fragment>
    );
  }
}
