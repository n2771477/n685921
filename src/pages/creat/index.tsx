import React from 'react';
import './creat.less';
import { Link } from 'umi'

export default () => {
  return (
    <div className='creat'>
      <div className='title'>发布信息</div>
      <div className="tag">
        <div className='tagTitle'>
        <div className='tagTitle1'><Link to='list'>查看门店</Link></div>
          <div className='tagTitle1'><Link to='creat'>发布门店</Link></div>
        </div>        
      </div> 
      <div className='line'></div> 

        <div className="information">
          <div className='messagetitle'>信息发布</div>
          
          <form action="" className='frommes' >
<div className='input'>
          <div><label htmlFor="designation"><span>名称</span> </label><input type="text" id='designation' className="text"/></div>
          <div><label htmlFor="address"><span>地址</span></label><input type="text" id='address' className="text"/></div>
          <div><label htmlFor="plone"><span>电话号码</span></label><input type="tel" id='plone' className="text"/></div>
          <div><label htmlFor="name"><span>联系人</span></label><input type="text" id='name' className="text"/>  </div>
          <div className='button'> <input type="submit" value="立即提交" />
          <input type="reset" value="重置" /></div>
</div>
         
          </form>     
        </div>   
    </div>
  );
}
