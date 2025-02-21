import "server-only";

export const serverSideFunction = () => {
  console.log(
    `use multiple libraries,
      use env. variables,
      interact with a database
    `
  );
  return "server result";
};
