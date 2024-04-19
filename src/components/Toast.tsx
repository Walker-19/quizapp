import { CSSProperties, HTMLAttributes, useState } from "react"


interface Decoration extends HTMLAttributes<HTMLDivElement>  {
        duration: number,
        text: string,
}



const Toast: React.FC<Decoration> = (props )=> {
    const [dismiss, setDismis] = useState(true)
  
    setTimeout(() => {
        setDismis(false);
    }, props.duration);

    return <>
           {dismiss && ( <div {...props}>
                <span >{props.text}</span>
                </div>)}
    </>
}

export default Toast;   