import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom';
import 'antd/dist/antd.css'
import { ConfigProvider } from 'antd'
import ptBr from 'antd/lib/locale/pt_BR'
import App from './App'

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <ConfigProvider locale={ptBr}>
        <App />
      </ConfigProvider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);