<template>
  <div class="users-container">
    <h2>Usuaris</h2>
    <ul>
      <li v-for="user in users" :key="user.id">
        <strong>{{ user.firstName }} {{ user.lastName }}</strong> <br />
        <span>Edat: {{ user.age }}</span> <br />
        <span>Correu electrònic: {{ user.email }}</span>
      </li>
    </ul>
    <footer class="footer">
      Projecte realitzat per Max Segura
    </footer>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      users: []
    };
  },
  mounted() {
    axios.get('https://dummyjson.com/users')
        .then(response => {
          this.users = response.data.users;
        });
  }
}
</script>

<style scoped>
.users-container {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  border: 2px solid #007BFF;
  border-radius: 8px;
  background-color: #f8f9fa;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  font-family: 'Arial', sans-serif;
}

h2 {
  margin-bottom: 20px;
  color: #333;
  text-align: center;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  padding: 10px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 10px;
}

li:last-child {
  border-bottom: none;
}

strong {
  color: #007BFF;
  font-size: 1.1em;
}

span {
  color: #555;
  font-size: 0.9em;
}

.footer {
  margin-top: 20px;
  font-size: 0.9rem;
  color: #999;
  text-align: center;
  border-top: 1px solid #ccc;
  padding-top: 10px;
}
</style>