import { RecipeList } from "../components/Parts/RecipeList.js";
import { MainBox } from "../components/Layout/MainBox.js";
import { FilterButtons } from "../components/Home/FilterButtons.js";
import { SearchInput } from "../components/Home/SearchInput.js";
import { RecipeContextProvider } from "../context/RecipeContext.js";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, FormProvider } from "react-hook-form";
import { SearchInputSchema, SearchInputType } from "../types/types.js";

export const HomeScreen = () => {
  const methods = useForm<SearchInputType>({
    resolver: yupResolver(SearchInputSchema),
  });

  return (
    <RecipeContextProvider>
      <MainBox>
        <FormProvider {...methods}>
          <SearchInput />
          <FilterButtons />
        </FormProvider>

        <RecipeList />
      </MainBox>
    </RecipeContextProvider>
  );
};