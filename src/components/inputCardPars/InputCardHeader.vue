<template>
  <div id="inputCardHeader">
    <div id="logoHeader">
      <img src="../../assets/cpplogo.svg" alt="Vue logo" class="logo" />
      <div id="plusSign">+</div>
      <img
        src="../../assets/SQLDatabase_Logo.svg"
        alt="Vue logo"
        class="logo"
      />
    </div>
  </div>
</template>

<!-- <script>
// import cppLogo from '../../assets/cpplogo.svg'
// import sqlLogo from '../../assets/SQLDatabase_Logo.svg'
</script> -->

<style>
#inputCardHeader {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #00599c;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 66px 66px 0px 0px;
}
#logoHeader {
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  align-items: center;

  height: 80%;
  width: 300px;
}

.logo {
  height: 100%;
}
#plusSign {
  font-size: 40px;
}
</style>
