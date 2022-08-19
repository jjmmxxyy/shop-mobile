import React, { useState } from 'react'
import { RightOutline } from 'antd-mobile-icons'
import { Image, Checkbox } from 'antd-mobile'
import { withViewStyle } from '../HOC/withViewStyle'
import MiniCard from '../components/MiniCard'

import style from '../style/cart.module.scss'
import resources from '../mock/resources'

function Cart () {
  const { header, cartList } = resources.cart
  const testtest = true

  const [cartValue, setCartValue] = useState([]);

  // ==============================================ReactNode====================================================

  // 购物车空状态
  const cartNull = <div className={style['cart-list-null']}>
    <Image src={cartList.nothingImg} width={150} height={150} fit='fill' />
    <h3>购物车竟然是空的</h3>
    <p>再忙，也要记得买点东西犒赏自己</p>
  </div>

  // 购物车有数据
  const cartListCard = <div className={style['cart-list']}>
    <Checkbox.Group
      value={cartValue}
      onChange={v => {
        console.log(v)
      }}
    >
      <div className={style['cart-list-item']}>
        <div className={style['cart-item-hd']}>
          XXX旗舰店
          <RightOutline fontSize={12} />
        </div>
        <div className={style['cart-item-bd']}>
          <Checkbox />
          <Image className={style['cart-item-img']} src={cartList.nothingImg} width={90} height={90} fit='fill' lazy />
          <div className={style['cart-item-detail']}>
            <h4 className={style['cart-item-title']}>标题标题标题标题标题标题标题</h4>
            <span className={style['cart-item-sku']}>黑色黑色黑色黑色</span>
            <div className={style['cart-item-tags']}>
              <span>3期免息</span>
              <span>库存紧张</span>
            </div>
            <div className={style['cart-item-footer']}>
              <div className={style['cart-item-footer-price']}>
                <span><i>￥</i>10459</span>
              </div>
              <div className={style['cart-item-footer-number']}>×1</div>
            </div>
          </div>
        </div>
      </div>
    </Checkbox.Group>
  </div>

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
        <div className={style['footer']}></div>
      </div>
    </>
  )
}

export default withViewStyle(Cart)