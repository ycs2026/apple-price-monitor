export async function sendTelegram(env, text) {

    const url =

        `https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`;

    const body = {

        chat_id: env.TELEGRAM_CHAT_ID,

        text: text,

        parse_mode: "HTML",

        disable_web_page_preview: true

    };

    const response = await fetch(url, {

        method: "POST",

        headers: {

            "Content-Type": "application/json"

        },

        body: JSON.stringify(body)

    });

    if (!response.ok) {

        const err = await response.text();

        throw new Error(err);

    }

    return await response.json();

}
