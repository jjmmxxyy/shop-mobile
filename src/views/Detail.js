
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { NavBar } from 'antd-mobile'
import { SearchOutline, StarOutline, MessageOutline, MoreOutline, LeftOutline } from 'antd-mobile-icons'
import { withViewStyle } from '../HOC/withViewStyle'
import { show, hide } from '../redux/actionCreator/footerActionCreater'

import style from '../style/detail.module.scss'

function Detail (props) {
  const { show, hide } = props

  const [myScrollY, setMyScrollY] = useState(0)
  const [searchFontShow, setSearchFontShow] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    window.addEventListener('scroll', HandleScroll, true)

    hide()
    return () => {
      show()
    }
  }, [])

  const HandleScroll = () => {
    setMyScrollY(window.scrollY)
    if (window.scrollY > 70) {
      setSearchFontShow(true)
    } else {
      setSearchFontShow(false)
    }
  }

  // ==============================================ReactNode====================================================

  const navRight = <div className={style['navbar-right']}>
    <div className={`${style['search-box']} ${style['navbar-item']}`}>
      <div style={{ width: `${myScrollY}%`, backgroundColor: `rgba(239, 239, 239, ${myScrollY * 0.01})` }} className={style['search-bar']}>
        <SearchOutline fontSize={26} style={{ filter: `invert(${myScrollY}%)` }} />
        {searchFontShow && <span style={{ color: `rgb(180, 180, 180, ${myScrollY * 0.01})` }} className={style['sreach-font']}>请输入商品名</span>}
      </div>
    </div>
    <MessageOutline style={{ filter: `invert(${myScrollY}%)`, }} fontSize={26} className={style['navbar-item']} />
    <StarOutline style={{ filter: `invert(${myScrollY}%)`, }} fontSize={26} className={style['navbar-item']} />
    <MoreOutline style={{ filter: `invert(${myScrollY}%)`, }} fontSize={26} className={style['navbar-item']} />
  </div>

  const navArrow = <LeftOutline style={{ filter: `invert(${myScrollY}%)`, }} fontSize={26} />

  return <>
    <div className={style['container']}>
      {/* 顶栏 */}
      <NavBar className={style['navbar']} style={{ backgroundColor: `rgba(248, 248, 248, ${myScrollY * 0.01})` }} right={navRight} backArrow={navArrow} onBack={() => {
        props.history.go(-1)
      }}>

      </NavBar>
    </div>
  </>
}

const mapDispatchToState = {
  show,
  hide
}

export default withViewStyle(connect(null, mapDispatchToState)(Detail))
