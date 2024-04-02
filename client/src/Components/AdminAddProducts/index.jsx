import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useMutation, gql } from "@apollo/client";
import { Button, Image, Container, Form } from "react-bootstrap";
import { ADDPRODUCTS } from '../../../utils/queries';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from '../../FireBaseSetUp';
const AdminAddProducts = () => {
  const navigate = useNavigate();
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [image, setImage] = React.useState("");
  const [image2, setImage2] = React.useState("");
  const [image3, setImage3] = React.useState("");
  const [price, setPrice] = React.useState();
  const [category, setCategory] = React.useState("");

  const [addProductMutation] = useMutation(ADDPRODUCTS);

  async function handleOnSubmit(event) {
    event.preventDefault();
    navigate('/productAdded', { replace: true });
    const data = await addProductMutation({
      variables: {
        name,
        description,
        image,
        image2,
        image3,
        price,
        category,
      },
    });

    const myProducts = (data.data.addProduct);
    console.log(myProducts);
    setName("");
    setDescription("");
    setImage("");
    setImage2("");
    setImage3("");
    setPrice("");
    setCategory("");
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

  function handleImage2OnChange(event) {
    setImage2(event.target.value);

  } function handleImage3OnChange(event) {
    setImage3(event.target.value);


  } function handlePriceOnChange(event) {
    setPrice(parseInt(event.target.value));
  }

  function handleCategoryOnChange(event) {
    setCategory(event.target.value);
  }

  const [img, setImg] = useState(undefined);
  const [img2, setImg2] = useState(undefined);
  const [img3, setImg3] = useState(undefined);

  const [imgPerc, setImgPerc] = useState(0);
  const [imgPerc2, setImgPerc2] = useState(0);
  const [imgPerc3, setImgPerc3] = useState(0);

  const [inputs, setInputs] = useState({});
  const [imgUrl, setImgUrl] = useState("");
  const [img2Url, setImg2Url] = useState("");
  const [img3Url, setImg3Url] = useState("");

  useEffect(() => {
    img && uploadFile(img, "imgUrl");
  }, [img]);
  useEffect(() => {
    img2 && uploadFile2(img2, "img2Url");
  }, [img2]);
  useEffect(() => {
    img3 && uploadFile3(img3, "img3Url");
  }, [img3]);

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
          setImage2(downloadURL2);
          console.log('DownloadURL - ', downloadURL2);
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
          setImage3(downloadURL3);
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
    <Container>
      <h2 className="text-white">Enter Your Product Info Below</h2>
      <div className="row justify-content-center">
        <form className="sizingForm mt-3" onSubmit={handleOnSubmit}>
          <div className=" m-4 form-group">
            <label className="label d-block text-white" htmlFor="name">Name</label>
            <input
              className="text-left w-100 rounded"
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleNameOnChange}
            />
          </div>
          <div className=" m-4 form-group">
            <label className="label d-block text-white" htmlFor="description">Description</label>
            <textarea className="w-100 form-control" id="description" rows="5"
              name="description"
              value={description}
              onChange={handleDescriptionOnChange}
            >
            </textarea>
          </div>
          <div className=" m-4 form-group">

            <Form.Group controlId="formFile" className="upload mb-3">
          
              <Form.Label className='label d-block text-white'>Main Image {imgPerc > 0 && "Uploading: " + imgPerc + "%"}</Form.Label>
              <Form.Control type="file"
                accept="image/*"
                id="img"
                onChange={(e) => setImg((prev) => e.target.files[0])} />
            </Form.Group>
          </div>

          <div className="d-none m-4 form-group">
            <label className="label d-block text-white" htmlFor="image">Main Image</label>
            <input
              className="rounded w-100"
              type="text"
              id="image"
              name="image"
              value={image}
              onChange={handleImageOnChange}
            />
            <Image></Image>
          </div>

          <div className=" m-4 form-group">

            <Form.Group controlId="formFile" className="upload mb-3">
              <Form.Label className='label d-block text-white'>Image 2 {imgPerc2 > 0 && "Uploading: " + imgPerc2 + "%"}</Form.Label>
              <Form.Control type="file"
                accept="image/*"
                id="img"
                onChange={(e) => setImg2((prev) => e.target.files[0])} />
            </Form.Group>
          </div>

          <div className="d-none m-4 form-group">
            <label className="label d-block text-white" htmlFor="image">2nd Image</label>
            <input
              className="rounded w-100"
              type="text"
              id="image"
              name="image2"
              value={image2}
              onChange={handleImage2OnChange}
            />
          </div>

          <div className=" m-4 form-group">

            <Form.Group controlId="formFile" className="upload mb-3">
              <Form.Label className='label d-block text-white'>Image 3 {imgPerc3 > 0 && "Uploading: " + imgPerc3 + "%"}</Form.Label>
              <Form.Control type="file"
                accept="image/*"
                id="img"
                onChange={(e) => setImg3((prev) => e.target.files[0])} />
            </Form.Group>
          </div>


          <div className="d-none m-4 form-group">
            <label className="label d-block text-white" htmlFor="image">3rd Image</label>
            <input
              className="rounded w-100"
              type="text"
              id="image"
              name="image3"
              value={image3}
              onChange={handleImage3OnChange}
            />
          </div>


          <div className=" m-4 form-group">
            <label className="label d-block text-white" htmlFor="price">Price ($ Amount Only)</label>
            <input
              className="rounded w-100"
              type="integer"
              id="quantity"
              name="quantity"
              min="1"
              max="1000"
              value={price}
              onChange={handlePriceOnChange}
            />


          </div>
          <div className="m-4 form-group">
            <label className="label d-block text-white" htmlFor="image">Category</label>
            <select className="rounded form-control" id="category"
              value={category}
              onChange={handleCategoryOnChange}>
              <option value="null"></option>
              <option className="text-black fs-5" value="Available">Available</option>
              <option className="text-black fs-5" value="Archive">Archive</option>
            </select>
          </div>
          <Button type="submit" className="btn sizingButton btn-warning btn-lg m-2 fs-3">Add Product</Button>
          <Link to="/A">
            <Button type="button" className="sizingButton btn btn-warning btn-lg fs-3 m-2">Back</Button>
          </Link>
        </form>
      </div>
    </Container>

  );
};

export default AdminAddProducts;