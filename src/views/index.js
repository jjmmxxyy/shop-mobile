import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { NavBar, Popup, Swiper, Image, Tabs, PullToRefresh } from 'antd-mobile'
import { UnorderedListOutline, SearchOutline } from 'antd-mobile-icons'
import { withViewStyle } from '../HOC/withViewStyle'

import { getProductDataList } from '../api/product'


import SubNav from './index/SubNav'
import Floor from './index/Floor'
import ProductItem from '../components/ProductItem'
import RecommendItem from './index/RecommendItem'
import Brand from './index/Brand'

import style from '../style/index.module.scss'
import { getIndexData } from '../redux/actionCreator/indexDataActionCreator'


function Index (props) {

  // 资源服务器地址
  const base_url = 'http://www.codeboy.com:9999/'

  const { getIndexData, indexDataList } = props
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
      title: '戴尔',
      key: '戴尔'
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

  const [subVisible, setSubVisible] = useState(false) // 控制侧边栏显示隐藏
  const [recommendList, setRecommendList] = useState([]) // 推荐列表


  // 首页数据
  useEffect(() => {

    if (JSON.stringify(indexDataList) === "{}") { // 首页数据为空
      getIndexData()
    }

    if (recommendList.length === 0) { // 推荐品牌为空
      getRecommendList(recommend[0].key) // 获取推荐数据列表 
    }

  }, [indexDataList, recommendList])


  /**
   * 点击顶部左边按钮触发
   */
  const showSubNav = () => {
    setSubVisible(true)
  }

  /**
   * tab栏切换事件
   * @param {*} index 
   */
  const clickBrandTab = async (index) => {
    let currentTab = recommend[index - 1].key
    getRecommendList(currentTab)

  }

  /**
   * 获取对应的推荐数据
   * @param {*} kw 
   */
  const getRecommendList = async (kw) => {
    const param = {
      pno: 1,
      count: 6,
      kw
    }
    const res = await getProductDataList(param)
    setRecommendList(res.data)
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
          {
            recommendList ? recommendList.map(item => {
              return <RecommendItem key={item.lid} pic={base_url + item.pic} title={item.title}></RecommendItem>
            }) : ""
          }

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
    <PullToRefresh onRefresh={async () => {
      getIndexData()
    }}>
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
            <div className={`${style['floorBd']}`}>
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
    </PullToRefresh>
  )
}

const mapStateToProps = (state) => {

  return {
    indexDataList: state.indexDataReducer.indexData,
  }
}

const mapDispatchToProps = {
  getIndexData,
}

export default withViewStyle(connect(mapStateToProps, mapDispatchToProps)(Index))

