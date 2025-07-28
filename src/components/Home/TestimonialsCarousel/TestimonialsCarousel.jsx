import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./TestimonialsCarousel.css";

const testimonials = [
  {
    quote:
      "\"Bernie of Leicester Grooming was a patient, very friendly, thorough teacher, and has enabled me to set up my own grooming business in Melton Mowbray after completing the flexible 8 week intensive course, which I was able to complete over a longer period of time due to other commitments. One of many courses she offers. She continues even after I have qualified to give free good advice at the end of a phone and also has given me the opportunity to seek face to face tuition post course. Very friendly atmosphere to learn in a your own pace.\"",
    name: "Jan Close",
    title: "Professional Dog Groomer",
  },
  {
    quote:
      "\"Bernie and team are just absolutely amazing. Our little puppy had his first groom and the entire team made the whole experience so wonderful. Little guy loved it. Thank you.\"",
    name: "Avni Sondagar",
    title: "Course Graduate",
  },
  {
    quote:
      "\"I did my 3 week training course with Bernie. All I can say is that she is amazing. Gets you stuck in on day 1. I have now finished my course, and have just opened up my own salon. There is still so much to learn, Bernie is only a call away if I need her for anything! Which puts you at ease especially when just starting out on your own. I will still go back some days to Bernie to keep practicing different breeds which she allows you to do after your training course has finished which I think is great! I can’t thank Bernie enough for everything she has helped me through. If you would like to take up dog grooming as a career or even a part time job on the weekend. This is the place to go and train!\"",
    name: "Alice Hull",
    title: "Pet Salon Owner",
  },
  {
    quote:
      "\"Having looked at other courses they seemed pretty theory heavy. This course could not be more different. You literally start grooming dogs from day one which means by the time the course is finished you will have had loads of practical experience which means you can hit the ground running when you qualify. Bern is a really nice person, good as a tutor but also great at making you feel at ease and you can literally chat like you've known her for years. The environment is so supportive and everyone is there to help each other. The after support is there too with Bern on hand on the phone and also a group we all set up to share ideas. If you want a course where you can feel at home and come out with tonnes of practical experience, this is the one for you!\"",
    name: "Sharlene Mclaughlin",
    title: "Pet Salon Owner",
  },
  {
    quote:
      "\"Recently chosen to do the 3 week intensive course with Bernie and so glad I did. I learnt so much so quickly and had great support from her and the other students. Really makes you feel at home and was sad when it was over. Highly recommend leicester dog grooming to learn how to groom! Xx\"",
    name: "Fran Coombs",
    title: "Pet Salon Owner",
  },
];

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = (i) => {
    setAnimating(true);
    setIndex(i);
  };

  const prevTestimonial = () => {
    goTo(index === 0 ? testimonials.length - 1 : index - 1);
  };

  const nextTestimonial = () => {
    goTo(index === testimonials.length - 1 ? 0 : index + 1);
  };

  // Auto switch every 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      nextTestimonial();
    }, 5000);

    return () => clearTimeout(timer);
  }, [index]);

  // Reset animation state
  useEffect(() => {
    const animTimer = setTimeout(() => setAnimating(false), 600);
    return () => clearTimeout(animTimer);
  }, [index]);

  return (
    <div className="testimonial-section">
      <div className="testimonial-header">
        <span className="testimonial-sub">What Our Clients Say</span>
        <h2 className="testimonial-title">Testimonials</h2>
        <p className="testimonial-description">
          Hear from happy dog owners about their experience with Leicester Dog Grooming and the care their pups received.
        </p>
      </div>

      <div className={`testimonial-card ${animating ? "fade-slide" : ""}`}>
        <p className="testimonial-quote">{testimonials[index].quote}</p>
        <p className="testimonial-name">{testimonials[index].name}</p>
      </div>

      <div className="testimonial-controls">
        <button className="icon-btn" onClick={prevTestimonial}>
          <FaArrowLeft className="arrow-icon" />
        </button>

        <div className="testimonial-dots">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={i === index ? "dot active" : "dot"}
              onClick={() => goTo(i)}
            ></span>
          ))}
        </div>

        <button className="icon-btn" onClick={nextTestimonial}>
          <FaArrowRight className="arrow-icon" />
        </button>
      </div>
    </div>
  );
}
