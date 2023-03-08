<template>
  <div id="entity-disp-wrapper">
    <div
      v-for="entityAttrs in entityArr"
      :key="entityAttrs"
      class="display-one-entity"
      @click="handleEntityClick(entityAttrs)"
    >
      <div
        v-for="entityAttr in entityAttrs"
        :key="entityAttr"
        class="display-one-attr"
      >
        {{ entityAttr != undefined ? entityAttr : "" }}
      </div>
    </div>
    <div v-if="isDisplayRAM == 1" id="read-action-message">
      Selected! now you can update or delete entity
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
    selectedTableAttributes: {
      type: Object,
      default() {
        return undefined;
      },
    },
  },
    data() {
      return { serverAnswer: "loading",entityArr:[],isDisplayRAM:0 };
    },
    computed: {
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
      }
    }
  },
    methods: {
      handleEntityClick(entity){
        let idIndex = -1;
          this.selectedTableAttributes.forEach((element, i) => {
            if (element.slice(0, 2) == "id") {
              idIndex = i - 1;
            }
          });
          this.isDisplayRAM = 1
        this.$emit("entity-id-selected",entity[idIndex])
      }
    },
};
</script>

<style scoped>
#read-action-message {
  color: #497819;
}
#entity-disp-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.display-one-entity {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 4px solid #121518;
  border-radius: 4px;
  width: 500px;
  margin-bottom: 10px;
  cursor: pointer;
}
.display-one-attr {
  margin-left: 10px;
  font-size: 25px;
}
</style>
