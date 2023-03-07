<template>
  <div>
    <div
      v-for="entityAttr in entityArr"
      id="display-one-entity"
      :key="entityAttr"
    >
      <div>{{ entityAttr != undefined ? entityAttr : "" }}</div>
    </div>
  </div>
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
      return { serverAnswer: "loading",entityArr:[] };
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
    serverAnswer:{
      handler(newAnswer){
          this.entityArr = JSON.parse("["+newAnswer+"]")
          console.log(this.entityArr)
      }
    }
  },
};
</script>

<style scoped>
#display-one-entity {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
