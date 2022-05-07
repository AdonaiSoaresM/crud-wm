import { Route, Routes } from 'react-router'
import Home from '../components/home/Home'
import UserCrud from '../components/user/UserCrud'

const Rotas = props =>
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/users" element={<UserCrud />} />
        <Route path="*" element={<Home />} />
    </Routes>

export default Rotas
