const APPLE_API =

  "https://www.apple.com.cn/shop/fulfillment-messages";

export async function getAllIPhones() {

  const products = [

    "iphone-16-pro",

    "iphone-16-pro-max",

    "iphone-16",

    "iphone-16-plus",

    "iphone-16e",

    "iphone-15",

    "iphone-15-plus"

  ];

  const result = [];

  for (const product of products) {

    result.push({

      name: product,

      url: `https://www.apple.com.cn/shop/buy-iphone/${product}`

    });

  }

  return result;

}
