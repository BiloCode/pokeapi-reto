import { URL_BASE } from "@/config/http";
import { PokeListResultType } from "@/app/types/PokeListResultType";

type Params = Partial<{
  limit: number;
  offset: number;
}>;

type ReturnType = PokeListResultType | null;

const getPokemonList = async (props?: Params): Promise<ReturnType> => {
  const params = new URLSearchParams();

  const limit = props?.limit || 20;
  const offset = props?.offset || 0;

  params.append("limit", limit.toString());
  params.append("offset", offset.toString());

  const url = `${URL_BASE}/pokemon?${params}`;

  try {
    const request = await fetch(url);
    const requestData = await request.json();

    return requestData;
  } catch (error) {
    return null;
  }
};

export default getPokemonList;
