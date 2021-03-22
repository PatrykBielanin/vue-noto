<template>
  <div id="app">
    <div>
          <router-view name="header"></router-view>
          <div class="main row">

                <router-view name="sidebar"></router-view>

                <transition name="fade" mode="out-in">
                    <router-view :todos="todos" :notes="notes" :key="$route.fullPath"></router-view>
                </transition>

                <router-view name="footer" :key="4"></router-view>

          </div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  computed: {
      notes() {
          return this.$store.state.notes;
      },
      todos() {
          return this.$store.state.todos;
      }
  }
}
</script>

<style lang="scss">
    .main{
        height: 80vh;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .25s
    }
    .fade-enter, .fade-leave-to{
        opacity: 0
    }
</style>
