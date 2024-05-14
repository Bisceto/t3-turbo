import { TRPCRouterRecord } from "@trpc/server";

import { authRouter } from "./router/auth";
import { postRouter } from "./router/post";
import { createTRPCRouter, publicProcedure } from "./trpc";

export const appRouter = createTRPCRouter({
  auth: authRouter,
  post: postRouter,
  test: {
    ping: publicProcedure.query(() => {
      return "pong";
    }),
  } satisfies TRPCRouterRecord,
});

// export type definition of API
export type AppRouter = typeof appRouter;
