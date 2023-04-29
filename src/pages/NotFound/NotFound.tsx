import Oops from '../../assets/image/page_not_found.jpg';
import styles from '../NotFound/not_found.module.sass';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <img src={Oops} alt='Oops'/>
    </div>
  )
}
