export default function AboutPage() {
  console.log("About server component");
  return (
    <div>
      <h1>About Page {new Date().toLocaleTimeString()}</h1>
    </div>
  );
}

// Cant put state in server component. Need client component for that.
