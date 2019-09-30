import React, { useState, useEffect } from 'react';

// importing axios for http requests
import axios from 'axios'; 

// styling imports 
import './BoxCalculator.scss'; 

const BoxCalculator = () => {

    // useState hook for form logic
    const [ form, setForm ] = useState({
        name: '',
        length: '',
        width: '',
        height: '',
    }); 

    // pulling the list of possible box formulas from the API on page render, going to save it to an array
    useEffect(() => {
        axios.get('formulaArray')
    }, [])

    // handling form logic with a useState hook
    const handleChange = (e) => {
        setForm({
        ...form,
        [e.target.name]: e.target.value,
    })}

    // the function that actually handles the calculation of the square footage
    const calculateFootage = () => {

    }

    // function to POST the new box the the API and save it to the database
    const saveBox = () => {

    }

    return ( 
        <>
            <form className="boxcalc-wrapper">
                <label>Box Name:<br/>
                    <input type="text"
                    name="name"
                    onChange={handleChange}
                    value={form.name}
                    className="boxcalc-field"
                    />
                </label>
                <label>Length:<br/>
                    <input type="number"
                    name="length"
                    onChange={handleChange}
                    value={form.length}
                    className="boxcalc-field"
                    />
                </label>
                <label>Width:<br/>
                    <input type="number"
                    name="width"
                    onChange={handleChange}
                    value={form.width}
                    className="boxcalc-field"
                    />
                </label>
                <label>Height:<br/>
                    <input type="number"
                    name="height"
                    onChange={handleChange}
                    value={form.height}
                    className="boxcalc-field"
                    />
                </label>
                <button className="calculate-box" onClick={calculateFootage}>Calculate</button>
                <label>Square Footage:<br/>
                    <input 
                    type="number"
                    name="footage"
                    className="boxcalc-field"
                    />
                </label>
                <p className="save-question">Need to save this box?</p>
                <div className="save-btn-wrapper">
                    <p className="no-thanks">No thanks</p>
                    <button className="save-btn" onClick={saveBox}>Save</button>
                </div>
            </form>
        </>
     );
}
 
export default BoxCalculator;