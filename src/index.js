export default {
  async fetch(req, env) {
    const worker = env.DISPATCHER.get("customer-worker-1");
    return await worker.fetch(req);
  },
};
