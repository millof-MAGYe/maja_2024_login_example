import { prisma } from '$lib';
import { Buffer } from 'buffer';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    const images = await prisma.image.findMany();
    return {
        images
    };
};

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