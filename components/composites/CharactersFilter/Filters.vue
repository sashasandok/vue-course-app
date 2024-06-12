<template>
  <div class="filters">
    <div
      v-for="tab in tabsData"
      :class="{ active: tab.value == characterStore.activeFilterTab }"
      class="filter-item"
      @click="onTabItemClick(tab.value)"
    >
      {{ tab.title }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { tabsData } from "@mocks";
import { useCharacterStore } from "@stores/Character";
import { fetchCharactersList } from "@services";

const characterStore = useCharacterStore();

const onTabItemClick = async (value: string) => {
  characterStore.setActiveFilterTab(value);
  fetchCharactersList();
};
</script>

<style lang="scss" scoped>
.filters {
  display: flex;
  border: 1px solid black;
  border-radius: 5px;
  height: 38px;

  .filter-item {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    cursor: pointer;
    color: black;

    &:not(:first-child) {
      border-left: 1px solid black;
    }
  }

  .active {
    background: black;
    color: white;
  }
}
</style>
