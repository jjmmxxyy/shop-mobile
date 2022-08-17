import React from 'react'
import { connect } from 'react-redux'

import MyRouter from './router/index'
import Footer from './components/Footer'

import './style/base.css'

function App (props) {
  return (
    <div>
      <MyRouter>{props.isShow && <Footer />}</MyRouter>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isShow: state.footerReducer.isFooterShow
  }
}

export default connect(mapStateToProps)(App)
