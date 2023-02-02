import {NavLink} from 'react-router-dom'
import {useContext} from 'react'
import AuthContext from '../store/authContext'
import '../App.css'



const Header = () => {
    const authCtx = useContext(AuthContext)

    return (
        <header className='nav'>
            <nav>
            <h2 className="header-title">League Team Builder</h2>
                {
                    authCtx.token ? (
                        <ul className='link-wrap'>
                            <li>
                                <NavLink to='/'>Champ Select</NavLink>
                            </li>
                            <li>
                                <NavLink to='/profile'>Saved Teams</NavLink>
                            </li>
                            <li>
                                <button className='logout-btn' onClick={() => authCtx.logout()}>Logout</button>
                            </li>
                        </ul>
                    ) : (
                        <ul className='link-wrap'>
                            <li>
                                <NavLink to='/'>Champ Select</NavLink>
                            </li>
                            <li>
                                <NavLink to='/auth'>Login or Register</NavLink>
                            </li>
                        </ul>
                    )
                }
            </nav>
        </header>
    )
}

export default Header