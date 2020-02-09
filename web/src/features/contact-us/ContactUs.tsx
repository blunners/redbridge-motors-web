import DocmentTextImg from 'bootstrap-icons/icons/document-text.svg';
import EnvelopeImg from 'bootstrap-icons/icons/envelope.svg';
import PhoneImg from 'bootstrap-icons/icons/phone.svg';
import React, { useState } from 'react';
import { ContactUrl, Email, Phone } from '../../shared/Constants';

const onSubmit = async (e: React.FormEvent<HTMLFormElement>, details: Details) => {
  await fetch(ContactUrl, {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify(details)
  });
}

interface ContactPreferencesProps {
  onContactSet: (contact: string) => void;
}

const ContactPreferences = ({ onContactSet }: ContactPreferencesProps) => {
  const [preference, setPreference] = useState<"email" | "phone" | null>(null);
  const onPreferenceUpdated = (preference: "email" | "phone") => {
    onContactSet('');
    setPreference(preference);
  }

  return (
    <>
      <div className="form-group">
        Contact Preference
            <div className="form-check">
          <input type="radio" className="form-check-input" id="emailContact" name="contactPreference" onChange={() => onPreferenceUpdated('email')} />
          <label className="form-check-label" htmlFor="emailContact">
            Email
              </label>
        </div>
        <div className="form-check">
          <input type="radio" className="form-check-input" id="phoneContact" name="contactPreference" onChange={() => onPreferenceUpdated('phone')} />
          <label className="form-check-label" htmlFor="phoneContact">
            Phone
              </label>
        </div>
      </div>
      {
        preference === 'email' &&
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" id="email" onChange={e => onContactSet(e.target.value)} />
        </div>
      }
      {
        preference === 'phone' &&
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input type="tel" className="form-control" id="phone" onChange={e => onContactSet(e.target.value)} />
        </div>
      }
    </>
  )
}

interface Details {
  name?: string;
  message?: string;
  contact?: string;
}

export const ContactUs = () => {
  const [details, setDetails] = useState<Details>({});
  const [submitting, setSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const formValid =
    (details.name && details.name.length) &&
    (details.message && details.message.length) &&
    (details.contact && details.contact.length);

  return (
    <div>
      <h1>Contact Us</h1>
      <div className="row">
        <div className="col">
          Want to get in touch? Whether you're looking for some advice or your next car, here are the different methods of getting in contact with us:
        <br />
          <br />
          <ul className="list-unstyled pl-2">
            <li><img src={EnvelopeImg} className="mr-1" width="24" height="24" alt="email" /><a href={`mailto:${Email}`}>{Email}</a></li>
            <li><img src={PhoneImg} className="mr-1" width="24" height="24" alt="phone" /><a href={`tel:${Phone}`}>{Phone}</a></li>
            <li><img src={DocmentTextImg} className="mr-1" width="24" height="24" alt="form" />Submitting the form below</li>
          </ul>
        </div>
      </div>
      {showSuccess ? (
        <div className="alert alert-success" role="alert">
          Request submitted successfully! We'll get back to you as soon as possible.
        </div>) : (
          <div className="row mb-3">
            <div className="col-md-6">
              <form onSubmit={async (e) => {
                e.preventDefault();
                setSubmitting(true);
                try {
                  await onSubmit(e, details);
                  setShowSuccess(true);
                } catch {
                  alert('An error occurred. Please try again or contact us directly.')
                }

                setSubmitting(false);
              }}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" className="form-control" id="name" required minLength={1} onChange={e => setDetails({ ...details, name: e.target.value })} />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea name="message" id="message" rows={5} className="form-control" minLength={1} required onChange={e => setDetails({ ...details, message: e.target.value })}></textarea>
                </div>
                <ContactPreferences onContactSet={c => {
                  setDetails({ ...details, contact: c });
                }} />
                <input type="submit" value="Submit" className="btn btn-primary" disabled={!formValid || submitting} />
              </form>
            </div>
          </div>
        )}
    </div>
  )
};