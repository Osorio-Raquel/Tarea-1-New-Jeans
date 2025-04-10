<template>
  <v-container>
    <v-row justify="center" align="center" class="main-container">
      <v-col cols="12" md="8" class="content">
        <!-- Mensaje de bienvenida con animación y chispas -->
        <v-alert class="welcome-alert">
          ¡Bienvenido a la aplicación!
          <div class="sparks">
            <div class="spark"></div>
            <div class="spark"></div>
            <div class="spark"></div>
            <div class="spark"></div>
          </div>
        </v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Welcome',
  mounted() {
    this.triggerSparks();
  },
  methods: {
    triggerSparks() {
      const sparks = document.querySelectorAll('.spark');
      sparks.forEach((spark, index) => {
        setTimeout(() => {
          spark.classList.add('active');
        }, index * 300); // Las chispas se activan en un intervalo
      });
    }
  }
};
</script>

<style scoped>
/* Layout y diseño de contenedor */
.main-container {
  min-height: 100vh;
  background-color: #f7e1f2; /* Fondo suave y pastel */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
}

.content {
  text-align: center;
  max-width: 600px;
  width: 100%;
}

/* Estilo del mensaje de bienvenida con animación */
.welcome-alert {
  font-family: 'Poppins', sans-serif;
  font-size: 32px;
  font-weight: bold;
  color: white;
  background-color: #f06292; /* Rosa pastel */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  position: relative;
  overflow: hidden;
  
  /* Animación de entrada */
  animation: fadeInScale 1.5s ease-in-out;
}

@keyframes fadeInScale {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

/* Efecto de chispas alrededor del alert */
.sparks {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none; /* Para que las chispas no interfieran con la interacción del alert */
}

.spark {
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: #ff80ab; /* Rosa claro */
  border-radius: 50%;
  opacity: 0;
  animation: sparkle 1.5s ease-out infinite;
}

.spark:nth-child(1) {
  top: 10%;
  left: 20%;
}

.spark:nth-child(2) {
  top: 30%;
  left: 40%;
}

.spark:nth-child(3) {
  top: 50%;
  left: 60%;
}

.spark:nth-child(4) {
  top: 70%;
  left: 80%;
}

@keyframes sparkle {
  0% {
    transform: scale(1) translate(0, 0);
    opacity: 1;
  }
  50% {
    transform: scale(1.5) translate(20px, -20px);
    opacity: 0.7;
  }
  100% {
    transform: scale(0) translate(40px, -40px);
    opacity: 0;
  }
}

/* Estilos generales */
body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  background-color: #f7e1f2; /* Fondo pastel */
  color: #333;
  overflow: hidden;
}
</style>
