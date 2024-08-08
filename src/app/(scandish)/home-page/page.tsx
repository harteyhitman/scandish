import Emenu from '@/features/e-menu'
import HowItWorks from '@/features/how-it-work'
import Navbar from '@/features/navbar'
import ScanFeatures from '@/features/scan-features'
import WhyScandish from '@/features/why-scandish'
import styles from './home.module.scss'
import Ready from '@/features/ready'

const HomePage = () => {
  return (
    <div className={styles.home}>
       <Navbar />
       <Emenu />
       <WhyScandish />
       <ScanFeatures />
       <HowItWorks />
       <Ready />
    </div>
  )
}

export default HomePage