import { useEffect, useState } from "react";
import {
  addProductData,
  editProductData,
  getOneProductData,
} from "../../service/productService";
import { useDispatch } from "react-redux";
import { toggleLoader } from "../../redux/loaderSlicer";
import { useNavigate, useParams } from "react-router-dom";

const CreateProductComponent = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    imgUrl: "",
  });
  const [image, setImage] = useState("");
  const [productImage, setProductImage] = useState("");
  let validation = false;
  const dispatch = useDispatch();

  useEffect(() => {
    params.id
      ? getOneProductData(params.id)
          .then((res) => {
            setProduct(res.data.data);
          })
          .catch((err) => console.log(err))
      : setProduct({
          title: "",
          description: "",
          price: "",
          category: "",
          imgUrl: "",
        });
  }, [params.id, product.category]);

  const copyProduct = { ...product };

  const handleChange = (e) => {
    copyProduct[e.target.name] = e.target.value;
    setProduct(copyProduct);
  };

  const addImage = (e) => {
    e.preventDefault();
    dispatch(toggleLoader(true));
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "my_shop");
    data.append("cloud_name", "drsg0huwp");
    // getImageUrl(data).then(res => console.log(res))
    // .catch(err => console.log(err))
    fetch("https://api.cloudinary.com/v1_1/drsg0huwp/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((res) => {
        setProduct({
          ...product,
          imgUrl: res.url,
        });
        setProductImage(res.url);
        dispatch(toggleLoader(false));
      })
      .catch((err) => console.log(err));
  };

  const validateInputProduct = () => {
    for (const key in product) {
      if (product[key] === "") {
        alert(`Field ${key} must be filled!`);
        return;
      }
    }
    validation = true;
  };

  const createProduct = (e) => {
    e.preventDefault();
    validateInputProduct();
    if (!validation) {
      return;
    } else {
      addProductData(product)
        .then((res) => navigate("/dashboard/show-product"))
        .catch((err) => console.log(err));
    }
  };

  const editProduct = (e) => {
    e.preventDefault();
    validateInputProduct();
    editProductData(product)
      .then((res) => navigate("/dashboard/show-product"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="container  createProduct">
      <div className="row d-flex align-items-center mt-5">
        <h1 className="mb-5 text-center">
          {!params.id ? "CREATE PRODUCT" : "EDIT PRODUCT"}
        </h1>
        <div className=" col-md-6 mx-auto">
          <form>
            <input
              type="text"
              name="title"
              className="form-control"
              placeholder="Title"
              defaultValue={params.id ? product.title : ""}
              onChange={handleChange}
            />
            <br />
            <textarea
              name="description"
              className="form-control"
              placeholder="Description"
              defaultValue={params.id ? product.description : ""}
              onChange={handleChange}
            ></textarea>
            <br />
            <input
              type="number"
              name="price"
              className="form-control"
              placeholder="Price"
              defaultValue={params.id ? product.price : ""}
              onChange={handleChange}
            />
            <br />
            <select
              className="form-select"
              name="categoryId"
              aria-label="Default select example"
              defaultValue={params.id ? product.category : ""}
              onChange={handleChange}
            >
              <option value="">Choose a category</option>
              <option value="6401f0a8032f552ca5fb2b9f">Computer</option>
              <option value="62b5a9c5b56631db50071ddb">Monitor</option>
              <option value="62b464521253c8eb3742e51c">Other</option>
            </select>
            <br />
            <input
              type="file"
              name="imgUrl"
              className="form-control"
              onChange={(e) => setImage(e.target.files[0])}
            />
            <br />
            <div className="addImage d-flex align-items-center">
              <div className="imageField border d-flex justify-content-center align-items-center">
                {params.id ? (
                  <img src={product.imgUrl} />
                ) : !productImage ? (
                  " Image"
                ) : (
                  <img src={productImage} />
                )}
              </div>
              <br />
              <button className="btn btn-warning " onClick={(e) => addImage(e)}>
                Confirm image
              </button>
            </div>
            <br />

            <button
              className="btn btn-secondary form-control"
              onClick={params.id ? editProduct : createProduct}
            >
              {params.id ? "EDIT PRODUCT" : "ADD PRODUCT"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProductComponent;
