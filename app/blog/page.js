"use client";

import LiquidGlass from "@/components/LiquidGlass";
import NavBar from "@/components/Navbar";
import Link from "next/link";

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "Exploring Nigerian Food Culture: A Journey Through Flavors",
      excerpt:
        "From the spicy jollof rice of Lagos to the hearty yam porridge of the East, Nigerian cuisine is a vibrant tapestry of flavors and traditions. Discover the stories behind our beloved dishes.",
      slug: "nigerian-food-culture",
    },
    {
      id: 2,
      title: "Top 5 Tips for Perfect Egusi Soup",
      excerpt:
        "Master the art of cooking Egusi soup with these expert tips, from choosing the right melon seeds to balancing spices for that authentic taste.",
      slug: "egusi-soup-tips",
    },
    {
      id: 3,
      title: "Health Benefits of Bitterleaf: Nature’s Superfood",
      excerpt:
        "Bitterleaf is more than just a soup ingredient. Learn about its nutritional benefits, from boosting immunity to aiding digestion, and how to incorporate it into your diet.",
      slug: "bitterleaf-benefits",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-light)] text-[var(--text-dark)]">
      {/* ✅ Fixed Navbar */}

      {/* ✅ Padding-top so content doesn’t hide under the navbar */}
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8 pt-[9vh]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-semibold  text-center text-[var(--text-dark)] mb-10">
            Latest Posts
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {posts.map((post) => (
              <LiquidGlass
                key={post.id}
                // color1="#d0000090"
                color1="#ffba0840"
                color2="#facc1520"
                waveFrom="#f0fdf4"
                waveTo="#ef4444"
                speed={20}
                className="backdrop-blur-md w-full h-full flex rounded-md p-4 border border-[var(--foreground)]
             transition-all duration-300 ease-in-out hover:scale-[1.03] hover:-translate-y-1 hover:shadow-lg"
              >
                <article className="flex flex-col h-full ">
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-base leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="w-fit mx-auto bg-[var(--foreground)] text-[var(--background)] px-4 py-2 rounded-md hover:opacity-90 mt-auto"
                  >
                    Read More
                  </Link>
                </article>
              </LiquidGlass>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

// const blogPosts = [
//   {
//     id: 1,
//     title: "Nigerian Food Culture: More Than a Meal",
//     excerpt:
//       "Nigerian soups represent tradition, family, and identity. Discover how they shape our daily lives...",
//   },
//   {
//     id: 2,
//     title: "5 Tips for Cooking Nigerian Soups Abroad",
//     excerpt:
//       "Struggling to find Nigerian ingredients? Here are practical tips to substitute without losing flavor...",
//   },
//   {
//     id: 3,
//     title: "Health Benefits of Bitterleaf Soup",
//     excerpt:
//       "Beyond its unique taste, Bitterleaf (Ofe Onugbu) is packed with medicinal properties...",
//   },
// ];

// export default function BlogPage() {
//   return (
//     <div className="min-h-screen bg-emerald-50 px-6 py-12">
//       <h1 className="text-4xl font-bold text-emerald-900 mb-8 text-center">
//         Blog & Articles
//       </h1>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {blogPosts.map((post) => (
//           <div
//             key={post.id}
//             className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition"
//           >
//             <h2 className="text-xl font-semibold text-emerald-800">
//               {post.title}
//             </h2>
//             <p className="text-gray-700 mt-3">{post.excerpt}</p>
//             <button className="mt-4 text-emerald-600 font-semibold hover:underline">
//               Read More →
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
