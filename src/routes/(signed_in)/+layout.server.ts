import { redirect } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";
import { prisma } from "$lib";

// om vi försöker besöka home (/) oinloggad, navigera till login
export const load = (async ({ cookies }) => {
  let user_id = cookies.get("user_id");
  if (!user_id) {
    throw redirect(303, "/login");
  }

  let user = await prisma.user.findUnique({
    where: { id: user_id },
  });

  if (!user) {
    cookies.delete("user_id", { path: "/" });
    throw redirect(303, "/login");
  }

  return { user };
}) satisfies LayoutServerLoad;
