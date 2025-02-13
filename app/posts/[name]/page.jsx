import React from 'react'
import { getSlug } from '../../helper/slugify';


async function getPost(name) {
    const postsFetch = await fetch("https://jsonplaceholder.typicode.com/users");
    const posts = await postsFetch.json();

    const post = posts.filter(item => getSlug(name) === getSlug(item.name))[0]
    return post;
}

export default async function Post({ params }) {
    const post = await getPost(params.name)
    return (
        <>
            <h1>{post.name}</h1>
            <h2>{post.email}</h2>
            <h3>{post.address.street}</h3>
        </>
    )
}
