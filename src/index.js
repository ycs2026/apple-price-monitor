import { PRODUCTS } from "./config.js";

import { getJDPrice } from "./jd/price.js";

export default {

    async fetch() {

        const result = [];

        for (const p of PRODUCTS) {

            const info = await getJDPrice(p.jdShare);

            result.push({

                name: p.name,

                url: info.finalUrl,

                status: info.status

            });

        }

        return Response.json(result);

    }

}
