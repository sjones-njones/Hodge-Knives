import AdminCurrentInventory from '../AdminCurrent'
import { Link, useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_AVAILABLEPRODUCTS, REMOVE_PRODUCTS, GET_PRODUCTS } from '../../../utils/queries';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row, Col, Button, Form } from "react-bootstrap";
import { useMutation } from '@apollo/client';

let availability = '';
function CategoryChange({ handleCategoryOnChange }) {
 
  // function handleCategoryOnChange(e) {
  //   console.log(e.target.value);
  //   availability = e.target.value;
  //   DisplayProducts(availability);
  //   console.log(availability);  
  //   }
  //   console.log(availability);  
    

    // function DisplayProducts(){
    //   console.log(availability);
    //   if (availability=== "All"){
    //     return( 

    //       <h1>hello</h1>
    //     )
    //   }
    // }
    return (
    <div>
      <div className='text-start'>
        <Form.Label className="text-white fw-bold fs-4 mt-3 ">Choose Product List to View</Form.Label>
      </div>
      <Form.Select className="mb-3" onChange={() => handleCategoryOnChange('All')}>
        <option value="null" ></option>
        <option value="All">See All Products</option>
        <option value="Available">See Available Products</option>
        <option value="Archive">See Archive Products</option>
      </Form.Select>
    </div>
  )

}

export default CategoryChange;