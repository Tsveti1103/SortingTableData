import { createContext, useContext, useState } from "react";

import * as itemService from "../services/itemService";


export const OrderContext = createContext();

export const OrderProvider = ({
  children,
}) => {
  const deleteOrder = (orderId,setOrders) => {
    itemService.deleteOrder(orderId)
    setOrders(state => state.filter(x => x.id !== orderId))
  };

  const editOrder = async (data, orderId, setOrders) => {
    try {
      const result = await itemService.editOrder(orderId, data)
      setOrders(state => state.map(x => x.id === orderId ? result : x));
    }
    catch (err) {
      throw err
    }
  };

  const contextValues = {
    editOrder,
    deleteOrder,
  }
  return (
    <>
      <OrderContext.Provider value={contextValues}>
        {children}
      </OrderContext.Provider>
    </>
  );
};

export const useOrderContext = () => {
  const context = useContext(OrderContext);
  return context;
};