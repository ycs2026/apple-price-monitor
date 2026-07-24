import { searchJD } from "./jd/search.js";

export default {

    async fetch() {

        const html = await searchJD();

        return new Response(

            html.substring(0,1000),

            {

                headers:{

                    "content-type":"text/plain"

                }

            }

        );

    }

}
