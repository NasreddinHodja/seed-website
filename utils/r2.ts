export const CF_WORKER_BASE = "https://seed-r2-worker.seedworker.workers.dev/";

export function r2Url(bucket: string, path: string): string {
  return `${CF_WORKER_BASE}/${bucket}/${path}`
    .replace(/\/+/g, "/")
    .replace(":/", "://");
}
