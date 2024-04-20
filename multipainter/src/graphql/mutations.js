/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTemplates = /* GraphQL */ `
  mutation CreateTemplates(
    $input: CreateTemplatesInput!
    $condition: ModelTemplatesConditionInput
  ) {
    createTemplates(input: $input, condition: $condition) {
      id
      timeCreated
      numGrid
      colorGrid
      artName
      creator
      creationMessage
      tags
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateTemplates = /* GraphQL */ `
  mutation UpdateTemplates(
    $input: UpdateTemplatesInput!
    $condition: ModelTemplatesConditionInput
  ) {
    updateTemplates(input: $input, condition: $condition) {
      id
      timeCreated
      numGrid
      colorGrid
      artName
      creator
      creationMessage
      tags
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteTemplates = /* GraphQL */ `
  mutation DeleteTemplates(
    $input: DeleteTemplatesInput!
    $condition: ModelTemplatesConditionInput
  ) {
    deleteTemplates(input: $input, condition: $condition) {
      id
      timeCreated
      numGrid
      colorGrid
      artName
      creator
      creationMessage
      tags
      createdAt
      updatedAt
      __typename
    }
  }
`;
