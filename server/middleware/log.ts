import { useCookie, setCookie } from "h3";

export default defineEventHandler(async ({ req, res }) => {
  try {
    const config = useRuntimeConfig();

    let cookie = useCookie(req, "_id");
    if (!cookie) {
      const response = await $fetch<{ data: { cookie: string } }>(
        `${config.public.api}/logs/get`,
        {
          method: "POST",
          body: {
            pwd: config.logPwd
          }
        }
      );
      cookie = response.data.cookie;
      // @ts-expect-error The attribute is thought as to be not optimal
      setCookie(res, "_id", cookie, {
        expires: new Date(Date.now() + 6 * 30 * 24 * 60 * 60),
        path: "/",
        httpOnly: true,
        secure: true
      });
    }

    await $fetch(`${config.public.api}/logs/record`, {
      method: "POST",
      body: {
        pwd: config.logPwd,
        record: {
          cookie,
          ip: req.socket.remoteAddress,
          path: req.originalUrl,
          headers: req.headers
        }
      }
    });
  } catch (error) {}
});
