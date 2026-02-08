
import { useState } from "react";

function FormsWithUseState(){

    const[formData, setFormData] = useState({
        text:'',
        checkbox:false,
        radio:'',
        select:''
    });

    const handleChange = (e) => {
        const{name,value,type,checked} = e.target;
        setFormData({
            ...formData,
            [name]:type === 'checkbox' ? checked : value
        });

    };


    return(
        <div>
            <h1>Form Example</h1>
            <form>
                <div>
                    <p>
                    {/*Text*/}
                    <label>Text:</label>
                    <input type='text'
                            name='text'
                            value={formData.text}
                            onChange={handleChange}/>
                    </p>
                </div>
                <div>
                    {/*Checkbox*/}
                    <p>
                    <label>Checkbox:</label>
                    <input type="checkbox" 
                            name="checkbox"
                            value={formData.checkbox}
                            onChange={handleChange}/>
                    </p>
                </div>
                <div>
                    {/*Radio*/}
                    <p>
                    <label>Radio:</label>
                     <br/>
                    <label>Option 1</label>
                    <input type="radio"
                            name="radio"
                            value="option1"
                            checked={formData.radio === "option1"}
                            onChange={handleChange}/>
                    <br/>
                    <label>Option 2</label>
                    <input type="radio"
                            name="radio"
                            value="option2"
                            checked={formData.radio === "option2"}
                            onChange={handleChange}/>
                    </p>
                </div>
                <div>
                    {/*Dropdown*/}
                    <label>Select:</label>
                    <select
                        name="select"
                        value={formData.select}
                        onChange={handleChange}>
                        <option value="">Choose an option</option>
                        <option value="option1">option1</option>
                        <option value="option2">option2</option>
                        <option value="option3">option3</option>
                        <option></option>
                    </select>
                </div>
                <div>
                    <h3>Form Data</h3>
                    <p><strong>Text:</strong>{formData.text || 'NA'}</p>
                    <p><strong>Radio:</strong>{formData.checkbox ? 'Checked' : 'Unchecked'}</p>
                    <p><strong>Checkbox:</strong>{formData.radio || 'NA'}</p>
                    <p><strong>Select:</strong>{formData.select || 'NA'}</p>
                </div>
            </form>
        </div>
    )
}

export default FormsWithUseState;