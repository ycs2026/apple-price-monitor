import { sendTelegram } from "./telegram.js";

export default {

  async fetch(request, env) {

    try {

      await sendTelegram(

        env,

        "🎉 Apple Price Monitor 已成功连接 Telegram！"

      );

      return new Response("Telegram OK");

    } catch (e) {

      return new Response("Telegram Error:\n" + e.message, {

        status: 500

      });

    }

  }

};
