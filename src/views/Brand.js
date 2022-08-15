import React from 'react'
import { Grid } from 'antd-mobile'

import style from '../style/brand.module.scss'

import { withViewStyle } from '../HOC/withViewStyle'

function Brand () {
  return <>
    <Grid columns={3} gap={8}>
      <Grid.Item>
        <div className={style['grid-demo-item-block']}>A</div>
      </Grid.Item>
      <Grid.Item>
        <div className={style['grid-demo-item-block']}>B</div>
      </Grid.Item>
      <Grid.Item>
        <div className={style['grid-demo-item-block']}>C</div>
      </Grid.Item>
      <Grid.Item>
        <div className={style['grid-demo-item-block']}>D</div>
      </Grid.Item>
      <Grid.Item>
        <div className={style['grid-demo-item-block']}>E</div>
      </Grid.Item>
    </Grid>
  </>
}
export default withViewStyle(Brand)
