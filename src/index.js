import { discoverIPhones } from "./apple/discover.js";

export default {

  async fetch() {

    const models = await discoverIPhones();

    return new Response(

      JSON.stringify(models, null, 2),

      {

        headers: {

          "content-type": "application/json"

        }

      }

    );

  }

};
