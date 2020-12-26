<template>
  <Head></Head>
  <!-- side nav -->
  <Navbar></Navbar>
  <!-- content page -->
  <div id="main-page">
    <!-- :imgUrl="item.imgURL" -->
    <card
      v-for="(item, index) in projectData"
      :key="index"
      :imgUrl="item.url"
      :tag="item.name"
      :loading="item.loading"
    ></card>
  </div>
</template>
<script>
import card from "@/components/general/card.vue";
import { getProject } from "../mixin/database";
export default {
  components: {
    card,
  },
  data() {
    return {
      projectData: [],
    };
  },
  mounted() {
    let setProjectData = (data) => {
      this.projectData = data;
    };
    getProject("web", setProjectData);
  },
};
</script>
<style scoped lang="scss">
#main-page {
  padding: auto 2em;
  text-align: center;
}
</style>
