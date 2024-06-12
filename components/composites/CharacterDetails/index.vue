<template>
  <div class="character">
    <div class="info">
      <h1>{{ selectedCharacter?.name }}</h1>
      <div>
        {{ selectedCharacter?.species }} - {{ selectedCharacter?.status }}
      </div>
      <div>Last known location: {{ selectedCharacter?.location?.name }}</div>
      <div>
        First seens in: {{ (selectedCharacter?.episode as IEpisode)?.name }}
      </div>
      <Button
        class="action-button"
        @click="characterStore.addCharacterToFavourite(selectedCharacter)"
        v-if="!characterStore.favouriteCharactersList.map((item: ICharacter) => item?.id).includes(selectedCharacter?.id)"
        >Add to Favourites</Button
      >
      <Button
        @click="characterStore.removeCharacterToFavourite(selectedCharacter)"
        v-else="characterStore.favouriteCharactersList.map((item: ICharacter) => item?.id).includes(selectedCharacter?.id)"
        class="action-button"
        >Remove from Favourites</Button
      >
    </div>
    <NuxtImg :src="selectedCharacter?.image" :alt="selectedCharacter?.name" placeholder width="350" height="350" />
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useCharacterStore } from "@stores/Character";
import Button from "@components/base/Button.vue";
import type { IEpisode } from "@interfaces/episode";
import { fetchCharacterById } from "@services";
import type { ICharacter } from "@interfaces";

const characterStore = useCharacterStore();
const { selectedCharacter } = storeToRefs(characterStore);

const {
  params: { characterId: id },
} = useRoute();

window
  ? (window.onpopstate = () => {
      characterStore.clearSelectedCharacter();
    })
  : null;

onMounted(() => {
  fetchCharacterById(id);
});
</script>

<style lang="scss" scoped>
.character {
  display: flex;
  justify-content: space-between;
  width: auto;
  border: 1px solid lightgray;
  margin: 25px;

  .info {
    padding: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .action-button {
      background-color: black;
      color: white;
      padding: 5px 15px;
      cursor: pointer;
    }
  }
}
</style>
