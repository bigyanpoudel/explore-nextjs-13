/**
 * The page.tsx represent index.tsx file
 * so it will be the main page for /about
 *
 * Since this is the server component we can use a async
 */

import { Suspense, useEffect, useState } from "react";
import { NewComponent1, NewComponent2 } from "../../component/component";

async function About() {
  const wait = (second: number) => {
    return new Promise<void>((resolve, reject) =>
      setTimeout(() => resolve(), second * 1000)
    );
  };
  wait(4);
  return (
    <div>
      <NewComponent1 />
      <NewComponent2 />
    </div>
  );
}

export default About;
