import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { withViewStyle } from '../HOC/withViewStyle'
import { show, hide } from '../redux/actionCreator/footerActionCreater'

function City (props) {
  const { show, hide } = props

  useEffect(() => {
    hide()
    return () => {
      show()
    }
  }, [])

  return (
    <div>City</div>
  )
}

const mapDispatchToProps = {
  show,
  hide
}

export default withViewStyle(connect(null, mapDispatchToProps)(City))