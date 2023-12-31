import { useState } from "react";
import { formIsValid } from "../services/utils";

export default function useErrors(values, password) {
    const [formErrors, setFormErros] = useState(values);
    const formValidate = (e) => {
        const value = e.target.value;
        const errors = {};
        const name = e.target.name

        // login and register
        if (name === 'username' && (value.length < 3 || value.length > 30)) {
            errors.username = 'Username name should be between 3 and 30 characters.';
        }
        else if (name === 'password' && value.length < 8) {
            errors.password = 'This password must contain at least 8 characters.';
        }
        else if (name === 'password' && [...value].every(c => '0123456789'.includes(c))) {
            errors.password = 'Password cannot contain only numbers';
        }
        else if (name === 'confirmPassword' && value !== password) {
            errors.confirmPassword = 'Passwords do not match.'
        }
        else if (name === 'email' && (!value.includes('@') || !value.includes('.'))) {
            errors.email = 'Enter a valid email address.';
        }
        // Create and Edit
        else if (name === 'client_name' && value.length > 50) {
            errors.client_name = 'Client Name should be between 1 and 50 characters.';
        }
        // general
        else if (value.length < 1) {
            errors[name] = "This field is required"
        }
        else {
            errors[name] = ''
        }
        setFormErros(state => ({ ...state, ...errors }));
    };
    const isValid = formIsValid(formErrors)
    return { formErrors, formValidate, isValid }
}