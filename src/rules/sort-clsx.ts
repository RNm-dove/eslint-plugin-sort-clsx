import { TSESLint } from "@typescript-eslint/experimental-utils";

export const sortClsx: TSESLint.RuleModule<"sortClsx", []> = {
  meta: {
    type: "suggestion",
    docs: {
      category: "Possible Errors",
      description: "Check className order in clsx is put in alphabetically.",
      recommended: "error",
      url: "",
    },
    messages: {
      sortClsx: "className order is not listed alphabetically",
    },
    schema: [],
    fixable: "code",
  },
  create: (context) => {
  
    return {
      CallExpression(node) {
        if(node.callee.type === "Identifier" && node.callee.name === "clsx"){
          node.arguments.forEach(argument => {
            switch(argument.type){
              case "Literal":
                if(typeof argument.value === "string"){
                  const classNames = argument.value.split(/\s* \s*/); // whitespace https://stackoverflow.com/questions/43554930/splitting-string-with-random-white-spaces
                  // check classNames are listed in alphabetically order.
                  const sortedClassNames = classNames.slice().sort(); // copy and sort;
                  // when both orders do not match at least one element.
                  if(sortedClassNames.some((className, index) => className !== classNames[index])){
                    context.report({
                      node,
                      messageId: "sortClsx",
                      fix(fixer) {
                        return fixer.replaceTextRange([argument.range[0] + 1, argument.range[1] - 1], sortedClassNames.join(" "));
                      },
                    });
                  }
                }
                break;
              case "ObjectExpression":
                return;
              default: 
                return;
            }
          });
        }
      },
    };
  },
};
