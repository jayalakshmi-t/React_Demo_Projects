import './FormsHooks.css';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';


function FormsHooksDemo() {

    /* const [formData,setFormData] = useState({name:'',email:''});
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if(Object.keys(validationErrors).length > 0){
            setErrors(validationErrors);
        }else{
            console.log('Form data submitted', {formData});
        }
    }
    const handleChange = (e) => {
       const {name,value} = e.target;
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
    
        });
    
        if(errors[name]){
            const newErrors = {...errors};
            delete newErrors[name];
            setErrors(newErrors);
        }
    };
    
    const [errors,setErrors] = useState({});
    
    const validate = () => {
        const newErrors = {};
        if(!formData.name.trim()){
            newErrors.name = "Name is required";
        }
        return newErrors;
    } */

    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm({
        mode: 'onChange'
    });
    const onSubmit = (data) => {
        console.log(data);
        reset();
    }
    const watchedName = watch('name');
    const watchedEmail = watch('email');

    useEffect(() => {
        console.log("Name: ", watchedName);
    }, [watchedName]);

    useEffect(() => {
        console.log("Email: ", watchedEmail);
    }, [watchedEmail]);

    /* const validateName = (value) => {
        if(value !== 'admin'){
            return 'Only Admin is allowed';
        }else{
            return true;
        }
    } */

    const existingUsernames = ['admin', 'user1', 'user2'];
    const checkIfUsernameExists = async (username) => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        return existingUsernames.includes(username);
    };

    return (
        <div>
            <h1>Forms in React</h1>
            {/* <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type='text' name='name' value={formData.name} onChange={handleChange}></input><br />
            {errors.name && <span style={{color:'red'}}>{errors.name}</span>}<br />
             <label>Email</label>
            <input type='text' name='email' value={formData.email} onChange={handleChange}></input><br />
            <button type='submit'> Submit</button>
            </form> */}
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Name</label>
                <input {...register('name',
                    {
                        required: 'Name field is required',
                        validate: {
                            // isNotNumber: (value) => isNaN(value) || 'Name cannot be a number'
                            notAdmin: (value) => value !== 'admin' || 'Admin is not allowed',
                            isNotNumber: (value) => isNaN(value) || 'Name cannot be a number',
                            checkUsername: async (value) => {
                                const exist = await checkIfUsernameExists(value);
                                return !exist || 'Username already exists';
                            }
                        },

                    }
                )} /> <br />
                {errors.name && <span style={{ color: 'red' }}>{errors.name.message}</span>}
                <label>Email</label>
                <input {...register('email', {
                    required: 'Email field is required',
                    minLength: {
                        value: 10,
                        message: 'Email should be min 10 chars'
                    },
                    pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: 'Invalid Email'
                    }
                })} /><br />
                {errors.email && <span style={{ color: 'red' }}>{errors.email.message}</span>}<br />
                <label>
                    Password:
                    <input type="password" {...register('password', { required: 'Password is required'  })} />
                </label><br />
                {errors.password && <span style={{ color: 'red' }}>{errors.password.message}</span>}<br />
                <label>
                    Confirm Password:
                    <input type="password" {...register('confirmPassword',
                        {
                            required: 'Confirm Password is required',
                            validate: (value) => value === watch('password') || "Passwords do not match"

                        }
                    )} />
                </label><br />
                {errors.confirmPassword && <span style={{ color: 'red' }}>{errors.confirmPassword.message}</span>}
                <button type='submit'> Submit</button>
                <button type='button' onClick={() => reset()}> Reset</button>
            </form>

        </div>
    )
}

export default FormsHooksDemo;