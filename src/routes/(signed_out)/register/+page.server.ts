import { fail, redirect } from "@sveltejs/kit";
import { prisma } from "$lib";

export const actions = {
  register: async ({ request, cookies, locals }) => {
    let data = await request.formData();
    let username = data.get("username")?.toString();
    let password = data.get("password")?.toString();
    let confirm_password = data.get("confirm_password")?.toString();

    if (username && password && confirm_password) {
      if (password != confirm_password) {
        return fail(400, { error: "passwords must match" });
      }

      let existingUser = await prisma.user.findUnique({
        where: { name: username },
      });

      if (existingUser) {
        // user exists, check if passwords match
        return fail(409, { error: "user already exists" });
      } else {
        existingUser = await prisma.user.create({
          data: {
            name: username,
            password,
          },
        });
     
        cookies.set("user_id", existingUser.id, { secure: false , path: "/"});
        console.log(username + " logged in");
        throw redirect(307, "/");
      }
    } else {
      return fail(400, { error: "incomplete data submitted" });
    }
  },
};
