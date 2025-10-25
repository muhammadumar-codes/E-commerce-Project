import "./Button.css"

export default function Button ({children, ...prop}){

    return (
        <>
    
        <button {...prop} className="button-logout" >{children}</button>
        
        </>
    )
}