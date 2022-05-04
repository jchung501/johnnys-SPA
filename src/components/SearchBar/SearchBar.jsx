import styles from './SearchBar.module.css';

export default function SearchBar(props) {
    return(
        <div className={styles.SearchBar}>
            <input type='text' value={props.value} onChange={props.onChange} placeholder='Search..'/>
        </div>
    )
}