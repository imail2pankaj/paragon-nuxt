<template>
    <div class="navigation-main">
      <div class="container">
          <div class="collapsed navbar-collapse js-navbar-collapse target mobile-menu" id="close">
            <a href="#" class="close-menu" onclick="hide('close')"><i class="fa fa-closet"></i></a>
            <MenuLeft />
            <MenuRight />
        </div>
      </div>
  </div>
</template>
<script>
import MenuLeft from "./menu-left";
import MenuRight from "./menu-right";
export default {
  components: {
    MenuLeft,
    MenuRight,
  },
};
</script>