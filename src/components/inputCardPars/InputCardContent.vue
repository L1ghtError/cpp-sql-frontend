<template>
  <div id="inputCardContent">
    <SwitchToggle
      @selet-moce="(modeName) => handleChangeMode(modeName)"
    ></SwitchToggle>
    <!-- ^ Change mode ^ -->
    <div id="mainHeader">
      <p>{{ selectedTable[0] }}</p>
      <div
        id="imageWrapper"
        @mouseenter="isDropdownFocused = 1"
        @mouseleave="isDropdownFocused = 0"
      >
        <img src="../../assets/dropdown_logo.svg" alt="Vue logo" class="logo" />
        <DropDownList
          v-if="isDropdownFocused"
          :names-arr="confTablesNames"
          @selected-attr-name="(name) => selectAttributeByName(name)"
        ></DropDownList>
      </div>
    </div>
    <div id="optional-error-messanges">PRESS SUBMIT TO SAVE CHANGES</div>
    <div v-if="operationType === 'Add' ? 1 : 0">
      <AttrInputField
        v-for="attribute in selectedTableAttributes"
        :key="attribute + selectedTable[0]"
        :attributeName="attribute"
        @atrib-input-chaned="(who, what) => handleProcesInputChanged(who, what)"
      >
      </AttrInputField>
    </div>
    <div v-if="operationType === 'Read' ? 1 : 0">
      <AttributeRead :table-name="selectedTable[0]"></AttributeRead>
    </div>
  </div>
</template>

<script>
import AttrInputField from "../AttrInputField.vue";
import DropDownList from "../DropDownList.vue";
import { getConfigArr } from "../networkScripts.js";
import SwitchToggle from "../SwitchToggle.vue";
import AttributeRead from "../AttributeRead.vue";
export default {
  components: {
    AttrInputField,
    DropDownList,
    SwitchToggle,
    AttributeRead,
  },

  props: {
    prepearedResponse: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  setup() {
    let confPrm;
    confPrm = getConfigArr();
    return { confPrm };
  },
  data() {
    return {
      isDropdownFocused: false,
      confAtribArr: [],
      selectedTable: [],
      operationType: "Add",
    };
  },
  computed: {
    // a computed getter
    confTablesNames() {
      let can = [];
      this.confAtribArr.forEach((e) => {
        can.push(e[0]);
      });
      return can;
    },
    selectedTableAttributes() {
      let resArr = [];
      this.selectedTable.forEach((e, i) => {
        if (i != 0) {
          resArr.push(e);
        }
      });
      return resArr;
    },
  },
  watch: {
    confPrm: {
      handler() {
        //this.initalMehton()
        this.confPrm
          .then((r) => r.json())
          .then((data) => {
            this.confAtribArr = data;
            if (data.length > 0) {
              this.selectedTable = data[0];
              this.$emit("clear-prepeared-response", this.selectedTable[0]);
            }
          });
      },
      immediate: true,
    },
  },
  methods: {
    selectAttributeByName(name) {
      //by convention 0 element is table name and other is body

      this.confAtribArr.forEach((e, i) => {
        if (e[0] == name) {
          this.selectedTable = this.confAtribArr[i];
        }
      });
      this.$emit("clear-prepeared-response", this.selectedTable[0]);
    },
    handleProcesInputChanged(who, what) {
      this.selectedTable.forEach((e, i) => {
        if (e == who) {
          this.$emit("change-prepeared-response", i, who, what);
        }
      });
    },
    handleChangeMode(modeName) {
      this.operationType = modeName;
    },
  },
};
</script>
<style>
#mainHeader {
  display: flex;
  align-items: center;
  flex-direction: row;
}

#drop-down-list {
  position: absolute;
}

#imageWrapper img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -45%);
  width: 80%;
  height: 80%;
  filter: invert(59%) sepia(10%) saturate(1108%) hue-rotate(165deg)
    brightness(89%) contrast(89%);
  transition: filter 0.25s;
}

#imageWrapper:hover img {
  filter: invert(29%) sepia(10%) saturate(1108%) hue-rotate(165deg)
    brightness(89%) contrast(89%);
}

#imageWrapper {
  width: 30px;

  border-radius: 20px;
  height: 30px;

  margin-left: 15px;
  transition: background-color 0.25s;
}

#imageWrapper:hover {
  background-color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
}

p {
  font-size: 48px;
  line-height: 87px;
  text-align: center;

  color: #dce8e8;
}

#inputCardContent {
  overflow: auto;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: center;
  background: #1d272f;

  /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */
}
</style>
