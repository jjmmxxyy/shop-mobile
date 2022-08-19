import React from 'react'
import { Button, Image } from 'antd-mobile'
import PropTypes from 'prop-types'

import style from '../style/index.module.scss'

function ProductItem (props) {

  const { title, proImg, price } = props

  return (
    <>
      <div className={style.product}>
        <Image
          className={style.productImg}
          lazy
          src={proImg}

          fit='contain'
        />
        <h2 className={style.productTitle}>{title}</h2>
        <div className={style.productBottom}>
          <span className={style.productPrice}>
            <i>￥</i>
            {price.slice(0, price.indexOf('.'))}
            <span className={style.productPricePoint}>{price.slice(-3)}</span>
          </span>
          <Button className={style.productBtn}>查看详情</Button>
        </div>
      </div>
    </>
  )
}

ProductItem.propTypes = {
  price: PropTypes.string,
  proImg: PropTypes.string,
  title: PropTypes.string
}

ProductItem.defaultProps = {
  price: '',
  proImg: '',
  title: ''
}


export default ProductItem
