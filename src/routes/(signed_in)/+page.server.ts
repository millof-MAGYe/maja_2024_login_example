import { redirect, type Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { prisma } from "$lib";

export const load = (async ({ cookies }) => {
  return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
  click: async ({ params, cookies }) => {
    let user_id = cookies.get("user_id");
    if (!user_id) {
      throw redirect(303, "/login");
    }
    await prisma.user.update({
      where: { id: user_id },
      data: { count: { increment: 1 } },
    });
  },
};
