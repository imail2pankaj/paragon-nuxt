<template>
  <Breadcrumb :page_title="fullSlug" :links="breadcrumbLinks"></Breadcrumb>
</template>

<script>
import Breadcrumb from "~/components/Common/breadcrumb";
export default {
  data() {
    return {
      page_title: this.$route.params["slugmodel"],
      breadcrumbLinks : [
        {
          title: 'Brands',
          link: '/brands',
        },
        {
          title: this.$route.params["slugbrand"].replace("-"," "),
          link: '/' + this.$route.params["slugbrand"],
        },
        {
          title: this.$route.params["slugmodel"].replace(/-/g,' ')
        }
      ]
    };
  },
  computed: {
    fullSlug: function () {
      return this.$route.params["slugbrand"] + " " + this.page_title.replace("-", '   ')
    },
  },
  components: { Breadcrumb },
};
</script>