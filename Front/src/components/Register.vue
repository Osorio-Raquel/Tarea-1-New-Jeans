<template>
  <v-container class="login-container" fluid>
    <v-row justify="center" align="center" class="fill-height">
      <v-col cols="12" md="8">
        <v-card class="elevation-12 login-card fade-in">
          <v-row>
            <!-- Formulario en la izquierda -->
            <v-col cols="12" md="6" class="form-side">
              <v-form @submit.prevent="register">
                <!-- Campos de texto -->
                <v-text-field label="Username" v-model="username" type="text" required class="fade-in"></v-text-field>
                <v-text-field label="Contraseña" v-model="password" type="password" required class="fade-in"></v-text-field>
                
                <!-- Botón de registro -->
                <v-btn type="submit" color="pink" class="mt-4 fade-in" large block>Registrar</v-btn>
              </v-form>
            </v-col>

            <!-- Imagen en la derecha -->
            <v-col cols="12" md="6" class="image-side">
              <v-img
                src="https://images.unsplash.com/photo-1742302954292-1f903368084e?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Imagen decorativa"
                cover
                height="100%"
                class="fade-in"
              ></v-img>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '', // 'email' cambiado a 'username'
      password: ''
    };
  },
  methods: {
    async register() {
      try {
        // Enviar la solicitud POST al API con 'username' en lugar de 'email'
        const response = await axios.post('http://localhost:3000/api/auth/register', {
          username: this.username, // Enviar 'username' aquí
          password: this.password
        });

        // Si la respuesta es exitosa, redirigir al login
        if (response.status === 200) {
          this.$router.push({ name: 'login' });
        }
      } catch (error) {
        // Manejar el error
        console.error("Registro fallido:", error.response ? error.response.data : error.message);
        
        // Mostrar el mensaje de error al usuario
        if (error.response && error.response.data) {
          alert(error.response.data.message || 'Ocurrió un error.');
        } else {
          alert('Error de red o servidor caído.');
        }
      }
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap');

.login-container {
  background: linear-gradient(135deg, #f8c8d7, #f5a7c0); /* Degradado rosa suave */
  min-height: 100vh;
  padding: 2rem;
  font-family: 'Poppins', sans-serif;
}

.login-card {
  overflow: hidden;
  border-radius: 20px;
  background-color: #fff;
}

.image-side {
  background-color: #fdfdff; /* Blanco suave */
}

.form-side {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

h2 {
  font-weight: bold;
  color: #d68a99; /* Rosa suave */
  font-size: 2rem;
}

.fade-in {
  animation: fadeIn 1s ease-in forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.v-btn {
  border-radius: 30px;
  transition: 0.3s ease;
}

.v-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.v-text-field .v-input__control {
  border-radius: 15px;
}

.v-btn {
  background-color: #f8a5c2; /* Rosa claro */
}

.v-btn.secondary {
  background-color: #f5d0c5; /* Color durazno */
}
</style>
