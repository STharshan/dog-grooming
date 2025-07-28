import React from 'react';
import './DogGroomingForm.css';

const SectionTitle = ({ icon, title }) => (
  <h2 className="section-title">
    <span>{icon}</span> {title}
  </h2>
);

const DogGroomingForm = () => {
  return (
    <div className="form-container">
      <div className="form-box">
        <div className="logo-box">
          <img src="/favicon.ico" alt="Logo" className="form-logo" />
          <h1 className="form-title">Dog Grooming Intake Form</h1>
        </div>

        <form
          action="https://formsubmit.co/bernieboo200@gmail.com"
          method="POST"
          encType="multipart/form-data"
        >
          {/* Hidden FormSubmit options */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />

          <SectionTitle icon="🐾" title="Basic Information" />
          <div className="form-group">
            <label className="form-label">Owner's Name</label>
            <input name="Owner's Name" className="form-input" required />
          </div>

          <div className="form-group">
            <label className="form-label">Phone Number</label>
            <input type="tel" name="Phone" pattern="[0-9]*" inputMode="numeric" className="form-input" required />
          </div>

          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input type="email" name="Email" className="form-input" required />
          </div>

          <div className="form-group">
            <label className="form-label">Preferred Contact Method</label>
            <input name="Contact Method" className="form-input" />
          </div>

          <SectionTitle icon="🐶" title="Dog Information" />
          <div className="form-group">
            <label className="form-label">Dog's Name</label>
            <input name="Dog Name" className="form-input" />
          </div>
          <div className="form-group">
            <label className="form-label">Breed (or Mix)</label>
            <input name="Breed" className="form-input" />
          </div>
          <div className="form-group">
            <label className="form-label">Age</label>
            <input name="Age" className="form-input" />
          </div>
          <div className="form-group">
            <label className="form-label">Weight</label>
            <input name="Weight" className="form-input" />
          </div>
          <div className="form-group">
            <label className="form-label">Sex (Spayed/Neutered?)</label>
            <input name="Sex" className="form-input" />
          </div>
          <div className="form-group">
            <label className="form-label">Last Grooming Session</label>
            <input name="Last Grooming" className="form-input" />
          </div>

          <SectionTitle icon="✂" title="Coat Condition" />
          <div className="form-group">
            <label className="form-label">Coat Type</label>
            <input name="Coat Type" className="form-input" />
          </div>
          <div className="form-group">
            <label className="form-label">Current Coat Condition</label>
            <input name="Coat Condition" className="form-input" />
          </div>
          <div className="form-group">
            <label className="form-label">Any tangles or mats?</label>
            <input name="Tangles or Mats" className="form-input" />
          </div>
          <div className="form-group">
            <label className="form-label">Any skin issues?</label>
            <input name="Skin Issues" className="form-input" />
          </div>

          <SectionTitle icon="⚠" title="Behavioral & Medical Issues" />
          <div className="form-group">
            <label className="form-label">Aggression?</label>
            <select name="Aggression" className="form-select">
              <option value="">Select an option</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">If yes, explain</label>
            <input name="Aggression Details" className="form-input" />
          </div>
          <div className="form-group">
            <label className="form-label">Fear of tools?</label>
            <input name="Tool Fear" className="form-input" />
          </div>
          <div className="form-group">
            <label className="form-label">Medical Conditions?</label>
            <input name="Medical Conditions" className="form-input" />
          </div>
          <div className="form-group">
            <label className="form-label">Vet-recommended sedation?</label>
            <input name="Sedation" className="form-input" />
          </div>
          <div className="form-group">
            <label className="form-label">Comfortable being handled long?</label>
            <input name="Handling Comfort" className="form-input" />
          </div>

          <SectionTitle icon="🧼" title="Grooming Preferences" />
          <div className="form-group">
            <label className="form-label">Services Needed</label>
            <div className="services-checkboxes">
              {['Bath Only', 'Haircut', 'De-shedding', 'Nail Trim', 'Ear Cleaning', 'Anal Glands'].map(service => (
                <label key={service}>
                  <input type="checkbox" name="Services" value={service} />
                  {service}
                </label>
              ))}
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Preferred haircut style or notes</label>
            <textarea name="Haircut Style" className="form-textarea" />
          </div>
          <div className="form-group">
            <label className="form-label">Any areas to avoid?</label>
            <input name="Avoid Areas" className="form-input" />
          </div>

          <SectionTitle icon="📸" title="Optional: Upload Photos" />
          <div className="form-group">
            <input type="file" name="Photos" multiple className="form-file" />
          </div>

          <SectionTitle icon="💬" title="Additional Comments" />
          <div className="form-group">
            <label className="form-label">Anything else you'd like the groomer to know?</label>
            <textarea name="Additional Comments" className="form-textarea" />
          </div>

          <div className="form-agreement">
            <input type="checkbox" name="Agreement" required />
            <span>
              I understand that the final price depends on coat condition, behavior, and grooming time required.
            </span>
          </div>

          <button type="submit" className="form-submit">Submit Form</button>
        </form>
      </div>
    </div>
  );
};

export default DogGroomingForm;
