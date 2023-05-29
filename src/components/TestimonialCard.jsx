import React from 'react'

const TestimonialCard = ({ rating,imgsrc,name }) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const starClass = i <= rating ? 'filled' : 'empty';
      stars.push(<span key={i} className={`star ${starClass}`} />);
    }
  return (
   
<>
    <div className="col">
        <div className="card">
                            <div className="star-rating rating">{stars}</div> 
                                <div className="details">
                                    <img src={imgsrc} alt="person" className="person"/>
                                    <p>{name}</p>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
                            </div>
                        </div>
 </>
  )
}

export default TestimonialCard