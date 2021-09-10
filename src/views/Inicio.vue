<template>
  <div>
    <h1>CRUD</h1>
    <h2>{{ usuario.email }}</h2>
    <router-link class="btn btn-success d-grid gap-2" to="/agregar">
      Agregar
    </router-link>
    <ul class="list-group">
      <li class="list-group-item" v-for="(item, index) in tareas" :key="index">
        {{ item.nombre }}-{{ item.descripcion }}
        <div class="float-end">
          <router-link
            :to="{ name: 'Editar', params: { id: item.id } }"
            class="btn btn-warning btn-sm me-2"
          >
            Editar
          </router-link>
          <button class="btn btn-danger btn-sm" @click="eliminarTarea(item.id)">
            Eliminar
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Inicio",
  methods: {
    ...mapActions(["getTareas", "eliminarTarea"]),
  },
  computed: {
    ...mapState(["usuario", "tareas"]),
  },
  created() {
    this.getTareas();
  },
};
</script>