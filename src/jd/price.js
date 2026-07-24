export async function getJDPrice(url) {

    const res = await fetch(url, {

        redirect: "follow",

        headers: {

            "User-Agent": "Mozilla/5.0"

        }

    });

    return {

        finalUrl: res.url,

        status: res.status

    };

}
