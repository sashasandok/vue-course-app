<template>
  <div class="pagination">
    <div class="count">
      Page {{ characterStore.activePage }} of
      {{ characterStore.paginationData?.pages }}
    </div>
    <div class="actions">
      <button
        :disabled="characterStore.activePage <= 1 || !characterStore.charactersList.length || characterStore.activePage === 1"
        class="button"
        @click="onPaginationClick('prev')"
      >
        << Prev
      </button>
      <button
        :disabled="characterStore.activePage === characterStore.paginationData?.pages || !characterStore.charactersList.length || characterStore.activePage > 1"
        class="button"
        @click="onPaginationClick('next')"
      >
        Next >>
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useCharacterStore } from "@stores/Character";
import { fetchCharactersList } from "@services";

const characterStore = useCharacterStore();

const onPaginationClick = async (destination: string) => {
  characterStore.setActivePage(
    destination === "prev"
      ? characterStore.activePage - 1
      : characterStore.activePage + 1
  );
  characterStore.clearCharactersList();
  fetchCharactersList();
};
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border: 1px solid lightgray;
  padding-right: 25px;
  height: 50px;

  .actions {
    display: flex;

    .button {
      background: white;
      border: transparent;
      cursor: pointer;
    }
  }
}
</style>
