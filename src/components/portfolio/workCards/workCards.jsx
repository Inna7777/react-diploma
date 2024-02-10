import style from "./WorkCards.module.css";
import PortfolioDetalis from "../../Slider/PortfolioDetalis";
import React, { useState } from "react";
import Dialog from "../../shared/Dialog/Dialog";
//Галерея работ на главной странице 
const WorkCards = (props) => {
  const [state, setState] = useState(null);
  const [openDialog, setOpenDialog] = useState(false)

  function setPortfolioId(id) {
    setState(id);
    setOpenDialog(true)
  }
function onDialogCancel(){
  setOpenDialog(false)
}
  const workPiсtures = [
    { image: "/work/order1.jpg", id: "order1" },
    { image: "/work/order2.jpg", id: "order2" },
    { image: "/work/order3.jpg", id: "order3" },
    { image: "/work/order4.jpg", id: "order4" },
    { image: "/work/order5.jpg", id: "order5" },
    { image: "/work/order6.jpg",  id: "order6" },
  ];
  const workCardsComponents = workPiсtures.map((picture) => {
    return (
      <div>
        <img src={picture.image} alt="" onClick={() => setPortfolioId(picture.id)} />

       </div>
    );
  });

  return (
    <div>
      <div className={style.conteinerPicture}>
        {workCardsComponents}
      </div>
      
      
      <Dialog open={openDialog} onCancel={onDialogCancel}>{state && <PortfolioDetalis id={state} />} </Dialog>
      
    </div>
  );
};

export default WorkCards;
