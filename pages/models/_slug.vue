<template>
  <div>
    <Breadcrumb :page_title="model_details.brand.brand_name + ' ' + model_details.model_name"></Breadcrumb>
    <div id="product-post">
      <div class="container">
        <div class="row">
          <div class="product-item col-md-12">
            <div class="row">
              <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="Model-slider">
                  <div id="slider">
                    <ul>
                      <li
                        v-for="(slide, key) in model_details.images"
                        v-bind:key="key"
                      >
                        <img
                          :src="slider_image + slide.model_image"
                          alt="Grazia PARAGON"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <!-- Slider End -->

            <div class="row">
              <div class="col-md-12 col-sm-12 col-xs-12 brand_main">
                <div class="row">
                  <ProductListItem
                    v-for="(product, key) in model_details.accesses"
                    v-bind:key="key"
                    :product="product"
                  ></ProductListItem>
                </div>
              </div>
            </div>
            <!-- Other Model Products -->

            <div class="row">
              <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="model-detail-text">
                  <div v-html="model_details.model_description" />
                </div>
              </div>
            </div>

            <!-- Model content End -->

            <div class="other-iteam">
              <div class="row">
                <div class="col-md-12">
                  <div class="heading-section">
                    <h2>Other <span>Models</span></h2>
                  </div>
                </div>
              </div>
              <div class="row">
                <div
                  v-for="(model, key) in model_details.other_models"
                  v-bind:key="key"
                  class="col-md-3 col-sm-6"
                >
                  <div class="portfolio-wrapper">
                    <div class="portfolio-thumb">
                      <img
                        :src="
                          'https://paragontwowheeleraccessories.com/images/product_images/' +
                          model.model_display_picture
                        "
                      />
                      <div class="hover">
                        <div class="hover-iner">
                          <a class="fancybox" :href="model.slug">
                            <img src="~/assets/images/link-icon.png" alt="" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="label-text">
                      <h3>
                        <a href="javascript:;">{{ model.model_name }}</a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Other models End -->
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
      model_details: {},
      slider_image:
        "https://paragontwowheeleraccessories.com/images/product_images/other_images/",
    };
  },
  async fetch() {
    this.model_details = await this.$axios.$get(
      "?flag=models_access&slug=" + this.$route.params.slug
    );
  },
  components: {
    Breadcrumb,
    ProductListItem,
  },
};
</script>