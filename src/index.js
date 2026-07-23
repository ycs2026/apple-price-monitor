import { sendTelegram } from "./telegram.js";

export default {

    async fetch(request, env) {

        await sendTelegram(

            env,

            "✅ Apple Price Monitor 已启动"

        );

        return new Response("OK");

    },

    async scheduled(event, env, ctx) {

        ctx.waitUntil(

            sendTelegram(

                env,

                "⏰ 定时任务运行：" +

                new Date().toLocaleString("zh-CN")

            )

        );

    }

}
