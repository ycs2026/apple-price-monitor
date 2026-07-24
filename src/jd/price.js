const IDS = [

  "100278222276", // iPhone 17 256GB

  "100209268163", // iPhone 17 Pro 256GB

  "100209268193", // iPhone 17 Pro Max 256GB

  "100142621616", // iPhone 16 256GB

  "100142621626", // iPhone 16 Pro 128GB

  "100142621610", // iPhone 16 Plus 256GB

  "100278221440"  // iPhone Air 256GB

];

export async function getPrices() {

  const url =

    "https://p.3.cn/prices/mgets?type=1&skuIds=J_" +

    IDS.join(",J_");

  const res = await fetch(url, {

    headers: {

      "User-Agent": "Mozilla/5.0"

    }

  });

  const text = await res.text();

  console.log(text);

  return text;

}
