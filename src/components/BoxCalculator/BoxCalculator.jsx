import React, { useState, useEffect } from 'react';

// importing axios for http requests
import axios from 'axios'; 

// Formik/yup (form validation library) import
import { withFormik, Form, Field } from 'formik'
import * as yup from 'yup'; 

// styling imports 
import './BoxCalculator.scss'; 

const BoxCalculator = ({ values,  touched, errors }) => {

    //useState hook to store options we dynamically render in the <select> tag
    const [ boxStyles, setBoxStyles ] = useState(); 

    // pulling the list of possible box formulas from the API on page render, going to save it to an array
    useEffect(() => {
        axios.get('http://localhost:5000/api/box-styles')
        .then(res => {
<<<<<<< HEAD
            setBoxStyles(res.data.data)
=======
            setForm({
                ...form,
                boxStyles: res.data.data
            }); 

>>>>>>> 1b0ede414319cf86c5ff1483ecfa7a9c14b828cc
        })
        .catch(err => {
            console.log(err); 
        })
    // this next line eliminates the linter error causes by having an empty dependency array
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
<<<<<<< HEAD

    const calculateFootage = () => {
=======
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
>>>>>>> 1b0ede414319cf86c5ff1483ecfa7a9c14b828cc
        // selecting the Box Style the user has selected
        const style = document.getElementById('style').value 

        // filtering the array to find the box_style_formula based on the 
        let styleFormulaArr = boxStyles.filter(box => box.box_style_name === style)
        let formula = styleFormulaArr[0].box_style_formula;

<<<<<<< HEAD
        formula = formula.replace(/length/gi, values.length)
        formula = formula.replace(/width/gi, values.width)
        formula = formula.replace(/height/gi, values.height) 
        formula = formula.replace(/x1/gi, values.x1) 
        formula = formula.replace(/x2/gi, values.x2) 
        formula = formula.replace(/x3/gi, values.x3)   
        formula = formula.replace(/x4/gi, values.x4) 
        formula = formula.replace(/x5/gi, values.x5) 
        formula = formula.replace(/x6/gi, values.x6) 
        formula = formula.replace(/x7/gi, values.x7) 
        formula = formula.replace(/x8/gi, values.x8) 
        formula = formula.replace(/x9/gi, values.x9) 
        formula = formula.replace(/x10/gi, values.x10)
=======
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
>>>>>>> 1b0ede414319cf86c5ff1483ecfa7a9c14b828cc
        
        // disabling the "eval may be harmful" error READ TO UNDERSTAND WHY: https://eslint.org/docs/rules/no-eval
        // eslint-disable-next-line
        const decimal = eval(formula); 
        

        // console.log(formula)

        // values.sqft = `${decimal.toFixed(4)} sq. ft` 
        // console.log(values.sqft); 

        document.getElementById('sqft').value = `${decimal.toFixed(4)} sq. ft` 
        console.log(document.getElementById('sqft').value)

    }

    // // function to POST the new box the the API and save it to the database
    // function calculateFootage(e) {
    //     e.preventDefault(); 
    //     // selecting the Box Style the user has selected
    //     const style = document.getElementById('style').value 

<<<<<<< HEAD
    //     // filtering the array to find the box_style_formula based on the 
    //     let styleFormulaArr = boxStyles.filter(box => box.box_style_name === style)
    //     let formula = styleFormulaArr[0].box_style_formula;

    //     formula = formula.replace(/length/gi, form.length)
    //     formula = formula.replace(/width/gi, form.width)
    //     formula = formula.replace(/height/gi, form.height) 
    //     formula = formula.replace(/x1/gi, form.x1) 
    //     formula = formula.replace(/x2/gi, form.x2) 
    //     formula = formula.replace(/x3/gi, form.x3)   
    //     formula = formula.replace(/x4/gi, form.x4) 
    //     formula = formula.replace(/x5/gi, form.x5) 
    //     formula = formula.replace(/x6/gi, form.x6) 
    //     formula = formula.replace(/x7/gi, form.x7) 
    //     formula = formula.replace(/x8/gi, form.x8) 
    //     formula = formula.replace(/x9/gi, form.x9) 
    //     formula = formula.replace(/x10/gi, form.x10)
        
    //     // disabling the "eval may be harmful" error READ TO UNDERSTAND WHY: https://eslint.org/docs/rules/no-eval
    //     // eslint-disable-next-line
    //     const decimal = eval(formula); 

    //     setForm({
    //         ...form,
    //         sqft: `${decimal.toFixed(4)} sq. ft`
    //     })   

    // }


    if(boxStyles) {
=======
    }

    if(form.boxStyles) {
>>>>>>> 1b0ede414319cf86c5ff1483ecfa7a9c14b828cc
        return ( 
            <>
                <Form className="boxcalc-wrapper">
                    <label>Box Style:<br/>
<<<<<<< HEAD
                        {touched.style && errors.style && <p>{errors.style}</p>}
=======
>>>>>>> 1b0ede414319cf86c5ff1483ecfa7a9c14b828cc
                        <select type="number"
                        name="style"
                        multiple={false}
                        id="style"
                        className="boxcalc-field"
                        >
                            {boxStyles.map((opt) => {
                                return (<option key={opt.id}>{opt.box_style_name}</option>)
                            })}
                        </select>
                    </label>
                    <label>Length:<br/>
<<<<<<< HEAD
                        {touched.length && errors.length && <p>{errors.length}</p>}
                        <Field type="number"
=======
                        <input type="number"
>>>>>>> 1b0ede414319cf86c5ff1483ecfa7a9c14b828cc
                        name="length"
                        className="boxcalc-field"
                        />
                    </label>
                    <label>Width:<br/>
<<<<<<< HEAD
                        {touched.width && errors.width && <p>{errors.width}</p>}
                        <Field type="number"
=======
                        <input type="number"
>>>>>>> 1b0ede414319cf86c5ff1483ecfa7a9c14b828cc
                        name="width"
                        className="boxcalc-field"
                        />
                    </label>
                    <label>Height:<br/>
<<<<<<< HEAD
                        {touched.height && errors.height && <p>{errors.height}</p>}
                        <Field type="number"
                        name="height"
                        className="boxcalc-field"
                        />
                    </label>
                    <label>X1:<br/>
                        {touched.x1 && errors.x1 && <p>{errors.x1}</p>}
                        <Field type="number"
=======
                        <input
                        type="number"
                        name="height"
                        onChange={handleChange}
                        value={form.height}
                        className="boxcalc-field"/>
                    </label>
                    <label>X1:<br/>
                        <input type="number"
>>>>>>> 1b0ede414319cf86c5ff1483ecfa7a9c14b828cc
                        name="x1"
                        className="boxcalc-field"
                        />
                    </label>
                    <label>X2:<br/>
<<<<<<< HEAD
                        {/* {touched.x2 && errors.x2 && <p>{errors.x2}</p>} */}
                        <Field type="number"
=======
                        <input type="number"
>>>>>>> 1b0ede414319cf86c5ff1483ecfa7a9c14b828cc
                        name="x2"
                        className="boxcalc-field"
                        />
                    </label>
                    <label>X3:<br/>
<<<<<<< HEAD
                        <Field type="number"
=======
                        <input type="number"
>>>>>>> 1b0ede414319cf86c5ff1483ecfa7a9c14b828cc
                        name="x3"
                        className="boxcalc-field"
                        />
                    </label>
<<<<<<< HEAD
                    <label>X4:<br/>
                        <Field type="number"
=======
                    {/* <label>X4:<br/>
                        <input type="number"
>>>>>>> 1b0ede414319cf86c5ff1483ecfa7a9c14b828cc
                        name="x4"
                        className="boxcalc-field"
                        />
                    </label>
                    <label>X5:<br/>
<<<<<<< HEAD
                        <Field type="number"
=======
                        <input type="number"
>>>>>>> 1b0ede414319cf86c5ff1483ecfa7a9c14b828cc
                        name="x5"
                        className="boxcalc-field"
                        />
                    </label>
                    <label>X6:<br/>
<<<<<<< HEAD
                        <Field type="number"
=======
                        <input type="number"
>>>>>>> 1b0ede414319cf86c5ff1483ecfa7a9c14b828cc
                        name="x6"
                        className="boxcalc-field"
                        />
                    </label>
                    <label>X7:<br/>
<<<<<<< HEAD
                        <Field type="number"
=======
                        <input type="number"
>>>>>>> 1b0ede414319cf86c5ff1483ecfa7a9c14b828cc
                        name="x7"
                        className="boxcalc-field"
                        />
                    </label>
                    <label>X8:<br/>
<<<<<<< HEAD
                        <Field type="number"
=======
                        <input type="number"
>>>>>>> 1b0ede414319cf86c5ff1483ecfa7a9c14b828cc
                        name="x8"
                        className="boxcalc-field"
                        />
                    </label>
                    <label>X9:<br/>
<<<<<<< HEAD
                        <Field type="number"
=======
                        <input type="number"
>>>>>>> 1b0ede414319cf86c5ff1483ecfa7a9c14b828cc
                        name="x9"
                        className="boxcalc-field"
                        />
                    </label>
                    <label>X10:<br/>
<<<<<<< HEAD
                        <Field type="number"
=======
                        <input type="number"
>>>>>>> 1b0ede414319cf86c5ff1483ecfa7a9c14b828cc
                        name="x10"
                        className="boxcalc-field"
                        />
                    </label> */}
                    <label>Name Box:<br/>
                        <Field type="number"
                        name="name"
                        className="boxcalc-field"
                        />
                    </label>
<<<<<<< HEAD
                    <button className="calculate-box" onClick={calculateFootage}>Calculate</button>
=======
                    <button 
                        className="calculate-box" 
                        // onClick={() => calculateFootage(form.length, form.width, form.height, form.x1, form.x2, form.x3, form.x4, form.x5, form.x6, form.x7, form.x8, form.x9, form.x10)} 
                        onClick={calculateFootage}
                        id="sqft">Calculate
                    </button>
>>>>>>> 1b0ede414319cf86c5ff1483ecfa7a9c14b828cc
                    <label>Square Footage:<br/>
                        <Field 
                        type="text"
                        name="footage"
                        className="boxcalc-field"
                        id="sqft"
                        readOnly={true}
                        />
                    </label>
                    <p className="save-question">Need to save this box?</p>
                    <div className="save-btn-wrapper">
                        <p className="no-thanks">No thanks</p>
                        <button className="save-btn">Save</button>
                    </div>
                </Form>
            </>
         );
    } else {
        return <p></p> 
    } 
}

const FormikBoxCalculator = withFormik({
    mapPropsToValues({ style, length, width, height, x1, x2, x3, x4, x5, x6, x7, x8, x9, x10, name, sqft, boxStyles }) {
        return {
            style: style || '',
            length: length || '',
            width: width || '',
            height: height || '',
            x1: x1 || '',
            x2: x2 || '', 
            x3: x3 || '', 
            x4: x4 || '', 
            x5: x5 || '', 
            x6: x6 || '', 
            x7: x7 || '', 
            x8: x8 || '', 
            x9: x9 || '', 
            x10: x10 || '',  
            name: name || '',
            sqft: sqft || '',
            boxStyles: boxStyles || ''
        }
    }, 

    // ============= YUP VALIDATION SCHEMA ===============
    validationSchema: yup.object().shape({
        style: yup.string().required("Style is required"),
        length: yup.number().required("Length is required"),
        width: yup.number().required("Width is required"),
        height: yup.number().required("Height is required"),
    }), 
    // ============== END SCHEMA ==============


})(BoxCalculator); 

    
 
export default FormikBoxCalculator;