import './styles/App.scss'

import { BrowserRouter } from 'react-router-dom'

import AppRouter from './components/AppRouter'
import Header from './components/UI/Header/Header'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <AppRouter />
      </div>
    </BrowserRouter>
  )
}

export default App
