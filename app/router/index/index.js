import React from 'react'
import './index.css'
import '../../utils/resize'
import { render } from 'react-dom'
import Main from './page/index.tsx'

import './common/index.common.css'
import './common/pace.common.css'
import './common/pace.min.js'

window.onload = function () {
  render(<Main />, document.getElementById('main'))
}
