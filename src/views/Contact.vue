<template>
  <div>
    <h1>My Contact Page</h1>
    <button @click="newContactEvent">New Contact</button>
    <router-view></router-view>
    <ContactList :contacts="contacts" @editContact="editContactEvt"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ContactList from '@/components/ContactList.vue'; // @ is an alias to /src

@Component({
  components: { ContactList },
  data: () => {
    return {
      contacts: [],
    };
  },
})
export default class Contact extends Vue {

  public mounted() {
    this.$data.contacts.push({
      name: 'uriel',
      email: 'ur@ur.com',
      message: 'GOT Final sucks!!!',
    });
  }

  public newContactEvent() {
    this.$router.replace({ name: 'newContact' });
  }

  public editContactEvt(evt: any) {
    this.$router.replace({ name: 'editContact', params: { contact: evt }});
  }
}
</script>
