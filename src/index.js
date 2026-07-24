import { searchJD } from "./jd/search.js";

export default {

  async fetch() {

    const html = await searchJD();

    return new Response(html, {

      headers: {

        "content-type": "text/html; charset=utf-8"

      }

    });

  }

}
