import { gql } from '@apollo/client';

export const OneUser = gql`
query OneUser($email: String!) {
  oneUser(email: $email) {
    email
    _id
    name
    password
  }
}
`;
export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

export const QUERY_PRODUCTS = gql`
query Product($productId: ID!) {
  product(productId: $productId) {
    _id
    name
    description
    image
    image2
    image3
    price
    category
  }
}
`;
export const UPDATEPRODUCTCATEGORY = gql` 
mutation updateProductCategory(
  $updateProductId: ID!, 
  $category: String!) 
  {
    updateProductCategory(
    id: $updateProductId, 
    category: $category) 
    {
    category
    _id
  }
}
`
export const UPDATEPRODUCTNAME = gql` 
mutation updateProductName(
  $updateProductId: ID!, 
  $name: String!) 
  {
    updateProductName(
    id: $updateProductId, 
    name: $name) 
    {
    name
    _id
  }
}
`
export const UPDATEPRODUCTDESCRIPTION = gql` 
mutation updateProductDescription(
  $updateProductId: ID!, 
  $description: String!) 
  {
    updateProductDescription(
    id: $updateProductId, 
    description: $description) 
    {
      description
    _id
  }
}
`
export const UPDATEPRODUCTIMAGE = gql` 
mutation updateProductImage(
  $updateProductId: ID!, 
  $image: String!) 
  {
    updateProductImage(
    id: $updateProductId, 
    image: $image) 
    {
      image
    _id
  }
}
`
export const UPDATEPRODUCTSECONDIMAGE = gql` 
mutation updateProductSecondImage(
  $updateProductId: ID!, 
  $image2: String!) 
  {
    updateProductSecondImage(
    id: $updateProductId, 
    image2: $image2) 
    {
      image2
    _id
  }
}
`
export const UPDATEPRODUCTTHIRDIMAGE = gql` 
mutation updateProductThirdImage(
  $updateProductId: ID!, 
  $image3: String!) 
  {
    updateProductThirdImage(
    id: $updateProductId, 
    image3: $image3) 
    {
      image3
    _id
  }
}
`
export const UPDATEPRODUCTPRICE = gql` 
mutation updateProductPrice(
  $updateProductId: ID!, 
  $price: Int!) 
  {
    updateProductPrice(
    id: $updateProductId, 
    price: $price) 
    {
      price
    _id
  }
}
`

export const GET_AVAILABLEPRODUCTS = gql`
query ProductsAvailable {
  productsAvailable {
    _id
    name
    description
    price
    image
    image2
    image3
    category
  }
}
`;
export const ADDPRODUCTS = gql`
mutation AddProduct(
  $name: String!,
  $category: String!,
  $description: String!,
  $price: Int!,
  $image: String!,
  $image2: String, 
  $image3: String) 
  {
  addProduct(
    name: $name,
    category: $category,
    description: $description,
    price: $price,
    image: $image,
    image2: $image2, 
    image3: $image3) 
    {
 name
}
}
`
export const REMOVE_PRODUCTS = gql`
mutation RemoveProduct($productId: ID!) {
  removeProduct(productId: $productId) {
    name
  }
}
`
export const GET_ARCHIVEPRODUCTS = gql`
query ProductsArchive {
  productsArchive {
    _id
    name
    description
    price
    image
    image2
    image3
    category
  }
}
`;

export const GET_PRODUCTS = gql`
query Products {
  products {
    _id
    name
    description
    price
    image
    image2
    image3
    category 
  }
}
`;

// export const GET_AVAILABLEPRODUCTS = gql`
// query AvailableProducts {
//   availableProducts {
//     _id
//     name
//     description
//     image
//     image2
//     image3
//     price
//     category
//   }
// }
// `;

// export const QUERY_PRODUCTS = gql`
//   query getProducts($category: ID) {
//     products(category: $category) {
//       _id
//       name
//       description
//       price
//       image
//       category {
//         _id
//       }
//     }
//   }
// `;

// export const QUERY_CHECKOUT = gql`
//   query getCheckout($products: [ProductInput]) {
//     checkout(products: $products) {
//       session
//     }
//   }
// `;

// export const QUERY_ALL_PRODUCTS = gql`
//   {
//     products {
//       _id
//       name
//       description
//       price
//       category {
//         name
//       }
//     }
//   }
// `;

// export const QUERY_CATEGORIES = gql`
//   {
//     categories {
//       _id
//       name
//     }
//   }
// `;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      orders {
        _id
        purchaseDate
        products {
          _id
          name
          description
          price
          image
        }
      }
    }
  }
`;











