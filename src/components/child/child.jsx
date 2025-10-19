import { memo } from "react";

// This child components

function Child({names}) {

  console.log("The child is rendring Right now");
  return (
    <>
      <h1 className="bg-white">Hi , {names.names}</h1>
    </>
  );
}
export default memo(Child);
