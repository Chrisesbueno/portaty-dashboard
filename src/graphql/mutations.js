/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const pruebaE = /* GraphQL */ `
  mutation PruebaE($credentials: String!) {
    pruebaE(credentials: $credentials)
  }
`;
export const pruebaFunc = /* GraphQL */ `
  mutation PruebaFunc($credentials: String!) {
    pruebaFunc(credentials: $credentials)
  }
`;
export const createADCategory = /* GraphQL */ `
  mutation CreateADCategory(
    $input: CreateADCategoryInput!
    $condition: ModelADCategoryConditionInput
  ) {
    createADCategory(input: $input, condition: $condition) {
      id
      name
      image
      path
      products {
        items {
          id
          name
          images
          paths
          description
          suggestedPrice
          categoryID
          brandID
          phone {
            colors
            storage
            width
            height
            depth
            weight
            display {
              resolution
              screenSize
              ppi
            }
            camera {
              primary
              secondary
              resolution
            }
            battery {
              capacity
              duration
              usb
            }
          }
          createdBy
          customerProduct {
            items {
              id
              customerID
              categoryID
              brandID
              productID
              code
              paths
              price
              condition
              description
              owner
              createdAt
              updatedAt
              customerProductStatusId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      brands {
        items {
          id
          aDCategoryId
          aDBrandId
          aDCategory {
            id
            name
            image
            path
            products {
              nextToken
            }
            brands {
              nextToken
            }
            abreviation
            createdBy
            createdAt
            updatedAt
          }
          aDBrand {
            id
            name
            image
            path
            products {
              nextToken
            }
            categories {
              nextToken
            }
            abreviation
            createdBy
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      abreviation
      createdBy
      createdAt
      updatedAt
    }
  }
`;
export const updateADCategory = /* GraphQL */ `
  mutation UpdateADCategory(
    $input: UpdateADCategoryInput!
    $condition: ModelADCategoryConditionInput
  ) {
    updateADCategory(input: $input, condition: $condition) {
      id
      name
      image
      path
      products {
        items {
          id
          name
          images
          paths
          description
          suggestedPrice
          categoryID
          brandID
          phone {
            colors
            storage
            width
            height
            depth
            weight
            display {
              resolution
              screenSize
              ppi
            }
            camera {
              primary
              secondary
              resolution
            }
            battery {
              capacity
              duration
              usb
            }
          }
          createdBy
          customerProduct {
            items {
              id
              customerID
              categoryID
              brandID
              productID
              code
              paths
              price
              condition
              description
              owner
              createdAt
              updatedAt
              customerProductStatusId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      brands {
        items {
          id
          aDCategoryId
          aDBrandId
          aDCategory {
            id
            name
            image
            path
            products {
              nextToken
            }
            brands {
              nextToken
            }
            abreviation
            createdBy
            createdAt
            updatedAt
          }
          aDBrand {
            id
            name
            image
            path
            products {
              nextToken
            }
            categories {
              nextToken
            }
            abreviation
            createdBy
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      abreviation
      createdBy
      createdAt
      updatedAt
    }
  }
`;
export const deleteADCategory = /* GraphQL */ `
  mutation DeleteADCategory(
    $input: DeleteADCategoryInput!
    $condition: ModelADCategoryConditionInput
  ) {
    deleteADCategory(input: $input, condition: $condition) {
      id
      name
      image
      path
      products {
        items {
          id
          name
          images
          paths
          description
          suggestedPrice
          categoryID
          brandID
          phone {
            colors
            storage
            width
            height
            depth
            weight
            display {
              resolution
              screenSize
              ppi
            }
            camera {
              primary
              secondary
              resolution
            }
            battery {
              capacity
              duration
              usb
            }
          }
          createdBy
          customerProduct {
            items {
              id
              customerID
              categoryID
              brandID
              productID
              code
              paths
              price
              condition
              description
              owner
              createdAt
              updatedAt
              customerProductStatusId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      brands {
        items {
          id
          aDCategoryId
          aDBrandId
          aDCategory {
            id
            name
            image
            path
            products {
              nextToken
            }
            brands {
              nextToken
            }
            abreviation
            createdBy
            createdAt
            updatedAt
          }
          aDBrand {
            id
            name
            image
            path
            products {
              nextToken
            }
            categories {
              nextToken
            }
            abreviation
            createdBy
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      abreviation
      createdBy
      createdAt
      updatedAt
    }
  }
`;
export const createADBrand = /* GraphQL */ `
  mutation CreateADBrand(
    $input: CreateADBrandInput!
    $condition: ModelADBrandConditionInput
  ) {
    createADBrand(input: $input, condition: $condition) {
      id
      name
      image
      path
      products {
        items {
          id
          name
          images
          paths
          description
          suggestedPrice
          categoryID
          brandID
          phone {
            colors
            storage
            width
            height
            depth
            weight
            display {
              resolution
              screenSize
              ppi
            }
            camera {
              primary
              secondary
              resolution
            }
            battery {
              capacity
              duration
              usb
            }
          }
          createdBy
          customerProduct {
            items {
              id
              customerID
              categoryID
              brandID
              productID
              code
              paths
              price
              condition
              description
              owner
              createdAt
              updatedAt
              customerProductStatusId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      categories {
        items {
          id
          aDCategoryId
          aDBrandId
          aDCategory {
            id
            name
            image
            path
            products {
              nextToken
            }
            brands {
              nextToken
            }
            abreviation
            createdBy
            createdAt
            updatedAt
          }
          aDBrand {
            id
            name
            image
            path
            products {
              nextToken
            }
            categories {
              nextToken
            }
            abreviation
            createdBy
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      abreviation
      createdBy
      createdAt
      updatedAt
    }
  }
`;
export const updateADBrand = /* GraphQL */ `
  mutation UpdateADBrand(
    $input: UpdateADBrandInput!
    $condition: ModelADBrandConditionInput
  ) {
    updateADBrand(input: $input, condition: $condition) {
      id
      name
      image
      path
      products {
        items {
          id
          name
          images
          paths
          description
          suggestedPrice
          categoryID
          brandID
          phone {
            colors
            storage
            width
            height
            depth
            weight
            display {
              resolution
              screenSize
              ppi
            }
            camera {
              primary
              secondary
              resolution
            }
            battery {
              capacity
              duration
              usb
            }
          }
          createdBy
          customerProduct {
            items {
              id
              customerID
              categoryID
              brandID
              productID
              code
              paths
              price
              condition
              description
              owner
              createdAt
              updatedAt
              customerProductStatusId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      categories {
        items {
          id
          aDCategoryId
          aDBrandId
          aDCategory {
            id
            name
            image
            path
            products {
              nextToken
            }
            brands {
              nextToken
            }
            abreviation
            createdBy
            createdAt
            updatedAt
          }
          aDBrand {
            id
            name
            image
            path
            products {
              nextToken
            }
            categories {
              nextToken
            }
            abreviation
            createdBy
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      abreviation
      createdBy
      createdAt
      updatedAt
    }
  }
`;
export const deleteADBrand = /* GraphQL */ `
  mutation DeleteADBrand(
    $input: DeleteADBrandInput!
    $condition: ModelADBrandConditionInput
  ) {
    deleteADBrand(input: $input, condition: $condition) {
      id
      name
      image
      path
      products {
        items {
          id
          name
          images
          paths
          description
          suggestedPrice
          categoryID
          brandID
          phone {
            colors
            storage
            width
            height
            depth
            weight
            display {
              resolution
              screenSize
              ppi
            }
            camera {
              primary
              secondary
              resolution
            }
            battery {
              capacity
              duration
              usb
            }
          }
          createdBy
          customerProduct {
            items {
              id
              customerID
              categoryID
              brandID
              productID
              code
              paths
              price
              condition
              description
              owner
              createdAt
              updatedAt
              customerProductStatusId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      categories {
        items {
          id
          aDCategoryId
          aDBrandId
          aDCategory {
            id
            name
            image
            path
            products {
              nextToken
            }
            brands {
              nextToken
            }
            abreviation
            createdBy
            createdAt
            updatedAt
          }
          aDBrand {
            id
            name
            image
            path
            products {
              nextToken
            }
            categories {
              nextToken
            }
            abreviation
            createdBy
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      abreviation
      createdBy
      createdAt
      updatedAt
    }
  }
`;
export const createADProduct = /* GraphQL */ `
  mutation CreateADProduct(
    $input: CreateADProductInput!
    $condition: ModelADProductConditionInput
  ) {
    createADProduct(input: $input, condition: $condition) {
      id
      name
      images
      paths
      description
      suggestedPrice
      categoryID
      brandID
      phone {
        colors
        storage
        width
        height
        depth
        weight
        display {
          resolution
          screenSize
          ppi
        }
        camera {
          primary
          secondary
          resolution
        }
        battery {
          capacity
          duration
          usb
        }
      }
      createdBy
      customerProduct {
        items {
          id
          customerID
          customer {
            userID
            name
            email
            description
            identityId
            favorites {
              nextToken
            }
            salesOrders {
              nextToken
            }
            purchaseOrders {
              nextToken
            }
            products {
              nextToken
            }
            shippingAddress {
              nextToken
            }
            owner
            createdAt
            updatedAt
          }
          categoryID
          categoryFields {
            name
            image
            abreviation
          }
          brandID
          brandFields {
            name
            image
            abreviation
          }
          productID
          adproduct {
            id
            name
            images
            paths
            description
            suggestedPrice
            categoryID
            brandID
            phone {
              colors
              storage
              width
              height
              depth
              weight
            }
            createdBy
            customerProduct {
              nextToken
            }
            createdAt
            updatedAt
          }
          productFields {
            name
            images
          }
          code
          paths
          price
          condition
          description
          status {
            id
            productID
            product {
              id
              customerID
              categoryID
              brandID
              productID
              code
              paths
              price
              condition
              description
              owner
              createdAt
              updatedAt
              customerProductStatusId
            }
            status
            owner
            favoriteItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          phoneFields {
            carrier
            imei
            model
            storage
            batery
          }
          laptoFields {
            serial
          }
          owner
          createdAt
          updatedAt
          customerProductStatusId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateADProduct = /* GraphQL */ `
  mutation UpdateADProduct(
    $input: UpdateADProductInput!
    $condition: ModelADProductConditionInput
  ) {
    updateADProduct(input: $input, condition: $condition) {
      id
      name
      images
      paths
      description
      suggestedPrice
      categoryID
      brandID
      phone {
        colors
        storage
        width
        height
        depth
        weight
        display {
          resolution
          screenSize
          ppi
        }
        camera {
          primary
          secondary
          resolution
        }
        battery {
          capacity
          duration
          usb
        }
      }
      createdBy
      customerProduct {
        items {
          id
          customerID
          customer {
            userID
            name
            email
            description
            identityId
            favorites {
              nextToken
            }
            salesOrders {
              nextToken
            }
            purchaseOrders {
              nextToken
            }
            products {
              nextToken
            }
            shippingAddress {
              nextToken
            }
            owner
            createdAt
            updatedAt
          }
          categoryID
          categoryFields {
            name
            image
            abreviation
          }
          brandID
          brandFields {
            name
            image
            abreviation
          }
          productID
          adproduct {
            id
            name
            images
            paths
            description
            suggestedPrice
            categoryID
            brandID
            phone {
              colors
              storage
              width
              height
              depth
              weight
            }
            createdBy
            customerProduct {
              nextToken
            }
            createdAt
            updatedAt
          }
          productFields {
            name
            images
          }
          code
          paths
          price
          condition
          description
          status {
            id
            productID
            product {
              id
              customerID
              categoryID
              brandID
              productID
              code
              paths
              price
              condition
              description
              owner
              createdAt
              updatedAt
              customerProductStatusId
            }
            status
            owner
            favoriteItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          phoneFields {
            carrier
            imei
            model
            storage
            batery
          }
          laptoFields {
            serial
          }
          owner
          createdAt
          updatedAt
          customerProductStatusId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteADProduct = /* GraphQL */ `
  mutation DeleteADProduct(
    $input: DeleteADProductInput!
    $condition: ModelADProductConditionInput
  ) {
    deleteADProduct(input: $input, condition: $condition) {
      id
      name
      images
      paths
      description
      suggestedPrice
      categoryID
      brandID
      phone {
        colors
        storage
        width
        height
        depth
        weight
        display {
          resolution
          screenSize
          ppi
        }
        camera {
          primary
          secondary
          resolution
        }
        battery {
          capacity
          duration
          usb
        }
      }
      createdBy
      customerProduct {
        items {
          id
          customerID
          customer {
            userID
            name
            email
            description
            identityId
            favorites {
              nextToken
            }
            salesOrders {
              nextToken
            }
            purchaseOrders {
              nextToken
            }
            products {
              nextToken
            }
            shippingAddress {
              nextToken
            }
            owner
            createdAt
            updatedAt
          }
          categoryID
          categoryFields {
            name
            image
            abreviation
          }
          brandID
          brandFields {
            name
            image
            abreviation
          }
          productID
          adproduct {
            id
            name
            images
            paths
            description
            suggestedPrice
            categoryID
            brandID
            phone {
              colors
              storage
              width
              height
              depth
              weight
            }
            createdBy
            customerProduct {
              nextToken
            }
            createdAt
            updatedAt
          }
          productFields {
            name
            images
          }
          code
          paths
          price
          condition
          description
          status {
            id
            productID
            product {
              id
              customerID
              categoryID
              brandID
              productID
              code
              paths
              price
              condition
              description
              owner
              createdAt
              updatedAt
              customerProductStatusId
            }
            status
            owner
            favoriteItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          phoneFields {
            carrier
            imei
            model
            storage
            batery
          }
          laptoFields {
            serial
          }
          owner
          createdAt
          updatedAt
          customerProductStatusId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      owner
      postname
      content
      createdAt
      updatedAt
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      owner
      postname
      content
      createdAt
      updatedAt
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      owner
      postname
      content
      createdAt
      updatedAt
    }
  }
`;
export const createCustomerShop = /* GraphQL */ `
  mutation CreateCustomerShop(
    $input: CreateCustomerShopInput!
    $condition: ModelCustomerShopConditionInput
  ) {
    createCustomerShop(input: $input, condition: $condition) {
      userID
      name
      email
      description
      identityId
      favorites {
        items {
          id
          itemID
          item {
            id
            productID
            product {
              id
              customerID
              categoryID
              brandID
              productID
              code
              paths
              price
              condition
              description
              owner
              createdAt
              updatedAt
              customerProductStatusId
            }
            status
            owner
            favoriteItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          customerShopID
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
      salesOrders {
        items {
          id
          purchaseUserID
          salesUserID
          total
          items {
            items {
              id
              orderID
              itemID
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          paymentID
          payment {
            id
            paymentStripeID
            metadata
            createdAt
            updatedAt
            owner
          }
          shippingAddress {
            country
            postal
            city
            address
            phoneNumber
          }
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      purchaseOrders {
        items {
          id
          purchaseUserID
          salesUserID
          total
          items {
            items {
              id
              orderID
              itemID
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          paymentID
          payment {
            id
            paymentStripeID
            metadata
            createdAt
            updatedAt
            owner
          }
          shippingAddress {
            country
            postal
            city
            address
            phoneNumber
          }
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      products {
        items {
          id
          customerID
          customer {
            userID
            name
            email
            description
            identityId
            favorites {
              nextToken
            }
            salesOrders {
              nextToken
            }
            purchaseOrders {
              nextToken
            }
            products {
              nextToken
            }
            shippingAddress {
              nextToken
            }
            owner
            createdAt
            updatedAt
          }
          categoryID
          categoryFields {
            name
            image
            abreviation
          }
          brandID
          brandFields {
            name
            image
            abreviation
          }
          productID
          adproduct {
            id
            name
            images
            paths
            description
            suggestedPrice
            categoryID
            brandID
            phone {
              colors
              storage
              width
              height
              depth
              weight
            }
            createdBy
            customerProduct {
              nextToken
            }
            createdAt
            updatedAt
          }
          productFields {
            name
            images
          }
          code
          paths
          price
          condition
          description
          status {
            id
            productID
            product {
              id
              customerID
              categoryID
              brandID
              productID
              code
              paths
              price
              condition
              description
              owner
              createdAt
              updatedAt
              customerProductStatusId
            }
            status
            owner
            favoriteItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          phoneFields {
            carrier
            imei
            model
            storage
            batery
          }
          laptoFields {
            serial
          }
          owner
          createdAt
          updatedAt
          customerProductStatusId
        }
        nextToken
      }
      shippingAddress {
        items {
          id
          customerID
          title
          country
          postal
          city
          address
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
      owner
      createdAt
      updatedAt
    }
  }
`;
export const updateCustomerShop = /* GraphQL */ `
  mutation UpdateCustomerShop(
    $input: UpdateCustomerShopInput!
    $condition: ModelCustomerShopConditionInput
  ) {
    updateCustomerShop(input: $input, condition: $condition) {
      userID
      name
      email
      description
      identityId
      favorites {
        items {
          id
          itemID
          item {
            id
            productID
            product {
              id
              customerID
              categoryID
              brandID
              productID
              code
              paths
              price
              condition
              description
              owner
              createdAt
              updatedAt
              customerProductStatusId
            }
            status
            owner
            favoriteItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          customerShopID
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
      salesOrders {
        items {
          id
          purchaseUserID
          salesUserID
          total
          items {
            items {
              id
              orderID
              itemID
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          paymentID
          payment {
            id
            paymentStripeID
            metadata
            createdAt
            updatedAt
            owner
          }
          shippingAddress {
            country
            postal
            city
            address
            phoneNumber
          }
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      purchaseOrders {
        items {
          id
          purchaseUserID
          salesUserID
          total
          items {
            items {
              id
              orderID
              itemID
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          paymentID
          payment {
            id
            paymentStripeID
            metadata
            createdAt
            updatedAt
            owner
          }
          shippingAddress {
            country
            postal
            city
            address
            phoneNumber
          }
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      products {
        items {
          id
          customerID
          customer {
            userID
            name
            email
            description
            identityId
            favorites {
              nextToken
            }
            salesOrders {
              nextToken
            }
            purchaseOrders {
              nextToken
            }
            products {
              nextToken
            }
            shippingAddress {
              nextToken
            }
            owner
            createdAt
            updatedAt
          }
          categoryID
          categoryFields {
            name
            image
            abreviation
          }
          brandID
          brandFields {
            name
            image
            abreviation
          }
          productID
          adproduct {
            id
            name
            images
            paths
            description
            suggestedPrice
            categoryID
            brandID
            phone {
              colors
              storage
              width
              height
              depth
              weight
            }
            createdBy
            customerProduct {
              nextToken
            }
            createdAt
            updatedAt
          }
          productFields {
            name
            images
          }
          code
          paths
          price
          condition
          description
          status {
            id
            productID
            product {
              id
              customerID
              categoryID
              brandID
              productID
              code
              paths
              price
              condition
              description
              owner
              createdAt
              updatedAt
              customerProductStatusId
            }
            status
            owner
            favoriteItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          phoneFields {
            carrier
            imei
            model
            storage
            batery
          }
          laptoFields {
            serial
          }
          owner
          createdAt
          updatedAt
          customerProductStatusId
        }
        nextToken
      }
      shippingAddress {
        items {
          id
          customerID
          title
          country
          postal
          city
          address
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
      owner
      createdAt
      updatedAt
    }
  }
`;
export const deleteCustomerShop = /* GraphQL */ `
  mutation DeleteCustomerShop(
    $input: DeleteCustomerShopInput!
    $condition: ModelCustomerShopConditionInput
  ) {
    deleteCustomerShop(input: $input, condition: $condition) {
      userID
      name
      email
      description
      identityId
      favorites {
        items {
          id
          itemID
          item {
            id
            productID
            product {
              id
              customerID
              categoryID
              brandID
              productID
              code
              paths
              price
              condition
              description
              owner
              createdAt
              updatedAt
              customerProductStatusId
            }
            status
            owner
            favoriteItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          customerShopID
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
      salesOrders {
        items {
          id
          purchaseUserID
          salesUserID
          total
          items {
            items {
              id
              orderID
              itemID
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          paymentID
          payment {
            id
            paymentStripeID
            metadata
            createdAt
            updatedAt
            owner
          }
          shippingAddress {
            country
            postal
            city
            address
            phoneNumber
          }
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      purchaseOrders {
        items {
          id
          purchaseUserID
          salesUserID
          total
          items {
            items {
              id
              orderID
              itemID
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          paymentID
          payment {
            id
            paymentStripeID
            metadata
            createdAt
            updatedAt
            owner
          }
          shippingAddress {
            country
            postal
            city
            address
            phoneNumber
          }
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      products {
        items {
          id
          customerID
          customer {
            userID
            name
            email
            description
            identityId
            favorites {
              nextToken
            }
            salesOrders {
              nextToken
            }
            purchaseOrders {
              nextToken
            }
            products {
              nextToken
            }
            shippingAddress {
              nextToken
            }
            owner
            createdAt
            updatedAt
          }
          categoryID
          categoryFields {
            name
            image
            abreviation
          }
          brandID
          brandFields {
            name
            image
            abreviation
          }
          productID
          adproduct {
            id
            name
            images
            paths
            description
            suggestedPrice
            categoryID
            brandID
            phone {
              colors
              storage
              width
              height
              depth
              weight
            }
            createdBy
            customerProduct {
              nextToken
            }
            createdAt
            updatedAt
          }
          productFields {
            name
            images
          }
          code
          paths
          price
          condition
          description
          status {
            id
            productID
            product {
              id
              customerID
              categoryID
              brandID
              productID
              code
              paths
              price
              condition
              description
              owner
              createdAt
              updatedAt
              customerProductStatusId
            }
            status
            owner
            favoriteItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          phoneFields {
            carrier
            imei
            model
            storage
            batery
          }
          laptoFields {
            serial
          }
          owner
          createdAt
          updatedAt
          customerProductStatusId
        }
        nextToken
      }
      shippingAddress {
        items {
          id
          customerID
          title
          country
          postal
          city
          address
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
      owner
      createdAt
      updatedAt
    }
  }
`;
export const createCustomerShippingAddress = /* GraphQL */ `
  mutation CreateCustomerShippingAddress(
    $input: CreateCustomerShippingAddressInput!
    $condition: ModelCustomerShippingAddressConditionInput
  ) {
    createCustomerShippingAddress(input: $input, condition: $condition) {
      id
      customerID
      title
      country
      postal
      city
      address
      owner
      createdAt
      updatedAt
    }
  }
`;
export const updateCustomerShippingAddress = /* GraphQL */ `
  mutation UpdateCustomerShippingAddress(
    $input: UpdateCustomerShippingAddressInput!
    $condition: ModelCustomerShippingAddressConditionInput
  ) {
    updateCustomerShippingAddress(input: $input, condition: $condition) {
      id
      customerID
      title
      country
      postal
      city
      address
      owner
      createdAt
      updatedAt
    }
  }
`;
export const deleteCustomerShippingAddress = /* GraphQL */ `
  mutation DeleteCustomerShippingAddress(
    $input: DeleteCustomerShippingAddressInput!
    $condition: ModelCustomerShippingAddressConditionInput
  ) {
    deleteCustomerShippingAddress(input: $input, condition: $condition) {
      id
      customerID
      title
      country
      postal
      city
      address
      owner
      createdAt
      updatedAt
    }
  }
`;
export const createFavoriteItem = /* GraphQL */ `
  mutation CreateFavoriteItem(
    $input: CreateFavoriteItemInput!
    $condition: ModelFavoriteItemConditionInput
  ) {
    createFavoriteItem(input: $input, condition: $condition) {
      id
      itemID
      item {
        id
        productID
        product {
          id
          customerID
          customer {
            userID
            name
            email
            description
            identityId
            favorites {
              nextToken
            }
            salesOrders {
              nextToken
            }
            purchaseOrders {
              nextToken
            }
            products {
              nextToken
            }
            shippingAddress {
              nextToken
            }
            owner
            createdAt
            updatedAt
          }
          categoryID
          categoryFields {
            name
            image
            abreviation
          }
          brandID
          brandFields {
            name
            image
            abreviation
          }
          productID
          adproduct {
            id
            name
            images
            paths
            description
            suggestedPrice
            categoryID
            brandID
            phone {
              colors
              storage
              width
              height
              depth
              weight
            }
            createdBy
            customerProduct {
              nextToken
            }
            createdAt
            updatedAt
          }
          productFields {
            name
            images
          }
          code
          paths
          price
          condition
          description
          status {
            id
            productID
            product {
              id
              customerID
              categoryID
              brandID
              productID
              code
              paths
              price
              condition
              description
              owner
              createdAt
              updatedAt
              customerProductStatusId
            }
            status
            owner
            favoriteItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          phoneFields {
            carrier
            imei
            model
            storage
            batery
          }
          laptoFields {
            serial
          }
          owner
          createdAt
          updatedAt
          customerProductStatusId
        }
        status
        owner
        favoriteItems {
          items {
            id
            itemID
            item {
              id
              productID
              status
              owner
              createdAt
              updatedAt
            }
            customerShopID
            owner
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      customerShopID
      owner
      createdAt
      updatedAt
    }
  }
`;
export const updateFavoriteItem = /* GraphQL */ `
  mutation UpdateFavoriteItem(
    $input: UpdateFavoriteItemInput!
    $condition: ModelFavoriteItemConditionInput
  ) {
    updateFavoriteItem(input: $input, condition: $condition) {
      id
      itemID
      item {
        id
        productID
        product {
          id
          customerID
          customer {
            userID
            name
            email
            description
            identityId
            favorites {
              nextToken
            }
            salesOrders {
              nextToken
            }
            purchaseOrders {
              nextToken
            }
            products {
              nextToken
            }
            shippingAddress {
              nextToken
            }
            owner
            createdAt
            updatedAt
          }
          categoryID
          categoryFields {
            name
            image
            abreviation
          }
          brandID
          brandFields {
            name
            image
            abreviation
          }
          productID
          adproduct {
            id
            name
            images
            paths
            description
            suggestedPrice
            categoryID
            brandID
            phone {
              colors
              storage
              width
              height
              depth
              weight
            }
            createdBy
            customerProduct {
              nextToken
            }
            createdAt
            updatedAt
          }
          productFields {
            name
            images
          }
          code
          paths
          price
          condition
          description
          status {
            id
            productID
            product {
              id
              customerID
              categoryID
              brandID
              productID
              code
              paths
              price
              condition
              description
              owner
              createdAt
              updatedAt
              customerProductStatusId
            }
            status
            owner
            favoriteItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          phoneFields {
            carrier
            imei
            model
            storage
            batery
          }
          laptoFields {
            serial
          }
          owner
          createdAt
          updatedAt
          customerProductStatusId
        }
        status
        owner
        favoriteItems {
          items {
            id
            itemID
            item {
              id
              productID
              status
              owner
              createdAt
              updatedAt
            }
            customerShopID
            owner
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      customerShopID
      owner
      createdAt
      updatedAt
    }
  }
`;
export const deleteFavoriteItem = /* GraphQL */ `
  mutation DeleteFavoriteItem(
    $input: DeleteFavoriteItemInput!
    $condition: ModelFavoriteItemConditionInput
  ) {
    deleteFavoriteItem(input: $input, condition: $condition) {
      id
      itemID
      item {
        id
        productID
        product {
          id
          customerID
          customer {
            userID
            name
            email
            description
            identityId
            favorites {
              nextToken
            }
            salesOrders {
              nextToken
            }
            purchaseOrders {
              nextToken
            }
            products {
              nextToken
            }
            shippingAddress {
              nextToken
            }
            owner
            createdAt
            updatedAt
          }
          categoryID
          categoryFields {
            name
            image
            abreviation
          }
          brandID
          brandFields {
            name
            image
            abreviation
          }
          productID
          adproduct {
            id
            name
            images
            paths
            description
            suggestedPrice
            categoryID
            brandID
            phone {
              colors
              storage
              width
              height
              depth
              weight
            }
            createdBy
            customerProduct {
              nextToken
            }
            createdAt
            updatedAt
          }
          productFields {
            name
            images
          }
          code
          paths
          price
          condition
          description
          status {
            id
            productID
            product {
              id
              customerID
              categoryID
              brandID
              productID
              code
              paths
              price
              condition
              description
              owner
              createdAt
              updatedAt
              customerProductStatusId
            }
            status
            owner
            favoriteItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          phoneFields {
            carrier
            imei
            model
            storage
            batery
          }
          laptoFields {
            serial
          }
          owner
          createdAt
          updatedAt
          customerProductStatusId
        }
        status
        owner
        favoriteItems {
          items {
            id
            itemID
            item {
              id
              productID
              status
              owner
              createdAt
              updatedAt
            }
            customerShopID
            owner
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      customerShopID
      owner
      createdAt
      updatedAt
    }
  }
`;
export const createCustomerProduct = /* GraphQL */ `
  mutation CreateCustomerProduct(
    $input: CreateCustomerProductInput!
    $condition: ModelCustomerProductConditionInput
  ) {
    createCustomerProduct(input: $input, condition: $condition) {
      id
      customerID
      customer {
        userID
        name
        email
        description
        identityId
        favorites {
          items {
            id
            itemID
            item {
              id
              productID
              status
              owner
              createdAt
              updatedAt
            }
            customerShopID
            owner
            createdAt
            updatedAt
          }
          nextToken
        }
        salesOrders {
          items {
            id
            purchaseUserID
            salesUserID
            total
            items {
              nextToken
            }
            paymentID
            payment {
              id
              paymentStripeID
              metadata
              createdAt
              updatedAt
              owner
            }
            shippingAddress {
              country
              postal
              city
              address
              phoneNumber
            }
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        purchaseOrders {
          items {
            id
            purchaseUserID
            salesUserID
            total
            items {
              nextToken
            }
            paymentID
            payment {
              id
              paymentStripeID
              metadata
              createdAt
              updatedAt
              owner
            }
            shippingAddress {
              country
              postal
              city
              address
              phoneNumber
            }
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        products {
          items {
            id
            customerID
            customer {
              userID
              name
              email
              description
              identityId
              owner
              createdAt
              updatedAt
            }
            categoryID
            categoryFields {
              name
              image
              abreviation
            }
            brandID
            brandFields {
              name
              image
              abreviation
            }
            productID
            adproduct {
              id
              name
              images
              paths
              description
              suggestedPrice
              categoryID
              brandID
              createdBy
              createdAt
              updatedAt
            }
            productFields {
              name
              images
            }
            code
            paths
            price
            condition
            description
            status {
              id
              productID
              status
              owner
              createdAt
              updatedAt
            }
            phoneFields {
              carrier
              imei
              model
              storage
              batery
            }
            laptoFields {
              serial
            }
            owner
            createdAt
            updatedAt
            customerProductStatusId
          }
          nextToken
        }
        shippingAddress {
          items {
            id
            customerID
            title
            country
            postal
            city
            address
            owner
            createdAt
            updatedAt
          }
          nextToken
        }
        owner
        createdAt
        updatedAt
      }
      categoryID
      categoryFields {
        name
        image
        abreviation
      }
      brandID
      brandFields {
        name
        image
        abreviation
      }
      productID
      adproduct {
        id
        name
        images
        paths
        description
        suggestedPrice
        categoryID
        brandID
        phone {
          colors
          storage
          width
          height
          depth
          weight
          display {
            resolution
            screenSize
            ppi
          }
          camera {
            primary
            secondary
            resolution
          }
          battery {
            capacity
            duration
            usb
          }
        }
        createdBy
        customerProduct {
          items {
            id
            customerID
            customer {
              userID
              name
              email
              description
              identityId
              owner
              createdAt
              updatedAt
            }
            categoryID
            categoryFields {
              name
              image
              abreviation
            }
            brandID
            brandFields {
              name
              image
              abreviation
            }
            productID
            adproduct {
              id
              name
              images
              paths
              description
              suggestedPrice
              categoryID
              brandID
              createdBy
              createdAt
              updatedAt
            }
            productFields {
              name
              images
            }
            code
            paths
            price
            condition
            description
            status {
              id
              productID
              status
              owner
              createdAt
              updatedAt
            }
            phoneFields {
              carrier
              imei
              model
              storage
              batery
            }
            laptoFields {
              serial
            }
            owner
            createdAt
            updatedAt
            customerProductStatusId
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      productFields {
        name
        images
      }
      code
      paths
      price
      condition
      description
      status {
        id
        productID
        product {
          id
          customerID
          customer {
            userID
            name
            email
            description
            identityId
            favorites {
              nextToken
            }
            salesOrders {
              nextToken
            }
            purchaseOrders {
              nextToken
            }
            products {
              nextToken
            }
            shippingAddress {
              nextToken
            }
            owner
            createdAt
            updatedAt
          }
          categoryID
          categoryFields {
            name
            image
            abreviation
          }
          brandID
          brandFields {
            name
            image
            abreviation
          }
          productID
          adproduct {
            id
            name
            images
            paths
            description
            suggestedPrice
            categoryID
            brandID
            phone {
              colors
              storage
              width
              height
              depth
              weight
            }
            createdBy
            customerProduct {
              nextToken
            }
            createdAt
            updatedAt
          }
          productFields {
            name
            images
          }
          code
          paths
          price
          condition
          description
          status {
            id
            productID
            product {
              id
              customerID
              categoryID
              brandID
              productID
              code
              paths
              price
              condition
              description
              owner
              createdAt
              updatedAt
              customerProductStatusId
            }
            status
            owner
            favoriteItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          phoneFields {
            carrier
            imei
            model
            storage
            batery
          }
          laptoFields {
            serial
          }
          owner
          createdAt
          updatedAt
          customerProductStatusId
        }
        status
        owner
        favoriteItems {
          items {
            id
            itemID
            item {
              id
              productID
              status
              owner
              createdAt
              updatedAt
            }
            customerShopID
            owner
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      phoneFields {
        carrier
        imei
        model
        storage
        batery
      }
      laptoFields {
        serial
      }
      owner
      createdAt
      updatedAt
      customerProductStatusId
    }
  }
`;
export const updateCustomerProduct = /* GraphQL */ `
  mutation UpdateCustomerProduct(
    $input: UpdateCustomerProductInput!
    $condition: ModelCustomerProductConditionInput
  ) {
    updateCustomerProduct(input: $input, condition: $condition) {
      id
      customerID
      customer {
        userID
        name
        email
        description
        identityId
        favorites {
          items {
            id
            itemID
            item {
              id
              productID
              status
              owner
              createdAt
              updatedAt
            }
            customerShopID
            owner
            createdAt
            updatedAt
          }
          nextToken
        }
        salesOrders {
          items {
            id
            purchaseUserID
            salesUserID
            total
            items {
              nextToken
            }
            paymentID
            payment {
              id
              paymentStripeID
              metadata
              createdAt
              updatedAt
              owner
            }
            shippingAddress {
              country
              postal
              city
              address
              phoneNumber
            }
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        purchaseOrders {
          items {
            id
            purchaseUserID
            salesUserID
            total
            items {
              nextToken
            }
            paymentID
            payment {
              id
              paymentStripeID
              metadata
              createdAt
              updatedAt
              owner
            }
            shippingAddress {
              country
              postal
              city
              address
              phoneNumber
            }
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        products {
          items {
            id
            customerID
            customer {
              userID
              name
              email
              description
              identityId
              owner
              createdAt
              updatedAt
            }
            categoryID
            categoryFields {
              name
              image
              abreviation
            }
            brandID
            brandFields {
              name
              image
              abreviation
            }
            productID
            adproduct {
              id
              name
              images
              paths
              description
              suggestedPrice
              categoryID
              brandID
              createdBy
              createdAt
              updatedAt
            }
            productFields {
              name
              images
            }
            code
            paths
            price
            condition
            description
            status {
              id
              productID
              status
              owner
              createdAt
              updatedAt
            }
            phoneFields {
              carrier
              imei
              model
              storage
              batery
            }
            laptoFields {
              serial
            }
            owner
            createdAt
            updatedAt
            customerProductStatusId
          }
          nextToken
        }
        shippingAddress {
          items {
            id
            customerID
            title
            country
            postal
            city
            address
            owner
            createdAt
            updatedAt
          }
          nextToken
        }
        owner
        createdAt
        updatedAt
      }
      categoryID
      categoryFields {
        name
        image
        abreviation
      }
      brandID
      brandFields {
        name
        image
        abreviation
      }
      productID
      adproduct {
        id
        name
        images
        paths
        description
        suggestedPrice
        categoryID
        brandID
        phone {
          colors
          storage
          width
          height
          depth
          weight
          display {
            resolution
            screenSize
            ppi
          }
          camera {
            primary
            secondary
            resolution
          }
          battery {
            capacity
            duration
            usb
          }
        }
        createdBy
        customerProduct {
          items {
            id
            customerID
            customer {
              userID
              name
              email
              description
              identityId
              owner
              createdAt
              updatedAt
            }
            categoryID
            categoryFields {
              name
              image
              abreviation
            }
            brandID
            brandFields {
              name
              image
              abreviation
            }
            productID
            adproduct {
              id
              name
              images
              paths
              description
              suggestedPrice
              categoryID
              brandID
              createdBy
              createdAt
              updatedAt
            }
            productFields {
              name
              images
            }
            code
            paths
            price
            condition
            description
            status {
              id
              productID
              status
              owner
              createdAt
              updatedAt
            }
            phoneFields {
              carrier
              imei
              model
              storage
              batery
            }
            laptoFields {
              serial
            }
            owner
            createdAt
            updatedAt
            customerProductStatusId
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      productFields {
        name
        images
      }
      code
      paths
      price
      condition
      description
      status {
        id
        productID
        product {
          id
          customerID
          customer {
            userID
            name
            email
            description
            identityId
            favorites {
              nextToken
            }
            salesOrders {
              nextToken
            }
            purchaseOrders {
              nextToken
            }
            products {
              nextToken
            }
            shippingAddress {
              nextToken
            }
            owner
            createdAt
            updatedAt
          }
          categoryID
          categoryFields {
            name
            image
            abreviation
          }
          brandID
          brandFields {
            name
            image
            abreviation
          }
          productID
          adproduct {
            id
            name
            images
            paths
            description
            suggestedPrice
            categoryID
            brandID
            phone {
              colors
              storage
              width
              height
              depth
              weight
            }
            createdBy
            customerProduct {
              nextToken
            }
            createdAt
            updatedAt
          }
          productFields {
            name
            images
          }
          code
          paths
          price
          condition
          description
          status {
            id
            productID
            product {
              id
              customerID
              categoryID
              brandID
              productID
              code
              paths
              price
              condition
              description
              owner
              createdAt
              updatedAt
              customerProductStatusId
            }
            status
            owner
            favoriteItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          phoneFields {
            carrier
            imei
            model
            storage
            batery
          }
          laptoFields {
            serial
          }
          owner
          createdAt
          updatedAt
          customerProductStatusId
        }
        status
        owner
        favoriteItems {
          items {
            id
            itemID
            item {
              id
              productID
              status
              owner
              createdAt
              updatedAt
            }
            customerShopID
            owner
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      phoneFields {
        carrier
        imei
        model
        storage
        batery
      }
      laptoFields {
        serial
      }
      owner
      createdAt
      updatedAt
      customerProductStatusId
    }
  }
`;
export const deleteCustomerProduct = /* GraphQL */ `
  mutation DeleteCustomerProduct(
    $input: DeleteCustomerProductInput!
    $condition: ModelCustomerProductConditionInput
  ) {
    deleteCustomerProduct(input: $input, condition: $condition) {
      id
      customerID
      customer {
        userID
        name
        email
        description
        identityId
        favorites {
          items {
            id
            itemID
            item {
              id
              productID
              status
              owner
              createdAt
              updatedAt
            }
            customerShopID
            owner
            createdAt
            updatedAt
          }
          nextToken
        }
        salesOrders {
          items {
            id
            purchaseUserID
            salesUserID
            total
            items {
              nextToken
            }
            paymentID
            payment {
              id
              paymentStripeID
              metadata
              createdAt
              updatedAt
              owner
            }
            shippingAddress {
              country
              postal
              city
              address
              phoneNumber
            }
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        purchaseOrders {
          items {
            id
            purchaseUserID
            salesUserID
            total
            items {
              nextToken
            }
            paymentID
            payment {
              id
              paymentStripeID
              metadata
              createdAt
              updatedAt
              owner
            }
            shippingAddress {
              country
              postal
              city
              address
              phoneNumber
            }
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        products {
          items {
            id
            customerID
            customer {
              userID
              name
              email
              description
              identityId
              owner
              createdAt
              updatedAt
            }
            categoryID
            categoryFields {
              name
              image
              abreviation
            }
            brandID
            brandFields {
              name
              image
              abreviation
            }
            productID
            adproduct {
              id
              name
              images
              paths
              description
              suggestedPrice
              categoryID
              brandID
              createdBy
              createdAt
              updatedAt
            }
            productFields {
              name
              images
            }
            code
            paths
            price
            condition
            description
            status {
              id
              productID
              status
              owner
              createdAt
              updatedAt
            }
            phoneFields {
              carrier
              imei
              model
              storage
              batery
            }
            laptoFields {
              serial
            }
            owner
            createdAt
            updatedAt
            customerProductStatusId
          }
          nextToken
        }
        shippingAddress {
          items {
            id
            customerID
            title
            country
            postal
            city
            address
            owner
            createdAt
            updatedAt
          }
          nextToken
        }
        owner
        createdAt
        updatedAt
      }
      categoryID
      categoryFields {
        name
        image
        abreviation
      }
      brandID
      brandFields {
        name
        image
        abreviation
      }
      productID
      adproduct {
        id
        name
        images
        paths
        description
        suggestedPrice
        categoryID
        brandID
        phone {
          colors
          storage
          width
          height
          depth
          weight
          display {
            resolution
            screenSize
            ppi
          }
          camera {
            primary
            secondary
            resolution
          }
          battery {
            capacity
            duration
            usb
          }
        }
        createdBy
        customerProduct {
          items {
            id
            customerID
            customer {
              userID
              name
              email
              description
              identityId
              owner
              createdAt
              updatedAt
            }
            categoryID
            categoryFields {
              name
              image
              abreviation
            }
            brandID
            brandFields {
              name
              image
              abreviation
            }
            productID
            adproduct {
              id
              name
              images
              paths
              description
              suggestedPrice
              categoryID
              brandID
              createdBy
              createdAt
              updatedAt
            }
            productFields {
              name
              images
            }
            code
            paths
            price
            condition
            description
            status {
              id
              productID
              status
              owner
              createdAt
              updatedAt
            }
            phoneFields {
              carrier
              imei
              model
              storage
              batery
            }
            laptoFields {
              serial
            }
            owner
            createdAt
            updatedAt
            customerProductStatusId
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      productFields {
        name
        images
      }
      code
      paths
      price
      condition
      description
      status {
        id
        productID
        product {
          id
          customerID
          customer {
            userID
            name
            email
            description
            identityId
            favorites {
              nextToken
            }
            salesOrders {
              nextToken
            }
            purchaseOrders {
              nextToken
            }
            products {
              nextToken
            }
            shippingAddress {
              nextToken
            }
            owner
            createdAt
            updatedAt
          }
          categoryID
          categoryFields {
            name
            image
            abreviation
          }
          brandID
          brandFields {
            name
            image
            abreviation
          }
          productID
          adproduct {
            id
            name
            images
            paths
            description
            suggestedPrice
            categoryID
            brandID
            phone {
              colors
              storage
              width
              height
              depth
              weight
            }
            createdBy
            customerProduct {
              nextToken
            }
            createdAt
            updatedAt
          }
          productFields {
            name
            images
          }
          code
          paths
          price
          condition
          description
          status {
            id
            productID
            product {
              id
              customerID
              categoryID
              brandID
              productID
              code
              paths
              price
              condition
              description
              owner
              createdAt
              updatedAt
              customerProductStatusId
            }
            status
            owner
            favoriteItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          phoneFields {
            carrier
            imei
            model
            storage
            batery
          }
          laptoFields {
            serial
          }
          owner
          createdAt
          updatedAt
          customerProductStatusId
        }
        status
        owner
        favoriteItems {
          items {
            id
            itemID
            item {
              id
              productID
              status
              owner
              createdAt
              updatedAt
            }
            customerShopID
            owner
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      phoneFields {
        carrier
        imei
        model
        storage
        batery
      }
      laptoFields {
        serial
      }
      owner
      createdAt
      updatedAt
      customerProductStatusId
    }
  }
`;
export const createCustomerProductStatus = /* GraphQL */ `
  mutation CreateCustomerProductStatus(
    $input: CreateCustomerProductStatusInput!
    $condition: ModelCustomerProductStatusConditionInput
  ) {
    createCustomerProductStatus(input: $input, condition: $condition) {
      id
      productID
      product {
        id
        customerID
        customer {
          userID
          name
          email
          description
          identityId
          favorites {
            items {
              id
              itemID
              customerShopID
              owner
              createdAt
              updatedAt
            }
            nextToken
          }
          salesOrders {
            items {
              id
              purchaseUserID
              salesUserID
              total
              paymentID
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          purchaseOrders {
            items {
              id
              purchaseUserID
              salesUserID
              total
              paymentID
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          products {
            items {
              id
              customerID
              categoryID
              brandID
              productID
              code
              paths
              price
              condition
              description
              owner
              createdAt
              updatedAt
              customerProductStatusId
            }
            nextToken
          }
          shippingAddress {
            items {
              id
              customerID
              title
              country
              postal
              city
              address
              owner
              createdAt
              updatedAt
            }
            nextToken
          }
          owner
          createdAt
          updatedAt
        }
        categoryID
        categoryFields {
          name
          image
          abreviation
        }
        brandID
        brandFields {
          name
          image
          abreviation
        }
        productID
        adproduct {
          id
          name
          images
          paths
          description
          suggestedPrice
          categoryID
          brandID
          phone {
            colors
            storage
            width
            height
            depth
            weight
            display {
              resolution
              screenSize
              ppi
            }
            camera {
              primary
              secondary
              resolution
            }
            battery {
              capacity
              duration
              usb
            }
          }
          createdBy
          customerProduct {
            items {
              id
              customerID
              categoryID
              brandID
              productID
              code
              paths
              price
              condition
              description
              owner
              createdAt
              updatedAt
              customerProductStatusId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        productFields {
          name
          images
        }
        code
        paths
        price
        condition
        description
        status {
          id
          productID
          product {
            id
            customerID
            customer {
              userID
              name
              email
              description
              identityId
              owner
              createdAt
              updatedAt
            }
            categoryID
            categoryFields {
              name
              image
              abreviation
            }
            brandID
            brandFields {
              name
              image
              abreviation
            }
            productID
            adproduct {
              id
              name
              images
              paths
              description
              suggestedPrice
              categoryID
              brandID
              createdBy
              createdAt
              updatedAt
            }
            productFields {
              name
              images
            }
            code
            paths
            price
            condition
            description
            status {
              id
              productID
              status
              owner
              createdAt
              updatedAt
            }
            phoneFields {
              carrier
              imei
              model
              storage
              batery
            }
            laptoFields {
              serial
            }
            owner
            createdAt
            updatedAt
            customerProductStatusId
          }
          status
          owner
          favoriteItems {
            items {
              id
              itemID
              customerShopID
              owner
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        phoneFields {
          carrier
          imei
          model
          storage
          batery
        }
        laptoFields {
          serial
        }
        owner
        createdAt
        updatedAt
        customerProductStatusId
      }
      status
      owner
      favoriteItems {
        items {
          id
          itemID
          item {
            id
            productID
            product {
              id
              customerID
              categoryID
              brandID
              productID
              code
              paths
              price
              condition
              description
              owner
              createdAt
              updatedAt
              customerProductStatusId
            }
            status
            owner
            favoriteItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          customerShopID
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateCustomerProductStatus = /* GraphQL */ `
  mutation UpdateCustomerProductStatus(
    $input: UpdateCustomerProductStatusInput!
    $condition: ModelCustomerProductStatusConditionInput
  ) {
    updateCustomerProductStatus(input: $input, condition: $condition) {
      id
      productID
      product {
        id
        customerID
        customer {
          userID
          name
          email
          description
          identityId
          favorites {
            items {
              id
              itemID
              customerShopID
              owner
              createdAt
              updatedAt
            }
            nextToken
          }
          salesOrders {
            items {
              id
              purchaseUserID
              salesUserID
              total
              paymentID
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          purchaseOrders {
            items {
              id
              purchaseUserID
              salesUserID
              total
              paymentID
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          products {
            items {
              id
              customerID
              categoryID
              brandID
              productID
              code
              paths
              price
              condition
              description
              owner
              createdAt
              updatedAt
              customerProductStatusId
            }
            nextToken
          }
          shippingAddress {
            items {
              id
              customerID
              title
              country
              postal
              city
              address
              owner
              createdAt
              updatedAt
            }
            nextToken
          }
          owner
          createdAt
          updatedAt
        }
        categoryID
        categoryFields {
          name
          image
          abreviation
        }
        brandID
        brandFields {
          name
          image
          abreviation
        }
        productID
        adproduct {
          id
          name
          images
          paths
          description
          suggestedPrice
          categoryID
          brandID
          phone {
            colors
            storage
            width
            height
            depth
            weight
            display {
              resolution
              screenSize
              ppi
            }
            camera {
              primary
              secondary
              resolution
            }
            battery {
              capacity
              duration
              usb
            }
          }
          createdBy
          customerProduct {
            items {
              id
              customerID
              categoryID
              brandID
              productID
              code
              paths
              price
              condition
              description
              owner
              createdAt
              updatedAt
              customerProductStatusId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        productFields {
          name
          images
        }
        code
        paths
        price
        condition
        description
        status {
          id
          productID
          product {
            id
            customerID
            customer {
              userID
              name
              email
              description
              identityId
              owner
              createdAt
              updatedAt
            }
            categoryID
            categoryFields {
              name
              image
              abreviation
            }
            brandID
            brandFields {
              name
              image
              abreviation
            }
            productID
            adproduct {
              id
              name
              images
              paths
              description
              suggestedPrice
              categoryID
              brandID
              createdBy
              createdAt
              updatedAt
            }
            productFields {
              name
              images
            }
            code
            paths
            price
            condition
            description
            status {
              id
              productID
              status
              owner
              createdAt
              updatedAt
            }
            phoneFields {
              carrier
              imei
              model
              storage
              batery
            }
            laptoFields {
              serial
            }
            owner
            createdAt
            updatedAt
            customerProductStatusId
          }
          status
          owner
          favoriteItems {
            items {
              id
              itemID
              customerShopID
              owner
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        phoneFields {
          carrier
          imei
          model
          storage
          batery
        }
        laptoFields {
          serial
        }
        owner
        createdAt
        updatedAt
        customerProductStatusId
      }
      status
      owner
      favoriteItems {
        items {
          id
          itemID
          item {
            id
            productID
            product {
              id
              customerID
              categoryID
              brandID
              productID
              code
              paths
              price
              condition
              description
              owner
              createdAt
              updatedAt
              customerProductStatusId
            }
            status
            owner
            favoriteItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          customerShopID
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteCustomerProductStatus = /* GraphQL */ `
  mutation DeleteCustomerProductStatus(
    $input: DeleteCustomerProductStatusInput!
    $condition: ModelCustomerProductStatusConditionInput
  ) {
    deleteCustomerProductStatus(input: $input, condition: $condition) {
      id
      productID
      product {
        id
        customerID
        customer {
          userID
          name
          email
          description
          identityId
          favorites {
            items {
              id
              itemID
              customerShopID
              owner
              createdAt
              updatedAt
            }
            nextToken
          }
          salesOrders {
            items {
              id
              purchaseUserID
              salesUserID
              total
              paymentID
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          purchaseOrders {
            items {
              id
              purchaseUserID
              salesUserID
              total
              paymentID
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          products {
            items {
              id
              customerID
              categoryID
              brandID
              productID
              code
              paths
              price
              condition
              description
              owner
              createdAt
              updatedAt
              customerProductStatusId
            }
            nextToken
          }
          shippingAddress {
            items {
              id
              customerID
              title
              country
              postal
              city
              address
              owner
              createdAt
              updatedAt
            }
            nextToken
          }
          owner
          createdAt
          updatedAt
        }
        categoryID
        categoryFields {
          name
          image
          abreviation
        }
        brandID
        brandFields {
          name
          image
          abreviation
        }
        productID
        adproduct {
          id
          name
          images
          paths
          description
          suggestedPrice
          categoryID
          brandID
          phone {
            colors
            storage
            width
            height
            depth
            weight
            display {
              resolution
              screenSize
              ppi
            }
            camera {
              primary
              secondary
              resolution
            }
            battery {
              capacity
              duration
              usb
            }
          }
          createdBy
          customerProduct {
            items {
              id
              customerID
              categoryID
              brandID
              productID
              code
              paths
              price
              condition
              description
              owner
              createdAt
              updatedAt
              customerProductStatusId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        productFields {
          name
          images
        }
        code
        paths
        price
        condition
        description
        status {
          id
          productID
          product {
            id
            customerID
            customer {
              userID
              name
              email
              description
              identityId
              owner
              createdAt
              updatedAt
            }
            categoryID
            categoryFields {
              name
              image
              abreviation
            }
            brandID
            brandFields {
              name
              image
              abreviation
            }
            productID
            adproduct {
              id
              name
              images
              paths
              description
              suggestedPrice
              categoryID
              brandID
              createdBy
              createdAt
              updatedAt
            }
            productFields {
              name
              images
            }
            code
            paths
            price
            condition
            description
            status {
              id
              productID
              status
              owner
              createdAt
              updatedAt
            }
            phoneFields {
              carrier
              imei
              model
              storage
              batery
            }
            laptoFields {
              serial
            }
            owner
            createdAt
            updatedAt
            customerProductStatusId
          }
          status
          owner
          favoriteItems {
            items {
              id
              itemID
              customerShopID
              owner
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        phoneFields {
          carrier
          imei
          model
          storage
          batery
        }
        laptoFields {
          serial
        }
        owner
        createdAt
        updatedAt
        customerProductStatusId
      }
      status
      owner
      favoriteItems {
        items {
          id
          itemID
          item {
            id
            productID
            product {
              id
              customerID
              categoryID
              brandID
              productID
              code
              paths
              price
              condition
              description
              owner
              createdAt
              updatedAt
              customerProductStatusId
            }
            status
            owner
            favoriteItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          customerShopID
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createOrderDetail = /* GraphQL */ `
  mutation CreateOrderDetail(
    $input: CreateOrderDetailInput!
    $condition: ModelOrderDetailConditionInput
  ) {
    createOrderDetail(input: $input, condition: $condition) {
      id
      purchaseUserID
      salesUserID
      total
      items {
        items {
          id
          orderID
          itemID
          item {
            id
            productID
            product {
              id
              customerID
              categoryID
              brandID
              productID
              code
              paths
              price
              condition
              description
              owner
              createdAt
              updatedAt
              customerProductStatusId
            }
            status
            owner
            favoriteItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      paymentID
      payment {
        id
        paymentStripeID
        metadata
        createdAt
        updatedAt
        owner
      }
      shippingAddress {
        country
        postal
        city
        address
        phoneNumber
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateOrderDetail = /* GraphQL */ `
  mutation UpdateOrderDetail(
    $input: UpdateOrderDetailInput!
    $condition: ModelOrderDetailConditionInput
  ) {
    updateOrderDetail(input: $input, condition: $condition) {
      id
      purchaseUserID
      salesUserID
      total
      items {
        items {
          id
          orderID
          itemID
          item {
            id
            productID
            product {
              id
              customerID
              categoryID
              brandID
              productID
              code
              paths
              price
              condition
              description
              owner
              createdAt
              updatedAt
              customerProductStatusId
            }
            status
            owner
            favoriteItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      paymentID
      payment {
        id
        paymentStripeID
        metadata
        createdAt
        updatedAt
        owner
      }
      shippingAddress {
        country
        postal
        city
        address
        phoneNumber
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteOrderDetail = /* GraphQL */ `
  mutation DeleteOrderDetail(
    $input: DeleteOrderDetailInput!
    $condition: ModelOrderDetailConditionInput
  ) {
    deleteOrderDetail(input: $input, condition: $condition) {
      id
      purchaseUserID
      salesUserID
      total
      items {
        items {
          id
          orderID
          itemID
          item {
            id
            productID
            product {
              id
              customerID
              categoryID
              brandID
              productID
              code
              paths
              price
              condition
              description
              owner
              createdAt
              updatedAt
              customerProductStatusId
            }
            status
            owner
            favoriteItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      paymentID
      payment {
        id
        paymentStripeID
        metadata
        createdAt
        updatedAt
        owner
      }
      shippingAddress {
        country
        postal
        city
        address
        phoneNumber
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createOrderItem = /* GraphQL */ `
  mutation CreateOrderItem(
    $input: CreateOrderItemInput!
    $condition: ModelOrderItemConditionInput
  ) {
    createOrderItem(input: $input, condition: $condition) {
      id
      orderID
      itemID
      item {
        id
        productID
        product {
          id
          customerID
          customer {
            userID
            name
            email
            description
            identityId
            favorites {
              nextToken
            }
            salesOrders {
              nextToken
            }
            purchaseOrders {
              nextToken
            }
            products {
              nextToken
            }
            shippingAddress {
              nextToken
            }
            owner
            createdAt
            updatedAt
          }
          categoryID
          categoryFields {
            name
            image
            abreviation
          }
          brandID
          brandFields {
            name
            image
            abreviation
          }
          productID
          adproduct {
            id
            name
            images
            paths
            description
            suggestedPrice
            categoryID
            brandID
            phone {
              colors
              storage
              width
              height
              depth
              weight
            }
            createdBy
            customerProduct {
              nextToken
            }
            createdAt
            updatedAt
          }
          productFields {
            name
            images
          }
          code
          paths
          price
          condition
          description
          status {
            id
            productID
            product {
              id
              customerID
              categoryID
              brandID
              productID
              code
              paths
              price
              condition
              description
              owner
              createdAt
              updatedAt
              customerProductStatusId
            }
            status
            owner
            favoriteItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          phoneFields {
            carrier
            imei
            model
            storage
            batery
          }
          laptoFields {
            serial
          }
          owner
          createdAt
          updatedAt
          customerProductStatusId
        }
        status
        owner
        favoriteItems {
          items {
            id
            itemID
            item {
              id
              productID
              status
              owner
              createdAt
              updatedAt
            }
            customerShopID
            owner
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateOrderItem = /* GraphQL */ `
  mutation UpdateOrderItem(
    $input: UpdateOrderItemInput!
    $condition: ModelOrderItemConditionInput
  ) {
    updateOrderItem(input: $input, condition: $condition) {
      id
      orderID
      itemID
      item {
        id
        productID
        product {
          id
          customerID
          customer {
            userID
            name
            email
            description
            identityId
            favorites {
              nextToken
            }
            salesOrders {
              nextToken
            }
            purchaseOrders {
              nextToken
            }
            products {
              nextToken
            }
            shippingAddress {
              nextToken
            }
            owner
            createdAt
            updatedAt
          }
          categoryID
          categoryFields {
            name
            image
            abreviation
          }
          brandID
          brandFields {
            name
            image
            abreviation
          }
          productID
          adproduct {
            id
            name
            images
            paths
            description
            suggestedPrice
            categoryID
            brandID
            phone {
              colors
              storage
              width
              height
              depth
              weight
            }
            createdBy
            customerProduct {
              nextToken
            }
            createdAt
            updatedAt
          }
          productFields {
            name
            images
          }
          code
          paths
          price
          condition
          description
          status {
            id
            productID
            product {
              id
              customerID
              categoryID
              brandID
              productID
              code
              paths
              price
              condition
              description
              owner
              createdAt
              updatedAt
              customerProductStatusId
            }
            status
            owner
            favoriteItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          phoneFields {
            carrier
            imei
            model
            storage
            batery
          }
          laptoFields {
            serial
          }
          owner
          createdAt
          updatedAt
          customerProductStatusId
        }
        status
        owner
        favoriteItems {
          items {
            id
            itemID
            item {
              id
              productID
              status
              owner
              createdAt
              updatedAt
            }
            customerShopID
            owner
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteOrderItem = /* GraphQL */ `
  mutation DeleteOrderItem(
    $input: DeleteOrderItemInput!
    $condition: ModelOrderItemConditionInput
  ) {
    deleteOrderItem(input: $input, condition: $condition) {
      id
      orderID
      itemID
      item {
        id
        productID
        product {
          id
          customerID
          customer {
            userID
            name
            email
            description
            identityId
            favorites {
              nextToken
            }
            salesOrders {
              nextToken
            }
            purchaseOrders {
              nextToken
            }
            products {
              nextToken
            }
            shippingAddress {
              nextToken
            }
            owner
            createdAt
            updatedAt
          }
          categoryID
          categoryFields {
            name
            image
            abreviation
          }
          brandID
          brandFields {
            name
            image
            abreviation
          }
          productID
          adproduct {
            id
            name
            images
            paths
            description
            suggestedPrice
            categoryID
            brandID
            phone {
              colors
              storage
              width
              height
              depth
              weight
            }
            createdBy
            customerProduct {
              nextToken
            }
            createdAt
            updatedAt
          }
          productFields {
            name
            images
          }
          code
          paths
          price
          condition
          description
          status {
            id
            productID
            product {
              id
              customerID
              categoryID
              brandID
              productID
              code
              paths
              price
              condition
              description
              owner
              createdAt
              updatedAt
              customerProductStatusId
            }
            status
            owner
            favoriteItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          phoneFields {
            carrier
            imei
            model
            storage
            batery
          }
          laptoFields {
            serial
          }
          owner
          createdAt
          updatedAt
          customerProductStatusId
        }
        status
        owner
        favoriteItems {
          items {
            id
            itemID
            item {
              id
              productID
              status
              owner
              createdAt
              updatedAt
            }
            customerShopID
            owner
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createPaymentStripe = /* GraphQL */ `
  mutation CreatePaymentStripe(
    $input: CreatePaymentStripeInput!
    $condition: ModelPaymentStripeConditionInput
  ) {
    createPaymentStripe(input: $input, condition: $condition) {
      id
      paymentStripeID
      metadata
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updatePaymentStripe = /* GraphQL */ `
  mutation UpdatePaymentStripe(
    $input: UpdatePaymentStripeInput!
    $condition: ModelPaymentStripeConditionInput
  ) {
    updatePaymentStripe(input: $input, condition: $condition) {
      id
      paymentStripeID
      metadata
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deletePaymentStripe = /* GraphQL */ `
  mutation DeletePaymentStripe(
    $input: DeletePaymentStripeInput!
    $condition: ModelPaymentStripeConditionInput
  ) {
    deletePaymentStripe(input: $input, condition: $condition) {
      id
      paymentStripeID
      metadata
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createCategoryBrands = /* GraphQL */ `
  mutation CreateCategoryBrands(
    $input: CreateCategoryBrandsInput!
    $condition: ModelCategoryBrandsConditionInput
  ) {
    createCategoryBrands(input: $input, condition: $condition) {
      id
      aDCategoryId
      aDBrandId
      aDCategory {
        id
        name
        image
        path
        products {
          items {
            id
            name
            images
            paths
            description
            suggestedPrice
            categoryID
            brandID
            phone {
              colors
              storage
              width
              height
              depth
              weight
            }
            createdBy
            customerProduct {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        brands {
          items {
            id
            aDCategoryId
            aDBrandId
            aDCategory {
              id
              name
              image
              path
              abreviation
              createdBy
              createdAt
              updatedAt
            }
            aDBrand {
              id
              name
              image
              path
              abreviation
              createdBy
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        abreviation
        createdBy
        createdAt
        updatedAt
      }
      aDBrand {
        id
        name
        image
        path
        products {
          items {
            id
            name
            images
            paths
            description
            suggestedPrice
            categoryID
            brandID
            phone {
              colors
              storage
              width
              height
              depth
              weight
            }
            createdBy
            customerProduct {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        categories {
          items {
            id
            aDCategoryId
            aDBrandId
            aDCategory {
              id
              name
              image
              path
              abreviation
              createdBy
              createdAt
              updatedAt
            }
            aDBrand {
              id
              name
              image
              path
              abreviation
              createdBy
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        abreviation
        createdBy
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateCategoryBrands = /* GraphQL */ `
  mutation UpdateCategoryBrands(
    $input: UpdateCategoryBrandsInput!
    $condition: ModelCategoryBrandsConditionInput
  ) {
    updateCategoryBrands(input: $input, condition: $condition) {
      id
      aDCategoryId
      aDBrandId
      aDCategory {
        id
        name
        image
        path
        products {
          items {
            id
            name
            images
            paths
            description
            suggestedPrice
            categoryID
            brandID
            phone {
              colors
              storage
              width
              height
              depth
              weight
            }
            createdBy
            customerProduct {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        brands {
          items {
            id
            aDCategoryId
            aDBrandId
            aDCategory {
              id
              name
              image
              path
              abreviation
              createdBy
              createdAt
              updatedAt
            }
            aDBrand {
              id
              name
              image
              path
              abreviation
              createdBy
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        abreviation
        createdBy
        createdAt
        updatedAt
      }
      aDBrand {
        id
        name
        image
        path
        products {
          items {
            id
            name
            images
            paths
            description
            suggestedPrice
            categoryID
            brandID
            phone {
              colors
              storage
              width
              height
              depth
              weight
            }
            createdBy
            customerProduct {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        categories {
          items {
            id
            aDCategoryId
            aDBrandId
            aDCategory {
              id
              name
              image
              path
              abreviation
              createdBy
              createdAt
              updatedAt
            }
            aDBrand {
              id
              name
              image
              path
              abreviation
              createdBy
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        abreviation
        createdBy
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteCategoryBrands = /* GraphQL */ `
  mutation DeleteCategoryBrands(
    $input: DeleteCategoryBrandsInput!
    $condition: ModelCategoryBrandsConditionInput
  ) {
    deleteCategoryBrands(input: $input, condition: $condition) {
      id
      aDCategoryId
      aDBrandId
      aDCategory {
        id
        name
        image
        path
        products {
          items {
            id
            name
            images
            paths
            description
            suggestedPrice
            categoryID
            brandID
            phone {
              colors
              storage
              width
              height
              depth
              weight
            }
            createdBy
            customerProduct {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        brands {
          items {
            id
            aDCategoryId
            aDBrandId
            aDCategory {
              id
              name
              image
              path
              abreviation
              createdBy
              createdAt
              updatedAt
            }
            aDBrand {
              id
              name
              image
              path
              abreviation
              createdBy
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        abreviation
        createdBy
        createdAt
        updatedAt
      }
      aDBrand {
        id
        name
        image
        path
        products {
          items {
            id
            name
            images
            paths
            description
            suggestedPrice
            categoryID
            brandID
            phone {
              colors
              storage
              width
              height
              depth
              weight
            }
            createdBy
            customerProduct {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        categories {
          items {
            id
            aDCategoryId
            aDBrandId
            aDCategory {
              id
              name
              image
              path
              abreviation
              createdBy
              createdAt
              updatedAt
            }
            aDBrand {
              id
              name
              image
              path
              abreviation
              createdBy
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        abreviation
        createdBy
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
