<template>
  <nav class="navbar navbar-inverse">
    <div class="container">
      <Logo/>
      <Search/>
    </div>
    <NavigationMenu/>
  </nav>
</template>

<script>
import Logo from './logo';
import Search from './search';
import NavigationMenu  from '../Navigation';
export default {
  components : {
    Logo,
    Search,
    NavigationMenu
  }
};
</script>
