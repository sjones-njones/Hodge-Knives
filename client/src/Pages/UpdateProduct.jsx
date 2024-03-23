import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { Image, Button, Form, Row, Col } from "react-bootstrap";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from '../FireBaseSetUp';
import { UPDATEPRODUCTCATEGORY, QUERY_PRODUCTS, UPDATEPRODUCTNAME, UPDATEPRODUCTDESCRIPTION, UPDATEPRODUCTIMAGE, UPDATEPRODUCTSECONDIMAGE, UPDATEPRODUCTTHIRDIMAGE, UPDATEPRODUCTPRICE } from '../../utils/queries';
import { useMutation, useQuery } from '@apollo/client';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import "../Home.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductUpdate = () => {

  const [img, setImg] = useState(undefined);
  const [img2, setImg2] = useState(undefined);
  const [img3, setImg3] = useState(undefined);

  const [imgPerc, setImgPerc] = useState(0);
  const [imgPerc2, setImgPerc2] = useState(0);
  const [imgPerc3, setImgPerc3] = useState(0);
  const showToastMessage = () => {

    toast("Success!"
    );
  };

  useEffect(() => {
    img && uploadFile(img, "imgUrl");
  }, [img]);
  useEffect(() => {
    img2 && uploadFile2(img2, "img2Url");
  }, [img2]);
  useEffect(() => {
    img3 && uploadFile3(img3, "img3Url");
  }, [img3]);

  const { id } = useParams();
  const { data } = useQuery(QUERY_PRODUCTS, {
    variables: { productId: id },
  });
  const currentProduct = data?.product || {};
  const [category, setCategory] = React.useState("");

  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [inputs, setInputs] = useState({});

  const [image, setImage] = React.useState("");
  const [secondImage, setSecondImage] = React.useState("");
  const [thirdImage, setThirdImage] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [changeCategory] = useMutation(UPDATEPRODUCTCATEGORY);
  const [changeName] = useMutation(UPDATEPRODUCTNAME);
  const [changeDescription] = useMutation(UPDATEPRODUCTDESCRIPTION);
  const [changeImage] = useMutation(UPDATEPRODUCTIMAGE);
  const [changeSecondImage] = useMutation(UPDATEPRODUCTSECONDIMAGE);
  const [changeThirdImage] = useMutation(UPDATEPRODUCTTHIRDIMAGE);
  const [changePrice] = useMutation(UPDATEPRODUCTPRICE);

  async function handleOnSubmitCategory(event) {
    const dataCategory = await changeCategory({
      variables: {
        updateProductId: id,
        category: category
      },
    });
    setCategory("");
  }

  async function handleOnSubmitName(event) {
    const dataName = await changeName({
      variables: {
        updateProductId: id,
        name: name
      },
    });
    setName("");
  }

  async function handleOnSubmitImage(event) {
    const dataImage = await changeImage({
      variables: {
        updateProductId: id,
        image: image
      },
    });
    setImage("");
  }
  async function handleOnSubmitSecondImage(event) {
    const dataSecondImage = await changeSecondImage({
      variables: {
        updateProductId: id,
        image2: secondImage
      },
    });
    setSecondImage("");
    console.log({secondImage});
  }
  async function handleOnSubmitThirdImage(event) {
    const dataThirdImage = await changeThirdImage({
      variables: {
        updateProductId: id,
        image3: thirdImage
      },
    });
    setThirdImage("");
  }
  async function handleOnSubmitDescription(event) {
    const dataDescription = await changeDescription({
      variables: {
        updateProductId: id,
        description: description
      },
    });
    setDescription("");
  }
  async function handleOnSubmitPrice(event) {
    const dataPrice = await changePrice({
      variables: {
        updateProductId: id,
        price: price
      },
    });
    setPrice("");
  }


  function handleCategoryOnChange(event) {
    setCategory(event.target.value);
  }
  function handleNameOnChange(event) {
    setName(event.target.value);
  }
  function handleDescriptionOnChange(event) {
    setDescription(event.target.value);
  }
  function handleImageOnChange(event) {
    setImage(event.target.value);
  }
  function handleSecondImageOnChange(event) {
    setSecondImage(event.target.value);
  }
  function handleThirdImageOnChange(event) {
    setThirdImage(event.target.value);
  }
  function handlePriceOnChange(event) {
    setPrice(parseInt(event.target.value));
  }

  const uploadFile = (file, fileType) => {
    const storage = getStorage(app);
    const folder = fileType === "imgUrl" ? "images/" : "videos/";
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, folder + fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        fileType === "imgUrl"
          ? setImgPerc(Math.round(progress))
          : setVideoPerc(Math.round(progress));
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            break;
        }
      },
      (error) => {
        console.log(error);
        switch (error.code) {
          case "storage/unauthorized":
            // User doesn't have permission to access the object
            console.log(error);
            break;
          case "storage/canceled":
            // User canceled the upload
            break;
          case "storage/unknown":
            // Unknown error occurred, inspect error.serverResponse
            break;
          default:
            break;
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImage(downloadURL);
          console.log('DownloadURL - ', downloadURL);
          setInputs((prev) => {
            return {
              ...prev,
              [fileType]: downloadURL,
            };
          });
        });
      }
    );
  }

  const uploadFile2 = (file, fileType) => {
    const storage2 = getStorage(app);
    const folder2 = fileType === "img2Url" ? "images/" : "videos/";
    const fileName2 = new Date().getTime() + file.name;
    const storageRef2 = ref(storage2, folder2 + fileName2);
    const uploadTask2 = uploadBytesResumable(storageRef2, file);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask2.on(
      "state_changed",
      (snapshot) => {
        const progress2 =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        fileType === "img2Url"
          ? setImgPerc2(Math.round(progress2))
          : setVideoPerc(Math.round(progress2));
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            break;
        }
      },
      (error) => {
        console.log(error);
        switch (error.code) {
          case "storage/unauthorized":
            // User doesn't have permission to access the object
            console.log(error);
            break;
          case "storage/canceled":
            // User canceled the upload
            break;
          case "storage/unknown":
            // Unknown error occurred, inspect error.serverResponse
            break;
          default:
            break;
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask2.snapshot.ref).then((downloadURL2) => {
          setSecondImage(downloadURL2);
          console.log('DownloadURL2 - ', downloadURL2);
          setInputs((prev) => {
            return {
              ...prev,
              [fileType]: downloadURL2,
            };
          });
        });
      }
    );
  }

  const uploadFile3 = (file, fileType) => {
    const storage3 = getStorage(app);
    const folder3 = fileType === "img3Url" ? "images/" : "videos/";
    const fileName3 = new Date().getTime() + file.name;
    const storageRef3 = ref(storage3, folder3 + fileName3);
    const uploadTask3 = uploadBytesResumable(storageRef3, file);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask3.on(
      "state_changed",
      (snapshot) => {
        const progress3 =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        fileType === "img3Url"
          ? setImgPerc3(Math.round(progress3))
          : setVideoPerc(Math.round(progress3));
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            break;
        }
      },
      (error) => {
        console.log(error);
        switch (error.code) {
          case "storage/unauthorized":
            // User doesn't have permission to access the object
            console.log(error);
            break;
          case "storage/canceled":
            // User canceled the upload
            break;
          case "storage/unknown":
            // Unknown error occurred, inspect error.serverResponse
            break;
          default:
            break;
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask3.snapshot.ref).then((downloadURL3) => {
          setThirdImage(downloadURL3);
          console.log('DownloadURL - ', downloadURL3);
          setInputs((prev) => {
            return {
              ...prev,
              [fileType]: downloadURL3,
            };
          });
        });
      }
    );
  }
  return (
    <div className="row sizingUpdateForm justify-content-center">

      <Form className="sizingUpdateForm px-0" onSubmit={handleOnSubmitName}>
        <Form.Label className="stylingUpdateLabel text-white fs-4 mb-0">Name</Form.Label>
        <Form.Group className="text-start" >
          <Form.Control
            className=""
            onChange={handleNameOnChange}
            type="text"
            placeholder={currentProduct.name} />
        </Form.Group>
        <Button type="submit" onClick={showToastMessage} className="btn stylingUpdateButton btn-warning ">Update Name</Button>

        <ToastContainer
          position='top-center'
          autoClose={5000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='dark'
          className="my-toast-container"
        />
      </Form>

      <Form className="sizingUpdateForm px-0" onSubmit={handleOnSubmitDescription}>
        <Form.Label className="stylingUpdateLabel text-white fs-4 mb-0">Description</Form.Label>
        <Form.Group className=" text-start" >
          <Form.Control className="" onChange={handleDescriptionOnChange} type="text" placeholder={currentProduct.description} />
        </Form.Group>
        <Button type="submit" onClick={showToastMessage} className="btn stylingUpdateButton btn-warning ">Update Description</Button>

        <ToastContainer
          position='top-center'
          autoClose={5000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='dark'
          className="my-toast-container"
        />
      </Form>

      <div className=" mt-4 mx-4 form-group ">
        <Form.Group className="upload">
          <div className="position-relative">
            <Image
              className="position-absolute top-50 end-0 translate-middle-y"
              src={currentProduct.image} style={{ width: 50, height: 50 }} />
          </div>
          <Form.Label className='text-center stylingUpdateLabel text-white fs-4 mb-0 label d-block text-white'>Update Image {imgPerc > 0 && "Uploading: " + imgPerc + "%"}</Form.Label>
          <Form.Control className="bg-dark text-white" type="file"
            accept="image/*"
            id="img"
            onChange={(e) => setImg((prev) => e.target.files[0])} />
        </Form.Group>
      </div>
      <Form className=" sizingUpdateForm px-0" onSubmit={handleOnSubmitImage}>
        <Button type="submit" onClick={showToastMessage} className="btn stylingUpdateButton btn-warning ">Update Image</Button>
        <Form.Label className="d-none stylingUpdateLabel text-white fs-4 mb-0"></Form.Label>
        <Form.Group className=" d-none stylingUpdateInput text-start">
          <Form.Control
            value={image}
            className="fs-4 stylingUpdateInput"
            onChange={handleImageOnChange} type="text"
            aria-label="Disabled input example"
            readOnly />
        </Form.Group>


        <ToastContainer
          position='top-center'
          autoClose={5000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='dark'
          className="my-toast-container"
        />
      </Form>


      <div className=" mt-4 mx-4 form-group ">
        <Form.Group className="upload">
          <div className="position-relative">
            <Image
              className="position-absolute top-50 end-0 translate-middle-y"
              src={currentProduct.image2} style={{ width: 50, height: 50 }} />
          </div>
          <Form.Label className='text-center stylingUpdateLabel text-white fs-4 mb-0 label d-block text-white'>Update 2nd Image {imgPerc2 > 0 && "Uploading: " + imgPerc2 + "%"}</Form.Label>
          <Form.Control className="bg-dark text-white" type="file"
            accept="image/*"
            id="img"
            onChange={(e) => setImg2((prev) => e.target.files[0])} />
        </Form.Group>
      </div>

      <Form className=" sizingUpdateForm px-0" onSubmit={handleOnSubmitSecondImage}>
        <Button type="submit" onClick={showToastMessage} className="btn stylingUpdateButton btn-warning ">Update 2nd Image</Button>
        <Form.Label className="d-none stylingUpdateLabel text-white fs-4 mb-0"></Form.Label>
        <Form.Group className=" d-none  stylingUpdateInput text-start">
          <Form.Control
            value={secondImage}
            className="fs-4 stylingUpdateInput"
            onChange={handleSecondImageOnChange} type="text"
            aria-label="Disabled input example"
            readOnly />
        </Form.Group>


        <ToastContainer
          position='top-center'
          autoClose={5000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='dark'
          className="my-toast-container"
        />
      </Form>


      <div className=" mt-4 mx-4 form-group ">
        <Form.Group className="upload">
          <div className="position-relative">
            <Image
              className="position-absolute top-50 end-0 translate-middle-y"
              src={currentProduct.image3} style={{ width: 50, height: 50 }} />
          </div>
          <Form.Label className='text-center stylingUpdateLabel text-white fs-4 mb-0 label d-block text-white'>Update 3rd Image {imgPerc3 > 0 && "Uploading: " + imgPerc3 + "%"}</Form.Label>
          <Form.Control className="bg-dark text-white" type="file"
            accept="image/*"
            id="img"
            onChange={(e) => setImg3((prev) => e.target.files[0])} />
        </Form.Group>
      </div>

      <Form className=" sizingUpdateForm px-0" onSubmit={handleOnSubmitThirdImage}>
        <Button type="submit" onClick={showToastMessage} className="btn stylingUpdateButton btn-warning ">Update 3rd Image</Button>
        <Form.Label className="d-none stylingUpdateLabel text-white fs-4 mb-0"></Form.Label>
        <Form.Group className=" d-none  stylingUpdateInput text-start">
          <Form.Control
            value={thirdImage}
            className="fs-4 stylingUpdateInput"
            onChange={handleThirdImageOnChange} type="text"
            aria-label="Disabled input example"
            readOnly />
        </Form.Group>


        <ToastContainer
          position='top-center'
          autoClose={5000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='dark'
          className="my-toast-container"
        />
      </Form>
      <Form className="sizingUpdateForm px-0" onSubmit={handleOnSubmitPrice}>
        <Form.Label className="stylingUpdateLabel text-white fs-4 mb-0">Price</Form.Label>
        <Form.Group className=" text-start" >
          <Form.Control className="" onChange={handlePriceOnChange} type="text" placeholder={currentProduct.price} />
        </Form.Group>
        <Button type="submit" onClick={showToastMessage} className="btn stylingUpdateButton btn-warning ">Update Price</Button>

        <ToastContainer
          position='top-center'
          autoClose={5000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='dark'
          className="my-toast-container"
        />
      </Form>


      <Form className="sizingUpdateForm px-0" onSubmit={handleOnSubmitCategory}>
        <Form.Label className="stylingUpdateLabel text-white fs-4 mb-0">Current Category: {currentProduct.category} </Form.Label>
        <Form.Group className=" text-start" >
          <Form.Select value={category} onChange={handleCategoryOnChange} className="mb-3 ">
            <option value="Available">Available</option>
            <option value="Archive">Archive</option>
          </Form.Select>
        </Form.Group>
        <Button type="submit" onClick={showToastMessage} className="btn stylingUpdateButton btn-warning ">Update Category</Button>

        <ToastContainer
          position='top-center'
          autoClose={5000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='dark'
          className="my-toast-container"
        />

      </Form>



      <Link to="/Admin">
        <button type="button" className="btn sizingButton btn-warning btn-lg m-2 ">Back to Admin</button>
      </Link>
      <Link to="/">
        <button type="button" className="btn sizingButton btn-warning btn-lg m-2 ">Home</button>
      </Link>
    </div>

  );
};

export default ProductUpdate;



