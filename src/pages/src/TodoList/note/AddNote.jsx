import React, { Fragment, useRef } from 'react';
import { useList } from '../useList';
import { history } from 'umi';

export default function AddNote(props) {
  const { addNote, inputData } = useList();
  const inputValue = useRef();
  // 回车键对于的方法通过父组件添加数据
  const handleKeyUP = e => {
    if (e.keyCode === 13 && inputValue.current.value != '') {
      addNote();
    } else if (e.keyCode === 13 && inputValue.current.value == '') {
      history.goBack();
    }
  };

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
              addNote();
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
