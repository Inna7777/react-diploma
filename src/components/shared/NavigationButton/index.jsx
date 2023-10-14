import "./index.css"

export const NavigationButton =({text, link})=>{
    return <a href={link} class="head-button">
    {text}
</a>
}