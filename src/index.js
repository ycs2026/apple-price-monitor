import { sendTelegram } from "./telegram.js";

import { getPrices } from "./jd/price.js";

async function main() {

  const env = {

    TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN,

    TELEGRAM_CHAT_ID: process.env.TELEGRAM_CHAT_ID

  };

  const result = await getPrices();

  await sendTelegram(env, result);

}

main().catch(err => {

  console.error(err);

  process.exit(1);

});
