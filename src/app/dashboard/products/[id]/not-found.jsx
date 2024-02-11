import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <h2>404 Not Found</h2>
      <p>Could not find the product page.</p>
      <Link href="/dashboard/products">Go Back</Link>
    </main>
  );
}
