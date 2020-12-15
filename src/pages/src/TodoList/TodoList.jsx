import { number } from 'prop-types';
import React, { Component, Fragment } from 'react';
import Form from './Form';
import List from './List';
import Tag from './Tag';
import Category from './Category';

import { history } from 'umi';
class TodoList extends Component {
  constructor(props) {
    super(props);
  }
  state = {};

  // 添加任务条目
  onAddEntry = (listClassIndex, keywords) => {
    console.log(listClassIndex);
    const taskObj = {
      id: new Date().getTime(),
      taskname: keywords,
      status: 0,
    };
    console.log(keywords);

    const newlist = this.state.list.map(value => {
      return value;
    });
    const newlist1 = JSON.parse(JSON.stringify(this.state.list));
    console.log('newlist1:::', newlist1);
    newlist1[listClassIndex].value.push(taskObj);

    this.setState({
      list: newlist1,
    });
  };

  handleDeletetask = (listClass, id, listValueClass) => {
    console.log(listClass, id, listValueClass);
    const newlist1 = JSON.parse(JSON.stringify(global.list));
    const list1 = newlist1[listClass].value.filter(entry => {
      return entry.id !== id;
    });
    newlist1[listClass].value = list1;

    console.log(list1);
    console.log(this.state.list);
    global.list = JSON.parse(JSON.stringify(newlist1));
    history.push('/');
  };
  // 删除线状态
  completeTask1 = (listClass, listValueClass, status) => {
    const newlist1 = JSON.parse(JSON.stringify(global.list));
    newlist1[listClass].value[listValueClass].status = status == 0 ? 1 : 0;
    global.list = JSON.parse(JSON.stringify(newlist1));
    history.push('./');
  };
  // 添加便签
  handleReceiveKeyNote = keyNote => {
    console.log('diejij:::::::::::::::::');
    const Note = { name: keyNote, value: [] };

    const newlist = this.state.list.map(value => {
      return value;
    });
    const newlist1 = JSON.parse(JSON.stringify(this.state.list));
    newlist1.push(Note);
    this.setState({
      list: newlist1,
    });
  };
  // 删除分类
  ondelCategory = listClassName => {
    console.log(listClassName);
  };

  // 修改分类

  // 设置list显示状态
  onSetList = (displayListValue, tag) => {
    const newlist1 = JSON.parse(JSON.stringify(global.list));
    // const displayListValue = displayListValue == 0 ? 1 : 0;
    const newlist = newlist1.map(value => {
      if (value.name == tag) {
        value.displayListValue = value.displayListValue == 0 ? 1 : 0;
        return value;
      } else {
        return value;
      }
    });
    global.list = JSON.parse(JSON.stringify(newlist));
    history.push('/');

    console.log(global.list[0].displayListValue);
  };
  shouldComponentUpdate(nextProps, nextState) {
    console.log('01是否要更新数据');
    console.log(nextProps); //父组件传给子组件的值，这里没有会显示空
    console.log(nextState); //数据更新后的值
    return true; //返回true，确认更新
  }
  // 显示结果
  render() {
    console.log('全局2', global.list);
    return (
      <Fragment>
        <Form onReceiveKeyWords={this.handleReceiveKeyWords}></Form>

        {global.list.map((listdata, listClass) => {
          const { name: key, value, displayListValue } = listdata;
          console.log(key, value, listClass);
          console.log(listdata);
          return (
            <Fragment>
              <Tag
                tag={key}
                listClassIndex={listClass}
                displayListValue={displayListValue}
                listClassName={key}
                addEntry={this.onAddEntry}
                delCategory={this.ondelCategory}
                setClass={this.onSetClass}
                setList={this.onSetList}
              ></Tag>

              <List
                list={value}
                listClassIndex={listClass}
                displayListValue={displayListValue}
                onDeletetask={this.handleDeletetask}
                oncompleteTask={this.completeTask1}
              ></List>
            </Fragment>
          );
        })}
        {/* <Category onReceiveKeyNote={this.handleReceiveKeyNote}></Category> */}
        <div
          className="addNote"
          onClick={() => {
            history.push('./src/Todolist/Category');
          }}
        >
          +
        </div>
      </Fragment>
    );
  }
}
export default TodoList;
