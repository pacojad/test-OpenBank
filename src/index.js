import React from 'react'
import ReactDOM from 'react-dom'

import StoreProvider  from './Context/store'

import App from './pages/App/App'

import './index.css'

ReactDOM.render(
    <StoreProvider><App/></StoreProvider>,
    document.getElementById('root'));
