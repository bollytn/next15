export async function getPosts() {
    const postsFetch = await fetch("https://jsonplaceholder.typicode.com/users");
    const posts = await postsFetch.json();
    return posts
}
