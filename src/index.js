import { searchJD } from "./jd/search.js";

export default {

    async fetch(){

        const ids=await searchJD();

        return new Response(

            JSON.stringify(ids,null,2),

            {

                headers:{

                    "content-type":"application/json"

                }

            }

        );

    }

}
