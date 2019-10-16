import React, { useState } from 'react'; 

function Quoting() {

    const [ emails, setEmails ] = useState([])

    const vendors = ['test1@gmail.com', 'test2@gmail.com', 'test3@gmail.com']

    const changeHandler = (e) => {
        setEmails([...emails, e.target.value])
    }
    console.log(emails); 
    console.log('RERENDER'); 
    return (
        <>
            <p>Quoting</p>
            <form>
                {vendors.map(ven => (
                    <label>Email:
                        <select type="email"
                        className="boxcalc-field"
                        onChange={changeHandler}
                        >   
                            <option>Select Email</option>
                            {vendors.map(ven => {
                                return (<option value={ven}>{ven}</option>)
                            })}
                        </select>
                    </label>
                ))}
            </form>
        </>
    );
}


export default Quoting;
