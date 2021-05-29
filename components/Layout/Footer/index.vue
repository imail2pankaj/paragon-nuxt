<template>
  <footer>
    <div class="container">
      <FreeShipping></FreeShipping>
      <Subscribe></Subscribe>
      <div class="row">
        <div class="col-lg-12">
          <SocialMedia></SocialMedia>

          <QuickLinks></QuickLinks>

          <FooterCategories></FooterCategories>

          <FooterContact></FooterContact>
        </div>
      </div>
    </div>
    <FooterCopyright></FooterCopyright>
  </footer>
</template>


<script>
import FreeShipping from '../../Common/free-shipping';
import Subscribe from './subscribe';
import SocialMedia from './socialmedia';
import QuickLinks from './quick-links';
import FooterCategories from './footer-categories';
import FooterContact from './footer-contact';
import FooterCopyright from './footer-copyright';

export default {
  components: {
    FreeShipping,
    Subscribe,
    SocialMedia,
    QuickLinks,
    FooterCategories,
    FooterContact,
    FooterCopyright,
  }
}

</script>
