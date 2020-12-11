import React from 'react';
import styles from './index.less';
import { Link } from 'umi';

export default () => {
  return (
    <div>
      <h1 className={styles.title}>TEST</h1>
      <div><Link to='list'>查看门店</Link></div>
      <div><Link to='creat'>用户发布</Link></div>
      
    </div>
  );
}
