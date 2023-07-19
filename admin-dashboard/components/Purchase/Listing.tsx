import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "../Button";
import UploadForm from "./UploadForm";
import Table from "./Table";

export default function Listing() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([
      {
        id: 3,
        customer: "Nguyễn Văn C",
        shop: "Cửa hàng ABC",
        product: "Sản phẩm 1",
        quantity: 1,
        price: "100,000",
      },
      {
        id: 4,
        customer: "Nguyễn Văn D",
        shop: "Cửa hàng ABC (239 đường 3/2, P.10, Q.10, TP.HCM)",
        product: "Sản phẩm 2",
        quantity: 2,
        price: "200,000",
      },
    ]);
  }, []);


  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <a>
          <Button className="text-blue-500">Add Purchase</Button>
        </a>
      </div>
      <div className="flex justify-between items-center mb-4">
        <div>
          {/* Serch keyword */}
          <label>Search: </label>
          <input
            type="text"
            name="keyword"
            placeholder="Keyword"
            onChange={(event) => setKeyword(event.target.value)}
            className="w-80 mr-4 py-1 px-2 bg-white-200 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700 placeholder-gray-400 mt-1"
          />
          {/* Filter by Price*/}
          <label>Price: </label>
          <input
            type="number"
            name="min"
            placeholder="Min Price"
            className="w-40 py-1 px-2 bg-white-200 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700 placeholder-gray-400 mt-1"
          />
          {" - "}
          <input
            type="number"
            name="max"
            placeholder="Max Price"
            className="w-40 py-1 px-2 bg-white-200 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700 placeholder-gray-400 mt-1"
          />
        </div>
        <Button
          className="text-green-500"
          onClick={() => {
            
          }}
        >
          Filter
        </Button>
      </div>
      <Table data={data} />
    </>
  );
}
