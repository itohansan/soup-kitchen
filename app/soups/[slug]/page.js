import Hero from "@/components/Hero";
import { NIGERIAN_SOUPS } from "@/public/assets";

export default async function soupDetails({ params }) {
  console.log("PARAMS:", params);

  const { slug } = await params;

  const soup = NIGERIAN_SOUPS.find((s) => s.slug === slug);
  if (!soup) {
    notFound(); // Shows 404 page instead of plain text
  }

  return (
    <>
      <Hero
        className="bg-center bg-no-repeat mb-10 bg-cover"
        style={{
          backgroundImage: `url(${soup.images[1]})`,
        }}
      ></Hero>
      <h2 className="text-5xl font-semibold mb-6 text-center text-[var(--text-dark)] ">
        {soup.name} <br></br>
        <span className="text-2xl">{soup.category}</span>
      </h2>
      <div className="w-[93vw] mx-auto p-10 bg-[var(--bg-light)] md:text-2xl mt-20 rounded-4xl  text-[var(--deep-red)] font-medium">
        <p className=" mb-7">
          {" "}
          <span className="font-bold"> {soup.name}</span>
          <span className="lowercase "> {soup.description}</span>
        </p>
        <p className="mb-4 ">
          <span className="font-extrabold uppercase">Servings: </span>
          {soup.servings}
        </p>
        <p className="mb-4">
          <span className="font-extrabold uppercase">prep Time: </span>
          {soup.prepTime}
        </p>
        <p className=" mb-4">
          <span className="font-extrabold  uppercase">cook Time: </span>
          {soup.cookTime}
        </p>
        <p className="mb-4">
          <span className="uppercase font-extrabold">total Time: </span>
          {soup.totalTime}
        </p>
        <p className=" mb-4">
          <span className="font-extrabold uppercase">
            Calories Per Serving:{" "}
          </span>
          {soup.caloriesPerServing}
        </p>

        <h2 className="text-2xl font-semibold mt-10">Ingredients</h2>
        <ul className="list-disc list-inside mt-3 space-y-3">
          {soup.ingredients.map((ing, i) => (
            <li key={i}>
              {ing.name}- {ing.amount}
            </li>
          ))}
        </ul>
        <h2 className="text-2xl font-semibold mt-10">Preparation</h2>
        <ol className="list-decimal list-inside  mt-3 space-y-3 font-medium">
          {soup.preparation.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>

        <h2 className="text-2xl font-semibold mt-10">
          Best Swallows for {soup.name}
        </h2>
        <ol className="list-decimal list-inside  mt-3 space-y-2">
          {soup.bestSwallows.map((swallow, i) => (
            <li key={i}>{swallow}</li>
          ))}
        </ol>
      </div>
    </>
  );
}
