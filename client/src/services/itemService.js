import * as api from './requester.js';
const endpoints = {
    orders: '/orders/all',
    details: (orderId)=> `/orders/details/${orderId}`,
    delete: (orderId)=> `/orders/delete/${orderId}`,
    edit: (orderId)=> `/orders/edit/${orderId}`,

};

export async function getAllOrders(){
    return await api.get(endpoints.orders)
};
export async function details(id){
    return await api.get(endpoints.details(id))
};

export function deleteOrder(id){
    return api.del(endpoints.delete(id))
};
export async function editOrder(id,data){
    return await api.put(endpoints.edit(id),data)
};





