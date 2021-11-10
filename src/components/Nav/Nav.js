import logo from './Netflix_Logo_RGB.png';
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AccountBox, ArrowDropDown, ArrowDropUp, Search } from '@material-ui/icons';
import './Nav.scss';
import { SearchContext } from '../../store/SearchContext';

export default function Nav() {
    const [atTopLevel, setAtTopLevel] = useState(false);

    window.onscroll = () => {
        setAtTopLevel(window.pageYOffset === 0 ? true : false)
        return () => (window.onscroll = null);
    }

    return (
        <nav className={atTopLevel ? "navbar" : "navbar scrolled"}>
            <div className="nav-container">
                <LeftNav />
                <RightNav />
            </div>
        </nav>
    )
}

function LeftNav() {
    const itemList = [
        {name: 'Home', link: '/netflix-react-app'},
        {name: 'TV Shows', link: '/netflix-react-app/tvshows'},
        {name: 'Movies', link: '/netflix-react-app/movies'},
        {name: 'My List', link: '/netflix-react-app/mylist'}
    ]

    return (
        <div className="nav-left">
            <Link to="/netflix-react-app">
                <img src={logo} alt="Netflix Logo" className="logo"/>
            </Link>
            <div className="navigation">
                <ul className="navigation-large">
                    {itemList.map(elem => (
                        <Link to={elem.link} key={elem.name}>
                            <li>{elem.name}</li>
                        </Link>
                    ))}
                </ul>
                <div className="navigation-small">
                    <div>Browse</div>
                    <ArrowDropDown />
                    <div className="nav-small-expand">
                        <ArrowDropUp />
                        <ul className="nav-small-expand-content">
                            {itemList.map(elem => (
                                <Link to={elem.link} key={elem.name}>
                                    <li>{elem.name}</li>
                                </Link>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

function RightNav() {
    const [searchClicked, setSearchClicked] = useState(false);
    const navigate = useNavigate();
    const [searchText, setSearchText] = useContext(SearchContext);
    return (
        <div className="nav-right">
            <div className={searchClicked ? "search-box-clicked" : "search-box"} >
                <Search className="search-icon" onClick={() => setSearchClicked(!searchClicked)} />
                <input 
                    type="text" 
                    className="search-bar"
                    placeholder="Search titles"
                    autoComplete="off"
                    autoFocus
                    onChange={e => {
                        setSearchText(e.target.value);
                        navigate("/netflix-react-app/search");
                    }}
                />
            </div>
            <div className="account-box">
                <AccountBox className="profile"/>
                <ArrowDropDown className="arrow-down" />
                <div className="account-expand">
                    <ArrowDropUp className="arrow-up"/>
                    <div className="account-expand-content">
                        <div>Account</div>
                        <div>Sign out of Netflix</div>
                    </div>
                </div>
            </div>
        </div>
    );
}