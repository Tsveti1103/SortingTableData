import { useState } from 'react';

export default function useForm(initialValues, onSubmitHandler, id, setData, handleClose) {
    const [values, setValues] = useState(initialValues);
    const [serverErrors, setServerErrors] = useState([]);
    const onChangeHandler = (e) => {
        const type = e.target.type
        let value = e.target.value
        if (type === 'checkbox') {
            value = e.target.checked
        }
        setValues(state => ({ ...state, [e.target.name]: value }));
    };
    const onSubmit = (e) => {
        e.preventDefault();
        onSubmitHandler(values, id, setData)
            .then(() => {
                if (handleClose) {
                    handleClose()
                }
            })
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