import { useState, useEffect } from "react";
import style from "./Card.module.css";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const { allGames } = props;
  const navigate = useNavigate()
  const [cardsToShow, setCardsToShow] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCardsToShow((cardsToShow) => cardsToShow + 1);
    }, 300);

    return () => clearInterval(intervalId);
  }, []);

  const Click = (id) => {
    navigate(`/detail/${id}`)
    
  }

  return (
    <>
      {allGames?.slice(0, cardsToShow).map((element) => {
        const { id, name, background_image,restOfData } = element;
        return (
          <div key={id} className={style.container}>
            <h3 onClick={()=>Click(restOfData? restOfData.id :id)}>{restOfData? restOfData.name :name}</h3>
            <img className={style.Img} src={restOfData? restOfData.image :background_image} alt="Game img" />
          </div>
        );
      })}
    </>
  );
};

export default Card;








