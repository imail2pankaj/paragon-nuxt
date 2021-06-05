<template>
  <div>
    <div v-for="(category, key) in categories" v-bind:key="key" class="product-slider-section">
      <div class="container">
        <div class="heading-section">
          <h2>{{category.brand_name}} <span>Accessories</span></h2>
          <a :href="'/brands/' + category.slug" class="view-all">View All</a>
        </div>
        <div class="row">
          <ProductListItem v-for="(product, itemKey) in category.accesses" v-bind:key="itemKey" :product="product"></ProductListItem>
          <!-- <div v-for="(item, itemKey) in category.accesses" v-bind:key="itemKey" class="col-md-3 col-sm-6 mix portfolio-item ">
            <div class="portfolio-wrapper">
                <div class="portfolio-thumb">
                  <nuxt-link :to="item.link">
                    <div v-if="item.a_original > 0 && item.a_price > 0" class="badge_discount"><span>10%
                      <small>Off</small></span>
                    </div>
                    <img :src="'https://paragontwowheeleraccessories.com/w.php?image=images/product_images/' + item.a_picture" :alt="item.a_name" class="model_img" />
                  </nuxt-link>
                </div>
                <h3>{{item.a_name}}</h3>
                <p><span class="price">Rs. {{item.a_price}}</span></p>
                <p v-if="item.a_original > 0"><span class="origianl_price">Rs. {{item.a_original}}</span></p>
                <p>
                  <a href="javascript:;" data-id="129"
                      :data-price="item.a_price"
                      class="add-to-cart-btn add_to_cart">Add to Cart</a>
                  <a href='/login/' class='btn btn-default btn-sm' style='margin-top:-3px' title='Add to wishlist'><i class='fa fa-heart-o'></i></a>                               
                </p>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductListItem from '../Common/product-list-item';
export default {
  data() {
    return {
      categories: [],
    };
  },
  async fetch() {
    this.categories = await this.$axios.$get(
      "?flag=home_popular_category_products"
    );
  },
  components: {ProductListItem}
};
</script>