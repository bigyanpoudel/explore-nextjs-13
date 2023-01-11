import React from "react";
import Image from "next/image";
/**
 * It's the shared layout to all the pages inside about folder
 *The layout is not recreated every time when we navigate between the pages
 *
 */
const AboutLayout = ({ children }: any) => {
  return (
    <div>
      <p>This is the layout for all the pages inside the about</p>
      <div style={{ filter: "invert(1)" }}>
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      </div>
      <main>{children}</main>
    </div>
  );
};

export default AboutLayout;
