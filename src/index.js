export default {
  async fetch(req, env) {
    const worker = env.DISPATCHER.get("testing-user-worker");
    return await worker.fetch(req);
  },
};
