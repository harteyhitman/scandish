import Image from 'next/image'
import emenu from './emenu.module.scss'
import StartsImg from '../../../public/Assets/images/getstarted.png'
const Emenu = () => {
  return (
    <div className={emenu.emenu_cont}>
        <div className={emenu.text}>TRANSFORM Your <span className={emenu.span}>
        Menu</span>  LIST with <br /> DIGIDISH <span className={emenu.span}> E-Menu</span> Platform</div>
        <div className={emenu.smaller_text}>Easily create, upload, and update your menus online with our  <br />intuitive digital solution.</div>
        <Image src={StartsImg} alt='getstarted'className={emenu.image}/>
    </div>
  )
}

export default Emenu