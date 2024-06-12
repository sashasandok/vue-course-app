import { characterApi } from "@api/character";
import { useCharacterStore } from "@stores/Character";

export const fetchCharactersList = async () => {
  const characterStore = useCharacterStore();
  try {
    const res = await characterApi.getCharactersList(
      `name=${characterStore.searchValue}&species=${characterStore.activeFilterTab}&page=${characterStore.activePage}`
    );

    if (res.status >= 200 && res.status < 300) {
      characterStore.setCharactersList(res?.data);
    }
  } catch (error: any) {
    characterStore.charactersListError = error;
  }
};

export const fetchCharacterById = async (id: string | string[]) => {
  const characterStore = useCharacterStore();
  try {
    const res = await characterApi.getCharacterById(+id);

    if (res.status >= 200 && res.status < 300) {
      const episodeId = res?.data?.episode[0].match(/\d/g).join("");
      const episode = await characterApi.getCharacterSeenEpisode(episodeId);

      if (episode.status >= 200 && res.status < 300) {
        characterStore.setSelectedCharacter({
          ...res?.data,
          episode: episode?.data,
        });
      }
    }
  } catch (error: any) {
    characterStore.charactersListError = error;
  }
};
