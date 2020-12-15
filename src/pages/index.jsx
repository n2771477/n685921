import React from 'react';
import styles from './index.less';
import ReactDOM from 'react-dom';
import './src/TodoList/tool';
import App from './src/TodoList/Todolist.jsx';

export default () => {
  console.log('全局变量', global.list);
  return <App />;
};
