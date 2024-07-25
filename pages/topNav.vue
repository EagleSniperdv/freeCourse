<template>
  <nav class="nav1">
    <Transition>
      <ul class="sidebar">
              <li @click="hideSideBar()"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 -960 960 960" width="26"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></a></li>
              <li><a href="#">Home</a></li>
              <li><a href="#">blog</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Media</a></li>    
      </ul>
    </Transition>

    <ul>
      <li><a href="#">Logo</a></li>
      <li class="hideOnMobile"><a href="#">Home</a></li>
      <li class="hideOnMobile"><a href="#">blog</a></li>
      <li class="hideOnMobile"><a href="#">About us</a></li>
      <li class="hideOnMobile"><a href="#">Media</a></li>
      <li class="menu-button" @click="showSideBar()"><a href=""><svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 -960 960 960" width="26"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></a></li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
    background-color: white;
    box-shadow: 3px 3px 5px rgba(0, 0,0, 0.1);
}

nav ul {
    width: 100%;
    list-style: none;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

nav li {
    height: 50px;
}

nav a{
    height: 100%;
    padding: 0 30px;
    text-decoration: none;
    display: flex;
    align-items: center;
    color: black;
}

nav a:hover{
    background-color: #f0f0f0;

}

nav li:first-child {
    margin-right: auto;
}

.sidebar {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 250px;
    z-index: 999;
    background-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    box-shadow: -10px 0 10px rgba(0, 0, 0, 0.1);
    /* display: none; */
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
}

.sidebar li {
    width: 100%;
}

.sidebar a {
    width: 100%;
}

.menu-button{
    display: none;
}

@media(max-width: 800px){
    .hideOnMobile{
        display: none;
    }

    .menu-button{
        display: block;
    }
}

@media(max-width: 400px){
    .sidebar{
        width:100%;
    }
}

/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>

<script setup>

const showSideBar = () => {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'flex';
}

const hideSideBar = () => {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'none';
}
</script>