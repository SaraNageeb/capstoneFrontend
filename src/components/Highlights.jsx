 import greekSalad from "../assets/greek salad.png"
import bruchetta from "../assets/Bruchetta.png"
import lemonDesert from "../assets/lemon dessert.png"
  import HighlightCard from "./HighlightCard"
const Highlights = () => {
  return (
    <section id="weekSpecial">
    <div className="weekSpecialContainer">
        <div className="head">
            <h2>This weeks specials!</h2>
            <button className="primaryBtn">Online Menu</button>
        </div>
        <div className="content">
            <div className="row">                 
                <HighlightCard  imgsrc={greekSalad} title="Greek Salad<" price="$12.99" description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."  />
                 <HighlightCard  imgsrc={bruchetta} title="Bruchetta" price="$5.99" description="Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."  />
                 <HighlightCard  imgsrc={lemonDesert} title="Lemon Dessert" price="$5.00" description="This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."  />

            </div>
        </div>           
    </div>
</section>
  )
}

export default Highlights