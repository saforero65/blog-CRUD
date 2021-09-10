<template>
  <div id="app">
    <div id="nav" class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <b-button v-if="existeUsuario" variant="light"
          ><router-link to="/inicio">Inicio</router-link></b-button
        >

        <div v-if="existeUsuario">
          <b-dropdown
            id="dropdown-1"
            v-bind:text="usuario.email"
            class="m-md-2"
          >
            <b-dropdown-item @click="cerrarSesion" v-if="existeUsuario"
              >Cerrar Sesion</b-dropdown-item
            >
          </b-dropdown>
        </div>
        <div v-else>
          <b-dropdown id="dropdown-1" text="Ingresar" class="m-md-2">
            <b-dropdown-item
              ><router-link to="/login">Login</router-link></b-dropdown-item
            >
            <b-dropdown-item
              ><router-link to="/registro"
                >Registro</router-link
              ></b-dropdown-item
            >
          </b-dropdown>
        </div>
      </div>
    </div>

    <router-view class="container" />
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  methods: {
    ...mapActions(["cerrarSesion"]),
  },
  computed: {
    ...mapGetters(["existeUsuario"]),
    ...mapState(["usuario"]),
  },
};
</script>