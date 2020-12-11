import React from 'react';
import './list.less';
import { Link } from 'umi'

export default () => {
  return (
    <div className='creat'>
      <div className='title'>查看门店</div>
      <div className="tag">
        <div className='tagTitle'>
          <div className='tagTitle1'><Link to='list'>查看门店</Link></div>
          <div className='tagTitle1'><Link to='creat'>发布门店</Link></div>
        </div>        
      </div> 
      <div className='line'></div> 

        <div className="list">
          <div className='show'>
            <div className='imgtitle'><img src="" alt=""/>图片引入</div>
          <div className='content'>
            <div className='contenttitle'>内容标题内容标题内容标题</div>
            <div className='contentstatus'>精选服务</div>
            <div className='contentmessage'>
              <span>企业</span>
              <span>手机认证</span>
            </div>
            <div className='contentbottom'>修图众创空间</div>
          </div></div>
          <div className='evaluate'>
             <span>好评：100%</span>
            </div> 
        </div> 
        <div className="list">
          <div className='show'>
            <div className='imgtitle'><img src="" alt=""/>图片引入</div>
          <div className='content'>
            <div className='contenttitle'>内容标题内容标题内容标题1</div>
            <div className='contentstatus'>精选服务</div>
            <div className='contentmessage'>
              <span>企业</span>
              <span>手机认证</span>
            </div>
            <div className='contentbottom'>修图众创空间</div>
          </div></div>
          <div className='evaluate'>
             <span>好评：100%</span>
            </div> 
        </div>   
    </div>
  );
}
