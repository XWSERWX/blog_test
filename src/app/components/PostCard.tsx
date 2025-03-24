import Link from "next/link";

export function PostCard({ post }: { post: any }) {
    return (
        <div className="border p-4 rounded shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-sm text-gray-600 mt-2">{post.body.substring(0, 80)}...</p>
            <Link href={`/blog/${post.id}`}>
                <span className="text-blue-500 hover:underline mt-4 inline-block">Read more</span>
            </Link>
        </div>
    );
}
