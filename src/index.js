import { sendTelegram } from "./telegram.js";

async function main() {

  const env = {

    TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN,

    TELEGRAM_CHAT_ID: process.env.TELEGRAM_CHAT_ID,

  };

  await sendTelegram(

    env,

    `✅ Apple Price Monitor 启动成功\n\n时间：${new Date().toLocaleString("zh-CN", {

      timeZone: "Asia/Shanghai",

    })}`

  );

}

main().catch((err) => {

  console.error(err);

  process.exit(1);

});
