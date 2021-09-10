<template>
  <div class="center">
    <b-card
      title="Login de Usuarios"
      sub-title="Blog Santiago"
      style="max-width: 50%"
    >
      <form @submit.prevent="ingresoUsuario({ email: email, password: passw })">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label"
            >Correo Electronico</label
          >
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Ingrese email"
            v-model="email"
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Contraseña Nueva</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Ingrese contraseña"
            v-model="passw"
          />
        </div>

        <button class="btn btn-success" type="submit">Ingresar</button>
      </form>
      <p>{{ error }}</p>
    </b-card>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      passw: "",
    };
  },
  methods: {
    ...mapActions(["ingresoUsuario"]),
  },
  computed: {
    ...mapState(["error"]),
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