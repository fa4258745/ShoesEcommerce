import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import BackEndUrl from "../config/BackEndUrl";
import axios from "axios";
const UploadProduct = () => {
  const [input, setInput] = useState({});
  const [selectedImages, setSelectedImages] = useState("");
  const [sizes, setSizes] = useState([
    { size: "6", stock: 3 },
    { size: "7", stock: 2 },
    { size: "8", stock: 2 },
    { size: "9", stock: 4 },
  ]);
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
    console.log(input);
  };
  const handleStockChange = (index, value) => {
    const updatedSizes = [...sizes];
    updatedSizes[index].stock = value;
    setSizes(updatedSizes);
  };

  const handleImages = (e) => {
    setSelectedImages(e.target.files);
    console.log(selectedImages);
  };
  // const handleSubmit=async(e)=>{
  //        e.preventDefault();
  //       const formData= new FormData();
  //        for (var key in input)
  //        {
  //         formData.append(key, input[key]);
  //        }

  //          for (let i = 0; i < selectedImages.length; i++) {
  //           formData.append('images', selectedImages[i]);
  //       }
  //        let api=`${BackEndUrl}/admin/productsave`;
  //        const response = await axios.post(api, formData);
  //        console.log(response);
  //        alert("Product Save!")
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    for (var key in input) {
      formData.append(key, input[key]);
    }

    formData.append("sizes", JSON.stringify(sizes));

    // images
    for (let i = 0; i < selectedImages.length; i++) {
      formData.append("images", selectedImages[i]);
    }

    let api = `${BackEndUrl}/admin/productsave`;
    const response = await axios.post(api, formData);

    console.log(response);
    alert("Product Saved!");
  };

  return (
    <>
      <Form style={{ width: "300px" }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter Product Name</Form.Label>
          <Form.Control type="text" name="name" onChange={handleInput} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter Product Description</Form.Label>
          <Form.Control type="text" name="description" onChange={handleInput} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter Product Price</Form.Label>
          <Form.Control type="text" name="price" onChange={handleInput} />
        </Form.Group>

        <Form.Select
          aria-label="Default select example"
          name="category"
          onChange={handleInput}
        >
          <option>Select Brand</option>
          <option value="underarmour">Under Armour</option>
          <option value="nike">Nike</option>
          <option value="reebok">Reebok</option>
          <option value="puma">Puma</option>
          <option value="adidas">Adidas</option>
          <option value="balenciaga">Balenciega</option>
          <option value="sketchers">Sketchers</option>
          <option value="boots">Boots</option>
          <option value="sandals">Sandals</option>
          <option value="clogs">Clogs</option>
          <option value="formals">Formals</option>
        </Form.Select>

        <h5>Product Sizes & Stock</h5>

        {sizes.map((item, index) => (
          <Form.Group key={index} className="mb-2">
            <Form.Label>Size {item.size}</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter stock"
              value={item.stock}
              onChange={(e) => handleStockChange(index, e.target.value)}
            />
          </Form.Group>
        ))}

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Upload Images</Form.Label>
          <Form.Control type="file" onChange={handleImages} multiple />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </>
  );
};

export default UploadProduct;
