<template>
    <v-container>
      <v-row>
        <v-col cols="12" class="text-center">
          <v-btn @click="goToLogin" color="primary">Iniciar sesión</v-btn>
          <v-btn @click="goToRegister" color="secondary">Registrarse</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    name: "Home",
    methods: {
      goToLogin() {
        this.$router.push({ name: "login" });
      },
      goToRegister() {
        this.$router.push({ name: "register" });
      }
    }
  };
  </script>
  
  <style scoped>
  /* Estilos del componente Home */
  </style>
  