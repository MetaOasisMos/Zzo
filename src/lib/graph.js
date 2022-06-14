import { request, gql } from "graphql-request";
import config from "../config";

export const getAnimal = async (address) => {
  const lowerCaseAddress = String(address).toLowerCase();
  const apikey = "a1bd9450-cabc-463e-8c1d-9c833b6c83e4";
  const query = gql`
  {
      queryZzooper(addr:"${lowerCaseAddress}" apikey:"${apikey}"){
          addr
          profile
      }
  }
  `;

  const result = await request(config.spiritApi, query);

  return result.queryZzooper.profile;
};

export default {
  getAnimal,
};
