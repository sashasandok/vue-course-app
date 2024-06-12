<template>
  <header class="app-header">
    <nav>
      <ul class="nav-list">
        <li class="nav-item">
          <nuxt-link :to="{ path: '/' }">Characters</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link :to="{ path: '/favourites' }">Favourites</nuxt-link>
        </li>
      </ul>
    </nav>
    <span class="counter-wrapper">
      <HeartIcon /> {{ favouriteCharactersList.length }}
    </span>
  </header>
</template>

<script lang="ts" setup>
import HeartIcon from "@components/base/HeartIcon.vue";
import { useCharacterStore } from "@stores/Character";

const characterStore = useCharacterStore();
const { favouriteCharactersList } = storeToRefs(characterStore);
</script>

<style scoped lang="scss">
.app-header {
  color: white;
  background: rgb(56, 56, 56);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  height: 50px;

  .nav-list {
    display: flex;

    .nav-item {
      list-style: none;
      margin-right: 15px;
      cursor: pointer;

      a {
        color: rgb(184, 184, 184);
        text-decoration: none;
        text-transform: uppercase;

        &:hover {
          color: white;
        }
      }
    }
  }

  .counter-wrapper {
    display: flex;

    svg {
      margin-right: 7px;
    }
  }
}
</style>
