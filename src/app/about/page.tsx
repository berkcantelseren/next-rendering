export default function AboutPage() {
  console.log("About server component");
  return (
    <div>
      <h1>About Page</h1>
      <p className="text-2xl text-white bg-red-200 text-nowrap mt-12">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </p>
    </div>
  );
}

// Cant put state in server component. Need client component for that.
