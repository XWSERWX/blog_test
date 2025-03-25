import { fetchPosts } from "./api/posts";
import { HomeContent } from "./components/HomeContent";

export default async function HomePage() {
  const posts = await fetchPosts();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Блог</h1>
      <HomeContent initialPosts={posts} />
    </div>
  );
}
