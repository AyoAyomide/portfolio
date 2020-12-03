<template>
  <div class="card-wrap">
    <ui-skeleton
      id="loader"
      :loading="loading"
      :avatar="{ size: 300, shape: 'square' }"
      active
    >
      <img v-ripple src="../../assets/logo.png" />
    </ui-skeleton>

    <div id="nameWrap" v-shadow="2">
      <h6 :class="$tt('subtitle1')">{{ tag }}</h6>
      <ui-icon-button>
        <ui-icon>favorite_border</ui-icon>
      </ui-icon-button>
    </div>
  </div>
</template>
<script>
export default {
  props: ["imgUrl", "tag", "loading"],
  data() {
    return {
      //   loading: true,
    };
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
    padding: 2px;

    h6 {
      margin-top: 8px;
      margin-right: -30px;
      display: inline-block;
      color: #378f82;
    }
    button {
      margin-right: 15px;
      float: right;
      @include round;
      i {
        color: #378f82;
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