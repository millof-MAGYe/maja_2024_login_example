import type { PageServerLoad } from './$types';

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
    add: async ({ request, params, cookies }) => {
    let data = await request.formData();
    let image = data.get("image") as File;
    let base64String = Buffer.from(await
    image.arrayBuffer()).toString('base64');
    await prisma.image.create({
    data: {
    encoding: base64String,
    },
    });
    },
    };