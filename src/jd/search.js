const SEARCH_URL =

  "https://search.jd.com/Search?keyword=Apple%20iPhone";

export async function searchJD() {

    const res = await fetch(SEARCH_URL, {

        headers: {

            "User-Agent":

                "Mozilla/5.0"

        }

    });

    if (!res.ok) {

        throw new Error(

            "京东访问失败：" + res.status

        );

    }

    return await res.text();

}
