<template>
  <Breadcrumb :page_title="'Produce Details'" :links="breadcrumbLinks"></Breadcrumb>
</template>

<script>
import Breadcrumb from "~/components/Common/breadcrumb";
export default {
  data() {
    return {
      page_title: this.$route.params['slugaccess'],
      breadcrumbLinks : [
        {
          title: 'Brands',
          link: '/brands',
        },
        {
          title: this.$route.params["slugbrand"],
          link: '/' + this.$route.params["slugbrand"],
        },
        {
          title: this.$route.params["slugmodel"].replace('-',' '),
          link: '/' + this.$route.params["slugmodel"],
        },
        {
          title: this.$route.params["slugaccess"].replace(/-/g,' ')
        }
      ]
    };
  },
  components: { Breadcrumb },
};
</script>