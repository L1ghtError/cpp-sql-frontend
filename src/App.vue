<script>
import inputCard from "./components/InputCard.vue";
import NetworkOperationResponse from "./components/networkOperationResponse.vue";
export default {
  components: {
    inputCard,
    NetworkOperationResponse,
  },
};
</script>

<template>
  <div>
    <inputCard></inputCard>
    <NetworkOperationResponse
      :response-info="`Request recieved ✅`"
      :additionalInfo="`your mother dead`"
    ></NetworkOperationResponse>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

/* @media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
} */
</style>
