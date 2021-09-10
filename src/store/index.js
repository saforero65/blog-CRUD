import Vue from "vue";
import Vuex from "vuex";
import { db, auth } from "../firebase";
import router from "../router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    usuario: null,
    error: null,
    tareas: [],
    tarea: { nombre: "", id: "", fecha: "", descripcion: "" },
  },
  mutations: {
    setUsuario(state, payload) {
      state.usuario = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
    setTareas(state, payload) {
      state.tareas = payload;
    },
    setTarea(state, payload) {
      state.tarea = payload;
    },
    setEliminarTarea(state, payload) {
      state.tareas = state.tareas.filter((item) => item.id !== payload);
    },
  },
  actions: {
    crearUsuario({ commit }, usuario) {
      auth
        .createUserWithEmailAndPassword(usuario.email, usuario.passw)
        .then((res) => {
          const UsuarioCreado = {
            email: res.user.email,
            uid: res.user.uid,
          };
          console.log(res);
          db.collection(res.user.email)
            .add({
              nombre: "tarea de ejemplo",
            })
            .then((doc) => {
              commit("setUsuario", UsuarioCreado);
              router.push("/inicio");
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          console.log(error);
          commit("setError", error);
        });
    },
    ingresoUsuario({ commit }, usuario) {
      auth
        .signInWithEmailAndPassword(usuario.email, usuario.password)
        .then((res) => {
          const UsuarioLogeado = {
            email: res.user.email,
            uid: res.user.uid,
          };
          commit("setUsuario", UsuarioLogeado);
          router.push("/inicio");
        })
        .catch((error) => {
          console.log(error);
          commit("setError", error);
        });
    },
    cerrarSesion({ commit }) {
      auth.signOut().then(() => {
        router.push("/login");
      });
    },
    detectarUsuario({ commit }, usuario) {
      commit("setUsuario", usuario);
    },
    getProyectos({ commit, state }) {
      const tareas = [];

      db.collection("saforero88@gmail.com")
        .get()
        .then((res) => {
          res.forEach((doc) => {
            // console.log(doc.id);
            // console.log(doc.data());
            let tarea = doc.data();
            tarea.id = doc.id;
            tareas.push(tarea);
          });
          commit("setTareas", tareas);
        });
    },
    getTareas({ commit, state }) {
      const tareas = [];

      db.collection(state.usuario.email)
        .get()
        .then((res) => {
          res.forEach((doc) => {
            // console.log(doc.id);
            // console.log(doc.data());
            let tarea = doc.data();
            tarea.id = doc.id;
            tareas.push(tarea);
          });
          commit("setTareas", tareas);
        });
    },
    getTarea({ commit, state }, idTarea) {
      db.collection(state.usuario.email)
        .doc(idTarea)
        .get()
        .then((doc) => {
          console.log(doc.id);
          console.log(doc.data());
          let tarea = doc.data();
          tarea.id = doc.id;
          commit("setTarea", tarea);
        });
    },
    editarTarea({ commit, state }, tarea) {
      db.collection(state.usuario.email)
        .doc(tarea.id)
        .update({
          nombre: tarea.nombre,
          fecha: tarea.fecha,
          descripcion: tarea.descripcion,
        })
        .then(() => {
          console.log("tarea actualizada");
          router.push("/inicio");
        });
    },
    agregarTarea({ commit, state }, tarea) {
      db.collection(state.usuario.email)
        .add({
          nombre: tarea.nombre,
          fecha: tarea.fecha,
          descripcion: tarea.descripcion,
        })
        .then((doc) => {
          console.log(doc.id);
          router.push("/inicio");
        });
    },
    eliminarTarea({ commit, dispatch, state }, idTarea) {
      db.collection(state.usuario.email)
        .doc(idTarea)
        .delete()
        .then(() => {
          console.log("Tarea eliminada");
          // dispatch("getTareas");
          commit("setEliminarTarea", idTarea);
        });
    },
  },
  getters: {
    existeUsuario(state) {
      if (state.usuario === null) {
        return false;
      } else {
        return true;
      }
    },
  },

  modules: {},
});
