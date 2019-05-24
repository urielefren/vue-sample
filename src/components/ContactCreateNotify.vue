<template>
  <div>
    <p v-if="email">It was sending an email to {{email}}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ContactCreateNotify extends Vue {
  @Prop() private email!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
