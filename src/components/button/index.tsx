import button from './button.module.scss'
interface buttonProps {
    className: string;
    type: string;
    label: string;
}


const Button= ({className,label, }:buttonProps) => {
  return (
    <div className={button.container}>
        <button className={className} 
            >{label}
        </button>
    </div>
  )
}

export default Button