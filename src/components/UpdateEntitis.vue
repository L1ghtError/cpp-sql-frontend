<template>
  <div id="attribControlsWrapper">
    <button id="sendUpdateBtn" @click="handleUpdateButtonClick">
      Send Update
    </button>
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
    <!-- <div v-for="attr in userObject" :key="attr">{{ attr }}</div> -->
    <AttrUpdateField
      v-for="(attr, index) in userObject"
      :key="attr"
      :attributeName="selectedTableAttributes[index]"
      :attribute-value-prop="attr"
      @atrib-update-chaned="(who, what) => handleProcesUpdateChanged(who, what)"
    ></AttrUpdateField>
  </div>
</template>

<script>
import { getUserById, updateUserEntity } from "./networkScripts";
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
      respUserObject: [],
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
    selectedId: {
      handler(newVal) {
        if (newVal != -1) {
          this.getUserByIdMethod(newVal);
        }
      },
      immediate: true,
    },
  },
  methods: {
    handleUpdateButtonClick() {
      let prepearedResponse = [this.selectedTableName, ...this.respUserObject];
      console.log(prepearedResponse);
      updateUserEntity(JSON.stringify(prepearedResponse));
    },
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
              idIndex = i;
            }
          });
          returnValue.forEach((element) => {
            if (element[idIndex] == id) {
              this.userObject = element;
              this.userObject.forEach((el, indx) => {
                this.respUserObject[indx] = {
                  who: this.selectedTableAttributes[indx],
                  what: el.toString(),
                };
              });
              // this.respUserObject = JSON.parse(JSON.stringify(this.userObject));
            }
          });
        });
    },
    handleProcesUpdateChanged(who, what) {
      this.selectedTableAttributes.forEach((e, i) => {
        if (e == who) {
          if (typeof what === "number") {
            console.log(what)
            what = String(what);
          }
          this.respUserObject[i] = { who, what };
        }
      });
    },
  },
};
</script>

<style scoped>
#sendUpdateBtn {
  margin-bottom: 25px;
}

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
