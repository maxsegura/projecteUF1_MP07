<template>
  <div class="comments-container">
    <h2>Comentaris</h2>
    <ul class="comments-list">
      <li v-for="comment in comments" :key="comment.id" class="comment-item">
        <strong>{{ comment.name }}</strong>: {{ comment.body }}
      </li>
    </ul>
    <footer class="footer">
      Projecte realitzat per Max Segura
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      comments: []
    };
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(data => {
          this.comments = data;
        });
  }
}
</script>

<style scoped>
.comments-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
  max-width: 600px;
  padding: 20px;
  border: 2px solid #007BFF;
  border-radius: 8px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  background-color: #f8f9fa;
  font-family: 'Arial', sans-serif;
}

h2 {
  margin-bottom: 20px;
  color: #333;
  text-align: center;
}

.comments-list {
  list-style: none;
  padding: 0;
  width: 100%;
}

.comment-item {
  padding: 10px 15px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  transition: background-color 0.3s;
}

.comment-item:hover {
  background-color: #e9ecef;
}

.comment-item strong {
  color: #007BFF;
}

.footer {
  margin-top: 20px;
  font-size: 0.9rem;
  color: #999;
  text-align: center;
}
</style>