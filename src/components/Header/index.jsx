import styles from './index.module.scss'

const Header = ({text}) => {
    return (
        <header>
            <h2 className={styles.header_h2}>{text}</h2>
        </header>
    )
}

export default Header;