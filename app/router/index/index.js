import React from 'react'
import './index.css'
import { render } from 'react-dom'
import Main from './page/index.tsx'

window.onload = function () {
  render(<Main />, document.getElementById('main'))
}
