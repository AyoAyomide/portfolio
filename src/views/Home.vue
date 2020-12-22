<template>
  <Head></Head>
  <!-- side nav -->
  <Navbar></Navbar>
  <!-- content page -->
  <div id="main-page">
    <card
      v-for="(item, index) in web_data"
      :key="index"
      :imgUrl="item.imgURL"
      :tag="item.tag"
      :loading="item.loading"
    ></card>
  </div>
</template>
<script>
import card from "@/components/general/card.vue";
import {getProject } from "../mixin/database";

export default {
  components: {
    card,
  },
  data() {
    return {
      web_data: [
        {
          imgURL: "url",
          tag: "tag 1",
          loading: true,
        },
        {
          imgURL: "url",
          tag: "tag 2",
          loading: false,
        },
      ],
    };
  },
  mounted() {
    getProject("3d");
  },
};
</script>
<style scoped lang="scss">
#main-page {
  padding: auto 2em;
  text-align: center;
}
</style>
