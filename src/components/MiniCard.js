import React from 'react'
import PropTypes from 'prop-types'
import { Image } from 'antd-mobile'
import { RightOutline } from 'antd-mobile-icons'

import style from '../style/cart.module.scss'

function MiniCard (props) {

  const { icon, title, rightText, rightArrow } = props

  return (
    <>
      <div className={style['mini-card']}>
        <div className={style['mini-card-left']}>
          <Image src={icon} width={22} height={22} fit='fill' />
          <h3>{title}</h3>
        </div>
        <div className={style['mini-card-right']}>
          <p>{rightText}</p>
          {rightArrow && <RightOutline />}
        </div>
      </div>
    </>
  )
}

MiniCard.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  rightText: PropTypes.string,
  rightArrow: PropTypes.bool
}

MiniCard.defaultProps = {
  icon: '',
  title: '购物车',
  rightText: '右边',
  rightArrow: false
}

export default MiniCard

