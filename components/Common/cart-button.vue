<template>
  <a
    href="javascript:;"
    data-id="129"
    :data-price="product.a_price"
    class="add-to-cart-btn add_to_cart"
    >Add to Cart</a
  >
</template>

<script>
export default {
  props: ["product"],
};
</script>