import aboutImage from "../assets/about image.png"

const About = () => {
  return (
    <section id="about">
    <div className="aboutContainer">
    <div className="row">
            <div className="col">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>we are a family owned Mediterranean restuarant, focused on traditional recipes served with a modern twist.</p>
            </div>
            <div className="col">
                <img src={aboutImage} alt="aboutImage" className="aboutImage" />
            </div>
        </div>
    </div>
</section>
  )
}

export default About