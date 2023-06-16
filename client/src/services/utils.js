import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ReceiptIcon from '@mui/icons-material/Receipt';
import { Tooltip } from '@mui/material';


export function getUserData() {
    return JSON.parse(localStorage.getItem('user'))
}

export function getAccessToken() {
    const user = getUserData();
    if (user) {
        return user.token;
    }
    else {
        return null
    }
}

export function clearUserData() {
    localStorage.removeItem('user')
}

export function setUserData(user) {
    localStorage.setItem('user', JSON.stringify(user))
}

export function formIsValid(data) {
    for (let error in data) {
        if (data[error] !== '') {
            return false;
        }
    }
    return true;
}


export function payment(paymentMethod) {
    if (paymentMethod === "CASH") {
        return (<Tooltip title='Cash'>
            <MonetizationOnIcon />
        </Tooltip>)
    }
    else if (paymentMethod === "CARD") {
        return (<Tooltip title='Card'>
            <CreditCardIcon />
        </Tooltip>)
    }
    else if (paymentMethod === "INVOICE") {
        return (<Tooltip title='Invoice'>
            <ReceiptIcon />
        </Tooltip>)
    }
}

export function convertDate(date,fullDate) {
    if (fullDate){
        return new Date(date).toLocaleString('en-GB', { year: "numeric", month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' });
    }
    return new Date(date).toLocaleString('en-GB', { year: "numeric", month: 'long', day: 'numeric'});

}