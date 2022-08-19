import React from 'react'
import { NavBar } from 'antd-mobile'
import { SearchOutline } from 'antd-mobile-icons'
import { withViewStyle } from '../HOC/withViewStyle'

import style from '../style/category.module.scss'

function category (props) {

  // ==============================================ReactNode====================================================

  const navRight = <div></div>

  return <>
    <div className={style['container']}>
      {/* 顶栏 */}
      <NavBar className={style['navbar']} back={null}>商品分类</NavBar>
    </div>
  </>
}

export default withViewStyle(category)
