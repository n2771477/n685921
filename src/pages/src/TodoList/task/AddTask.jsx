import React, { useRef } from 'react';
import { Fragment } from 'react';
import { history } from 'umi';
import { useList } from '../useList';
export default function AddTask(props) {
  const { addTask, inputData } = useList();
  const inputValue = useRef();
  const name = props.location.query.name;
  // 回车键对于的方法通过父组件添加数据
  const handleKeyUP = e => {
    if (e.keyCode === 13 && inputValue.current.value != '') {
      addTask(name);
    } else if (e.keyCode === 13 && inputValue.current.value == '') {
      history.goBack();
    }
  };

  return (
    <Fragment>
      {/* 添加条目html*/}
      <div className="Category">
        <div className="CategoryHead">
          <div
            onClick={() => {
              history.goBack();
            }}
          >
            取消
          </div>
          <div>{name === undefined ? '数据有误请点 （取消）' : '添加任务'}</div>
          <div
            onClick={() => {
              addTask(name);
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
            ref={inputValue}
            onChange={() => {
              inputData(inputValue.current.value);
            }}
            onKeyUp={handleKeyUP}
          />
        </div>
      </div>
    </Fragment>
  );
}
