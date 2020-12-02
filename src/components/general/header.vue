<template>
  <ui-top-app-bar
    id="top-bar"
    fixed
    nav-id="drawer"
    content-selector="#main-page"
  >
    <!-- switch button -->
    <template #toolbar="{ toolbarItemClass }">
      <ui-form-field :class="toolbarItemClass">
        <!-- <ui-switch></ui-switch> -->
        <!-- <ui-icon-button class="night-light" icon="wb_sunny"></ui-icon-button> -->
        <ui-icon-button
          class="night-light"
          :icon="night_icon"
          @click="setTheme"
        ></ui-icon-button>
      </ui-form-field>
    </template>
  </ui-top-app-bar>
</template>
<script>
export default {
  data() {
    return {
      night_icon:'nights_stay'
    };
  },
  methods: {
    setTheme: function () {
      let item = document.getElementsByTagName("body")[0];
      if (item.id != "dark") {
        item.id = "dark";
        this.night_icon = 'wb_sunny'; 
      } else {
        item.id = "";
        this.night_icon = 'nights_stay'; 
      }
    },
  },
};
</script>
<style scoped lang="scss">
#top-bar {
  --mdc-theme-primary: white;
  --mdc-theme-on-primary: green;
  padding-right: 1em;
  // @include dev;
}
</style>
<style lang="scss">
#top-bar {
  #drawer {
    @include round;
    background-color: #c8ffe0;
  }
  .night-light {
    margin-left: 10px;
  }
}
</style>