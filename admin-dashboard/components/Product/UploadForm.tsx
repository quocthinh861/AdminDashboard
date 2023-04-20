import React, { useState } from "react";

function UploadForm() {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [thumbnailImage, setThumbnailImage] = useState("");
  const [productImages, setProductImages] = useState([]);
  const [productPrice, setProductPrice] = useState("");
  const [salePrice, setSalePrice] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Xử lý logic khi người dùng nhấn nút Submit ở đây
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label
          htmlFor="product-name"
          className="block text-gray-700 font-medium mb-2"
        >
          Tên sản phẩm
        </label>
        <input
          type="text"
          id="product-name"
          name="product-name"
          className="w-full py-2 px-4 bg-white border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700 placeholder-gray-400 mt-1"
          value={productName}
          onChange={(event) => setProductName(event.target.value)}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="product-description"
          className="block text-gray-700 font-medium mb-2"
        >
          Mô tả sản phẩm
        </label>
        <textarea
          id="product-description"
          name="product-description"
          className="w-full py-2 px-4 bg-white border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700 placeholder-gray-400 mt-1"
          value={productDescription}
          onChange={(event) => setProductDescription(event.target.value)}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="thumbnail-image"
          className="block text-gray-700 font-medium mb-2"
        >
          Hình Thumbnail chính
        </label>
        <input
          type="file"
          id="thumbnail-image"
          name="thumbnail-image"
          accept="image/*"
          className="w-full py-2 px-4 bg-white border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700 placeholder-gray-400 mt-1"
          onChange={(event) => setThumbnailImage(event.target.files[0])}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="product-images"
          className="block text-gray-700 font-medium mb-2"
        >
          Hình sản phẩm minh hoạ
        </label>
        <input
          type="file"
          id="product-images"
          name="product-images"
          accept="image/*"
          multiple
          className="w-full py-2 px-4 bg-white border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700 placeholder-gray-400 mt-1"
          onChange={(event) => setProductImages(Array.from(event.target.files))}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="product-price"
          className="block text-gray-700 font-medium mb-2"
        >
          Giá tiền (là giá gốc)
        </label>
        <input
          type="number"
          id="product-price"
          name="product-price"
          min="0"
          step="1000"
          className="w-full py-2 px-4 bg-white border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700 placeholder-gray-400 mt-1"
          value={productPrice}
          onChange={(event) => setProductPrice(event.target.value)}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="sale-price"
          className="block text-gray-700 font-medium mb-2"
        >
          Giá khuyến mãi
        </label>
        <input
          type="number"
          id="sale-price"
          name="sale-price"
          min="0"
          step="1000"
          className="w-full py-2 px-4 bg-white border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700 placeholder-gray-400 mt-1"
          value={salePrice}
          onChange={(event) => setSalePrice(event.target.value)}
        />
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-md py-2 px-4 font-medium text-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-700 active:bg-blue-700 transition duration-150 ease-in-out"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default UploadForm;
