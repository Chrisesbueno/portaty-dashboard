/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getADCategory = /* GraphQL */ `
  query GetADCategory($id: ID!) {
    getADCategory(id: $id) {
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
export const listADCategories = /* GraphQL */ `
  query ListADCategories(
    $filter: ModelADCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listADCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getADBrand = /* GraphQL */ `
  query GetADBrand($id: ID!) {
    getADBrand(id: $id) {
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
export const listADBrands = /* GraphQL */ `
  query ListADBrands(
    $filter: ModelADBrandFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listADBrands(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getADProduct = /* GraphQL */ `
  query GetADProduct($id: ID!) {
    getADProduct(id: $id) {
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
export const listADProducts = /* GraphQL */ `
  query ListADProducts(
    $filter: ModelADProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listADProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const aDProductsByCategoryIDAndName = /* GraphQL */ `
  query ADProductsByCategoryIDAndName(
    $categoryID: ID!
    $name: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelADProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    aDProductsByCategoryIDAndName(
      categoryID: $categoryID
      name: $name
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const aDProductsByBrandIDAndName = /* GraphQL */ `
  query ADProductsByBrandIDAndName(
    $brandID: ID!
    $name: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelADProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    aDProductsByBrandIDAndName(
      brandID: $brandID
      name: $name
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      owner
      createdAt
      updatedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCustomerShop = /* GraphQL */ `
  query GetCustomerShop($userID: ID!) {
    getCustomerShop(userID: $userID) {
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
export const listCustomerShops = /* GraphQL */ `
  query ListCustomerShops(
    $userID: ID
    $filter: ModelCustomerShopFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listCustomerShops(
      userID: $userID
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getCartItem = /* GraphQL */ `
  query GetCartItem($id: ID!) {
    getCartItem(id: $id) {
      id
      productID
      customerShopID
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listCartItems = /* GraphQL */ `
  query ListCartItems(
    $filter: ModelCartItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCartItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const cartItemsByCustomerShopID = /* GraphQL */ `
  query CartItemsByCustomerShopID(
    $customerShopID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCartItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    cartItemsByCustomerShopID(
      customerShopID: $customerShopID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getCustomerProduct = /* GraphQL */ `
  query GetCustomerProduct($id: ID!) {
    getCustomerProduct(id: $id) {
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
export const listCustomerProducts = /* GraphQL */ `
  query ListCustomerProducts(
    $filter: ModelCustomerProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomerProducts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
      nextToken
    }
  }
`;
export const customerProductsByCustomerIDAndCode = /* GraphQL */ `
  query CustomerProductsByCustomerIDAndCode(
    $customerID: ID!
    $code: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCustomerProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    customerProductsByCustomerIDAndCode(
      customerID: $customerID
      code: $code
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
      nextToken
    }
  }
`;
export const getCustomerProductStatus = /* GraphQL */ `
  query GetCustomerProductStatus($id: ID!) {
    getCustomerProductStatus(id: $id) {
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
export const listCustomerProductStatuses = /* GraphQL */ `
  query ListCustomerProductStatuses(
    $filter: ModelCustomerProductStatusFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomerProductStatuses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getCategoryBrands = /* GraphQL */ `
  query GetCategoryBrands($id: ID!) {
    getCategoryBrands(id: $id) {
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
export const listCategoryBrands = /* GraphQL */ `
  query ListCategoryBrands(
    $filter: ModelCategoryBrandsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategoryBrands(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
            items {
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
            nextToken
          }
          brands {
            items {
              id
              aDCategoryId
              aDBrandId
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
      nextToken
    }
  }
`;
export const categoryBrandsByADCategoryId = /* GraphQL */ `
  query CategoryBrandsByADCategoryId(
    $aDCategoryId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCategoryBrandsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    categoryBrandsByADCategoryId(
      aDCategoryId: $aDCategoryId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
            items {
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
            nextToken
          }
          brands {
            items {
              id
              aDCategoryId
              aDBrandId
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
      nextToken
    }
  }
`;
export const categoryBrandsByADBrandId = /* GraphQL */ `
  query CategoryBrandsByADBrandId(
    $aDBrandId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCategoryBrandsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    categoryBrandsByADBrandId(
      aDBrandId: $aDBrandId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
            items {
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
            nextToken
          }
          brands {
            items {
              id
              aDCategoryId
              aDBrandId
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
      nextToken
    }
  }
`;
