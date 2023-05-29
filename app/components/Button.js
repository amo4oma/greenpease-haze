import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal, PromiseLikeOfReactNode } from "react"


function Button({ title, bg, ...props}) {
    return (
        <button  className={`${bg} text-center text-white p-3 mt-2 rounded-md uppercase
        hover:bg-green-950 transition-all 
        ` + (props.w ? 'w-[100%]' : '')}>{title}</button>
    )
}

export default Button