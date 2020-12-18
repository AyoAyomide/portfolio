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
      <ui-select v-model="picked_tag" filled :options="tags"> Project location </ui-select
      ><br /><br />
      <ui-textfield outlined v-model="img_name"> Project tag </ui-textfield><br /><br />
      <ui-button @click="submit_data()">Send</ui-button>
    </div>
  </div>
</template>
<script>
import { upload_img, load_img } from "../mixin/storage";

export default {
  data() {
    return {
      upload_progress: false,
      img_data: false,
      img_name: "",
      img_file: false,
      tags: [
        {
          value: "web",
          label: "web",
        },
        {
          value: "3d",
          label: "3d",
        },
      ],
      picked_tag: "web",
    };
  },
  mounted() {
    load_img();
  },
  methods: {
    preview_img: function (file) {
      let scanner = new FileReader();
      scanner.onload = () => {
        this.img_data = scanner.result;
        this.img_file = file;
      };
      scanner.readAsDataURL(file);
    },
    submit_data: function () {
      let hint = (data) => {
        this.upload_progress = data;
      };
      upload_img(this.img_file, this.picked_tag, this.img_name, hint);
      this.img_file = false;
      this.img_name = "";
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
