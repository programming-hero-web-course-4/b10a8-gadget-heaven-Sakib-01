import React, { useEffect, useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SingleCart = ({ cart, handleRemove }) => {
  return (
    <div className="w-10/12 mx-auto flex items-center justify-between p-4 bg-white shadow-md rounded-lg mb-10">
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16  rounded-lg">
          <img src={cart.product_image} alt="" />
        </div>
        <div>
          <h3 className="text-lg font-semibold">{cart.product_title}</h3>
          <p className="text-sm text-gray-500">{cart.description}</p>
          <p className="text-lg font-semibold">Price: ${cart.price}</p>
        </div>
      </div>
      <button
        onClick={() => {
          handleRemove(cart.product_id);
          toast.success(`${cart.product_title} has been removed Cart!`);
        }}
        className="btn  bg-white text-red-500"
      >
        <TiDeleteOutline size={30} />
      </button>
    </div>
  );
};

export default SingleCart;
