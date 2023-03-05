<template>
  <div id="InputCard">
    <InputCardHeader></InputCardHeader>
    <inputCardContent
      v-model="prepearedResponse"
      @clear-prepeared-response="(name) => handlePrepearedResponseClear(name)"
      @change-prepeared-response="
        (id, who, what) => handlePrepearedResponseCahnge(id, who, what)
      "
    ></inputCardContent>
    <InputCardFooter
      @submit-button-clicked="handleSubmitButtonClick"
    ></InputCardFooter>
  </div>
</template>

<script lang="js">
import InputCardHeader from "./inputCardPars/InputCardHeader.vue";
import InputCardFooter from "./inputCardPars/InputCardFooter.vue";
import inputCardContent from "./inputCardPars/InputCardContent.vue";
// import NetworkOperationResponse from "./networkOperationResponse.vue"
import { addEntity } from "./networkScripts";
export default {
  components: {
    InputCardHeader,
    InputCardFooter,
    inputCardContent,
  },
  data() {
    return {
      prepearedResponse: [],
      networkRequestType: "add"
    };
  },
  methods:{
    handleSubmitButtonClick(){
      console.log(this.prepearedResponse)
      addEntity(JSON.stringify(this.prepearedResponse))
    },
    handlePrepearedResponseCahnge(id,who,what){

      this.prepearedResponse[id] = {who,what}
    },
    handlePrepearedResponseClear(name){
      this.prepearedResponse = []
      this.prepearedResponse[0] = name
    }
  }
};
</script>

<style scoped>
#InputCard {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 700px;

  box-shadow: 0px 18px 19px 10px rgba(0, 0, 0, 0.25);
  border-radius: 66px;
}

#inputCardHeader {
  width: 100%;
  height: 120px;
}

#inputCardContent {
  overflow: auto;
  min-height: 50vh;
}

#inputCardFooter {
  height: 100px;
}
</style>
