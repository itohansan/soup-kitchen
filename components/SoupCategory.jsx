"use client";

import { NIGERIAN_SOUPS } from "@/public/assets";
import Image from "next/image";

// Utility function: group by category
function groupByCategory(soups) {
  return soups.reduce((groups, soup) => {
    if (!groups[soup.category]) {
      groups[soup.category] = [];
    }
    groups[soup.category].push(soup);
    return groups;
  }, {});
}

export default function SoupsByCategory() {
  const groupedSoups = groupByCategory(NIGERIAN_SOUPS);

  return (
    <div className="p-8 space-y-12">
      <h1 className="text-3xl font-bold">Nigerian Soups by Category</h1>

      {Object.entries(groupedSoups).map(([category, soups]) => (
        <section key={category}>
          <h2 className="text-2xl font-semibold mb-4 text-green-700">
            {category}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {soups.map((soup) => (
              <div
                key={soup.id}
                className="border rounded-2xl shadow-md p-4 bg-white hover:shadow-lg transition"
              >
                {soup.images?.[0] && (
                  <Image
                    src={soup.images[0]}
                    alt={soup.name}
                    width={400}
                    height={300}
                    className="rounded-xl object-cover w-full h-[200px]"
                  />
                )}
                <h3 className="text-lg font-bold mt-4">{soup.name}</h3>
                <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                  {soup.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
