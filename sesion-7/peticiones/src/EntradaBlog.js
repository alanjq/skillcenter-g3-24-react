export function EntradaBlog(post) {
    return (
        <article data-userid={post.userId} data-id={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </article>
    )
}
