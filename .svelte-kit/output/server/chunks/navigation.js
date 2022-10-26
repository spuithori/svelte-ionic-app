import "./index.js";
function guard(name) {
  return () => {
    throw new Error(`Cannot call ${name}(...) on the server`);
  };
}
const goto = guard("goto");
const prefetchRoutes = guard("prefetchRoutes");
export {
  goto as g,
  prefetchRoutes as p
};
