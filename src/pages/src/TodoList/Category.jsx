import { Fragment } from 'react';
import React, { Component } from 'react';
import { history } from 'umi';
export default class Category extends Component {
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
  // 添加便签
  addNote = e => {
    console.log(this.state.value);
    console.log('>>>>>>>>>>>>>>');
    if (this.state.value === '') {
      history.push('/');
    } else {
      const newlist1 = JSON.parse(JSON.stringify(global.list));
      const Note = { name: this.state.value, displayListValue: 1, value: [] };
      newlist1.push(Note);
      global.list = JSON.parse(JSON.stringify(newlist1));
      history.push('/');
    }

    // this.props.onReceiveKeyNote(this.state.value);

    // this.setState({
    //   value: '',
    //   display: 0,
    // });
  };
  // display = () => {
  //   this.state.display = this.state.display == 0 ? 1 : 0;
  //   console.log(this.state.display);
  //   this.setState({
  //     display: this.state.display,
  //   });
  // };
  render() {
    return (
      <Fragment>
        <div className="Category">
          <div className="CategoryHead">
            <div
              onClick={() => {
                history.goBack();
              }}
            >
              取消
            </div>
            <div>编辑便签</div>
            <div
              onClick={() => {
                this.addNote();
              }}
            >
              保存
            </div>
          </div>
          <div className="line1"></div>
          <div className="Categorybody">
            <div>
              便签名称<span style={{ color: 'red' }}>*</span>
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
        {/* <div className="addNote" onClick={this.display}>
          +
        </div> */}
      </Fragment>
    );
  }
}
