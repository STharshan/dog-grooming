import React from "react";
import "./Doggromming.css";
import { useNavigate } from "react-router-dom";

export default function DogGroomingPage() {

  const navigate = useNavigate();
  const handleAbout = () => navigate('/about')

  return (
    <div className="dog-page-container">
      <div className="dog-about">About Us</div>
      <h1 className="dog-title">Expert Dog Grooming Education</h1>

      <p className="dog-paragraph">
        At Leicester Dog Grooming Courses, we pride ourselves on providing exceptional training in a friendly, supportive environment.
        Our experienced instructors guide students through comprehensive grooming techniques while ensuring individual attention.
      </p>

      <p className="dog-paragraph">
        Whether you're looking to start a new career, expand your pet care services, or simply learn how to groom your own dog, our
        tailored courses will help you achieve your goals. We offer a range of courses from beginner to advanced levels, ensuring
        that every student receives the knowledge and skills needed to excel in the dog grooming industry.
      </p>

      <p className="dog-paragraph">
        Our instructors are industry professionals with years of experience, dedicated to sharing their expertise and passion for dog
        grooming. By joining our academy, you'll benefit from hands-on training, personalized feedback, and a supportive community
        that fosters growth and learning.
      </p>

      <p className="dog-paragraph">
        So you’re thinking about dog grooming as a career? Since the start of the pandemic, so much has changed, particularly with
        everyone’s jobs and careers. Not only has the pet industry boomed but also working from home has become more of a thing.
      </p>

      <p className="dog-paragraph">
        I started my grooming career during the 2008 recession and I have never looked back, in so far to say it feels like I have never
        worked a day in my life. I wanted something that I could do from home, choose my own hours and have the time with my children.
        Dog grooming has also played a significant part of my healing towards my emotional health too; after all most animals have
        healing energy, unconditional love and are not overly judgemental!
      </p>

      <p className="dog-paragraph">
        I have trained students for 14 years and been a dog groomer for 17 years and every student has commented how it helped with
        their anxiety, depression, and confidence and has given them a purpose as well as a good income.
      </p>

      <p className="dog-paragraph">
        Indeed dog grooming can be very lucrative but that doesn’t mean it can’t be hard on the body especially.
      </p>

      <p className="dog-paragraph">
        So how much is this? Set up costs are relatively small considering the potential of the business. I estimate around £3k for your
        equipment, I charge £2250 for my 3-week course which can take you to qualification (additional cost and time). There are also
        very expensive courses out there too unfortunately, but if you can do it from home — such as a garage, outbuilding or even a
        large summerhouse (12x12 ft is plenty), shop or van fit mobile — then other considerations are plumbing, lighting, drainage and
        possible planning permission, although dog grooming is ancillary to the dwelling and each council is discretionary.
      </p>

      <p className="dog-paragraph">
        If you want to visit or have an informal chat with all your questions please call me on:
        <span className="dog-phone"> 07930 549171</span>. I look forward to hearing from you!
      </p>

      <button className="dog-button" onClick={handleAbout}>Learn More About Us</button>
    </div>
  );
}
