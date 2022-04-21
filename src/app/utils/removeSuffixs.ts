import { PokeResult } from "../types/PokeListResultType";

const removeSuffixs = (results: PokeResult[]) =>
  results.map((v) => {
    const url = v.url;
    const name = v.name.split("-").join(" ");

    return { name, url };
  });

export default removeSuffixs;
