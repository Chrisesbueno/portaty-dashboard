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
      name
      description
      owner
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
      name
      description
      owner
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
      name
      description
      owner
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
      shoppingCart {
        items {
          id
          productID
          customerShopID
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
          productFields {
            name
            images
          }
          code
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
      shoppingCart {
        items {
          id
          productID
          customerShopID
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
          productFields {
            name
            images
          }
          code
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
      shoppingCart {
        items {
          id
          productID
          customerShopID
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
          productFields {
            name
            images
          }
          code
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
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCartItem = /* GraphQL */ `
  subscription OnCreateCartItem(
    $filter: ModelSubscriptionCartItemFilterInput
    $owner: String
  ) {
    onCreateCartItem(filter: $filter, owner: $owner) {
      id
      productID
      customerShopID
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateCartItem = /* GraphQL */ `
  subscription OnUpdateCartItem(
    $filter: ModelSubscriptionCartItemFilterInput
    $owner: String
  ) {
    onUpdateCartItem(filter: $filter, owner: $owner) {
      id
      productID
      customerShopID
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteCartItem = /* GraphQL */ `
  subscription OnDeleteCartItem(
    $filter: ModelSubscriptionCartItemFilterInput
    $owner: String
  ) {
    onDeleteCartItem(filter: $filter, owner: $owner) {
      id
      productID
      customerShopID
      createdAt
      updatedAt
      owner
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
      productFields {
        name
        images
      }
      code
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
          productFields {
            name
            images
          }
          code
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
      productFields {
        name
        images
      }
      code
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
          productFields {
            name
            images
          }
          code
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
      productFields {
        name
        images
      }
      code
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
          productFields {
            name
            images
          }
          code
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
        productFields {
          name
          images
        }
        code
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
            productFields {
              name
              images
            }
            code
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
        productFields {
          name
          images
        }
        code
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
            productFields {
              name
              images
            }
            code
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
        productFields {
          name
          images
        }
        code
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
            productFields {
              name
              images
            }
            code
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
      createdAt
      updatedAt
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
