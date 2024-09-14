<template>
  <el-tabs v-model="activeName" style="padding-left: 8px;" @tab-click="tabClick">
    <el-tab-pane label="本地存储" name="first">
      <Local ref="local" />
    </el-tab-pane>
    <el-tab-pane label="Minio存储" name="second">
      <Minio ref="minio" />
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import Minio from './minio/index'
import Local from './local/index'
export default {
  components: { Minio, Local },
  data() {
    return {
      activeName: 'first'
    }
  },
  methods: {
    tabClick(name) {
      if (this.activeName === 'first') {
        this.$refs.local.crud.toQuery()
      } else {
        this.$refs.minio.crud.toQuery()
      }
    }
  }
}
</script>

<style scoped>
</style>
