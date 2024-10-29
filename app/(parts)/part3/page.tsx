import { serverClient } from "../../_trpc/serverClient";
import { FilterablePokedexTable } from "./FIlterablePokedexTable";

const ITEMS_PER_PAGE = 4;

interface SearchParams {
  type?: string;
  page?: string;
}

export default async function PartThree({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const searchType = searchParams.type || '';
  const currentPage = Number(searchParams.page) || 1;

  const { pokemons, hasNext} = await serverClient.getPokemonByTypeRouter.getPokemonByType({
    type: searchType,
    page: currentPage,
    limit: ITEMS_PER_PAGE
  });

  return (
    <div className="pb-[3vw]">
      <FilterablePokedexTable pokemons={pokemons} hasNext={hasNext}/>
    </div>
  );
}