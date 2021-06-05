<template>
  <div class="col-sm-2 usefull-links">
    <h4>Categories<span></span></h4>
    <ul>
      <li v-for="(item, key) in categories" v-bind:key="key">
        <nuxt-link :to="'/' + item.slug">{{item.brand_name}}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [],
    };
  },
  async fetch() {
    this.categories = await this.$axios
      .$get("?flag=footer_category");
  },
};
</script>