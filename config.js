const env = Deno.env.toObject();
export const APP_PORT = env.PORT || 4000;
export const APP_HOST = env.HOST || "127.0.0.1";
