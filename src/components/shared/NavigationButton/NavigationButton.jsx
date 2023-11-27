import "./NavigationButton.css"

// Создание образа навигационной кнопки сайта
export const NavigationButton =({text, link})=>{
    return <a href={link} className="head-button">
    {text}
</a>
}