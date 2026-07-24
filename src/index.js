import { sendTelegram } from "./telegram.js";

import { getAllIPhones } from "./apple.js";

export default {

  async fetch(request, env) {

    const phones = await getAllIPhones();

    let text = "🍎 Apple 官网当前监控机型\n\n";

    for (const phone of phones) {

      text += "• " + phone.name + "\n";

    }

    await sendTelegram(env, text);

    return new Response(text);

  }

};
