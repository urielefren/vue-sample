<template>
  <div>
    <h3>Contacts</h3>
    <table>
      <thead>
        <th>Name</th>
        <th>Message</th>
        <th>Email</th>
        <th>Actions</th>
      </thead>
      <tbody>
        <tr v-for="(contact, index) in contacts" v-bind:key="index">
          <td>{{ contact.name }}</td>
          <td>{{ contact.message }}</td>
          <td>{{ contact.email }}</td>
          <td>
            <button @click="editContact(contact)">Edit Contact</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  props: {
    contacts: {
      type: Array,
      required: true,
    },
  },
})
export default class ContactList extends Vue {
  public editContact(contact: any) {
    this.$emit('editContact', contact);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
</style>
