import React from 'react';

import '../css/list.css';
export default function List(props) {
  console.log(props);
  const { list, listClassIndex, displayListValue } = props;
  console.log(list, listClassIndex);
  return (
    <ul
      className="todolist"
      style={{ display: displayListValue === 0 ? 'none' : 'block' }}
    >
      {list.map((value, listValueClass) => {
        console.log(value, listValueClass);
        // 解构数据
        const { status, id, taskname } = value;
        console.log(status, id, taskname);
        return (
          <li key={id} className="list">
            <div className="list1">
              {/* 状态显示 */}
              <div className="radioBox">
                <input
                  type="checkbox"
                  checked={status === 1}
                  onChange={() => {
                    props.oncompleteTask(
                      listClassIndex,
                      listValueClass,
                      status,
                    );
                  }}
                  id="radio_yes"
                />
              </div>

              {/* 任务内容，以及状态style */}
              <div className="content">
                <div
                  className="content1"
                  style={{
                    textDecorationLine: status === 0 ? 'none' : 'line-through',
                    color: status === 0 ? '' : '#A3A3A3',
                  }}
                >
                  {taskname}
                </div>
                {/* 时间戳的转换，复习一下 */}
                <div className="list2">
                  上次编辑:
                  {new Date(parseInt(id)).toLocaleString()}
                </div>
              </div>
              {/* 清楚按钮 */}
              <button
                onClick={() => {
                  props.onDeletetask(listClassIndex, id, listValueClass);
                }}
                className="listButton"
              >
                一
              </button>
            </div>
            <div className="line"></div>
          </li>
        );
      })}
    </ul>
  );
}
