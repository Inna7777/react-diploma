import {NavigationButton} from '../shared/NavigationButton'
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
         
        <div className='aaa'>
                   {navigations.map((navigation)=><NavigationButton text={navigation.text} link={navigation.link}/>)}
                
        </div>
            
        
        
            
        
    
    </div>
    </div>
}
