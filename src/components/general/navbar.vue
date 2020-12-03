<template>
  <div class="demo-container">
    <!-- Drawer -->
    <ui-drawer type="modal" nav-id="drawer">
      <ui-drawer-header class="nav-header">
        <div class="img-wraper" v-shadow="1">
          <img
            src="https://avatars2.githubusercontent.com/u/59843033?s=400&u=6e020b4381d86ef651074998adb67cbf378f7ea9&v=4"
          />
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
      <div class="footer">
        <div class="github-wrap">
          <a href="https://github.com/AyoAyomide" v-ripple></a>
        </div>
        <div class="hire-wrap">
          <ui-icon-button class="cv">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <text
                id="CV"
                transform="translate(8 13)"
                fill="#9889b4"
                font-size="11"
                font-family="SegoeUI-Bold, Segoe UI"
                font-weight="700"
              >
                <tspan x="-7.746" y="0">CV</tspan>
              </text>
            </svg>
          </ui-icon-button>
          <ui-button class="hire" outlined>Hire me</ui-button>
        </div>
      </div>
    </ui-drawer>
    <ui-drawer-backdrop></ui-drawer-backdrop>
  </div>
</template>
<script>
export default {
  components: {
    // uiList,
  },
  data() {
    return {
      nav_content: [
        {
          title: "Ui/Ux",
          subtitle: "Ui models",
          icon: "camera",
          theme: "#C6FCFC",
          color: "#00A5A5",
        },
        {
          title: "Web",
          subtitle: "Web models",
          icon: "important_devices",
          theme: "#D5C8FF",
          color: "#7958EB",
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
      box-shadow: inset 0px 1px 10px rgba(0, 0, 0, 0.2);
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
    .github-wrap {
      text-align: center;
      margin-bottom: 20px;
      a {
        display: inline-block;
        padding: 5px;
        width: 4em;
        height: 4em;
        vertical-align: middle;
        @include bg_image(url("../../assets/svg/github.svg"));
        background-size: 3.1em;
        box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.3);
        @include round;
      }
    }
    .hire-wrap {
      padding: 5px;
      background-color: $primary-col;
      .cv {
        @include round;
        background-color: #d5c8ff;
      }
      .hire {
        color: white;
        margin-top: -15px;
        margin-left: 25px;
        border-color: white;
      }
    }
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    display: inline-block;
  }
}
</style>