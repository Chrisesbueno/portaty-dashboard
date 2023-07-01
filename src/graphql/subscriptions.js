/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateADCategory = /* GraphQL */ `
  subscription OnCreateADCategory(
    $filter: ModelSubscriptionADCategoryFilterInput
  ) {
    onCreateADCategory(filter: $filter) {
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
export const onUpdateADCategory = /* GraphQL */ `
  subscription OnUpdateADCategory(
    $filter: ModelSubscriptionADCategoryFilterInput
  ) {
    onUpdateADCategory(filter: $filter) {
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
export const onDeleteADCategory = /* GraphQL */ `
  subscription OnDeleteADCategory(
    $filter: ModelSubscriptionADCategoryFilterInput
  ) {
    onDeleteADCategory(filter: $filter) {
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
export const onCreateADBrand = /* GraphQL */ `
  subscription OnCreateADBrand($filter: ModelSubscriptionADBrandFilterInput) {
    onCreateADBrand(filter: $filter) {
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
export const onUpdateADBrand = /* GraphQL */ `
  subscription OnUpdateADBrand($filter: ModelSubscriptionADBrandFilterInput) {
    onUpdateADBrand(filter: $filter) {
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
export const onDeleteADBrand = /* GraphQL */ `
  subscription OnDeleteADBrand($filter: ModelSubscriptionADBrandFilterInput) {
    onDeleteADBrand(filter: $filter) {
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
export const onCreateADProduct = /* GraphQL */ `
  subscription OnCreateADProduct(
    $filter: ModelSubscriptionADProductFilterInput
  ) {
    onCreateADProduct(filter: $filter) {
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
export const onUpdateADProduct = /* GraphQL */ `
  subscription OnUpdateADProduct(
    $filter: ModelSubscriptionADProductFilterInput
  ) {
    onUpdateADProduct(filter: $filter) {
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
export const onDeleteADProduct = /* GraphQL */ `
  subscription OnDeleteADProduct(
    $filter: ModelSubscriptionADProductFilterInput
  ) {
    onDeleteADProduct(filter: $filter) {
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
export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo(
    $filter: ModelSubscriptionTodoFilterInput
    $owner: String
  ) {
    onCreateTodo(filter: $filter, owner: $owner) {
      id
      owner
      postname
      content
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo(
    $filter: ModelSubscriptionTodoFilterInput
    $owner: String
  ) {
    onUpdateTodo(filter: $filter, owner: $owner) {
      id
      owner
      postname
      content
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo(
    $filter: ModelSubscriptionTodoFilterInput
    $owner: String
  ) {
    onDeleteTodo(filter: $filter, owner: $owner) {
      id
      owner
      postname
      content
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCustomerShop = /* GraphQL */ `
  subscription OnCreateCustomerShop(
    $filter: ModelSubscriptionCustomerShopFilterInput
    $owner: String
  ) {
    onCreateCustomerShop(filter: $filter, owner: $owner) {
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
export const onUpdateCustomerShop = /* GraphQL */ `
  subscription OnUpdateCustomerShop(
    $filter: ModelSubscriptionCustomerShopFilterInput
    $owner: String
  ) {
    onUpdateCustomerShop(filter: $filter, owner: $owner) {
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
export const onDeleteCustomerShop = /* GraphQL */ `
  subscription OnDeleteCustomerShop(
    $filter: ModelSubscriptionCustomerShopFilterInput
    $owner: String
  ) {
    onDeleteCustomerShop(filter: $filter, owner: $owner) {
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
export const onCreateCustomerShippingAddress = /* GraphQL */ `
  subscription OnCreateCustomerShippingAddress(
    $filter: ModelSubscriptionCustomerShippingAddressFilterInput
    $owner: String
  ) {
    onCreateCustomerShippingAddress(filter: $filter, owner: $owner) {
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
export const onUpdateCustomerShippingAddress = /* GraphQL */ `
  subscription OnUpdateCustomerShippingAddress(
    $filter: ModelSubscriptionCustomerShippingAddressFilterInput
    $owner: String
  ) {
    onUpdateCustomerShippingAddress(filter: $filter, owner: $owner) {
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
export const onDeleteCustomerShippingAddress = /* GraphQL */ `
  subscription OnDeleteCustomerShippingAddress(
    $filter: ModelSubscriptionCustomerShippingAddressFilterInput
    $owner: String
  ) {
    onDeleteCustomerShippingAddress(filter: $filter, owner: $owner) {
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
export const onCreateFavoriteItem = /* GraphQL */ `
  subscription OnCreateFavoriteItem(
    $filter: ModelSubscriptionFavoriteItemFilterInput
    $owner: String
  ) {
    onCreateFavoriteItem(filter: $filter, owner: $owner) {
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
export const onUpdateFavoriteItem = /* GraphQL */ `
  subscription OnUpdateFavoriteItem(
    $filter: ModelSubscriptionFavoriteItemFilterInput
    $owner: String
  ) {
    onUpdateFavoriteItem(filter: $filter, owner: $owner) {
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
export const onDeleteFavoriteItem = /* GraphQL */ `
  subscription OnDeleteFavoriteItem(
    $filter: ModelSubscriptionFavoriteItemFilterInput
    $owner: String
  ) {
    onDeleteFavoriteItem(filter: $filter, owner: $owner) {
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
export const onCreateCustomerProduct = /* GraphQL */ `
  subscription OnCreateCustomerProduct(
    $filter: ModelSubscriptionCustomerProductFilterInput
    $owner: String
  ) {
    onCreateCustomerProduct(filter: $filter, owner: $owner) {
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
export const onUpdateCustomerProduct = /* GraphQL */ `
  subscription OnUpdateCustomerProduct(
    $filter: ModelSubscriptionCustomerProductFilterInput
    $owner: String
  ) {
    onUpdateCustomerProduct(filter: $filter, owner: $owner) {
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
export const onDeleteCustomerProduct = /* GraphQL */ `
  subscription OnDeleteCustomerProduct(
    $filter: ModelSubscriptionCustomerProductFilterInput
    $owner: String
  ) {
    onDeleteCustomerProduct(filter: $filter, owner: $owner) {
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
export const onCreateCustomerProductStatus = /* GraphQL */ `
  subscription OnCreateCustomerProductStatus(
    $filter: ModelSubscriptionCustomerProductStatusFilterInput
    $owner: String
  ) {
    onCreateCustomerProductStatus(filter: $filter, owner: $owner) {
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
export const onUpdateCustomerProductStatus = /* GraphQL */ `
  subscription OnUpdateCustomerProductStatus(
    $filter: ModelSubscriptionCustomerProductStatusFilterInput
    $owner: String
  ) {
    onUpdateCustomerProductStatus(filter: $filter, owner: $owner) {
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
export const onDeleteCustomerProductStatus = /* GraphQL */ `
  subscription OnDeleteCustomerProductStatus(
    $filter: ModelSubscriptionCustomerProductStatusFilterInput
    $owner: String
  ) {
    onDeleteCustomerProductStatus(filter: $filter, owner: $owner) {
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
export const onCreateOrderDetail = /* GraphQL */ `
  subscription OnCreateOrderDetail(
    $filter: ModelSubscriptionOrderDetailFilterInput
    $owner: String
  ) {
    onCreateOrderDetail(filter: $filter, owner: $owner) {
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
export const onUpdateOrderDetail = /* GraphQL */ `
  subscription OnUpdateOrderDetail(
    $filter: ModelSubscriptionOrderDetailFilterInput
    $owner: String
  ) {
    onUpdateOrderDetail(filter: $filter, owner: $owner) {
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
export const onDeleteOrderDetail = /* GraphQL */ `
  subscription OnDeleteOrderDetail(
    $filter: ModelSubscriptionOrderDetailFilterInput
    $owner: String
  ) {
    onDeleteOrderDetail(filter: $filter, owner: $owner) {
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
export const onCreateOrderItem = /* GraphQL */ `
  subscription OnCreateOrderItem(
    $filter: ModelSubscriptionOrderItemFilterInput
    $owner: String
  ) {
    onCreateOrderItem(filter: $filter, owner: $owner) {
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
export const onUpdateOrderItem = /* GraphQL */ `
  subscription OnUpdateOrderItem(
    $filter: ModelSubscriptionOrderItemFilterInput
    $owner: String
  ) {
    onUpdateOrderItem(filter: $filter, owner: $owner) {
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
export const onDeleteOrderItem = /* GraphQL */ `
  subscription OnDeleteOrderItem(
    $filter: ModelSubscriptionOrderItemFilterInput
    $owner: String
  ) {
    onDeleteOrderItem(filter: $filter, owner: $owner) {
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
export const onCreatePaymentStripe = /* GraphQL */ `
  subscription OnCreatePaymentStripe(
    $filter: ModelSubscriptionPaymentStripeFilterInput
    $owner: String
  ) {
    onCreatePaymentStripe(filter: $filter, owner: $owner) {
      id
      paymentStripeID
      metadata
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdatePaymentStripe = /* GraphQL */ `
  subscription OnUpdatePaymentStripe(
    $filter: ModelSubscriptionPaymentStripeFilterInput
    $owner: String
  ) {
    onUpdatePaymentStripe(filter: $filter, owner: $owner) {
      id
      paymentStripeID
      metadata
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeletePaymentStripe = /* GraphQL */ `
  subscription OnDeletePaymentStripe(
    $filter: ModelSubscriptionPaymentStripeFilterInput
    $owner: String
  ) {
    onDeletePaymentStripe(filter: $filter, owner: $owner) {
      id
      paymentStripeID
      metadata
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateCategoryBrands = /* GraphQL */ `
  subscription OnCreateCategoryBrands(
    $filter: ModelSubscriptionCategoryBrandsFilterInput
  ) {
    onCreateCategoryBrands(filter: $filter) {
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
export const onUpdateCategoryBrands = /* GraphQL */ `
  subscription OnUpdateCategoryBrands(
    $filter: ModelSubscriptionCategoryBrandsFilterInput
  ) {
    onUpdateCategoryBrands(filter: $filter) {
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
export const onDeleteCategoryBrands = /* GraphQL */ `
  subscription OnDeleteCategoryBrands(
    $filter: ModelSubscriptionCategoryBrandsFilterInput
  ) {
    onDeleteCategoryBrands(filter: $filter) {
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
