<template>
  <div class="filter-wrapper">
    <Filters />
    <Search />
  </div>
</template>

<script lang="ts" setup>
import Filters from "@components/composites/CharactersFilter/Filters.vue";
import Search from "@components/composites/CharactersFilter/Search.vue";
</script>

<style scoped>
.filter-wrapper {
  padding: 0px 55px;
  height: 70px;
  display: flex;
  align-items: center;
  background-color: rgb(247, 247, 247);
}
</style>
