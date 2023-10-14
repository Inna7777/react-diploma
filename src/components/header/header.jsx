import {NavigationButton} from '../shared/NavigationButton'
import pictureBackground from '../shared/assets/picture-background-1.png'
import './header.css'



export const Header =()=>{

    const navigations = [
        {text: 'Услуги', link:'#deals'},
        {text: 'Портфолио', link:'#portfolio'},
        {text: 'Тарифы', link:'#tarifs'},
        {text: 'Контакты', link:'#contacts'},
    ]


    return <div className='header_fon'>
            <div className='asdasdasd'>         
        
        <div>
            {/* <NavigationButton text="Услуги" link="test"/>
        <NavigationButton text="Test1" link="test"/>
        <NavigationButton text="Test2" link="test"/>
        <NavigationButton text="Test3" link="test"/> */}
        {navigations.map((navigation)=><NavigationButton text={navigation.text} link={navigation.link}/>)}
        </div>
        <div>
            <img src={pictureBackground} alt="img" />
            
        </div>
    
    </div>
    </div>
}