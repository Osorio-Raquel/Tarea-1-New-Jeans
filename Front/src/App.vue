<template>
  <v-app>
    <router-view></router-view> <!-- Aquí se cargan las vistas -->
  </v-app>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
/* Asegura que el body y el html ocupen el 100% de la altura y el ancho */
html, body, #app {
  height: 100%;
  width: 100%;
  margin: 0;
}

/* Asegura que v-app ocupe toda la pantalla */
.v-app {
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh; /* Ocupa toda la altura de la ventana */
}

.router-view{
  position: fixed;
  align-items: center;
  width: fit-content;
}
</style>
