import { cookies } from "next/headers";

export default async function AboutPage() {
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme");
  console.log(theme);
  console.log("About server component");
  return (
    <div>
      <h1>About Page {new Date().toLocaleTimeString()}</h1>
    </div>
  );
}

// Cant put state in server component. Need client component for that.

// This page rendered with Dynamic Rendering because of cookies (on demend)
