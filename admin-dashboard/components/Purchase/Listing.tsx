import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "../Button";
import UploadForm from "./UploadForm";
import Table from "./Table";

export default function Listing() {
  const [data, setData] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  const handleFilter = () => {
    // Filter by keyword
    setData((prev) => {
      return prev.filter((item) => {
        return (
          item.customer.toLowerCase().includes(keyword.toLowerCase()) ||
          item.shop.toLowerCase().includes(keyword.toLowerCase()) ||
          item.product.toLowerCase().includes(keyword.toLowerCase())
        );
      });
    });

    // Filter by price
    setData((prev) => {
      return prev.filter((item) => {
        return (
          item.price >= minPrice && item.price <= maxPrice
        );
      });
    });
  };

  const handleReset = () => {
    setKeyword("");
    setMinPrice(0);
    setMaxPrice(0);
  };

  useEffect(() => {
    if (keyword == "") {
      setData([
        {
          id: 3,
          customer: "Nguyễn Văn C",
          shop: "Cửa hàng ABC",
          product: "Sản phẩm 1",
          quantity: 1,
          price: 100000,
        },
        {
          id: 4,
          customer: "Nguyễn Văn D",
          shop: "Cửa hàng ABC (239 đường 3/2, P.10, Q.10, TP.HCM)",
          product: "Sản phẩm 2",
          quantity: 2,
          price: 200000,
        },
      ]);
    }
  }, [keyword]);

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
            value={keyword}
            onChange={(event) => setKeyword(event.target.value)}
            className="w-80 mr-4 py-1 px-2 bg-white-200 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700 placeholder-gray-400 mt-1"
          />
          {/* Filter by Price*/}
          <label>Price: </label>
          <input
            type="number"
            name="min"
            value={minPrice || ""}
            onChange={(event) => setMinPrice(event.target.value)}
            placeholder="Min Price"
            className="w-40 py-1 px-2 bg-white-200 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700 placeholder-gray-400 mt-1"
          />
          {" - "}
          <input
            type="number"
            name="max"
            value={maxPrice || ""}
            onChange={(event) => setMaxPrice(event.target.value)}
            placeholder="Max Price"
            className="w-40 py-1 px-2 bg-white-200 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700 placeholder-gray-400 mt-1"
          />
          <a className="text-sm underline text-blue-500 ml-2 cursor-pointer" onClick={handleReset}>Clear</a>
        </div>
        <Button
          className="text-green-500"
          onClick={() => {
            handleFilter();
          }}
        >
          Filter
        </Button>
      </div>
      <Table data={data} />
    </>
  );
}
