import React from 'react'
import { withRouter } from 'react-router-dom'
import { List } from 'antd-mobile'
import {
  AppOutline,
  ContentOutline,
  SystemQRcodeOutline,
  UserOutline,
  SetOutline,
  UserCircleOutline,
  UserSetOutline,
  CalculatorOutline,
} from 'antd-mobile-icons'
import PropTypes from 'prop-types'

function SubNav(props) {
  const navList = [
    {
      id: 1,
      title: '首页',
      path: '/',
      icon: <AppOutline fontSize={20} style={{ verticalAlign: 'middle' }} />,
    },
    {
      id: 2,
      title: '品牌馆',
      path: '/brand',
      icon: <ContentOutline fontSize={20} style={{ verticalAlign: 'middle' }} />,
    },
    {
      id: 3,
      title: '分类',
      path: '/category',
      icon: <SystemQRcodeOutline fontSize={20} style={{ verticalAlign: 'middle' }} />,
    },
    {
      id: 4,
      title: '个人中心',
      path: '/mine',
      icon: <UserOutline fontSize={20} style={{ verticalAlign: 'middle' }} />,
    },

    {
      id: 5,
      title: '登录',
      path: '/',
      icon: <UserCircleOutline fontSize={20} style={{ verticalAlign: 'middle' }} />,
    },
    {
      id: 6,
      title: '注册',
      path: '/',
      icon: <UserSetOutline fontSize={20} style={{ verticalAlign: 'middle' }} />,
    },
    {
      id: 7,
      title: '活动',
      path: '/',
      icon: <CalculatorOutline fontSize={20} style={{ verticalAlign: 'middle' }} />,
    },
    {
      id: 8,
      title: '设置',
      path: '/',
      icon: <SetOutline fontSize={20} style={{ verticalAlign: 'middle' }} />,
    },
  ]

  return (
    <>
      <List header='导航栏'>
        {navList.map((item) => {
          return (
            <List.Item
              prefix={item.icon}
              onClick={() => {
                props.history.push(item.path)
              }}
              key={item.id}>
              {item.title}
            </List.Item>
          )
        })}
      </List>
    </>
  )
}

SubNav.propTypes = {}

export default withRouter(SubNav)
