import React, { useState, useEffect, Fragment } from 'react';
import ReactDOM from 'react-dom';

export default function Counter() {
  let [number, setNumber] = useState(60);
  let [text, setText] = useState('');
  // 相当于componentDidMount 和 componentDidUpdate
  useEffect(() => {
    console.log('开启一个新的定时器');
    let $timer = setInterval(() => {
      setNumber(number => number - 1);
    }, 1000);

    // /*  return ()=>{
    //         console.log('destroy effect');
    //         clearInterval($timer);
    //     } */
  }, []);
  useEffect(() => {});
  // },[]);//要么在这里传入一个空的依赖项数组，这样就不会去重复执行
  return (
    <Fragment>
      <div>ssssssssssssssssssssssssss</div>
      <input value={text} onChange={event => setText(event.target.value)} />
      <p>{number}</p>
      <button>+</button>
    </Fragment>
  );
}
