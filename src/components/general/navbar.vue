<template>
  <div class="demo-container">
    <!-- Drawer -->
    <ui-drawer type="modal" nav-id="drawer">
      <ui-drawer-header class="nav-header">
        <div class="img-wraper">
          <img src="../../assets/logo.png" />
        </div>
        <h4 :class="$tt('headline5')"><b>AyoAyomide</b></h4>
      </ui-drawer-header>
      <ui-drawer-content>
        <!-- nav content wrap-->
        <ui-list :type="2">
          <!-- nav content-->
          <ui-item
            class="list_wrap"
            v-for="(item, index) in nav_content"
            :key="index"
          >
            <ui-item-first-content :style="{ backgroundColor: item.theme }">
              <ui-icon :style="{ color: item.color }">{{ item.icon }}</ui-icon>
            </ui-item-first-content>
            <ui-item-text-content>
              <ui-item-text1>{{ item.title }}</ui-item-text1>
              <ui-item-text2>{{
                item.subtitle
              }}</ui-item-text2></ui-item-text-content
            >
          </ui-item>
        </ui-list>
      </ui-drawer-content>
      <div class="footer"></div>
    </ui-drawer>
    <ui-drawer-backdrop></ui-drawer-backdrop>
  </div>
</template>
<script>
// import uiList from "@/components/sharp/icon_list.vue";
export default {
  name: "navbar",
  components: {
    // uiList,
  },
  data() {
    return {
      nav_content: [
        {
          title: "Web",
          subtitle: "hello bla bla",
          icon: "star",
          theme: "#D5C8FF",
          color: "#7958EB",
        },
        {
          title: "Web",
          subtitle: "hello bla bla",
          icon: "star",
          theme: "#C6FCFC",
          color: "#00A5A5",
        },
      ],
    };
  },
};
</script>
<style scoped lang="scss">
.nav-header {
  text-align: center;
  .img-wraper {
    @include dev(2px, $primary-col);
    display: flex;
    padding: 1em;
    height: 10em;
    width: 10em;
    @include round;
    margin: auto;
    margin-top: 2em;
    margin-bottom: 1em;
    img {
      margin: auto;
      width: 8em;
      @include round;
      vertical-align: center;
    }
  }
}
.list_wrap {
  // @include dev;
  .mdc-list-item__graphic {
    @include round;
    height: 3em;
    width: 3em;
    margin-right: 10px;
  }
}
.demo-container {
  .footer {
    @include dev;
    height: 3em;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
  }
}
</style>