<template>
  <Head></Head>
  <!-- side nav -->
  <Navbar @active-nav="setContent"></Navbar>
  <!-- content page -->
  <div id="main-page">
    <!-- :imgUrl="item.imgURL" -->
    <card
      v-for="(item, index) in projectData"
      :key="index"
      :imgUrl="item.url"
      :tag="item.name"
      :loading="item.loading"
      :pageUrl="item.pageUrl"
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
    this.loadData("web");
  },
  methods: {
    setContent: function (data) {
      this.projectData = [];
      let f_data = data.toLowerCase();
      this.loadData(f_data);
    },
    loadData: function (data) {
      let setProjectData = (data) => {
        this.projectData = data;
      };
      getProject(data, setProjectData);
    },
  },
};
</script>
<style scoped lang="scss">
#main-page {
  padding: auto 2em;
  text-align: center;
}
</style>
