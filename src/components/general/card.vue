<template>
  <div class="card-wrap">
    <ui-skeleton
      id="loader"
      :loading="imageDone"
      :avatar="{ size: 300, shape: 'square' }"
      active
    >
      <img v-ripple :src="imgBlob" />
    </ui-skeleton>

    <a id="nameWrap" :href="setPageUrl()">
      <h6 :class="$tt('subtitle2')">{{ tag }}</h6>
      <!--  <ui-icon-button>
          <ui-icon>favorite_border</ui-icon>
      </ui-icon-button>-->
    </a>
  </div>
</template>
<script>
const axios = require("axios");
export default {
  props: ["imgUrl", "tag", "loading","pageUrl"],
  data() {
    return {
      imgBlob: "",
      imageDone: this.loading,
    };
  },
  mounted() {
    setTimeout(this.fetch_image(), 1000);
  },
  methods: {
    fetch_image: function () {
      if (this.imgUrl != undefined) {
        axios
          .get(this.imgUrl)
          .then(() => {
            // handle success
            this.imgBlob = this.imgUrl;
            this.imageDone = false;
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          });
      }
    },
    setPageUrl:function(){
      return this.pageUrl != undefined ? this.pageUrl : '';
    }
  },
};
</script>
<style scoped lang="scss">
.card-wrap {
  text-align: center;
  width: 100%;
  max-width: 20em;
  margin: 2em 1em;
  display: inline-block;
  //   @include dev;
  img {
    // @include dev;
    width: 100%;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
    @include round(10px);
  }
  #nameWrap {
    margin-top: 20px;
    // @include dev;
    @include round(100px);
    display: inline-block;
    width: 80%;
    position: relative;
    overflow: hidden;
    padding: 10px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
    text-decoration: none;
    h6 {
      // margin-top: 8px;
      // margin-right: -30px;
      display: inline-block;
      color: #378f82;
      text-transform: capitalize;
    }
    button {
      margin-right: 15px;
      float: right;
      @include round;
      i {
        color: #2dc5c5;
        transform: rotate(-20deg);
      }
    }
  }
}
</style>
<style lang="scss">
#loader {
  text-align: center;
  .mdc-skeleton__header {
    margin: auto;
    .mdc-skeleton-avatar {
      @include round(10px);
      margin: auto;
    }
  }
  .mdc-skeleton__content {
    display: none;
  }
}
</style>
