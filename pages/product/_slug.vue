<template>
  <div>
    <Breadcrumb page_title="Product Details"></Breadcrumb>
    <div id="product-post">
      <div class="container">
        <div class="row">
          <div id="show_alert"></div>
          <div class="product-item col-md-12">
            <div class="row">
              <div class="col-md-6">
                <div class="image">
                  <div class="image-post">
                    <div class="flexslider">
                      <div v-if="access_details.a_discount > 0" class="badge_discount_big"><span>10%<small>Off</small></span></div>
                      <div class="genuine-stamp"></div>
                      <ul class="slides">
                        <li
                          :data-thumb="
                            product_image + access_details.a_picture
                          "
                        >
                          <img
                            :src="product_image + access_details.a_picture"
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-6">
                <div class="product-content">
                  <div class="product-title">
                    <h3>{{access_details.a_name}}</h3>
                  </div>
                  <p class="mid">
                      <div  v-html="access_details.a_description"></div>
                  </p>
                  <h4 class="hide">Product Price</h4>
                  <ul class="">
                    <li>
                      <h2><i class="fa fa-rupee"></i> {{access_details.a_price}}</h2>
                    </li>
                  </ul>
                  <div class="send">
                    <button id="add_to_cart">Add to Cart</button>&nbsp;
                    <a
                      href="/login/"
                      class="btn btn-default btn-sm"
                      style="margin-top: -3px"
                      title="Add to wishlist"
                      ><i class="fa fa-heart-o"></i
                    ></a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Product description end -->

            <div class="other-iteam">
                  <div class="row">
                      <div class="col-md-12">
                          <div class="heading-section">
                              <h2>Other <span>Products</span></h2>
                          </div>
                      </div>
                  </div>
                  <div class="row">

                      <div v-for="(product, key) in access_details.other_access" v-bind:key="key" class="col-md-3 col-sm-6">
                          <div class="portfolio-wrapper">
                              <div class="portfolio-thumb">
                                  <img :src="product_image + product.a_picture" />

                                  <div class="hover">
                                      <div class="hover-iner"> 
                                          <a class="fancybox" :href="'product/' + product.slug">
                                              <img src="~/assets/images/link-icon.png" alt="" />
                                          </a>
                                      </div>
                                  </div>
                              </div>
                              <div class="label-text">
                                  <h3>{{product.a_name}}</h3>
                                  <span class="text-category hide"><i class="fa fa-rupee"></i> {{product.a_price}}</span>
                              </div>
                          </div>
                      </div>

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
import ProductListItem from "../../components/Common/product-list-item";

export default {
  data() {
    return {
      page_title: "Honda",
      access_details: {},
      product_image:
        "https://paragontwowheeleraccessories.com/w.php?image=images/product_images/",
    };
  },
  async fetch() {
    this.access_details = await this.$axios.$get(
      "?flag=access_details&slug=" + this.$route.params.slug
    );
  },
  components: {
    Breadcrumb,
    ProductListItem,
  },
};
</script>