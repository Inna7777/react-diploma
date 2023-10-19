import React from "react";
import styles from "./footer.module.css"

const Footer = () => {

    // const icons = [
    //     {icon:"./../footerIcons/facebook.svg"},
    //     {icon:"./../footerIcons/instagram.svg"},
    //     {icon:"./../footerIcons/linkedin.svg"},
    //     {icon:'./../footerIcons/vk.svg'}
    // ]
    //  const iconsComponent = icons.map((icn, index) =>{
    //     return(
    //         <div key={index}><a href="h" img src={icn.icon} alt=""/></div>
    //     );
    //  })
  return (
    <div className={styles.footer}>
      <div className={styles.conteiner}>
        <div className={styles.footerRow}>
          <div className={ styles.footerCol}>
            <div class={styles.footerCopyrightName}>© НАДЕЖДА ПЕШКОВА</div>
            <p>Дизайн интерьеров</p>
          </div>
          <div class={styles.footerIcons}>
            <p>Мои профили в социальных сетях:</p>
            <div class={styles.footerIconsRow}>
              {/* {iconsComponent}               */}
            </div>
          </div>
          <div class={styles.footerContacts}>
            <a href="https://vk.com/architect_peshkova" className={styles.footerButton}>
              Связаться Вконтакте
            </a>
            <p>Напишите мне, чтобы заказать или узнать стоимость проекта.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
