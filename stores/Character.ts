import { defineStore } from "pinia";
import type { ICharacter } from "@interfaces";

export const useCharacterStore = defineStore("character", () => {
  const charactersList = ref<any>([]);
  const charactersListError = ref<string>("");
  const searchValue = ref<string>("");
  const activeFilterTab = ref<string>("");
  const activePage = ref<number>(1);
  const paginationData = ref<any>(null);
  const favouriteCharactersList = ref<any>([]);
  const selectedCharacter = ref<ICharacter | null>(null);

  const setCharactersList = (data: any) => {
    charactersList.value = data.results;
    paginationData.value = data.info;
  };

  const clearCharactersList = () => {
    charactersList.value = [];
    paginationData.value = null;
    charactersListError.value = "";
  };

  const setSelectedCharacter = (data: ICharacter) => {
    selectedCharacter.value = data;
  };

  const clearSelectedCharacter = () => {
    selectedCharacter.value = null;
  };

  const setSearchValue = (evt: Event) => {
    searchValue.value = (evt.target as HTMLInputElement).value;
  };

  const resetSearchValue = () => {
    searchValue.value = "";
  };

  const setActiveFilterTab = (val: string) => {
    activeFilterTab.value = val;
    charactersListError.value = "";
    paginationData.value = null;
    activePage.value = 1;
    charactersList.value = [];
  };

  const setActivePage = async (val: number) => {
    activePage.value = val;
  };

  const addCharacterToFavourite = (character: ICharacter | null) => {
    const items = [...favouriteCharactersList.value, character];
    localStorage.setItem("favouriteCharactersList", JSON.stringify(items));
    favouriteCharactersList.value = items;
  };

  const removeCharacterToFavourite = (character: ICharacter | null) => {
    const items = favouriteCharactersList.value.filter(
      (item: ICharacter) => item?.id !== character?.id
    );

    localStorage.setItem("favouriteCharactersList", JSON.stringify(items));
    favouriteCharactersList.value = items;
  };

  const setFavouriteCharactersList = (data: ICharacter[]) => {
    favouriteCharactersList.value = data;
  };

  return {
    setCharactersList,
    clearCharactersList,
    charactersList,
    setSearchValue,
    resetSearchValue,
    searchValue,
    activeFilterTab,
    setActiveFilterTab,
    activePage,
    setActivePage,
    paginationData,
    charactersListError,
    favouriteCharactersList,
    addCharacterToFavourite,
    removeCharacterToFavourite,
    selectedCharacter,
    setSelectedCharacter,
    clearSelectedCharacter,
    setFavouriteCharactersList,
  };
});
