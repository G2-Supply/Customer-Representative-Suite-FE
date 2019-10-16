import React from 'react'; 
import Email from './smtp'; 

function Quoting() {
    console.log(Email); 
    const sendMail = () => {
        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "elijahmckay10@gmail.com",
            Password : "25889260-67d6-4d1e-b575-c6601d9e3ce2",
            To : 'elijahmckay10@gmail.com',
            From : "elijahmckay10@gmail.com",
            Subject : "This is the subject",
            Body : "And this is the body"
        }).then(
          message => alert(message)
        );

    }

    console.log(sendMail); 
    return (
        <div>
            <p>Quoting</p>
            <textarea>Check</textarea>
            <button onClick={sendMail}>Test</button>
        </div>
    )
}

export default Quoting;
