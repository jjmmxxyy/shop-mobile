import React from 'react'
import { Image } from 'antd-mobile'
import PropTypes from 'prop-types'

import style from '../../style/index.module.scss'

function RecommendItem (props) {
  const { title, pic } = props
  return (
    <>
      <div className={style.recommendItem}>
        <Image
          lazy
          src={pic}
          width={120}
          height={120}
          fit='contain'
        />
        <h2 className={style.recommendTitle}>{title}</h2>
      </div>
    </>
  )
}

RecommendItem.propTypes = {}

export default RecommendItem
