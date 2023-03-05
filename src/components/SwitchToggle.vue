<template>
  <div class="switch-toggle switch-3 switch-candy">
    <input id="Read" name="state-d" type="radio" />
    <label for="Read" @click="$emit('selet-moce', 'Read')">Read</label>

    <input id="Add" name="state-d" type="radio" checked="1" />
    <label for="Add" @click="$emit('selet-moce', 'Add')">ADD</label>

    <input id="Update" name="state-d" type="radio" />
    <label for="Update" @click="$emit('selet-moce', 'Update')">Update</label>

    <input id="Delete" name="state-d" type="radio" />
    <label for="Delete" @click="$emit('selet-moce', 'Delete')">DELETE</label>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.switch-toggle {
  float: left;
  background: #242729;

  margin-top: 10px;
  box-shadow: 0px 5px 19px 10px rgba(0, 0, 0, 0.55);
}
.switch-toggle input {
  position: absolute;
  opacity: 0;
}
.switch-toggle input + label {
  padding: 10px;
  padding-left: 15px;
  padding-right: 15px;
  float: left;
  color: #fff;
  cursor: pointer;
}
.switch-toggle input:checked + label {
  background: #00599c;
}
.switch-toggle input:hover + label {
  background: #3c4349;
}
</style>
