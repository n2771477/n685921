import React, { Fragment } from 'react';
import '../css/list.css';
import { Table } from 'antd';
import { Form } from './test/Form';
import { List } from './children/List';
import { Tag } from './children/Tag';
import { useList } from './useList';
import { history } from 'umi';
function TodoList() {
  const { list, completeTask, delTask, alterDispaly } = useList();
  return (
    <Fragment>
      <Form></Form>
      <Table
        columns={columns}
        expandable={{
          expandedRowRender: record => (
            <p style={{ margin: 0 }}>{record.description}</p>
          ),
          rowExpandable: record => record.name !== 'Not Expandable',
        }}
        dataSource={data}
      />
      {list
        ? list.map(listdata => {
            const { name, value, display } = listdata;
            return (
              <Fragment>
                <Tag
                  tag={name}
                  display={display}
                  alterDispaly={alterDispaly}
                ></Tag>
                <List
                  name={name}
                  list={value}
                  display={display}
                  onDelTask={delTask}
                  onCompleteTask={completeTask}
                ></List>
              </Fragment>
            );
          })
        : '等待加载........'}
      {/* <Category onReceiveKeyNote={this.handleReceiveKeyNote}></Category> */}
      <div
        className="addNote"
        onClick={() => {
          history.push('./src/Todolist/AddNote');
        }}
      >
        +
      </div>
    </Fragment>
  );
}
export { TodoList };
