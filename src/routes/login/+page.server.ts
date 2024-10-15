import { fail, redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";
import { prisma } from "$lib";

export const load = (async () => {
  return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
  login: async ({ request, cookies, params }) => {
    let data = await request.formData();
    let username = data.get("username")?.toString();
    let password = data.get("password")?.toString();

    if (!username || !password) {
      return fail(400, { login_fail: "missing info" });
    }

    // does the user already exist ?

    let user = await prisma.user.findUnique({ where: { username } });

    if (user) {
      // if so, is the passwords matching ?
      if (user.password == password) {
        // if matching => login
        cookies.set("id", user.id, { secure: false, path: "/" });
        throw redirect(307, "/");
      } else {
        // else error
        return fail(401, { login_fail: "wrong password" });
      }
    } else {
      // if not exists, create user with the password
      user = await prisma.user.create({ data: { username, password } });
      cookies.set("id", user.id, { secure: false, path: "/" });
      throw redirect(307, "/");
    }
  },
  outlog: async ({ request, cookies, params }) => {
    cookies.delete("id", { path: "/" });
    throw redirect(307, "/login");
  },
};
