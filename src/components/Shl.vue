<template>
  <div class="shl" @click="handlerChange('changsi')" >
     {{ message.name }}
     <br>
     <br>
     <br>
     <button @click.stop="handlerChange('')">child change</button>
     <br>
     <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    message: {
      type: Object,
      default: "learn object"
    }
  },
  methods: {
    handlerChange(val) {
      this.message.name = val;
    }
  }
};
</script>
<style lang="less">
.shl{
  border: 2px solid red;
}
</style>


