import React, { useState } from 'react'
import { NavBar, Avatar } from 'antd-mobile'
import { SetOutline, StarOutline, CheckCircleOutline, ClockCircleOutline, BankcardOutline, ShopbagOutline, MailOpenOutline, HandPayCircleOutline, ChatAddOutline, PhonebookOutline, EnvironmentOutline, SoundOutline, MessageOutline, KoubeiOutline, QuestionCircleOutline, StopOutline, HistogramOutline } from 'antd-mobile-icons'
import { withViewStyle } from '../HOC/withViewStyle'

import style from '../style/mine.module.scss'

function Mine () {
  const [avatarImage, setAvatarImage] = useState('https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ')

  // 我的功能
  const functionItem = [
    {
      key: 'collection',
      title: '收藏',
      icon: <StarOutline fontSize={26} />,
    },
    {
      key: 'store',
      title: '订阅店铺',
      icon: <CheckCircleOutline fontSize={26} />,
    },
    {
      key: 'footprint',
      title: '足迹',
      icon: <ClockCircleOutline fontSize={26} />,
    },
    {
      key: 'money',
      title: '零钱',
      icon: <BankcardOutline fontSize={26} />,
      money: '2.00'
    },
  ]

  // 我的订单
  const orderItem = [
    {
      key: 'MailOpenOutline',
      title: '待付款',
      icon: <MailOpenOutline fontSize={26} />,
    },
    {
      key: 'store',
      title: '待发货',
      icon: <ShopbagOutline fontSize={26} />,
    },
    {
      key: 'footprint',
      title: '待收货',
      icon: <HandPayCircleOutline fontSize={26} />,
    },
    {
      key: 'money',
      title: '待评价',
      icon: <ChatAddOutline fontSize={26} />,
    },
    {
      key: 'afterBuy',
      title: '售后/退款',
      icon: <PhonebookOutline fontSize={26} />,
    },
  ]

  // 常用功能
  const offenItem = [
    {
      key: 'address',
      title: '收货地址',
      icon: <EnvironmentOutline fontSize={26} />,
    },
    {
      key: 'service',
      title: '客服',
      icon: <PhonebookOutline fontSize={26} />,
    },
    {
      key: 'evaluate',
      title: '我的评价',
      icon: <MessageOutline fontSize={26} />,
    },
    {
      key: 'about',
      title: '关于优购',
      icon: <QuestionCircleOutline fontSize={26} />,
    },
    {
      key: 'help',
      title: '帮助与反馈',
      icon: <KoubeiOutline fontSize={26} />,
    },
    {
      key: 'modle',
      title: '模式切换',
      icon: <StopOutline fontSize={26} />,
    },
    {
      key: 'currency',
      title: '通用',
      icon: <HistogramOutline fontSize={26} />,
    },
    {
      key: 'notice',
      title: '消息通知',
      icon: <SoundOutline fontSize={26} />,
    },
  ]

  // 我的功能
  const functionList = functionItem.map(item => {
    return <div className={style['card-item']} key={item.key}>
      {item.icon}
      <p className={style['card-title']}>{item.key == 'money' ? `${item.title}￥${item?.money}` : item.title}</p>
    </div>
  })

  // 我的订单
  const orderList = orderItem.map(item => {
    return <div className={style['card-item']} key={item.key}>
      {item.icon}
      <p className={style['card-title']}>{item.title}</p>
    </div>
  })

  // 常用功能
  const offenList = offenItem.map(item => {
    return <div className={style['card-item']} key={item.key}>
      {item.icon}
      <p className={style['card-title']}>{item.title}</p>
    </div>
  })

  return <>
    {/* 顶栏 */}
    <NavBar className={style['navbar']} back={null}>个人中心</NavBar>

    <div className={style['container']}>
      {/* 头部区域 */}
      <div className={style['user-header']}>
        <Avatar style={{
          '--border-radius': '50%',
          '--size': '4.4rem'
        }} src={avatarImage} />
        <div className={style['user-info']}>
          <p className={style['nickname']}>着急的大悬崖</p>
          <p className={style['username']}>账户名：lp456789</p>
          <p className={style['detail']}>
            <span className={style['follow']}>关注6</span>
            <span className={style['division']}>|</span>
            <span className={style['fans']}>粉丝0</span>
          </p>
        </div>
        <div className={style['user-setting']}>
          <SetOutline fontSize={26} />
          <span>设置</span>
        </div>
      </div>

      {/* 功能 */}
      <div className={style['function']}>
        {functionList}
      </div>

      {/* 我的订单 */}
      <div className={`${style['order']} ${style['mine-card']}`}>
        <div className={style['title']}>我的订单</div>
        {orderList}
      </div>

      {/* 常用功能 */}
      <div className={`${style['mine-card']} ${style['offen']}`}>
        <div className={style['title']}>常用功能</div>
        {offenList}
      </div>
    </div>
  </>
}
export default withViewStyle(Mine)
