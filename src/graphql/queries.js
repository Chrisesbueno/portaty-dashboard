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
      nextToken
    }
  }
`;
export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      owner
      postname
      content
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
        owner
        postname
        content
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
      nextToken
    }
  }
`;
export const getCustomerShippingAddress = /* GraphQL */ `
  query GetCustomerShippingAddress($id: ID!) {
    getCustomerShippingAddress(id: $id) {
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
export const listCustomerShippingAddresses = /* GraphQL */ `
  query ListCustomerShippingAddresses(
    $filter: ModelCustomerShippingAddressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomerShippingAddresses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const customerShippingAddressesByCustomerID = /* GraphQL */ `
  query CustomerShippingAddressesByCustomerID(
    $customerID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCustomerShippingAddressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    customerShippingAddressesByCustomerID(
      customerID: $customerID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getFavoriteItem = /* GraphQL */ `
  query GetFavoriteItem($id: ID!) {
    getFavoriteItem(id: $id) {
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
export const listFavoriteItems = /* GraphQL */ `
  query ListFavoriteItems(
    $filter: ModelFavoriteItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFavoriteItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        customerShopID
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const favoriteItemsByItemID = /* GraphQL */ `
  query FavoriteItemsByItemID(
    $itemID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelFavoriteItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    favoriteItemsByItemID(
      itemID: $itemID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        customerShopID
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const favoriteItemsByCustomerShopID = /* GraphQL */ `
  query FavoriteItemsByCustomerShopID(
    $customerShopID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelFavoriteItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    favoriteItemsByCustomerShopID(
      customerShopID: $customerShopID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        customerShopID
        owner
        createdAt
        updatedAt
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
      nextToken
    }
  }
`;
export const customerProductsByProductID = /* GraphQL */ `
  query CustomerProductsByProductID(
    $productID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCustomerProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    customerProductsByProductID(
      productID: $productID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
      nextToken
    }
  }
`;
export const getOrderDetail = /* GraphQL */ `
  query GetOrderDetail($id: ID!) {
    getOrderDetail(id: $id) {
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
export const listOrderDetails = /* GraphQL */ `
  query ListOrderDetails(
    $filter: ModelOrderDetailFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrderDetails(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
            item {
              id
              productID
              status
              owner
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
      nextToken
    }
  }
`;
export const orderDetailsByPurchaseUserID = /* GraphQL */ `
  query OrderDetailsByPurchaseUserID(
    $purchaseUserID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelOrderDetailFilterInput
    $limit: Int
    $nextToken: String
  ) {
    orderDetailsByPurchaseUserID(
      purchaseUserID: $purchaseUserID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
            item {
              id
              productID
              status
              owner
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
      nextToken
    }
  }
`;
export const orderDetailsBySalesUserID = /* GraphQL */ `
  query OrderDetailsBySalesUserID(
    $salesUserID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelOrderDetailFilterInput
    $limit: Int
    $nextToken: String
  ) {
    orderDetailsBySalesUserID(
      salesUserID: $salesUserID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
            item {
              id
              productID
              status
              owner
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
      nextToken
    }
  }
`;
export const getOrderItem = /* GraphQL */ `
  query GetOrderItem($id: ID!) {
    getOrderItem(id: $id) {
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
export const listOrderItems = /* GraphQL */ `
  query ListOrderItems(
    $filter: ModelOrderItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrderItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const orderItemsByOrderID = /* GraphQL */ `
  query OrderItemsByOrderID(
    $orderID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelOrderItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    orderItemsByOrderID(
      orderID: $orderID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getPaymentStripe = /* GraphQL */ `
  query GetPaymentStripe($id: ID!) {
    getPaymentStripe(id: $id) {
      id
      paymentStripeID
      metadata
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listPaymentStripes = /* GraphQL */ `
  query ListPaymentStripes(
    $filter: ModelPaymentStripeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPaymentStripes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        paymentStripeID
        metadata
        createdAt
        updatedAt
        owner
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
