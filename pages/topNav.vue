<template>
  <nav class="nav1">
    <ul>
      <li><a href="#">Logo</a></li>
      <li class="hideOnMobile"><a href="#">Home</a></li>
      <li class="hideOnMobile"><a href="#">blog</a></li>
      <li class="hideOnMobile"><a href="#">About us</a></li>
      <li class="hideOnMobile"><a href="#">Media</a></li>
      <li class="menu-button" onclick=showSidebar()><a href=""><svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 -960 960 960" width="26"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></a></li>
    </ul>
  </nav>
</template>

<style setup>
/* .nav1{
  display: flex;
} */

</style>

<script setup>

const showSideBar = () => {

}
</script>