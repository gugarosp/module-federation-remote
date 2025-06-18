import './index.scss'

const Header = ({text}) => {
    return (
        <header>
            <h2 className="header-h2">{text}</h2>
        </header>
    )
}

export default Header;