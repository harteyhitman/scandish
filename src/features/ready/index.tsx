import Button from '@/components/button'
import styles from './styles.module.scss'
const Ready = () => {
  return (
    <div className={styles.ready_cont}>
        <h1 className={styles.headline}>Ready to Enhance Your Menu?</h1>
        <p className={styles.desc}>Join our E-Menu Platform today and transform your restaurant's dining experience.</p>
        <Button className={styles.btn} type='button' label='Get started' />
    </div>
  )
}
export default Ready