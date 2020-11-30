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
        <ui-icon-button class="night-light" icon="nights_stay"></ui-icon-button>
        
      </ui-form-field>
    </template>
  </ui-top-app-bar>
</template>
<script>
export default {};
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