import { Hono } from "hono";

import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

import { updateBlogInput, createBlogInput } from "@rushikeshshelar/medium-common"

export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    },
    Variables: {
        userId: string
    }
}>();



blogRouter.post("/", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const userId = c.get("userId");

    const body = await c.req.json();
    const { success } = createBlogInput.safeParse(body);

    if (!success) {
        return c.json({
            error: "Inputs not Correct"
        })
    }

    try {
        const post = await prisma.post.create({
            data: {
                title: body.title,
                content: body.content,
                authorId: userId
            }
        })


        return c.json({
            success: "Post Created",
            id: post.id
        });

    } catch (e) {
        return c.json({
            err: "Something Went Wrong"
        })
    }

});

blogRouter.put("/update", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const userId = c.get("userId");

    const body = await c.req.json();

    const { success } = updateBlogInput.safeParse(body);

    if (!success) {
        return c.json({
            error: "Inputs not Correct"
        })
    }

    try {
        const post = await prisma.post.update({
            where: {
                id: body.id,
                authorId: userId,
            },
            data: {
                title: body.title,
                content: body.content,
            }
        })

        return c.json({
            success: "Post Updated",
            post
        });
    } catch (error) {
        return c.json({
            error: "Something went wrong"
        })
    }


})

blogRouter.get("/bulk", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    try {

        const allPosts = await prisma.post.findMany({
            where: {
                published: false
            }
        });
        console.log(allPosts)

        return c.json({
            allPosts
        })

    } catch (error) {
        return c.json({
            error: "Something went wrong"
        })
    }
})

blogRouter.get("/:id", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const id = c.req.param("id")

    try {
        const post = await prisma.post.findFirst({
            where: {
                id
            }
        });

        return c.json({
            post
        })

    } catch (error) {
        return c.json({
            error: "Something went wrong"
        })
    }

})
