import React, { useEffect, useState } from "react";

export default function Table({data}) {

  

  // Filter
  const [keyword, setKeyword] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const headers = [
    {
      text: "ID",
    },
    {
      text: "CUSTOMER",
    },
    {
      text: "SHOP",
    },
    {
      text: "PRODUCT",
    },
    {
      text: "QTY",
    },
    {
      text: "PRICE",
    },
  ];

  return (
    <div className="mt-4 flex flex-col">
      <div className="-my-2 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                {headers.map((header, index) => {
                  return (
                    <th
                      scope="col"
                      className="group px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      <div className="flex items-center justify-between">
                        {header.text}
                      </div>
                    </th>
                  );
                })}
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.map((row, i) => {
                  return (
                    <tr key={i}>
                      <td className="px-6 py-4 whitespace-nowrap description-cell">
                        {row.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap description-cell">
                        {row.customer}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap description-cell">
                        {row.shop}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap description-cell">
                        {row.product}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap description-cell">
                        {row.quantity}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap description-cell">
                        {row.total}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
