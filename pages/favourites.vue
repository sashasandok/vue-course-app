<template>
  <div class="favourite-characters-list">
    <div
      v-if="favouriteCharactersList.length"
      v-for="character in favouriteCharactersList"
    >
      <CharacterCard :character="character" :key="character.id"/>
    </div>
    <div v-if="!favouriteCharactersList.length" class="error">No cards</div>
  </div>
</template>

<script lang="ts" setup>
import { useCharacterStore } from "@stores/Character";
import CharacterCard from "@components/composites/CharactersList/CharacterCard.vue";

const characterStore = useCharacterStore();

const { favouriteCharactersList } = storeToRefs(characterStore);
</script>

<style scoped lang="scss">
.favourite-characters-list {
  display: flex;
  flex-wrap: wrap;
  min-height: calc(100vh - 50px - 70px - 52px);

  .error {
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 25px;
    font-size: 20px;
    font-weight: bold;
  }
}
</style>
