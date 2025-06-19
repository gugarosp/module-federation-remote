import styles from './index.module.scss'

const Header = ({text, colorMode = "dark"}) => {
    return (
        <header>
            <h2 className={`${styles.header_h2} ${styles[colorMode]}`}>{text}</h2>
        </header>
    )
}

export default Header;