export default {

  async fetch(request, env) {

    return new Response(

      JSON.stringify({

        hasToken: !!env.TELEGRAM_BOT_TOKEN,

        tokenPrefix: env.TELEGRAM_BOT_TOKEN

          ? env.TELEGRAM_BOT_TOKEN.substring(0, 10)

          : null,

        hasChatId: !!env.TELEGRAM_CHAT_ID,

        chatId: env.TELEGRAM_CHAT_ID

      }, null, 2),

      {

        headers: {

          "content-type": "application/json"

        }

      }

    );

  }

};
