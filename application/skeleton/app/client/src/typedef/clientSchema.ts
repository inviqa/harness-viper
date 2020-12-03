import { gql } from '@apollo/client';

export const clientSchema = gql`
  type Sort {
    criteria: ProductSortCriteria!
    order: ProductSortOrder!
  }

  type FilterValue {
    eq: String
    in: [String]
    match: String
    from: String
    to: String
  }

  type Filter {
    name: String!
    value: FilterValue!
  }

  type FacetOption {
    isSelected: Boolean!
  }
`;
