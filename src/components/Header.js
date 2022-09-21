import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <Link to='/whatever'>
                <div>All People</div>
            </Link>
            <Link to='/people/6321f8e021d6bc3fe3f2f11e'>
                <div>One Person</div>
            </Link>
            <Link to='/breweries'>
                <div>All Breweries</div>
            </Link>
        </>
    )
}

export default Header;