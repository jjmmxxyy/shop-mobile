import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { RightOutline } from 'antd-mobile-icons'
import { Image, Checkbox } from 'antd-mobile'
import { withViewStyle } from '../HOC/withViewStyle'
import MiniCard from '../components/MiniCard'

import style from '../style/cart.module.scss'
import resources from '../mock/resources'
import { getCartListData } from '../redux/actionCreator/carListActionCreator'

function Cart (props) {
  const { header, cartList } = resources.cart // 资源
  const { getCartListData, cartListData } = props // 获取购物车数据方法、购物车列表数据
  const testtest = true // 测试使用，控制购物车是否为空

  const [selectedArr, setSelectedArr] = useState([]) // 选中的商品

  useEffect(() => {
    if (cartListData.length === 0) {
      getCartListData()
    }
    console.log(cartListData)
  }, [cartListData])

  // ==============================================ReactNode====================================================

  // 购物车空状态
  const cartNull = <div className={style['cart-list-null']}>
    <Image src={cartList.nothingImg} width={150} height={150} fit='fill' />
    <h3>购物车竟然是空的</h3>
    <p>再忙，也要记得买点东西犒赏自己</p>
  </div>

  // 购物车有数据
  const cartListCard = cartListData.map(item => {

    return (<div div className={style['cart-list']} key={item.cartid}>
      <Checkbox.Group
        value={cartListData}
        onChange={v => {
          console.log(v)
        }}
      >
        <div className={style['cart-list-item']}>
          <div className={style['cart-item-hd']}>
            {item.shopName}
            <RightOutline fontSize={12} />
          </div>
          <div className={style['cart-item-bd']}>
            <Checkbox />
            <Image className={style['cart-item-img']} src={item.pic} width={90} height={90} fit='fill' lazy />
            <div className={style['cart-item-detail']}>
              <h4 className={style['cart-item-title']}>{item.title}</h4>
              <span className={style['cart-item-sku']}>{item.spec.join('、')}</span>
              <div className={style['cart-item-tags']}>
                {item.lable.map((lableTitle, index) => {
                  return (<span key={index}>{lableTitle}</span>)
                })}
              </div>
              <div className={style['cart-item-footer']}>
                <div className={style['cart-item-footer-price']}>
                  <span><i>￥</i>{item.price}</span>
                </div>
                <div className={style['cart-item-footer-number']}>×{item.count}</div>
              </div>
            </div>
          </div>
        </div>
      </Checkbox.Group>
    </div>)
  })

  return (
    <>
      <div className={style['container']}>
        {/* 顶栏 */}
        <div className={style['header']}>
          <div className={style['title']}>
            <span>购物车</span><span>(0)</span>
          </div>
          <MiniCard icon={header.headerIcon} title={header.title} rightText={header.right} rightArrow={true} />
        </div>

        {/* 购物车列表 */}
        {testtest ? cartListCard : cartNull}

        {/* 底部合计 */}
        <div className={style['footer']}>
          <div className={style['footer-left']}>
            <Checkbox indeterminate={cartListData.length > 0 && cartListData.length} />
            <div className={style['checkbox-lable']}>全选</div>
          </div>
          <div className={style['footer-right']}>
            <div className={style['total']}>
              <span className={style['total-text']}>合计:</span>
              <span className={style['total-price']}>￥<b>5550</b></span>
            </div>
            <div className={style['settlement-btn']}>结算</div>
          </div>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (state) => {

  return {
    cartListData: state.cartListReducer.cartData,
  }
}

const mapDispatchToProps = {
  getCartListData,
}


export default withViewStyle(connect(mapStateToProps, mapDispatchToProps)(Cart))