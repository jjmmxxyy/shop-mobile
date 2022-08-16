import React from 'react'
import { NavLink } from 'react-router-dom'
import { AppOutline, TruckOutline, SystemQRcodeOutline, UserOutline } from 'antd-mobile-icons'

import style from '../style/footer.module.scss'

export default function Footer () {
  const footerList = [
    {
      id: 1,
      title: '首页',
      path: '/index',
      icon: <AppOutline fontSize={26} />,
    },

    {
      id: 2,
      title: '分类',
      path: '/category',
      icon: <SystemQRcodeOutline fontSize={26} />,
    },
    {
      id: 3,
      title: '购物车',
      path: '/cart',
      icon: <TruckOutline fontSize={26} />,
    },
    {
      id: 4,
      title: '个人中心',
      path: '/mine',
      icon: <UserOutline fontSize={26} />,
    },
  ]

  return (
    <>
      <div className={style.footer}>
        {footerList.map((item) => {
          return (
            <NavLink className={style.footerLi} to={item.path} activeClassName={style.activeLi} key={item.id}>
              {item.icon}
              <span className={style.footerLiTitle}>{item.title}</span>
            </NavLink>
          )
        })}
      </div>
    </>
  )
}
