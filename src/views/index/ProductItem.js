import React from 'react'
import { Button, Image } from 'antd-mobile'
import PropTypes from 'prop-types'

import style from '../../style/index.module.scss'

function ProductItem(props) {
  return (
    <>
      <div className={style.product}>
        <Image
          lazy
          src='https://img.alicdn.com/imgextra/i1/2932013060/O1CN016ttmtB1YTWjT3TWv0_!!2932013060.png'
          width={188}
          height={124}
          fit='contain'
        />
        <h2 className={style.productTitle}>测试测试 真滴牛系列</h2>
        <div className={style.productBottom}>
          <span className={style.productPrice}>
            <i>￥</i>
            8888.88
          </span>
          <Button className={style.productBtn}>查看详情</Button>
        </div>
      </div>
    </>
  )
}

ProductItem.propTypes = {}

export default ProductItem
