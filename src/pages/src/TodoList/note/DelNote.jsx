import React, { useEffect, useState } from 'react';
import { Fragment } from 'react';
import { history } from 'umi';
import { useList } from '../useList';
export default function DelNote(props) {
  const { delNote } = useList();
  const name = props.location.query.name;
  return (
    <Fragment>
      {/* 删除分类框 */}
      <div className="delCategory">
        <div className="delTitle">确认</div>
        <div className="delContent">
          {name === undefined
            ? '数据有误请点 （取消）'
            : '您确定要删除备忘录[' + name + ']吗？'}
        </div>
        <div className="line1"></div>
        <div className="deloperation">
          <div
            onClick={() => {
              history.goBack();
            }}
          >
            取消
          </div>
          <div className="longString"></div>
          <div
            onClick={() => {
              delNote(name);
            }}
          >
            确认
          </div>
        </div>
      </div>
    </Fragment>
  );
}
