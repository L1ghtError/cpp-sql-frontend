<template>
  <div v-if="selectedId != -1" id="attribControlsWrapper">
    <div>{{ `Are you sure to delete: ${selectedId} element?` }}</div>
    <button v-if="clickNumber != 3" @click="handleClickDeleteButton">
      {{ clickNumber == 0 ? "delete!" : "" }}
      {{ clickNumber == 1 ? "are you sure?" : "" }}
      {{ clickNumber == 2 ? "Okei,last click..." : "" }}
    </button>
  </div>
</template>

<script>
import { deleteUserById } from "./networkScripts";
export default {
  components: {},
  props: {
    selectedTableName: {
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
    selectedEntityProp: {
      type: Object,
      default() {
        return undefined;
      },
    },
    selectedIdProp: {
      type: Number,
      default() {
        return -1;
      },
    },
  },
  data() {
    return {
      clickNumber: 0,
      tableName: "",
      userObject: [],
      selectedId: Number,
    };
  },
  computed: {
    userObjectIterable() {
      return Object.keys();
    },
  },
  watch: {
    selectedIdProp: {
      handler(newVal) {
        this.selectedId = newVal;
      },
      immediate: true,
    },
  },
  methods: {
    handleClickDeleteButton() {
      this.clickNumber++;
      if (this.clickNumber >= 3) {
        deleteUserById(this.selectedId, this.selectedTableName);
        this.$emit("entity-deleted");
      }
    },
  },
};
</script>

<style scoped>
#attribControlsWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
}

#id-input {
  background: rgba(0, 0, 0, 0.26);
  border: 4px solid #a6b1b9;
  box-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 0.25);
  border-radius: 21px;

  font-style: normal;
  font-weight: bolder;
  line-height: 29px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #d1e1e0;
  transition: border 0.25s;
  width: 500px;
  margin-left: 20px;
}
#id-input:hover {
  border: 4px solid #070101;
}

#id-input:focus {
  border: 4px solid #00599c;
}
</style>
