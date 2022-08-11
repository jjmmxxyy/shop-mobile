import React from 'react'
import style from '../style/viewStyle.module.scss'

export function withViewStyle(MyComponent) {
  return (props) => {
    return (
      <div className={style.bgTransition}>
        <MyComponent {...props} />
      </div>
    )
  }
}
