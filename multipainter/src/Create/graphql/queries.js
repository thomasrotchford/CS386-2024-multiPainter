/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTemplates = /* GraphQL */ `
  query GetTemplates($id: ID!) {
    getTemplates(id: $id) {
      id
      timeCreated
      numGrid
      colorGrid
      artName
      creator
      creationMessage
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listTemplates = /* GraphQL */ `
  query ListTemplates(
    $filter: ModelTemplatesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTemplates(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        timeCreated
        numGrid
        colorGrid
        artName
        creator
        creationMessage
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
