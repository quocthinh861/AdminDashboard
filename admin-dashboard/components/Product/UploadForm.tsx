import React, { useState } from "react";

function UploadForm() {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [thumbnailImage, setThumbnailImage] = useState("");
  const [productImages, setProductImages] = useState([]);
  const [productPrice, setProductPrice] = useState("");
  const [salePrice, setSalePrice] = useState("");
  const [errors, setErrors] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Xử lý logic khi người dùng nhấn nút Submit ở đây

    if (validate()) {
      // Xử lý logic khi người dùng nhấn nút Submit ở đây
    }
  };

  const validate = () => {
    let errors: any = {};

    if (!productName) {
      errors.productName = "Vui lòng nhập tên sản phẩm.";
    }

    if (!productDescription) {
      errors.productDescription = "Vui lòng nhập mô tả sản phẩm.";
    }

    if (!thumbnailImage) {
      errors.thumbnailImage = "Vui lòng chọn ảnh đại diện.";
    }

    if (!productImages || productImages.length === 0) {
      errors.productImages = "Vui lòng chọn ít nhất một ảnh sản phẩm.";
    }

    if (!productPrice) {
      errors.productPrice = "Vui lòng nhập giá sản phẩm.";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  return (
    <>
      {
        // Hiển thị lỗi ở đây
        errors && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
            role="alert"
          >
            <button
              className="absolute top-0 right-0 px-2 py-1"
              onClick={() => setErrors(null)}
            >
              <svg
                className="h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M14.348 5.652a.999.999 0 00-1.414 0L10 8.586 6.066 4.652a.999.999 0 10-1.414 1.414L8.586 10l-3.934 3.934a.999.999 0 101.414 1.414L10 11.414l3.934 3.934a.999.999 0 101.414-1.414L11.414 10l3.934-3.934a.999.999 0 000-1.414z"
                  clipRule="evenodd"
                  fillRule="evenodd"
                />
              </svg>
            </button>
            <strong className="font-bold">Đã xảy ra lỗi! </strong>
            <span className="block sm:inline">
              Hãy sửa các lỗi dưới đây:
            </span>
            <ul className="list-disc list-inside">
              {Object.keys(errors).map((key) => (
                <li key={key}>{errors[key]}</li>
              ))}
            </ul>
          </div>
        )
      }
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
            Hình Thumbnail
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
            onChange={(event) =>
              setProductImages(Array.from(event.target.files))
            }
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
    </>
  );
}

export default UploadForm;
