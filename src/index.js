export default {

  async fetch(request, env) {

    return new Response("Apple Price Monitor Running");

  },

  async scheduled(event, env, ctx) {

    console.log("Cron running");

  }

}
