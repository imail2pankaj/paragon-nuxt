<template>
  <a
    href="/login/"
    class="btn btn-default btn-sm"
    style="margin-top: -3px"
    title="Add to wishlist"
    ><i class="fa fa-heart-o"></i
  ></a>
</template>

<script>
export default {
  props: ["product"],
};
</script>