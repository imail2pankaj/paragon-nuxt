<template>
  <div>
    <div class="nav-cart">
      <a href="/cart" id="menu_cart"
        ><i class="fa fa-shopping-cart"></i> Cart (0)</a
      >
    </div>
    <ul class="nav navbar-nav account-menu">
      <li class="dropdown">
        <a href="#" class="dropdown-toggle" data-toggle="dropdown"
          >Account <span class="caret"></span></a
        ><span class="caret"></span>
        <div class="dropdown-menu">
          <ul v-if="isAuthenticated">
            <li><a href="/profile">Profile</a></li>
            <li><a href="/wishlist">Wishlist</a></li>
            <li><a @click="logout">Logout</a></li>
          </ul>
          <ul v-else>
            <li><a href="/register">Register</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["isAuthenticated"]),
  },
  methods: {
    async logout() {
      await this.$auth.logout();
    },
  },
};
</script>