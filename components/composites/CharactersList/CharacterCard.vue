<template>
  <div class="character-card">
    <NuxtImg :src="character?.image" :alt="character?.name" placeholder width="350" height="350" />
    <div class="content">
      <div class="about">
        <div class="name">{{ character?.name }}</div>
        <div>{{ character?.species }} - {{ character?.status }}</div>
      </div>
      <Button
        class="action-button"
        @click.stop.prevent="characterStore.addCharacterToFavourite(character as ICharacter)"
        v-if="!characterStore.favouriteCharactersList.map((item: ICharacter) => item?.id).includes(character?.id)"
        >Add to Favourites</Button
      >
      <Button
        @click.stop.prevent="characterStore.removeCharacterToFavourite(character as ICharacter)"
        v-else="characterStore.favouriteCharactersList.map((item: ICharacter) => item?.id).includes(character?.id)"
        class="action-button"
        >Remove from Favourites</Button
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import Button from "@components/base/Button.vue";
import { useCharacterStore } from "@stores/Character";
import type { ICharacter } from "@interfaces";

const characterStore = useCharacterStore();

const props = defineProps({
  character: Object,
});

const character = props.character;
</script>

<style lang="scss" scoped>
.character-card {
  display: flex;
  flex-direction: column;
  margin: 10px;
  border: 1px solid lightgray;
  cursor: pointer;

  .content {
    padding: 20px;

    .about {
      margin-bottom: 10px;
      .name {
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 3px;
      }

      .info {
        font-size: 16px;
        font-weight: 400;
      }
    }

    .action-button {
      cursor: pointer;
      background-color: black;
      color: white;
      padding: 5px 15px;
    }
  }
}
</style>
