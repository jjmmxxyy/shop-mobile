import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { NavBar, Popup, Swiper, Image, Tabs } from 'antd-mobile'
import { UnorderedListOutline, SearchOutline } from 'antd-mobile-icons'
import { withViewStyle } from '../HOC/withViewStyle'

import SubNav from './index/SubNav'
import Floor from './index/Floor'
import ProductItem from '../components/ProductItem'
import RecommendItem from './index/RecommendItem'
import Brand from './index/Brand'

import style from '../style/index.module.scss'
import { getIndexData } from '../redux/actionCreator/indexDataActionCreator'
import { getProductList } from '../redux/actionCreator/productListActionCreator'


function Index (props) {

  // 资源服务器地址
  const base_url = 'http://www.codeboy.com:9999/'

  const { getIndexData, indexDataList, getProductList, recommendBrandList } = props
  const { carouselItems, newArrivalItems, recommendedItems, topSaleItems } = indexDataList // 需要的列表数据

  // 推荐标题
  const recommend = [
    {
      id: 1,
      title: '联想',
      key: '联想'
    },
    {
      id: 2,
      title: '苹果',
      key: 'Apple'
    },
    {
      id: 3,
      title: '小米',
      key: 'xiaomi'
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


  // 首页数据
  useEffect(() => {
    if (indexDataList.length === 0) {
      getIndexData()
    }
    if (recommendBrandList.length === 0) {
      getProductList()
    }
  }, [indexDataList, recommendBrandList])


  const showSubNav = () => {
    setSubVisible(true)
  }

  const clickBrandTab = (index) => {
    console.log('recommendBrand', recommend[index - 1].key)
    let currentTab = recommend[index - 1].key
    recommendBrandList.filters(item => {
      item.title.toUpperCase().includes(currentTab.toUpperCase())
    })
  }

  // ==============================================ReactNode====================================================

  const navRight = <div className={style.region} onClick={() => {
    props.history.push('/city')
  }}>地区</div>

  // 轮播
  const swiperItems = carouselItems?.map((item) => (
    <Swiper.Item key={item.cid}>
      <Image className={style.swiperItem} src={base_url + item.img} fit='cover' lazy />
    </Swiper.Item>
  ))

  // 推荐商品
  const recommendTabs = recommend?.map((item) => {
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

  // 首页推荐
  const indexItems = recommendedItems?.map(item => {
    return <ProductItem title={item.title} key={item.pid} price={item.price} proImg={base_url + item.pic} />
  })

  // 最新上架
  const newItems = newArrivalItems?.map(item => {
    return <ProductItem title={item.title} key={item.pid} price={item.price} proImg={base_url + item.pic} />
  })

  // 热销单品
  const hotItems = topSaleItems?.map(item => {
    return <ProductItem title={item.title} key={item.pid} price={item.price} proImg={base_url + item.pic} />
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
            floorTitle='推荐品牌'
            rightWriting='全部'
            rightClick={() => {
              props.history.push('/brand')
            }}>
            <div className={style.floorBd}>
              <Tabs
                onChange={(e) => {
                  clickBrandTab(e)
                }}>
                {recommendTabs}
              </Tabs>
            </div>
          </Floor>

          <Floor floorTitle='首页推荐' rightWriting='更多'>
            <div className={style.floorBd}>
              {indexItems}
            </div>
          </Floor>
          <Floor floorTitle='最新上架' rightWriting='更多'>
            <div className={style.floorBd}>
              {newItems}
            </div>
          </Floor>
          <Floor floorTitle='热销单品' rightWriting='更多'>
            <div className={style.floorBd}>
              {hotItems}
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

const mapStateToProps = (state) => {
  return {
    indexDataList: state.indexDataReducer.indexData,
    recommendBrandList: state.productListReducer.productListData
  }
}

const mapDispatchToProps = {
  getIndexData,
  getProductList
}

export default withViewStyle(connect(mapStateToProps, mapDispatchToProps)(Index))

