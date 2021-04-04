import { TSESLint } from "@typescript-eslint/experimental-utils";
import { sortClsx } from "../rules/sort-clsx";

const ruleName = "sort-clsx";
const tester = new TSESLint.RuleTester({
  parser: require.resolve("espree"),
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
});

describe("test", () => {
  tester.run(ruleName, sortClsx, {
    valid: [
      { code: "<span className={clsx('aa b c d ee')}>SomeThink</span>" },
    ],
    invalid: [
      {
        code: "<span className={clsx('c aa b ee d')}>SomeThing</span>",
        errors: [{ messageId: "sortClsx" }],
        output: "<span className={clsx('aa b c d ee')}>SomeThing</span>",
      },
    ],
  });
});
