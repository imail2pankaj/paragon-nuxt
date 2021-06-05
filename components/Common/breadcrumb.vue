<template>
  <div id="heading">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="heading-content">
            <h2>{{ page_title }}</h2>
            <span>
              <a href="/">Home</a> /
              <template v-for="(link, key) in links">
                <span v-if="link.link" v-bind:key="key" > 
                  <nuxt-link :to="link.link">{{link.title}}</nuxt-link> /
                </span>
                <span v-if="!link.link" v-bind:key="key" > 
                  {{link.title}}
                </span>
              </template>
              <template  v-if="!links">
                {{ page_title }}
              </template>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["page_title",'links'],
};
</script>