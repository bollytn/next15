import Link from "next/link";
import { getSlug } from "../helper/slugify";
import { getPosts } from "../helper/api";

export default async function Page() {
    const posts = await getPosts()
    return (
        <>
            <h1>Blog Page</h1>
            <ul>
                {posts.map((post, index) => {
                    return (
                        <li key={index}>
                            <Link href={"/posts/"+ getSlug(post)}>{post.name}</Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}
