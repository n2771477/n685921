import React from 'react';
import { Checkbox, Button } from 'antd';
import { MinusCircleOutlined } from '@ant-design/icons';

export const List = function List(props) {
  console.log(props);
  const { list, display, name, onDelTask, onCompleteTask } = props;
  console.log(list, display, name);
  return (
    <ul
      className="todolist"
      style={{ display: display === 0 ? 'none' : 'block' }}
    >
      {list.map(value => {
        // 解构数据

        const { status, id, taskname } = value;
        console.log(status, id, taskname);
        return (
          <li key={id} className="list">
            <div className="list1">
              {/* 状态显示 */}
              <div className="radioBox">
                <Checkbox
                  type="checkbox"
                  checked={status === 1}
                  onChange={() => {
                    onCompleteTask(name, id);
                  }}
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
              <Button
                onClick={() => {
                  onDelTask(name, id);
                }}
                // className="listButton"
              >
                删除
              </Button>
            </div>
            <div className="line"></div>
          </li>
        );
      })}
    </ul>
  );
};
