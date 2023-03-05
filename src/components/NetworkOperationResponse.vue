<template>
  <div id="network-operation-response">
    {{ responseInfo }}
    <div v-if="additionalInfo != ''" id="network-operation-additional-info">
      {{ additionalInfo }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    responseInfo: {
      type: String,
      default() {
        return "Information";
      },
    },
    additionalInfo: {
      type: String,
      default() {
        return "";
      },
    },
  },
};
</script>

<style scoped>
#network-operation-response {
  bottom: 25px;
  right: 50px;
  position: fixed;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: rgb(243, 239, 239);
  text-align: center;
  color: #1d1c1c;
  cursor: pointer;
  border-radius: 5px;
  font-size: 30px;
  padding: 10px;
}
#network-operation-additional-info {
  font-size: 20px;
  color: #444444;
}
</style>
