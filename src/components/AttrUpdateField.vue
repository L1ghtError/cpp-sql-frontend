<template>
  <div v-if="!isAutoIncrementExists" id="atribComponentWrapper">
    <div>{{ getAtributeBodyAsString }}</div>
    <div id="attribControlsWrapper">
      <input
        id="attribInput"
        :value="inputValue"
        type="text"
        maxlength="50"
        size="100"
        :placeholder="attributeHead"
        @input="
          (e) => {
            inputValue = e.target.value;
          }
        "
        @change="$emit('atrib-update-chaned', attributeName, inputValue)"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    attributeName: {
      type: String,
      default() {
        return "";
      },
    },
  },
  data() {
    return { attributeHead: "", attributeBody: [], inputValue: "" };
  },
  computed: {
    getAtributeBodyAsString() {
      let x = "";
      this.attributeBody.forEach((e, i) => {
        if (i == 0) {
          x += this.attributeBody[i];
        } else {
          x += " " + this.attributeBody[i];
        }
      });
      return x;
    },
    isAutoIncrementExists() {
      return this.attributeBody.find((e) => e == "AUTO_INCREMENT");
    },
  },
  watch: {
    attributeName: {
      handler() {
        let strArr = this.attributeName.split(/(\s+)/);
        strArr.forEach((e, i) => {
          if (i === 0 && e != " ") {
            this.attributeHead = e;
          } else if (e != " ") {
            this.attributeBody.push(e);
          }
        });
      },
      immediate: true,
    },
  },
  methods: {},
};
</script>

<style scoped>
#atribComponentWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#atribComponentWrapper div {
  color: #b8ccdb;
}

#attribControlsWrapper {
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
}

#attribInput {
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
  width: 90%;
  margin-left: 20px;
}

button {
  margin-left: 10px;

  min-height: 10%;
  min-width: 10%;
  padding: 0px 20px 0px 20px;
  font-size: 20px;
}

#attribInput:hover {
  border: 4px solid #070101;
}

#attribInput:focus {
  border: 4px solid #00599c;
}
</style>
