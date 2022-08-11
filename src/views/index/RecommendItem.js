import React from 'react'
import { Image } from 'antd-mobile'
import PropTypes from 'prop-types'

import style from '../../style/index.module.scss'

function RecommendItem(props) {
  return (
    <>
      <div className={style.recommendItem}>
        <Image
          lazy
          src='https://img.alicdn.com/imgextra/i1/2932013060/O1CN016ttmtB1YTWjT3TWv0_!!2932013060.png'
          width={64}
          height={120}
          fit='contain'
        />
        <h2 className={style.recommendTitle}>ssssssssadasdsasssssssssss</h2>
      </div>
    </>
  )
}

RecommendItem.propTypes = {}

export default RecommendItem
