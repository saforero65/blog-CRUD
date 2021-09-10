<template>
  <div class="container">
    <div>
      <h1 class="title">¡Bienvenido!</h1>
      <h4>
        Soy <b>Santiago Forero Zapata</b> estudiante de
        <b>Ingenieria en Multimedia</b>
        de la <b>Universidad Militar Nueva Granada</b>, actualmente cursando 8vo
        Semestre, aqui encontraras los trabajos realizados para la materia de
        <b>RENDER</b>.
      </h4>
    </div>
    <div>
      <ul class="list-group">
        <li
          class="list-group-item"
          v-for="(item, index) in tareas"
          :key="index"
        >
          {{ item.nombre }}-{{ item.descripcion }}-{{ item.fecha }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      name: null,
      email: null,
      message: null,
    };
  },
  components: {},

  created() {
    this.getProyectos();
  },
  methods: {
    ...mapActions(["getProyectos"]),
  },
  computed: {
    ...mapState(["tareas"]),
  },
};
</script>
