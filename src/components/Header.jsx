import {Link} from "react-router-dom";

const Header = () => {
    return (
        <>

            <header>
                <Link to={"/"}>
                    <img className='max-w-[150px]' src="/public/Logonetflix.png" alt="logo"/>
                </Link>
                
            </header>
        </>
    )
}

export default Header