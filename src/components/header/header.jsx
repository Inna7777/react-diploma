import { NavigationButton } from "../shared/NavigationButton/NavigationButton";
import "./Header.css";

export const Header = () => {

  //  Массив для создания кнопок навигации
  const navigations = [
    { text: "Услуги", link: "#deals" },
    { text: "Портфолио", link: "#portfolio" },
    { text: "Тарифы", link: "#tarifs" },
    { text: "Контакты", link: "#contacts" },
  ];

  return (
    <div className="header_fon">
      <div className="asdasdasd">
        <div className="aaa">
          {navigations.map((navigation) => (            
            <NavigationButton text={navigation.text} link={navigation.link} />// Используется образ навигационной кнопки
          ))}
        </div>
      </div>
    </div>
  );
};
