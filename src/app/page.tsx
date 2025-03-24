import { fetchPosts } from "./api/posts";
import { PostCard } from "./components/PostCard";

export default async function HomePage() {
  const posts = await fetchPosts()

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Latest Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {posts.map((post: any) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
