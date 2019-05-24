<template>
  <div>
    <h3 v-if="!isEditMode()">New Contact</h3>
    <h3 v-if="isEditMode()">Edit Contact</h3>
    <form @submit.prevent="addNewContact">
      <label for="name">Name:</label>
      <input name="name" type="text" v-model="name"/><br>
      <label for="email">Email:</label>
      <input name="email" type="text" v-model="email"/><br>
      <label for="message">Message:</label>
      <textarea name="message" v-model="message"/><br>
      <button type="submit">Send</button>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      name: '',
      message: '',
      email: '',
    };
  },
})
export default class NewContact extends Vue {
  @Prop() private contact!: string;
  public addNewContact() {
    if (this.isFormValid()) {
      if (this.checkContactData()) {
        alert('needs to update data');
      } else {
        this.$router.replace({ name: 'newContactNotify', params: { email: this.$data.email }});
      }
    } else {
      alert('invalid form');
    }
  }

  private clearForm() {
    this.$data.name = '';
    this.$data.email = '';
    this.$data.message = '';
  }

  private checkContactData() {
    return this.$props.contact !== undefined;
  }

  private isEditMode() {
    // this.clearForm();
    const isEdit = this.checkContactData();
    if (isEdit) {
      this.$data.name = this.$props.contact.name;
      this.$data.email = this.$props.contact.email;
      this.$data.message = this.$props.contact.message;
    }
    return isEdit;
  }

  private isControlValid(element: string): boolean {
    return (this.$data[element]);
  }
  private isFormValid(): boolean {
    let result = true;
    Object.keys(this.$data).forEach( (item) => {
      if (this.$data[item] === undefined || this.$data[item] === '') {
        result = false;
      }
    });
    return result;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
</style>
