export default function AboutPage() {
  console.log("About server component");
  return (
    <div>
      <h1>About Page</h1>
      <p className="text-2xl text-black bg-red-200 text-nowrap mt-12">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut delectus
        blanditiis nesciunt, quo ad quam praesentium officia, sint laudantium
        quas amet consectetur tempore veniam quibusdam commodi placeat quidem
        illo autem?
      </p>
    </div>
  );
}

// Cant put state in server component. Need client component for that.
