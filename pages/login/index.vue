<template>
  <div>
    <Breadcrumb :page_title="'Login'"></Breadcrumb>
    <div class="contact-us">
      <div class="container">
        <div class="row">
          <div class="product-item col-md-12">
            <div class="row">
              <div class="text-center login-box">
                <div class="message-form">
                  <form method="post" @submit.prevent="login" class="send-message" id="user_login">
                    <div class="row">
                      <div class="name col-md-12">
                        <input
                          type="text"
                          name="u_email"
                          id="u_email"
                          placeholder="Email / Mobile No."
                          v-model="u_email"
                          required
                        />
                      </div>
                      <div class="name col-md-12"><hr /></div>
                      <div class="email col-md-12">
                        <input
                          type="password"
                          name="u_password"
                          id="u_password"
                          placeholder="Password"
                          style="margin-top: 0px"
                          v-model="u_password"
                          required
                        />
                      </div>
                      <div
                        class="name col-md-12"
                        style="margin-top: 10px; margin-bottom: 0px"
                      >
                        OR
                      </div>
                      <div class="name col-md-12">
                        <a href="javascript:;" id="send_login_otp"
                          >Send otp to registered mobile/email.</a
                        >
                      </div>
                      <div
                        class="name col-md-12"
                        id="verify_div"
                        style="
                          margin-top: 10px;
                          margin-bottom: 0px;
                          display: none;
                        "
                      ></div>
                      <div
                        class="email col-md-12 login_otp"
                        style="display: none"
                      >
                        <input
                          type="text"
                          name="otp_sent"
                          id="otp_sent"
                          placeholder="OTP"
                        />
                      </div>
                    </div>
                    <div class="send">
                      <button type="submit" name="submit_btn" value="submit">
                        Login
                      </button>
                    </div>
                  </form>
                </div>
                <br />
                <div class="text-right col-lg-12 text-center">
                  <a
                    href="https://paragontwowheeleraccessories.com/forgot-password/"
                    >Forgot Password?</a
                  >
                </div>
                <hr />
              </div>
              <div class="clearfix"></div>
              <div class="text-center login-box" style="margin-top: 20px">
                <h5 class="text-center">Don't have an Account?</h5>
                <div class="send">
                  <button
                    onClick="javascript:window.location.href='https://paragontwowheeleraccessories.com/register/'"
                  >
                    Register
                  </button>
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
import Breadcrumb from "~/components/Common/breadcrumb";
import Notification from "~/components/Common/notification";
export default {
  data() {
    return {
      u_email: "",
      u_password: "",
      error: null,
    };
  },
    methods: {
    async register() {
      try {
        await this.$axios.post("?flag=login_user", {
          u_email: this.u_email,
          u_password: this.u_password,
        }).then(async (resp) => {
          await this.$auth.loginWith("local", {
            data: {
              email: this.u_email,
              password: this.u_password,
            },
          });

          this.$router.push("/");
        });
      } catch (e) {
        this.error = e.response.data.message;
      }
    }
  },
  components: { Breadcrumb, Notification },
  middleware: 'guest',
};
</script>
