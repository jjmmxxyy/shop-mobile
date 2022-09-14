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

  const [selectedArr, setSelectedArr] = useState([]) // 选中的商品数组
  const [totalPrice, setTotalPrice] = useState(0) // 商品总价

  useEffect(() => {
    if (cartListData.length === 0) {
      getCartListData() // 获取购物车数据
    }

    const newArr = [] // 新数组
    cartListData.forEach(item => { // 将购物车数据中已经勾选起的数据过滤出来，并push到新数组
      if (item.isChecked) {
        newArr.push(item)
        setTotalPrice((total = 0) => total += item.price * item.count) // 算总价
      }
    })
    setSelectedArr(newArr)
  }, [cartListData]) // 该副作用函数仅依赖cartListData，若依赖selectedArr则会不停的渲染


  /**
   * 监听复选框onChange是事件(商品列表项)
   * @param {boolean} value 是否勾选(组件提供)
   * @param {*} item 点击的商品项
   */
  const checkItemChange = (value, item) => {
    item.isChecked = value
    const newArr = JSON.parse(JSON.stringify(selectedArr)) // 深拷贝selectedArr，直接把新数组丢入setSelectedArr中
    if (value) { // value：true则push到newArr数组
      newArr.push(item)
      calc(newArr) // 计算总价
      setSelectedArr(newArr)
    } else {
      const index = (selectedArr || []).findIndex((i) => i.cartid === item.cartid)
      newArr.splice(index, 1)
      calc(newArr) // 计算总价
      setSelectedArr(newArr)
    }
  }

  /**
   * 监听复选框onChange是事件(底部)
   * @param {*} checked 是否勾选(组件提供)
   */
  const checkBottomChange = (checked) => {
    cartListData.forEach(ele => {
      ele.isChecked = checked // 将所有的数据全部设为checked的值
    })

    if (checked) { // cartListData为查询到的全部购物车数据，checked为组件自带参数
      setSelectedArr(cartListData)
      calc(cartListData) // 计算总价
    } else {
      setSelectedArr([])
      calc([]) // 计算总价
    }
  }

  /**
   * 计算总价
   * @param {*} array 勾选后的新数组
   */
  const calc = (array) => {
    let total = 0
    if (array.length === 0) {
      setTotalPrice(total)
    } else {
      array.forEach(item => {
        if (item.isChecked) {
          total += item.price * item.count
          setTotalPrice(total)
        }
      })
    }
  }

  // ==============================================ReactNode====================================================

  // 购物车空状态
  const cartNull = <div className={style['cart-list-null']}>
    <Image src={cartList.nothingImg} width={150} height={150} fit='fill' />
    <h3>购物车竟然是空的</h3>
    <p>再忙，也要记得买点东西犒赏自己</p>
  </div>

  // 购物车有数据
  const cartListCard = cartListData.map(item => {

    return (<div className={style['cart-list']} key={item.cartid}>
      <div className={style['cart-list-item']}>
        <div className={style['cart-item-hd']}>
          {item.shopName}
          <RightOutline fontSize={12} />
        </div>
        <div className={style['cart-item-bd']}>
          <Checkbox checked={item.isChecked} onChange={(value) => {
            checkItemChange(value, item)
          }} />
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
            <Checkbox
              indeterminate={selectedArr.length > 0 && selectedArr.length < cartListData.length}
              checked={selectedArr.length === cartListData.length}
              onChange={(checked) => {
                checkBottomChange(checked)
              }}
            />
            <div className={style['checkbox-lable']}>全选</div>
          </div>
          <div className={style['footer-right']}>
            <div className={style['total']}>
              <span className={style['total-text']}>合计:</span>
              <span className={style['total-price']}>￥<b>{totalPrice}</b></span>
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