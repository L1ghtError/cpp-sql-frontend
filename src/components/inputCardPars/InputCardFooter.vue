<template>
  <div id="inputCardFooter">
    <button id="submitButton" @click="$emit('submit-button-clicked')">
      SUBMIT
    </button>
  </div>
</template>

<script></script>

<style>
#inputCardFooter {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #182026;
  border-radius: 0px 0px 66px 66px;
  border-top: 3px solid #00599c;
  /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */
}

/* #submitButton {
  background: #004980;
  box-shadow: 0px 6px 13px 3px rgba(0, 0, 0, 0.25);
  border-radius: 45px;
  font-size: 30px;
  color: #dce8e8;
  padding: 0px 70px 0px 70px;
  min-height: 40%;
  min-width: 40%;

  font-family: 'Koulen';
  font-style: normal;
  font-weight: bold;

  transition: background 0.25s;
}

#submitButton:hover {
  background: #015392;
  cursor: pointer;
} */
</style>
