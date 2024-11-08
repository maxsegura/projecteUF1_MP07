<template>
  <div id="app">
    <nav class="navbar">
      <router-link to="/" class="nav-item" active-class="active-link">Inici</router-link>
      <router-link to="/calculator" class="nav-item" active-class="active-link">Calculadora</router-link>
      <router-link to="/comments" class="nav-item" active-class="active-link">Comentaris</router-link>
      <router-link to="/users" class="nav-item" active-class="active-link">Usuaris</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
#app {
  font-family: Arial, sans-serif;
}

.navbar {
  background-color: #333;
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

.nav-item {
  color: #fff;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  padding: 0.5rem;
  transition: color 0.3s ease;
}

.nav-item:hover {
  color: #ddd;
}

.active-link {
  border-bottom: 2px solid #fff;
  color: #ddd;
}
</style>
