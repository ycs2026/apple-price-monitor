import { sendTelegram } from "./telegram.js";

import { discoverIPhones } from "./apple/discover.js";

export default {

  async fetch(request, env) {

    const models = await discoverIPhones();

    let msg = "🍎 Apple 官网发现机型\n\n";

    for (const m of models) {

      msg += `• ${m}\n`;

    }

    await sendTelegram(env, msg);

    return new Response(msg);

  }

};
