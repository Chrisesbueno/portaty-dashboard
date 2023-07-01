export const customListADCategories = /* GraphQL */ `
  query customListADCategories(
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
        abreviation
        createdBy
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

export const customListADBrands = /* GraphQL */ `
  query customListADBrands(
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
        abreviation
        createdBy
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

export const customListADProducts = /* GraphQL */ `
  query customListADProducts(
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
        createdBy
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;