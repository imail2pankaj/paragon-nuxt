<template>
  <div>
    <Breadcrumb :page_title="page_title"></Breadcrumb>
    <div id="products-post">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-sm-12 col-xs-12 brand_main">
            
            <div v-for="(brand, key) in brands" v-bind:key="key" class="col-md-4 col-sm-6 mix brands-item">
              <div class="portfolio-wrapper">
                <div class="brand-thumb">
                  <nuxt-link :to="'brands/' + brand.slug" >
                    <img :src="'https://paragontwowheeleraccessories.com/images/product_images/' + brand.brand_image" :alt="brand.brand_name" class="model_img" />
                  </nuxt-link>
                </div>
                <h3>{{brand.brand_name}}</h3>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from "../../components/Common/breadcrumb";

export default {
  data() {
    return {
      page_title: 'Brands',
      brands: [],
    };
  },
  async fetch() {
    this.brands = await this.$axios.$get("?flag=brands");
  },
  components: {
    Breadcrumb,
  },
  layout: "main"
};
</script>