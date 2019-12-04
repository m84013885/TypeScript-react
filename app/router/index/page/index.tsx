import * as React from 'react'
import { getLength } from './type.ts'
import './function.ts'
import * as style from './index.css'

const Main: () => any = () => {
  console.log(getLength('sss'))
  return (
    <div className={style.test}>123</div>
  )
}
export default Main
