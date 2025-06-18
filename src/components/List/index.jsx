import styles from './index.module.scss'
import Button from '../Button'

const List = ({list, clearList}) => {
    return (
        <div className={styles.list}>
            {list.length > 0 ? (
                <>
                    <div className={styles.list_button_wrapper}>
                        <Button onClick={clearList}>Clear All</Button>
                    </div>
                    <ol>
                        {
                            list.map((item, index) => {
                                return <li key={index}>{item}</li>
                            })
                        }
                    </ol>
                </>
            ) : (
                <h5 className="list_no_items">No items added</h5>
            )}
        </div>
    )
}

export default List;