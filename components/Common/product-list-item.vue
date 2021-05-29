<template>
  <div class="col-md-3 col-sm-6 mix portfolio-item">
    <div class="portfolio-wrapper">
      <div class="portfolio-thumb">
        <nuxt-link :to="product.link">
          <div
            v-if="product.a_original > 0 && product.a_price > 0"
            class="badge_discount"
          >
            <span>10% <small>Off</small></span>
          </div>
          <img
            :src="
              'https://paragontwowheeleraccessories.com/w.php?image=images/product_images/' +
              product.a_picture
            "
            :alt="product.a_name"
            class="model_img"
          />
        </nuxt-link>
      </div>
      <h3>{{ product.a_name }}</h3>
      <p>
        <span class="price"
          ><i class="fa fa-rupee"></i> {{ product.a_price }}</span
        >
        <span class="origianl_price" v-if="product.a_original > 0"
          ><i class="fa fa-rupee"></i> {{ product.a_original }}</span
        >
      </p>
      <p>
        <a
          href="javascript:;"
          data-id="129"
          :data-price="product.a_price"
          class="add-to-cart-btn add_to_cart"
          >Add to Cart</a
        >
        <a
          href="/login/"
          class="btn btn-default btn-sm"
          style="margin-top: -3px"
          title="Add to wishlist"
          ><i class="fa fa-heart-o"></i
        ></a>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["product"],
};
</script>