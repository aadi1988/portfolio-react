import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import Button from 'react-bootstrap/Button';

//Function to render contact me component
function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;
    //validates email.
    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
              
        }else {
            //validates whether the input field is empty
        if (!e.target.value.length) {
          setErrorMessage(`${e.target.name} is required.`);
        } else {
          setErrorMessage('');
        }
      }  
      if (!errorMessage) {
        setFormState({...formState, [e.target.name]: e.target.value })
      }
    }
    //prevent default on submit button click
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }
    return (
        //renders the page
        <section>
          <h1>Contact me</h1>
          <div className="contact">
            <form id="contact-form">
              <div>
                 <label htmlFor="name">Name:</label>
                 <input type="text" defaultValue={name} onBlur={handleChange} name="name" className={`name inputField`}/>
             </div>
             <div>
                 <label htmlFor="email">Email address:</label>
                 <input type="email" defaultValue={email} name="email" onBlur={handleChange} className={`email inputField`} />
             </div>        
             <div>
                 <label htmlFor="message">Message:</label>
                 <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" className={`message inputField`} />
             </div>
             {errorMessage && (
                 <div>
                      <p className="error-text">{errorMessage}</p>
                 </div>
             )}
             <Button type="submit" onSubmit={handleSubmit} className="inputField">Submit</Button>
            </form>
          </div>
          
        </section>
      )

 }

 export default Contact;