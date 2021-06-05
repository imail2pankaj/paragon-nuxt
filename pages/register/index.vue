<template>
  <div>
    <Breadcrumb :page_title="'Register'"></Breadcrumb>
    <div class="contact-us">
      <div class="container">
        <div class="row">
          <div class="product-item col-md-12">
            <div class="row">
              <div class="text-center login-box">
                <form
                  method="post"
                  @submit.prevent="register"
                  id="user_register"
                >
                  <Notification :message="error" v-if="error" />
                  <div class="row">
                    <div class="name col-md-12">
                      <input
                        type="text"
                        name="u_name"
                        id="u_name"
                        placeholder="Name"
                        v-model="u_name"
                        required
                      />
                    </div>

                    <div class="name col-md-12">
                      <input
                        type="text"
                        name="u_email"
                        id="u_email"
                        placeholder="Email"
                        v-model="u_email"
                        required
                      />
                    </div>

                    <div class="email col-md-12">
                      <input
                        type="password"
                        name="u_password"
                        id="u_password"
                        placeholder="Password"
                        v-model="u_password"
                        required
                      />
                    </div>

                    <div class="name col-md-12">
                      <input
                        type="text"
                        name="u_phone"
                        id="u_phone"
                        placeholder="Phone No."
                        v-model="u_phone"
                        required
                      />
                    </div>

                    <div class="name col-md-12">
                      <input
                        type="text"
                        name="u_address"
                        id="u_address"
                        placeholder="Address"
                        v-model="u_address"
                        required
                      />
                    </div>

                    <div class="name col-md-12">
                      <input
                        type="text"
                        name="u_pincode"
                        id="u_pincode"
                        placeholder="Pincode"
                        v-model="u_pincode"
                        required
                      />
                    </div>

                    <div class="send" id="register_btn_div">
                      <p>&nbsp;</p>

                      <button
                        name="register_btn"
                        id="register_btn"
                        value="Register"
                        type="button"
                      >
                        Register
                      </button>
                    </div>
                  </div>
                </form>

                <form
                  method="post"
                  @submit.prevent="otp"
                  id="user_otp"
                >
                  <Notification :message="error" v-if="error" />
                  <div
                    class="name col-md-12"
                    id="verify_div"
                    style="padding-top: 10px"
                  ></div>

                  <div
                    class="name col-md-12"
                    id="verify_div_main"
                    style="display: none"
                  >
                    <div class="name col-md-12">
                      <input
                        type="text"
                        name="u_otp"
                        id="u_otp"
                        placeholder="OTP"
                        value=""
                      />
                    </div>

                    <div class="send">
                      <p>&nbsp;</p>

                      <button
                        name="submit_btn"
                        id="submit_btn"
                        value="submit"
                        type="submit"
                      >
                        Verify OTP
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Breadcrumb from "~/components/Common/breadcrumb";
import Notification from "~/components/Common/notification";
export default {
  data() {
    return {
      u_name: "",
      u_email: "",
      u_password: "",
      u_phone: "",
      u_address: "",
      u_pincode: "",
      error: null,
    };
  },
  methods: {
    async register() {
      try {
        await this.$axios.post("?flag=register_user", {
          u_name: this.u_name,
          u_email: this.u_email,
          u_password: this.u_password,
          u_phone: this.u_phone,
          u_address: this.u_address,
          u_pincode: this.u_pincode,
        });

        // await this.$auth.loginWith("local", {
        //   data: {
        //     email: this.email,
        //     password: this.password,
        //   },
        // });

        this.$router.push("/");
      } catch (e) {
        this.error = e.response.data.message;
      }
    },
    async otp() {
    }
  },
  components: { Breadcrumb, Notification },
  middleware: 'guest',
};
</script>