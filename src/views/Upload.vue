<template>
  <div>
    <div class="upload_wrap">
      <div class="show_image">
        <img v-if="img_data" :src="img_data" />
        <ui-slider
          v-if="upload_progress"
          :model-value="upload_progress"
          disabled
        ></ui-slider>
      </div>
      <br /><br />

      <div class="upload_button">
        <input type="file" @change="preview_img($event.target.files[0])" />
        <ui-icon dark size="36">cloud_upload</ui-icon>
      </div>
      <br /><br />
      <ui-textfield outlined> Project tag </ui-textfield><br /><br />
      <ui-button>Send</ui-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      upload_progress: false,
      img_data: false,
    };
  },
  methods: {
    preview_img: function (file) {
      let scanner = new FileReader();
      scanner.onload = () => {
        this.img_data = scanner.result;
        this.imgFile = file;
      };
      scanner.readAsDataURL(file);
    },
  },
};
</script>
<style scoped lang="scss">
.upload_wrap {
  text-align: center;
  padding: 3em;
  .show_image {
    @include shadow;
    img {
      max-width: 100%;
      height: 20em;
      object-fit: contain;
    }
    .mdc-slider {
      margin-left: 0px;
    }
    width: 20em;
    display: inline-block;
    background-size: contain;
  }
  .upload_button {
    @include round;
    display: inline-block;
    overflow: hidden;
    position: relative;
    input {
      width: 100%;
      height: 100%;
      opacity: 0;
      position: absolute;
    }
    i {
      vertical-align: middle;
    }
  }
}
</style>
