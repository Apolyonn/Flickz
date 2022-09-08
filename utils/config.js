import { createClient } from "@rocketgraphql/rocketgraph-js-sdk";
import Cookies from 'js-cookie';

const config = {
  baseURL: "https://backend-REPLACE",
};

const { auth } = createClient(config);

export { auth };

