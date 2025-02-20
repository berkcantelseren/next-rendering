import Link from "next/link";

export default function ProductsPage() {
  return (
    <>
      <h1>Featured Products</h1>
      <Link href="/products/1">Products 1</Link>
      <Link href="/products/2">Products 2</Link>
      <Link href="/products/3">Products 3</Link>
    </>
  );
}
