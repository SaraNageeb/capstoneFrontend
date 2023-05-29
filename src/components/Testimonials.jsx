import TestimonialCard from "./TestimonialCard"
import  person1 from"../assets/person1.png"
import  person2 from"../assets/pserson2.png"
import  person3 from"../assets/person3.png"

const Testimonials = () => {
  return (
     <section id="testimonials">
    <div className="testimonialsContainer">
        <h1>Testimonials</h1>
        <div className="row">
        <TestimonialCard rating={3} imgsrc={person1} name="Sara"/>
        <TestimonialCard rating={5} imgsrc={person2} name="Alex"/>
        <TestimonialCard rating={1} imgsrc={person3} name="Mohamed"/>

      </div></div></section>
  )
}

export default Testimonials