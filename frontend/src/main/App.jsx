import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
// import Home from '../components/home/Home'
import Footer from '../components/template/Footer'
import { BrowserRouter } from 'react-router-dom'
import Rotas from './Routes'

const App = props =>
    <BrowserRouter>
        <div className="app">
            <Logo />
            <Nav />
            <Rotas />
            <Footer />
        </div>
    </BrowserRouter>

export default App