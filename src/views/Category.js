import React from 'react'
import { NavBar } from 'antd-mobile'
import { withViewStyle } from '../HOC/withViewStyle'

import style from '../style/category.module.scss'

function category () {
  return <>
    {/* 顶栏 */}
    <NavBar className={style['navbar']} back={null}>商品分类</NavBar>
  </>
}

export default withViewStyle(category)
