import { redirect } from "@sveltejs/kit";

export const load = async ({ cookies }) => {
  let user_id = cookies.get("user_id");
  if (user_id) {
    throw redirect(303, "/");
  }
};
