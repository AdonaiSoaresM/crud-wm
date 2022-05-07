import './Nav.css'
import NavItem from './NavItem'

const Nav = props => 
    <aside className='menu-area'>
        <nav className="menu">
            <NavItem icon='home' label='Início' href='/'/>
            <NavItem icon='users' label='Usuários' href='/users'/>
        </nav>
    </aside>


export default Nav