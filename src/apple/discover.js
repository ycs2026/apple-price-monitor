const APPLE_IPHONE_URL = "https://www.apple.com.cn/iphone/";

export async function discoverIPhones() {

  const res = await fetch(APPLE_IPHONE_URL, {

    headers: {

      "User-Agent": "Mozilla/5.0"

    }

  });

  if (!res.ok) {

    throw new Error(`Apple 官网访问失败：${res.status}`);

  }

  const html = await res.text();

  const regex = /\/shop\/buy-iphone\/([a-zA-Z0-9-]+)/g;

  const set = new Set();

  let match;

  while ((match = regex.exec(html)) !== null) {

    set.add(match[1]);

  }

  return [...set].sort();

}
