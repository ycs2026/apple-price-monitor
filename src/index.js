import { sendTelegram } from "./telegram.js";

export default {

  async fetch(request, env) {

    try {

      await sendTelegram(

        env,

        "✅ Apple Price Monitor 测试成功！\nGitHub 自动部署正常。"

      );

      return new Response("Telegram Test OK");

    } catch (e) {

      return new Response(

        "Telegram Error:\n" + e.message,

        { status: 500 }

      );

    }

  },

  async scheduled(event, env, ctx) {

    ctx.waitUntil(

      sendTelegram(

        env,

        "⏰ 定时任务运行正常：" + new Date().toISOString()

      )

    );

  }

};
