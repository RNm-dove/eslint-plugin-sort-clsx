import React from "react";
import clsx from "clsx";

export const Success: React.FC = () => {
  return (
    <span className={clsx("aa b c d ee")}>SomeThing</span>
  );
};

export const Failed: React.FC = () => {
  return (
    <span className={clsx("d b aa c ee")}>SomeThing</span>
  );
};
