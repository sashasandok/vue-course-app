<template>
  <div class="search">
    <input
      :value="characterStore.searchValue"
      @input="characterStore.setSearchValue"
      v-bind="$attrs"
      placeholder="Search by name..."
      class="search-input"
      @keydown.enter="onSubmitSearch"
    />
    <Button @click="onSubmitSearch" class="submit-button">Search</Button>
  </div>
</template>

<script lang="ts" setup>
import Button from "@components/base/Button.vue";
import { useCharacterStore } from "@stores/Character";
import { fetchCharactersList } from "@services";

const characterStore = useCharacterStore();

const onSubmitSearch = async () => {
  characterStore.clearCharactersList();
  fetchCharactersList();
};
</script>

<style lang="scss" scoped>
.search {
  position: relative;
  padding: 10px 30px;
  display: flex;
  height: 40px;
  width: 200px;

  .search-input {
    padding-left: 10px;
    font-size: 14px;
    border: 1px solid gray;
    border-radius: 3px 0px 0px 3px;
  }

  .submit-button {
    height: 40px;
    position: absolute;
    right: 0px;
    background: white;
    color: black;
    border: 1px solid black;
    border-radius: 0px 5px 5px 0px;
    font-weight: bold;
  }
}
</style>
