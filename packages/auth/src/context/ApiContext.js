import { createContext } from "react";

const ApiContext = createContext({
  //   baseUrl: "https://localhost:7007/",
  signIn: () => {},
  signUp: () => {},
});
export default ApiContext;
