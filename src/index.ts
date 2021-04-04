import { sortClsx } from "./rules/sort-clsx";

export = {
  rules: {
    sortClsx: sortClsx,
  },
  configs: {
    all: {
      plugins: ["sort-clsx"],
      rules: {
        "sort-clsx": "error",
      },
    },
  },
};