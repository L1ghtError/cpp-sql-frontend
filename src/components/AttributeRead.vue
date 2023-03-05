<template>
  <div>{{ serverAnswer }}</div>
</template>

<script lang="js">
import {getTableAttr} from "./networkScripts"
export default {
  props: {
    tableName: {
      type: String,
      default() {
        return "";
      },
    },

  },
    data() {
      return { serverAnswer: "loading" };
    },
  watch: {
    tableName: {
      handler() {
             getTableAttr(this.tableName).then(resp=> //change text to json when start work with JSON
                resp.text()
             ).then(textResonse=>{this.serverAnswer=textResonse})
      },
      immediate: true,
    },
  },
};
</script>

<style scoped></style>
