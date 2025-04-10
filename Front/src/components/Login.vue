<template>
  <v-container class="login-container" fluid>
    <v-row justify="center" align="center" class="fill-height">
      <v-col cols="12" md="8">
        <v-card class="elevation-12 login-card" v-scroll="onScroll">
          <v-row>
            <!-- Imagen decorativa -->
            <v-col cols="12" md="6" class="image-side">
              <v-img
                src="https://images.unsplash.com/photo-1742302954292-1f903368084e?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Login Image"
                cover
                height="100%"
              ></v-img>
            </v-col>

            <!-- Formulario -->
            <v-col cols="12" md="6" class="form-side">
              <v-form>
                <v-fade-transition mode="out-in">
                  <div v-if="showForm" class="fade-in">
                    <h2 class="mb-4 text-center">Bienvenido</h2>
                    <v-text-field
                      v-model="username"
                      label="Username"
                      prepend-inner-icon="mdi-account"
                      outlined
                      dense
                      color="pink"
                    ></v-text-field>

                    <v-text-field
                      v-model="password"
                      label="Contraseña"
                      type="password"
                      prepend-inner-icon="mdi-lock"
                      outlined
                      dense
                      color="pink"
                    ></v-text-field>

                    <v-btn
                      class="mt-4"
                      color="lavender"
                      large
                      block
                      @click="login"
                    >
                      Iniciar sesión
                    </v-btn>

                    <v-btn
                      class="mt-2"
                      color="peach"
                      large
                      block
                      @click="register"
                    >
                      Registrarse
                    </v-btn>
                  </div>
                </v-fade-transition>
              </v-form>
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
      username: '',
      password: '',
      showForm: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.showForm = true;
    }, 500); // delay pequeño para la animación
  },
  methods: {
    async login() {
      console.log("Username:", this.username);
      console.log("Password:", this.password);
      try {
        const response = await axios.post('http://localhost:3000/api/auth/login', {
          username: this.username,
          password: this.password
        });

        const token = response.data.token;
        
        console.log("Token recibido:", token);
        localStorage.setItem('token', token);

        this.$router.push({ name: 'welcome' });
      } catch (error) {
        alert('Error al iniciar sesión: ' + (error.response?.data?.message || error.message));
      }
    },
    register() {
      this.$router.push({ name: 'register' });
    },
    onScroll(e) {
      // Aquí puedes manejar alguna animación extra si quieres al hacer scroll
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap');

.login-container {
  background: linear-gradient(135deg, #a0c4ff, #b5e2fd); /* Pastel gradient */
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
  background-color: #fdfdff; /* Slightly off-white */
}

.form-side {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

h2 {
  font-weight: bold;
  color: #6f6fff; /* Light purple */
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
  background-color: #f8a5c2; /* Light pink */
}

.v-btn.secondary {
  background-color: #f5d0c5; /* Peachy color */
}
</style>
