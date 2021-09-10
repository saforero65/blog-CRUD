<template>
  <div>
    {{ tarea.id }}-{{ tarea.nombre }}
    <h1>Editar</h1>
    <form
      @submit.prevent="editarTarea(tarea)"
      class="row row-cols-lg-auto g-3 align-items-center"
    >
      <div class="col-12">
        <div class="input-group">
          <input
            type="text"
            v-model="tarea.nombre"
            class="form-control"
            placeholder="Nombre"
          />
          <input
            type="date"
            v-model="tarea.fecha"
            class="form-control"
            placeholder="Nombre"
          />
          <input
            type="text"
            v-model="tarea.descripcion"
            class="form-control"
            placeholder="Nombre"
          />
          <button class="btn btn-primary" type="submit">Editar</button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Editar",
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  created() {
    this.getTarea(this.id);
  },
  methods: {
    ...mapActions(["getTarea", "editarTarea"]),
  },
  computed: {
    ...mapState(["tarea"]),
  },
};
</script>