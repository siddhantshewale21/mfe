import {
  ApiConstants as constant,
  ApiEndpoints as endpoint,
} from "./api.constant";
import { callApi, post } from "./api.service";

export const signin = async (user) => {
  return await post({
    url: endpoint.user.authenticate,
    body: user,
  });
};

export const signup = async (user) => {
  return await post({
    url: endpoint.user.create,
    body: JSON.stringify(user),
  });
};
