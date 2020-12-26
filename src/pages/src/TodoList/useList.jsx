import React, { useEffect, useState } from 'react';
//请求封装 路由,参数对象传值,method默认get,body json字符串
import { request } from './request/fetch';
import { history } from 'umi';
export function useList() {
  const [list, setlist] = useState('');
  const [value, setValue] = useState('');

  useEffect(() => {
    console.log('测试useEffect渲染');
    (async () => {
      const json = await request();
      setlist(json);
    })();
  }, []);
  // 数据值传入
  const inputData = e => {
    console.log(e);
    setValue(e);
  };
  // 添加便签
  const addNote = async () => {
    console.log('>>>>>>>>>>>>>>');
    if (value === '') {
      history.goBack();
    } else {
      await request(
        'addNote',
        '',
        'Post',
        JSON.stringify({ name: value, displayListValue: 1, value: [] }),
      );
      setValue('');
      history.goBack();
    }
  };
  // 添加条目
  const addTask = async name => {
    if (value === '') {
      history.goBack();
    } else if (name != undefined) {
      await request(
        'addTask',
        '',
        'Post',
        JSON.stringify({ name: name, value: value }),
      );
      setValue('');
      history.goBack();
    }
  };
  // 删除便签
  const delNote = async name => {
    if (name === 'undefined') {
      history.goBack();
    } else {
      const data = { name: name };
      const json = await request('delNote', data, 'Delete');
      history.goBack();
    }
  };
  // 删除条目
  const delTask = async (name, id) => {
    console.log(name, id);
    const data = { name: name, id: id };
    const json = await request('delTask', data, 'Delete');
    setlist(json);
  };
  // 修改分类
  const alterNote = async name => {
    console.log(name);
    console.log('>>>>>>>>>>>>>>');
    if (value === '') {
      history.goBack();
    } else {
      const data = { name: name, value: value };
      await request('alterNote', data, 'Put');
      setValue('');
      history.goBack();
    }
  };
  // 删除线状态
  const completeTask = async (name, id) => {
    const data = { name: name, id: id };
    const json = await request('completeTask', data, 'Put');
    setlist(json);
  };

  // 设置list显示状态
  const alterDispaly = async tag => {
    const data = { tag: tag };
    const json = await request('alterDispaly', data, 'Put');
    setlist(json);
  };

  return {
    list,
    inputData,
    addNote,
    addTask,
    delNote,
    delTask,
    alterNote,
    completeTask,
    alterDispaly,
  };
}
