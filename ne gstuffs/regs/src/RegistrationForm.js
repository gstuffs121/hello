import { useState } from 'react';
import './App.css';

export default function Form() {
  // States for registration
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Handle input changes
  const handleName = (e) => { setName(e.target.value);};
  const handleEmail = (e) => { setEmail(e.target.value);};
  const handlePassword = (e) => {setPassword(e.target.value);};
  const handlePhone = (e) => {const value = e.target.value;

    // Allow only numbers and limit to 10 digits
    if (/^[0-9]{0,10}$/.test(value)) {
      setPhone(value);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form
    if (name === '' || email === '' || password === '' || phone === '') {
      alert('Please enter all the fields');
    } else if (phone.length !== 10) {
      alert('Phone number must be exactly 10 digits');
    } else {
      setSubmitted(true);
    }
  };

  // Success message
  const successMessage = () => { if (submitted) 
    {
      return (<div className="success">
          <h1>User {name} successfully registered!!</h1>
        </div>
      );
    }
  };

  return (
    <div className="form">
      <div>
        <h1>User Registration</h1>
      </div>

      {/* Display the success message if form is submitted */}
      <div className="messages">
        {successMessage()}
      </div>

      {/* Form section */}
      <form onSubmit={handleSubmit}>
        <fieldset>
          {/* Labels and inputs for form data */}
          <label className="label">Name</label>
          <input
            onChange={handleName}
            className="input"
            value={name}
            type="text"
            required
          />
          <br />
          <label className="label">Email</label>
          <input
            onChange={handleEmail}
            className="input"
            value={email}
            type="email"
            required
          />
          <br />
          <label className="label">Password</label>
          <input
            onChange={handlePassword}
            className="input"
            value={password}
            type="password"
            required
          />
          <br />
          <label className="label">Phone Number</label>
          <input
            onChange={handlePhone}
            className="input"
            value={phone}
            type="text"
            maxLength="10"
            placeholder="Enter 10 digit phone number"
            required
          />
          <br />
          <button className="btn" type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  );
}
