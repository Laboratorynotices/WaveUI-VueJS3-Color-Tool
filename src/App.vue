<template>
  <w-app id="app" row>
    <aside>
      Nav menu
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </nav>
    </aside>
    <w-flex column>
      <header>Header</header>
      <main class="grow">
        Main content
        <router-view/>
      </main>
      <footer>Footer</footer>
    </w-flex>
  </w-app>

</template>

<script setup>
document.title = 'Выбор цвета -- Wave UI (Vue.js 3)'
</script>

<style>
/* Demo styles - can be discarded. */
.w-app {padding: 4px;background-color: #fffeed;}
header, footer, aside, main {
  margin: 4px;
  padding: 12px;
  text-transform: uppercase;
  color: #666;
  border: 1px solid rgba(0, 0, 0, 0.07);
}
header, footer {background-color: #e9f8fe;min-height: 60px;}
aside {background-color: #fef2ff;}
main {background-color: #efffed;}
</style>
