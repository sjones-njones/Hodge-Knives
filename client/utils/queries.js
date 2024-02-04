import { gql } from '@apollo/client';

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
export const GET_AVAILABLEPRODUCTS = gql`
query ProductsAvailable {
  productsAvailable {
    _id
    name
    description
    price
    quantity
    image
    image2
    image3
    category
  }
}
`;
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
    quantity
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
    quantity
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
//     quantity
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
//       quantity
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
//       quantity
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
          quantity
          image
        }
      }
    }
  }
`;




     
     





