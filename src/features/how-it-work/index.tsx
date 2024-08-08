import Image from 'next/image'
import styles from './styles.module.scss'
import { howitworks } from '@/data'

const HowItWorks = () => {
  return (
    <div className={styles.how_it_works_cont}>
        <h3 className={styles.headline}>How It Works</h3>
        <div className={styles.main}>
            {howitworks.map((works, index) => (
                <div key={works.id} className={`${styles.howitworks} ${
                index ===  1 ? styles.change : ""
              } ${index===3?styles.change:''}`}>
                    <div className={styles.category}>
                        <p className={styles.number}>{works.number}</p>
                        <p className={styles.title}>{works.title}</p>
                        <p className={styles.description}>{works.description}</p>
                    </div>
                    <Image src={works.img} alt='images' className={styles.images} />
                </div>
            ))}
        </div>
    </div>
  )
}

export default HowItWorks