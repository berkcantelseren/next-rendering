export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

// Boost app performance + handle multiple dynamic segments

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <h1>
      Product {id} details rendered at {new Date().toLocaleTimeString()}
    </h1>
  );
}
