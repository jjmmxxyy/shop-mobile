import React from 'react'
import { Grid, Image, Badge } from 'antd-mobile'

import { withViewStyle } from '../../HOC/withViewStyle'

import style from '../../style/index.module.scss'

function Brand (props) {

  const { brandObj } = props

  const brandList = brandObj.map(item => {
    return <Grid.Item className={style['brand-item']} key={item.id}>
      <Badge
        color='var(--adm-color-primary)'
        content={item.isMessage ? Badge.dot : null}
        style={{ '--right': '10%', '--top': '128%' }}
      >
        <Image className={style['brand-img']} width={100} src={item.img} />
      </Badge>
      <p className={style['brand-name']}>{item.name}</p>
    </Grid.Item>
  })

  return <>
    {/* 主体 */}
    <Grid columns={3}>
      {brandList}
    </Grid>
  </>
}
export default withViewStyle(Brand)
