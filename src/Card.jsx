import pic from "./assets/Garbo.png";
import "./media.css";

function Card() {
  return (
    <div className="card">
      <img className="cardImage" src={pic} alt="there he is"></img>
      <h2 className="cardTitle">Garbo Barbo</h2>
      <p className="cardCopy">
        just a little guy. he is small and stout. we love him.
      </p>
    </div>
  );
}

export default Card;
