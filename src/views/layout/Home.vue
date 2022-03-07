<template>
  <div class="home">
    <leftMenu />
    <div :class="{ 'main-app': true, 'menu-unfold': $store.state.collapsed }">
      <silderNav />
    </div>
  </div>
</template>

<script>
import leftMenu from './components/menu.vue';
import silderNav from './components/silderNav.vue';

export default {
  components: {
    leftMenu,
    silderNav,
  },
  data() {
    return {
    };
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
  },
};
</script>
