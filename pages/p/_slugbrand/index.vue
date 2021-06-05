<template>
  <div>
    <Breadcrumb :page_title="page_title" :links="breadcrumbLinks"></Breadcrumb>
    <div id="products-post">
      <div class="container">
        <div class="row">
          <div class="filters col-md-12 col-xs-12">
            <ul id="filters" class="clearfix"></ul>
          </div>
        </div>
        <div class="col-md-12 col-sm-12 col-xs-12 brand_main">
          <div class="row">
            <div
              v-for="(item, key) in brand_details.models"
              v-bind:key="key"
              class="col-md-4 col-sm-6 mix brands-item"
            >
              <div class="portfolio-wrapper">
                <div class="brand-thumb">
                  <a :href="'/models/' + item.slug">
                    <img
                      :src="
                        'https://paragontwowheeleraccessories.com/images/product_images/' +
                        item.model_display_picture
                      "
                      :alt="item.model_name"
                      class="model_img"
                  /></a>
                </div>
                <h3>{{ item.model_name }}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from "~/components/Common/breadcrumb";
export default {
  data() {
    return {
      page_title: this.$route.params["slugbrand"],
      fetchedData: [],
      brand_details: [],
      breadcrumbLinks: [
        {
          title: "Brands",
          link: "/brands",
        },
        {
          title: this.$route.params["slugbrand"].replace(/-/g, " "),
        },
      ],
    };
  },

  asyncData(context) {
    return context.$axios
      .get("?flag=brands_models&slug=" + context.params.slugbrand)
      .then((res) => {
        return { brand_details: res.data };
      });
  },
  // async fetch() {
  //   this.brand_details = await this.$axios.$get("?flag=brands_models&slug=" + this.$route.params.slugbrand);
  // },
  watch: {
    "$route.query": "$fetch",
  },
  components: { Breadcrumb },
};
</script>