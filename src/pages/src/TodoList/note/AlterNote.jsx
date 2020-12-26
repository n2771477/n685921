import React, { useRef } from 'react';
import { Fragment } from 'react';
import { history } from 'umi';
import { useList } from '../useList';
export default function AlterNote(props) {
  const { alterNote, inputData } = useList();
  const inputValue = useRef();
  const name = props.location.query.name;
  const handleKeyUP = e => {
    if (e.keyCode === 13 && inputValue.current.value != '') {
      alterNote();
    } else if (e.keyCode === 13 && inputValue.current.value == '') {
      history.goBack();
    }
  };

  // list任务显示状态

  console.log(props.location.query.id, '<<<<<<');
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
              alterNote(name);
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
