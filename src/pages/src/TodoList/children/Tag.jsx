import React from 'react';
import leftArrow from '../../image/left.png';
import bottomArrow from '../../image/bottom.png';
import { Fragment } from 'react';
import { history } from 'umi';

export const Tag = props => {
  const { tag, alterDispaly } = props;
  return (
    <Fragment>
      {/* 分类标签 */}
      <div className="tag">
        <div className="tagTitle">{props.tag}</div>
        <div className="tagImg">
          {/* 添加条目 */}
          <img
            src={require('../../image/add.png')}
            onClick={() => {
              history.push('/src/Todolist/task/AddTask?name=' + tag);
            }}
          />
          <img
            src={require('../../image/add.png')}
            onClick={() => {
              history.push('/src/Todolist/test/Sum');
            }}
          />
          {/* 删除分类 */}
          <img
            src={require('../../image/del.png')}
            onClick={() => {
              history.push('/src/Todolist/note/DelNote?name=' + tag);
            }}
          />
          {/* 修改分类 */}
          <img
            src={require('../../image/config.png')}
            onClick={() => {
              history.push('/src/Todolist/note/AlterNote?name=' + tag);
            }}
          />
          {/* 分类任务显示状态 */}
          <img
            src={leftArrow}
            src={props.display === 0 ? leftArrow : bottomArrow}
            onClick={() => {
              alterDispaly(tag);
            }}
          />
        </div>
      </div>
    </Fragment>
  );
};
