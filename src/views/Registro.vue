<template>
  <div>
    <div class="center">
      <b-card
        title="Registro De Usuarios"
        sub-title="Blog Santiago"
        style="max-width: 50%"
      >
        <form @submit.prevent="crearUsuario({ email: email, passw: passw1 })">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"
              >Correo Electronico</label
            >
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              v-model="email"
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3">
            <label class="form-label">Contraseña Nueva</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              v-model="passw1"
            />
          </div>
          <div class="mb-3">
            <label class="form-label">Confirmar Contraseña</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword2"
              v-model="passw2"
            />
          </div>

          <button type="submit" class="btn btn-primary" :disabled="!desactivar">
            Registrar Usuario
          </button>
          <p v-if="error">{{ error.code }}-{{ error.message }}</p>
        </form>
      </b-card>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Registro",
  data() {
    return {
      email: "",
      passw1: "",
      passw2: "",
    };
  },
  created() {},
  methods: {
    ...mapActions(["crearUsuario"]),
  },
  computed: {
    ...mapState(["error"]),
    desactivar() {
      return (
        this.passw1 === this.passw2 &&
        this.passw1.trim() !== "" &&
        this.passw1.length >= 6
      );
    },
  },
};
</script>
<style scoped>
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
}
</style>