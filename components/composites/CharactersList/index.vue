<template>
  <div class="characters-list">
    <div v-if="charactersList.length" v-for="character in charactersList">
      <CharacterCard
        :character="character"
        :key="character.id"
        @click="onCardClickHandler(character.id)"
      />
    </div>
    <div v-if="charactersListError" class="error">
      {{ charactersListError }}
    </div>
  </div>
  <Pagination />
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useCharacterStore } from "@stores/Character";
import CharacterCard from "@components/composites/CharactersList/CharacterCard.vue";
import Pagination from "@components/composites/Pagination.vue";
import { fetchCharactersList } from "@services";

const router = useRouter();

const characterStore = useCharacterStore();

const { charactersList, charactersListError } = storeToRefs(characterStore);

onMounted(() => {
  fetchCharactersList();
});

const onCardClickHandler = async (id: number) => {
  return router.push(`/character/${id}`);
};
</script>

<style lang="scss" scoped>
.characters-list {
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
