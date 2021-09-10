<template>
  <div>
    <form
      @submit.prevent="
        agregarTarea({ nombre: nombre, fecha: fecha, descripcion: descripcion })
      "
      class="row align-items-center"
    >
      <div class="first-row">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Titulo</label>
          <input
            class="form-control"
            type="text"
            v-model="nombre"
            placeholder="Titulo"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Fecha</label>
          <input class="form-control" type="date" v-model="fecha" />
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Descripción:</label>

        <b-form-textarea
          id="textarea-large"
          placeholder="Large textarea"
          v-model="descripcion"
        ></b-form-textarea>
      </div>

      <!-- <div>
        <b-form-file multiple :file-name-formatter="formatNames"></b-form-file>

        <b-form-file v-model="file" ref="file-input"></b-form-file>

        <b-button @click="clearFiles" class="mr-2">Reset via method</b-button>

        <p class="mt-2">
          Selected file: <b>{{ file ? file.name : "" }}</b>
        </p>
      </div> -->
      <button class="btn btn-primary" type="submit">Agregar</button>
    </form>
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  name: "Agregar",
  data() {
    return {
      nombre: "",
      fecha: "",
      descripcion: "",
      file: null,
    };
  },
  methods: {
    clearFiles() {
      this.$refs["file-input"].reset();
    },
    ...mapActions(["agregarTarea"]),
  },
};
</script><style scoped>
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
}
.first-row {
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
}
</style>