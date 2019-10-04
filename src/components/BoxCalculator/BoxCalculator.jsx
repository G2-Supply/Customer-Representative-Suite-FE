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
            setBoxStyles(res.data.data)
        })
        .catch(err => {
            console.log(err); 
        })
    // this next line eliminates the linter error causes by having an empty dependency array
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const calculateFootage = () => {
        // selecting the Box Style the user has selected
        const style = document.getElementById('style').value 

        // filtering the array to find the box_style_formula based on the 
        let styleFormulaArr = boxStyles.filter(box => box.box_style_name === style)
        let formula = styleFormulaArr[0].box_style_formula;

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
        return ( 
            <>
                <Form className="boxcalc-wrapper">
                    <label>Box Style:<br/>
                        {touched.style && errors.style && <p>{errors.style}</p>}
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
                        {touched.length && errors.length && <p>{errors.length}</p>}
                        <Field type="number"
                        name="length"
                        className="boxcalc-field"
                        />
                    </label>
                    <label>Width:<br/>
                        {touched.width && errors.width && <p>{errors.width}</p>}
                        <Field type="number"
                        name="width"
                        className="boxcalc-field"
                        />
                    </label>
                    <label>Height:<br/>
                        {touched.height && errors.height && <p>{errors.height}</p>}
                        <Field type="number"
                        name="height"
                        className="boxcalc-field"
                        />
                    </label>
                    <label>X1:<br/>
                        {touched.x1 && errors.x1 && <p>{errors.x1}</p>}
                        <Field type="number"
                        name="x1"
                        className="boxcalc-field"
                        />
                    </label>
                    <label>X2:<br/>
                        {/* {touched.x2 && errors.x2 && <p>{errors.x2}</p>} */}
                        <Field type="number"
                        name="x2"
                        className="boxcalc-field"
                        />
                    </label>
                    <label>X3:<br/>
                        <Field type="number"
                        name="x3"
                        className="boxcalc-field"
                        />
                    </label>
                    <label>X4:<br/>
                        <Field type="number"
                        name="x4"
                        className="boxcalc-field"
                        />
                    </label>
                    <label>X5:<br/>
                        <Field type="number"
                        name="x5"
                        className="boxcalc-field"
                        />
                    </label>
                    <label>X6:<br/>
                        <Field type="number"
                        name="x6"
                        className="boxcalc-field"
                        />
                    </label>
                    <label>X7:<br/>
                        <Field type="number"
                        name="x7"
                        className="boxcalc-field"
                        />
                    </label>
                    <label>X8:<br/>
                        <Field type="number"
                        name="x8"
                        className="boxcalc-field"
                        />
                    </label>
                    <label>X9:<br/>
                        <Field type="number"
                        name="x9"
                        className="boxcalc-field"
                        />
                    </label>
                    <label>X10:<br/>
                        <Field type="number"
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
                    <button className="calculate-box" onClick={calculateFootage}>Calculate</button>
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