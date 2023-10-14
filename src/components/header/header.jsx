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
                   {navigations.map((navigation)=><NavigationButton text={navigation.text} link={navigation.link}/>)}
        </div>
        <div>
            <img src={pictureBackground} alt="img" />
            
        </div>
    
    </div>
    </div>
}
