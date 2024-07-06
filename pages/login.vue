<template>
    <div class="login-container">
        <h1>Login to {{ title }}</h1>
    <form >
        <div class="form-group">
            <label for="username">Username</label>
            <input id="username" v-model="username" type="text" required />
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input id="password" v-model="password" type="password" required />
        </div>
        <button type="submit">Login with Github.</button>
    </form>
        <p v-if="error">{{ error }}</p>
    </div>
</template>

<script setup>
const { title } = useCourse();
</script>


<style scoped>
.login-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
}

h1 {
  text-align: center;
}

.form-group {
  margin-bottom: 15px;
  margin-top: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input {
  width: 100%;
  padding: 8px;
  margin-bottom: 15px;
  box-sizing: border-box;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

p {
  color: red;
  text-align: center;
}
</style>

