import React, { useEffect, useState } from 'react'
import { NavBar, Popup, Swiper, Grid, Tabs } from 'antd-mobile'
import { UnorderedListOutline, SearchOutline } from 'antd-mobile-icons'
import { withViewStyle } from '../HOC/withViewStyle'

import SubNav from './index/SubNav'
import Floor from './index/Floor'
import ProductItem from './index/ProductItem'
import RecommendItem from './index/RecommendItem'
import Brand from './index/Brand'

import style from '../style/index.module.scss'

function Index (props) {
  const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac'] // 测试
  // 推荐标题
  const recommend = [
    {
      id: 1,
      title: '联想',
    },
    {
      id: 2,
      title: '苹果',
    },
    {
      id: 3,
      title: '小米',
    },
  ]

  // 品牌馆
  const brand = [{
    id: 1,
    name: '联想',
    img: 'https://img.alicdn.com/imgextra/i1/2932013060/O1CN01M3axyi1YTWjgMOsma_!!2932013060.png',
    isMessage: false
  }, {
    id: 2,
    name: '小米',
    img: 'https://img.alicdn.com/imgextra/i1/2932013060/O1CN01M3axyi1YTWjgMOsma_!!2932013060.png',
    isMessage: true
  }, {
    id: 3,
    name: '苹果',
    img: 'https://img.alicdn.com/imgextra/i1/2932013060/O1CN01M3axyi1YTWjgMOsma_!!2932013060.png',
    isMessage: true
  }, {
    id: 4,
    name: '戴尔',
    img: 'https://img.alicdn.com/imgextra/i1/2932013060/O1CN01M3axyi1YTWjgMOsma_!!2932013060.png',
    isMessage: true
  }, {
    id: 5,
    name: '苹果',
    img: 'https://img.alicdn.com/imgextra/i1/2932013060/O1CN01M3axyi1YTWjgMOsma_!!2932013060.png',
    isMessage: false
  }, {
    id: 6,
    name: '小米',
    img: 'https://img.alicdn.com/imgextra/i1/2932013060/O1CN01M3axyi1YTWjgMOsma_!!2932013060.png',
    isMessage: false
  }, {
    id: 7,
    name: '联想',
    img: 'https://img.alicdn.com/imgextra/i1/2932013060/O1CN01M3axyi1YTWjgMOsma_!!2932013060.png',
    isMessage: false
  }, {
    id: 8,
    name: '戴尔',
    img: 'https://img.alicdn.com/imgextra/i1/2932013060/O1CN01M3axyi1YTWjgMOsma_!!2932013060.png',
    isMessage: false
  }, {
    id: 9,
    name: '联想',
    img: 'https://img.alicdn.com/imgextra/i1/2932013060/O1CN01M3axyi1YTWjgMOsma_!!2932013060.png',
    isMessage: true
  }]

  const [subVisible, setSubVisible] = useState(false)

  const showSubNav = () => {
    setSubVisible(true)
  }

  const navRight = <div className={style.region}>地区</div>

  const swiperItems = colors.map((color, index) => (
    <Swiper.Item key={index}>
      <div className={style.swiperItem} style={{ background: color }}>
        {index + 1}
      </div>
    </Swiper.Item>
  ))

  const recommendTabs = recommend.map((item) => {
    return (
      <Tabs.Tab
        style={{
          '--title-font-size': 'var(--base-font-size)',
        }}
        title={item.title}
        key={item.id}>
        <div className={style.recommendList}>
          <RecommendItem></RecommendItem>
          <RecommendItem></RecommendItem>
          <RecommendItem></RecommendItem>
          <RecommendItem></RecommendItem>
          <RecommendItem></RecommendItem>
          <div className={style.recommendMore}>查看更多</div>
        </div>
      </Tabs.Tab>
    )
  })

  return (
    <>
      {/* 顶栏 */}
      <NavBar className={style.navbar} backArrow={<UnorderedListOutline />} right={navRight} onBack={showSubNav}>
        <div className={style.searchBar}>
          <div className={style.logo}>
            <img
              src='https://img.alicdn.com/imgextra/i1/2932013060/O1CN01x2cAha1YTWjYGFN6s_!!2932013060.png'
              alt='logo'
            />
          </div>
          <p className={style.searchTitle}>请输入搜索内容</p>
          <SearchOutline color='var(--base-font-color)' />
        </div>
      </NavBar>

      {/* 主体内容 */}
      <div className={style.container}>
        <div className={style.banner}>
          <Swiper
            className={style.bannerSwiper}
            autoplay
            autoplayInterval={4000}
            loop
            indicatorProps={{
              style: {
                '--dot-color': 'var(--base-font-gray)',
                '--active-dot-color': '#555',
                '--dot-size': '5px',
                '--active-dot-size': '5px',
                '--dot-border-radius': '5px',
                '--active-dot-border-radius': '5px',
                '--dot-spacing': '4px',
              },
            }}>
            {swiperItems}
          </Swiper>
        </div>
        <div className={style.main}>
          {/* 推荐商品 */}
          <Floor
            floorTitle='推荐商品'
            rightWriting='全部'
            rightClick={() => {
              props.history.push('/brand')
            }}>
            <div className={style.floorBd}>
              <Tabs
                defaultActiveKey='1'
                onChange={(e) => {
                  console.log('e', e)
                }}>
                {recommendTabs}
              </Tabs>
            </div>
          </Floor>

          <Floor floorTitle='首页推荐/1F' rightWriting='更多'>
            <div className={style.floorBd}>
              <ProductItem></ProductItem>
              <ProductItem></ProductItem>
              <ProductItem></ProductItem>
              <ProductItem></ProductItem>
              <ProductItem></ProductItem>
            </div>
          </Floor>
          <Floor floorTitle='首页推荐/1F' rightWriting='更多'>
            <div className={style.floorBd}>
              <ProductItem></ProductItem>
              <ProductItem></ProductItem>
              <ProductItem></ProductItem>
              <ProductItem></ProductItem>
              <ProductItem></ProductItem>
            </div>
          </Floor>
          <Floor floorTitle='首页推荐/1F' rightWriting='更多'>
            <div className={style.floorBd}>
              <ProductItem></ProductItem>
              <ProductItem></ProductItem>
              <ProductItem></ProductItem>
              <ProductItem></ProductItem>
              <ProductItem></ProductItem>
            </div>
          </Floor>

          {/* 底部 */}
          <Floor floorTitle='品牌馆' rightWriting='更多'>
            <Brand brandObj={brand}></Brand>
          </Floor>
        </div>


        {/* 页脚 */}
        <div className={style.footer}>@大悬崖</div>
      </div>
      {/* 弹出框 */}
      <Popup
        visible={subVisible}
        onMaskClick={() => {
          setSubVisible(false)
        }}
        position='left'
        bodyStyle={{ minWidth: '60vw' }}>
        <SubNav></SubNav>
      </Popup>
    </>
  )
}

export default withViewStyle(Index)
