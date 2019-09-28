<template>
  <main>
    <app-masthead />
    <app-form />
  </main>
</template>

<script>
import AppMasthead from "@/components/AppMasthead.vue";
import AppForm from "@/components/AppForm.vue";

export default {
  components: {
    AppMasthead,
    AppForm
  }
};
</script>
