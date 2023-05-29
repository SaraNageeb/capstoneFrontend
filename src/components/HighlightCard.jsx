
import bikeIcon from "../assets/ic_sharp-pedal-bike.svg"
const HighlightCard = ({ title,price, description,imgsrc }) => {
  return (
    <div className="col">
    <div className="card">
        <img src={imgsrc} alt="cardImage" className="cardImage" />
        <div className="cardContent">
            <div className="cardHeading">
                <h3 className="title">{title}</h3>
                <p className="price">{price}</p>
            </div>

            <p className="description">{description}</p>

            <div className="order">
                <p>Order a delivery </p>
                <img src={bikeIcon} alt="bikeIcon" className="bikeIcon" />
            </div>
        </div>
    </div>
</div>
  )
}

export default HighlightCard