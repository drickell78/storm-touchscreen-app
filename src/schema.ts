import { gql } from 'apollo-server';

const typeDefs = gql`
  type User {
      id: ID!
      vunetId: Int
      firstName: String
      middleName: String
      lastName: String
      nickname: String
      password: String
      pincode: Int
      userRights: UserRights
      authenticationMethod: Boolean
  }
  
  type UserRights {
      id: ID!
      user: User
      admin: Boolean
      moderator: Boolean
      cieMember: Boolean
  }
  
  type Product {
      id: ID!
      name: String
      VAT: Int
      productCategories: [ProductCategory]
      price: PriceMutations
  }
  
  type ProductCategory {
      id: ID!
      name: String
  }
  
  type PriceMutations {
      id: ID!
      product: Product
      user: User
      newPrice: Float
      internal: Boolean
      timestamp: String
  }
  
  interface Transaction {
      id: ID!
      user: User
      timestamp: String
  }
  
  type StockTransaction implements Transaction {
      id: ID!
      user: User
      timestamp: String
      rows: [StockTransactionRow]
      comment: String
  }

  type KenTTransaction implements Transaction {
      id: ID!
      user: User
      timestamp: String
      rows: [KenTTransactionRow]
  }

  type LossTransaction implements Transaction {
      id: ID!
      user: User
      timestamp: String
      rows: [LossTransactionRow]
      comment: String
      reason: String
  }
  
  interface TransactionRow {
      id: ID!
      product: Product
      amount: Int
  }

  type StockTransactionRow implements TransactionRow {
      id: ID!
      stockTransaction: StockTransaction
      product: Product
      amount: Int
  }

  type KenTTransactionRow implements TransactionRow {
      id: ID!
      kentTransaction: KenTTransaction
      product: Product
      amount: Int
  }

  type LossTransactionRow implements TransactionRow {
      id: ID!
      lossTransaction: LossTransaction
      product: Product
      amount: Int
  }
  
`;

module.exports = typeDefs;