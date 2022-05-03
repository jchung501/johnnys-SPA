import styles from './SearchBar.module.css';

export default function SearchBar(props) {
    return(
        <div className={styles.SearchBar}>
            <form className='SearchBar' action='/orders/new' method='POST'>
            <input type='text' placeholder='Search..' name='results'/>
            </form>
        </div>
    )
}