<template>
  <div id="attribControlsWrapper">
    <input
      v-if="selectedId == -1"
      id="id-input"
      v-model="inputValue"
      type="number"
      maxlength="50"
      size="100"
      placeholder="enter entity id"
      @change="getUserByIdMethod(inputValue)"
    />
    <div :key="attr" v-for="attr in userObject">{{ attr }}</div>
    <!-- <AttrUpdateField
      v-for="attr in userObject"
      :key="attr + selectedIdProp"
      :attributeName="selectedTableAttributes"
      @atrib-update-chaned="(who, what) => handleProcesUpdateChanged(who, what)"
    ></AttrUpdateField> -->
  </div>
</template>

<script>
import { getUserById } from "./networkScripts";
import AttrUpdateField from "./AttrUpdateField.vue";
export default {
  components: {
    AttrUpdateField,
  },
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
      inputValue: "",
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
    getUserByIdMethod(id) {
      this.selectedId = id;
      let returnValue;

      getUserById(id, this.selectedTableName)
        .then((resp) => resp.text())
        .then((textResponse) => {
          returnValue = JSON.parse("[" + textResponse + "]");
          let idIndex = -1;
          this.selectedTableAttributes.forEach((element, i) => {
            if (element.slice(0, 2) == "id") {
              idIndex = i - 1;
            }
          });

          returnValue.forEach((element) => {
            if (element[idIndex] == id) {
              console.log(element);
              this.userObject = element
            }
          });
        });
    },
    handleProcesUpdateChanged(who, what) {},
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
