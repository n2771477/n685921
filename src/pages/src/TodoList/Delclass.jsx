import React, { Component } from 'react';
import { Fragment } from 'react';
import { history } from 'umi';
export default class Tag extends Component {
  constructor(props) {
    super(props);
  }

  // 确认删除
  delCategory = () => {
    if (this.props.location.query.id === 'undefined') {
      history.goBack();
    } else {
      const newlist1 = JSON.parse(JSON.stringify(global.list));
      const newlist = newlist1.filter(value => {
        return value.name !== this.props.location.query.id;
      });
      global.list = JSON.parse(JSON.stringify(newlist));
      history.push('/');
    }
  };
  // 添加便签
  // setClass = e => {
  //   console.log(this.state.value);
  //   console.log('>>>>>>>>>>>>>>');
  //   if (this.state.value === '') {
  //     history.goBack();
  //   } else {
  //     const newlist1 = JSON.parse(JSON.stringify(global.list));
  //     const listClassName = this.props.location.query.id;
  //     const newlist = newlist1.map(value => {
  //       if (value.name == listClassName) {
  //         value.name = this.state.value;
  //         return value;
  //       } else {
  //         return value;
  //       }
  //     });
  //     global.list = JSON.parse(JSON.stringify(newlist));
  //     history.push('/');
  //   }
  // };

  // list任务显示状态
  render() {
    console.log(
      this.props.location.query.id,
      typeof this.props.location.query.id,
      '<<<<<<',
    );

    return (
      <Fragment>
        {/* 删除分类框 */}
        <div className="delCategory">
          <div className="delTitle">确认</div>
          <div className="delContent">
            {this.props.location.query.id === undefined
              ? '数据有误请点 （取消）'
              : '您确定要删除备忘录[' + this.props.location.query.id + ']吗？'}
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
                this.delCategory();
              }}
            >
              确认
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
