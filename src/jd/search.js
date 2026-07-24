const SEARCH_URL =

  "https://search.jd.com/Search?keyword=Apple%20iPhone";

export async function searchJD() {

    const res = await fetch(SEARCH_URL,{

        headers:{

            "User-Agent":"Mozilla/5.0"

        }

    });

    const html = await res.text();

    const result=[];

    const reg=/<li[^>]*data-sku="(\d+)"/g;

    let m;

    while((m=reg.exec(html))!==null){

        result.push(m[1]);

    }

    return result;

}
