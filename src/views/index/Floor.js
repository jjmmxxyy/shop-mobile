import React from 'react'
import { RightOutline } from 'antd-mobile-icons'
import PropTypes from 'prop-types'

import style from '../../style/index.module.scss'

function Floor(props) {
  const { floorTitle, rightWriting, rightClick } = props

  return (
    <>
      <div className={style.floor}>
        <div className={style.floorHd}>
          <span className={style.floorTitle}>{floorTitle}</span>
          <span className={style.more} onClick={rightClick}>
            {rightWriting}
            <RightOutline />
          </span>
        </div>
        {props.children}
      </div>
    </>
  )
}

Floor.propTypes = {}

export default Floor
