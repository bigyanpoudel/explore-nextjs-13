"use client";
import { useEffect, useState } from "react";

export const NewComponent = () => {
  const [state, setState] = useState(0);
  const wait = (second: number) => {
    return new Promise<void>((resolve, reject) =>
      setTimeout(() => resolve(), second * 1000)
    );
  };
  useEffect(() => {
    const data = async () => {
      await wait(4);
      setState(123213);
    };
    data();
  }, []);

  return <div>Newc component 0 ${state}</div>;
};

export const NewComponent1 = () => {
  const wait = (second: number) => {
    return new Promise<void>((resolve, reject) =>
      setTimeout(() => resolve(), second * 1000)
    );
  };
  wait(4);
  return <div>Newc component 1</div>;
};

export const NewComponent2 = () => {
  const wait = (second: number) => {
    return new Promise<void>((resolve, reject) =>
      setTimeout(() => resolve(), second * 1000)
    );
  };
  wait(4);
  return <div>Newc component 2</div>;
};
