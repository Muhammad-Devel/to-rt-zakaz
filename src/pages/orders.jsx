import React, { useState, useEffect } from "react";
import { ShoppingOutlined } from "@ant-design/icons";

const Orders = () => {
  const [orderCount, setOrderCount] = useState(0);

  useEffect(() => {
    // Assume you have a function to fetch orders count from the database
    const fetchOrderCount = async () => {
      try {
        const response = await fetch("api/orders/count");
        const data = await response.json();
        setOrderCount(data.count);
      } catch (error) {
        console.error("Error fetching order count: ", error);
      }
    };

    fetchOrderCount();
  }, []);

  return (
    <>
      <h2 className="text-xl font-bold">Buyurtmalarim</h2>
      <h2 className="text-xl font-bold">
        <ShoppingOutlined /> ({orderCount})
      </h2>
    </>
  );
};

export default Orders;
