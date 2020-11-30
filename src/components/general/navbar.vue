<template>
  <div class="demo-container">
    <!-- Drawer -->
    <ui-drawer  type="modal" nav-id="drawer">
      <ui-drawer-header>
        <ui-drawer-title>Title</ui-drawer-title>
        <ui-drawer-subtitle>Subtitle</ui-drawer-subtitle>
      </ui-drawer-header>
      <ui-drawer-content>
        <ui-nav>
          <ui-nav-item href="javascript:void(0)" active
            >Item {{ 0 }}</ui-nav-item
          >
          <ui-nav-item v-for="i in 12" :key="i" href="javascript:void(0)"
            >Item {{ i }}</ui-nav-item
          >
        </ui-nav>
      </ui-drawer-content>
    </ui-drawer>
    <ui-drawer-backdrop></ui-drawer-backdrop>
  </div>
</template>
<script>
export default {
  name: "navbar",
};
</script>
<style scoped lang="scss">
</style>