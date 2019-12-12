import * as React from 'react'
import * as style from './index.css'
import { useState } from 'react'

import Mask from './components/mask/index'
import Scroll from './components/scroll/index'
import SwiperItem from './components/swiperItem/index'
import Toast from './components/toast/index'


const Main: () => any = () => {
  const [mask, setMask] = useState('')
  return (
    <React.Fragment>
      <Scroll>
        <SwiperItem changeIndex={(i: any) => { console.log(i) }}>
          <div>1</div>
          <div>2</div>
        </SwiperItem>
        <div className={style.test}>123</div>
      </Scroll>
      <Mask mask={mask} setMask={setMask}>
        <div>1</div>
      </Mask>
      <Toast />
    </React.Fragment>
  )
}
export default Main
