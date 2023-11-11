import "./index.css"

export const NavigationButton =({text, link})=>{
    return <a href={link} className="head-button">
    {text}
</a>
}