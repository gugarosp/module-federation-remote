import styles from './index.module.scss'

const List = ({list}) => {
    return (
        <div className={styles.list}>
            {list.length > 0 ? (
                <ol>
                    {
                        list.map((item, index) => {
                            return <li key={index}>{item}</li>
                        })
                    }
                </ol>
            ) : (
                <h5 className="list-no-items">No items added</h5>
            )}
        </div>
    )
}

export default List;