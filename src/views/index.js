import React, { useEffect, useState } from 'react'
import { NavBar, Popup, Swiper, Grid, Tabs } from 'antd-mobile'
import { UnorderedListOutline, SearchOutline } from 'antd-mobile-icons'
import { withViewStyle } from '../HOC/withViewStyle'

import SubNav from './index/SubNav'
import Floor from './index/Floor'
import ProductItem from './index/ProductItem'
import RecommendItem from './index/RecommendItem'

import style from '../style/index.module.scss'

function Index(props) {
  const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac'] // 测试
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
          {/* 推荐品牌 */}
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
        </div>

        {/* 底部 */}
        <div className={style.bottom}>
          <Grid columns={4} gap={0}>
            <Grid.Item>
              <div className={style.bottomItem}>A</div>
            </Grid.Item>
            <Grid.Item>
              <div className={style.bottomItem}>A</div>
            </Grid.Item>
            <Grid.Item>
              <div className={style.bottomItem}>A</div>
            </Grid.Item>
            <Grid.Item>
              <div className={style.bottomItem}>A</div>
            </Grid.Item>
          </Grid>
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
