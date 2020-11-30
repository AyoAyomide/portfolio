<template>
  <Head>
    <template v-slot:default>
      <p>A paragraph for the main content.</p>
      <p>And another one.</p>
    </template>
  </Head>
  <!-- side nav -->
  <navbar></navbar>
  <!-- content page -->
  <div id="main-page">
    <div class="content-wrap">
      <div class="text-wrap">
        <div class="text-content">
          <h1 :class="$tt('headline2')">Hi</h1>
          <h2 :class="$tt('headline2')">
            I'm <span class="big"> <b>Ayo</b> </span> <span class="emoji"></span>
          </h2>
          <h4 :class="$tt('headline5')">A <b>Software</b> developer</h4>
          <h3 :class="$tt('headline3')">Have a look<br /><b>Around</b></h3>
        </div>
      </div>
      <div class="svg-wrap">
        <img src="../assets/svg/landing_page.svg" />
      </div>
    </div>
    <div class="proceed-wrap">
      <ui-button>Proceed</ui-button>
    </div>
  </div>
</template>

<script>
import navbar from "@/components/general/navbar.vue";
export default {
  name: "Landing",
  components: {
    navbar,
  },
};
</script>
<style scoped lang="scss">
#main-page {
  position: relative;
  z-index: 01;
  // @include dev;
  div {
    text-align: center;
  }
  .text-wrap {
    // @include dev;
    h1 {
      font-size: 3em;
      height: auto;
    }
    h2 {
      font-size: 2em;
      .emoji{
        width: 1em;
        height: 1em;
        display: inline-block;
        @include bg_image(url('../assets/emoji/wink.png'));
        margin-bottom:-5px;
      }
    }
    h3 {
      display: none;
    }
  }
  .svg-wrap {
    width: 100%;
    padding: 0px 2em;
    padding-top: 3em;
    img {
      width: 100%;
      max-width: 23em;
    }
  }
  .proceed-wrap {
    button {
      background-color: $primary-col;
      color: white;
      padding-left: 0px;
      border-right: 3em solid $primary-col;
      border-top-right-radius: 2em;
      border-bottom-right-radius: 2em;
    }
    button:hover {
      @include shadow;
    }
    button::before {
      content: "";
      height: 100%;
      width: 3em;
      background-color: white;
      margin-right: 10px;
      @include bg_image(url("../assets/svg/zigzag.svg"));
      background-size: 8em;
      background-position: -4px -6px;
    }
    padding: 15px;
  }
}
#main-page::before {
  position: fixed;
  content: "";
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: -01;
  background-repeat: no-repeat;
  background-image: url("../assets/svg/cake.svg"), url("../assets/svg/jet.svg");
  background-position: right -1em, -3em 90vh;
  background-attachment: fixed;
  background-size: 10em, 8em;
}
@media screen and (min-width: 46em) {
  #main-page {
    padding-top: 5em;
    height: 100vh;
    .content-wrap {
      display: flex;
      // @include dev;
      div {
        // @include dev;
        width: 50%;
        padding: 1em 0px;
        text-align: left;
      }
      .text-wrap {
        display: flex;
        .text-content {
          margin: auto 2em;
          width: 100%;
          h1,
          h2,
          h3 {
            margin-bottom: 0.1em;
          }
          h3 {
            display: inline-block;
          }
          h4 {
            margin: 1.1em 0px;
          }
        }
      }
      .svg-wrap {
        img {
          max-width: 30em;
        }
      }
    }
  }
  #main-page::before {
    background-position: center -20vh, left 85vh;
    background-size: auto;
  }
}
</style>