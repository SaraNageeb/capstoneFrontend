import { useNavigate } from 'react-router-dom';



import heroImage from "../assets/restauranfood.png"
 
const Hero = () => {
    const navigate = useNavigate();
  return (
    <>
    <section id="heroSection">
    <div className="heroContainer">
        <div className="row">
            <div className="col">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>we are a family owned Mediterranean restuarant, focused on traditional recipes served with a modern twist.</p>
                <button className="primaryBtn"onClick={() => navigate('/booking')}>Reserve a Table</button>
            </div>
            <div className="col">
                <img src={heroImage} alt="heroImage" className="heroImage" />
            </div>
        </div>
    </div>
</section>
</>
  )
}

export default Hero