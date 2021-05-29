<template>
  <div>
      <Slider></Slider>
      <div class="container">
        <FreeShipping></FreeShipping>
      </div>
      <PopularCategories></PopularCategories>
      <WhoChoose></WhoChoose>
  </div>
</template>

<script>
import Slider from '../components/Home/slider';
import FreeShipping from '../components/Common/free-shipping';
import PopularCategories from '../components/Home/popular-categories';
import WhoChoose from '../components/Home/why-choose.vue';

export default {
  layout: "main",
  components: {
    Slider,
    FreeShipping,
    PopularCategories,
    WhoChoose
  }
}

</script>
