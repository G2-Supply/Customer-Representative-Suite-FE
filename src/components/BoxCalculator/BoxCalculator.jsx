import React, { useState, useEffect } from 'react';

// importing axios for http requests
import axios from 'axios'; 

// styling imports 
import './BoxCalculator.scss'; 

const BoxCalculator = () => {

    // useState hook for form logic
    const [ form, setForm ] = useState({
        style: '',
        length: '',
        width: '',
        height: '',
        x1: '',
        x2: '', 
        x3: '', 
        x4: '', 
        x5: '', 
        x6: '', 
        x7: '', 
        x8: '', 
        x9: '', 
        x10: '',  
        name: '',
        sqft: '',
        boxStyles: '',
    }); 

    // hook for dynamically rendering dropdown options (box styles) from the DB
    // const [ boxStyles, setBoxStyles ] = useState()

    // pulling the list of possible box formulas from the API on page render, going to save it to an array
    useEffect(() => {
        axios.get('http://localhost:5000/api/box-styles/')
        .then(res => {
            setForm({
                ...form,
                boxStyles: res.data.data
            }); 

        })
        .catch(err => {
            console.log(err); 
        })
    // this next line eliminates the linter error causes by having an empty dependency array
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    // handling form field logic with a useState hook
    const handleChange = (e) => {
        setForm({
        ...form,
        [e.target.name]: e.target.value,
    })}

    // the function that actually handles the calculation of the square footage
    function calculateFootage(e){
        // preventing re-render
        e.preventDefault(); 
        // selecting the Box Style the user has selected
        const style = document.getElementById('style').value 

        // filtering the array to find the box_style_formula based on the 
        let styleFormulaArr = form.boxStyles.filter(box => box.box_style_name === style)
        let formula = styleFormulaArr[0].box_style_formula;

        // replacing formula placeholders with respective user inputted variables
        formula = formula.replace(/length/gi, form.length)
        formula = formula.replace(/width/gi, form.width)
        formula = formula.replace(/height/gi, form.height) 
        formula = formula.replace(/x1/gi, form.x1) 
        formula = formula.replace(/x2/gi, form.x2) 
        formula = formula.replace(/x3/gi, form.x3) 
        formula = formula.replace(/x4/gi, form.x4) 
        formula = formula.replace(/x5/gi, form.x5) 
        formula = formula.replace(/x6/gi, form.x6) 
        formula = formula.replace(/x7/gi, form.x7) 
        formula = formula.replace(/x8/gi, form.x8) 
        formula = formula.replace(/x9/gi, form.x9) 
        formula = formula.replace(/x10/gi, form.x10)
        
        // disabling the "eval may be harmful" error READ TO UNDERSTAND WHY: https://eslint.org/docs/rules/no-eval
        // eslint-disable-next-line
        const decimal = eval(formula); 
        

        // console.log(formula)

        setForm({
            ...form,
            sqft: `${decimal.toFixed(4)} sq. ft`
        })   

        
           
    }

    // function to POST the new box the the API and save it to the database
    const saveBox = () => {

    }

    if(form.boxStyles) {
        return ( 
            <>
                <form className="boxcalc-wrapper">
                    <label>Box Style:<br/>
                        <select type="text"
                        name="style"
                        multiple={false}
                        onChange={handleChange}
                        id="style"
                        value={form.style}
                        className="boxcalc-field"
                        >
                            {form.boxStyles.map((opt) => {
                                return (<option key={opt.id}>{opt.box_style_name}</option>)
                            })}
                        </select>
                    </label>
                    <label>Length:<br/>
                        <input type="text"
                        name="length"
                        onChange={handleChange}
                        value={form.length}
                        className="boxcalc-field"
                        />
                    </label>
                    <label>Width:<br/>
                        <input type="text"
                        name="width"
                        onChange={handleChange}
                        value={form.width}
                        className="boxcalc-field"
                        />
                    </label>
                    <label>Height:<br/>
                        <input
                        type="text"
                        name="height"
                        onChange={handleChange}
                        value={form.height}
                        className="boxcalc-field"/>
                    </label>
                    <label>X1:<br/>
                        <input type="text"
                        name="x1"
                        onChange={handleChange}
                        value={form.x1}
                        className="boxcalc-field"
                        />
                    </label>
                    <label>X2:<br/>
                        <input type="text"
                        name="x2"
                        onChange={handleChange}
                        value={form.x2}
                        className="boxcalc-field"
                        />
                    </label>
                    <label>X3:<br/>
                        <input type="text"
                        name="x3"
                        onChange={handleChange}
                        value={form.x3}
                        className="boxcalc-field"
                        />
                    </label>
                    {/* <label>X4:<br/>
                        <input type="text"
                        name="x4"
                        onChange={handleChange}
                        value={form.x4}
                        className="boxcalc-field"
                        />
                    </label>
                    <label>X5:<br/>
                        <input type="text"
                        name="x5"
                        onChange={handleChange}
                        value={form.x5}
                        className="boxcalc-field"
                        />
                    </label>
                    <label>X6:<br/>
                        <input type="text"
                        name="x6"
                        onChange={handleChange}
                        value={form.x6}
                        className="boxcalc-field"
                        />
                    </label>
                    <label>X7:<br/>
                        <input type="text"
                        name="x7"
                        onChange={handleChange}
                        value={form.x7}
                        className="boxcalc-field"
                        />
                    </label>
                    <label>X8:<br/>
                        <input type="text"
                        name="x8"
                        onChange={handleChange}
                        value={form.x8}
                        className="boxcalc-field"
                        />
                    </label>
                    <label>X9:<br/>
                        <input type="text"
                        name="x9"
                        onChange={handleChange}
                        value={form.x9}
                        className="boxcalc-field"
                        />
                    </label>
                    <label>X10:<br/>
                        <input type="text"
                        name="x10"
                        onChange={handleChange}
                        value={form.x10}
                        className="boxcalc-field"
                        />
                    </label> */}
                    <label>Name Box:<br/>
                        <input type="text"
                        name="name"
                        onChange={handleChange}
                        value={form.name}
                        className="boxcalc-field"
                        />
                    </label>
                    <button 
                        className="calculate-box" 
                        // onClick={() => calculateFootage(form.length, form.width, form.height, form.x1, form.x2, form.x3, form.x4, form.x5, form.x6, form.x7, form.x8, form.x9, form.x10)} 
                        onClick={calculateFootage}
                        id="sqft">Calculate
                    </button>
                    <label>Square Footage:<br/>
                        <input 
                        type="text"
                        name="footage"
                        className="boxcalc-field"
                        readOnly={true}
                        value={form.sqft}
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
    } else {
        return <p></p> 
    } 
}

    
 
export default BoxCalculator;