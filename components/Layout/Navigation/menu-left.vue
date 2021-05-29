<template>
  <ul class="nav navbar-nav">
    <li class="dropdown mega-dropdown">
      <a href="/brands" class="dropdown-toggle" data-toggle="dropdown">Brands <span class="caret"></span></a><span class="caret"></span>
      <div class="dropdown-menu">
        <ul>
          <li v-for="(item, key) in categories" v-bind:key="key">
            <a :href="item.link">for {{ item.brand_name }}</a>
            <ul v-if="item.models">
              <li v-for="(model, modelKey) in item.models" v-bind:key="modelKey">
                <a :href="model.link">
                  <i class="fa fa-caret-right"></i> {{model.model_name}}
                </a>
                <ul v-if="model.accesses">
                  <li v-for="(access, accessKey) in model.accesses" v-bind:key="accessKey">
                    <a :href="access.link">
                      <i class="fa fa-caret-right"></i> {{access.a_name}}
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </li>
    <li><a href="about-us/">About us</a></li>
    <li><a href="faq/">FAQ</a></li>
    <li><a href="contact-us/">Contact us</a></li>
  </ul>
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
      .$get("?flag=category_menu");
  },
};
</script>