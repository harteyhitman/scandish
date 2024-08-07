import emenu from './emenu.module.scss'
const Emenu = () => {
  return (
    <div className={emenu.emenu_cont}>
        <h3 className={emenu.text}>TRANSFORM Your <span className={emenu.span}>
        Menu</span>  LIST with DIGIDISH <span className={emenu.span}> E-Menu</span> Platform</h3>
        <p className={emenu.smaller_text}>Easily create, upload, and update your menus online with our intuitive digital solution.</p>
    </div>
  )
}

export default Emenu