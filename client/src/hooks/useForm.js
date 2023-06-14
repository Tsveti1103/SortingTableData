import { useState } from 'react';

export default function useForm (initialValues, onSubmitHandler, id,setData) {
    const [values, setValues] = useState(initialValues);
    const [serverErrors, setServerErrors] = useState([]);
    
    const onChangeHandler = (e) => {
        const value = e.target.value
        setValues(state => ({ ...state, [e.target.name]: value }));
    };
    const onSubmit = (e) => {
        e.preventDefault();
        onSubmitHandler(values, id,setData)
            .then()
            .catch((err) => {
                setServerErrors([])
                for (let value of Object.values(err)) {
                    setServerErrors(state => ([...state, value]))
                }
            })
    };

    const changeValues = (newValues) => {
        setValues(newValues);
    };

    return {
        values,
        onChangeHandler,
        onSubmit,
        changeValues,
        serverErrors,
    };
};