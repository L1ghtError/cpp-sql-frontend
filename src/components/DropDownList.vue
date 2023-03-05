<template>
  <div id="drop-down-list">
    <div id="offsetDiv"></div>
    <ul id="confTablesList">
      <li v-for="name in namesArr" :key="name" @click="emmitClick(name)">
        {{ name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    namesArr: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    emmitClick(name) {
      this.$emit("selected-attr-name", name);
    },
  },
};
</script>

<style scoped>
#confTablesList li {
  color: black;
  border-bottom: 3px solid #181818;
  margin-right: 5px;
  white-space: nowrap;
  transition: color 0.25s;
}

#confTablesList li:hover {
  color: #00599c;
}

#offsetDiv {
  height: 30px;
  width: 50%;
}

#confTablesList {
  padding-left: 30px;
  background-color: white;
  z-index: 100;
  padding-bottom: 5px;
  border-radius: 5px;
}
</style>
