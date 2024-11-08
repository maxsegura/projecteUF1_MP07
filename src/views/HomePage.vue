<template>
  <div class="container">
    <h1 class="title">Projecte JavaScript</h1>
    <p class="subtitle">MP07 Desenvolupament d’interfícies</p>
  </div>
  <footer class="footer">
    Projecte realitzat per Max Segura
  </footer>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  background-color: #f4f4f9;
  text-align: center;
  margin: 20px auto;
  max-width: 600px;
  border: 2px solid #007BFF;
  border-radius: 8px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
}

.title {
  font-size: 2.5rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 10px;
}

.subtitle {
  font-size: 1.2rem;
  font-weight: 400;
  color: #666;
}

.footer {
  text-align: center;
  margin-top: 20px;
  font-size: 0.9rem;
  color: #999;
  border-top: 1px solid #ccc;
  padding-top: 10px;
  max-width: 600px;
  margin: 20px auto;
}
</style>