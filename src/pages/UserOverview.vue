<template>
  <div class="content">
    <div class="row">
      <div class="col-md-6">
        <div class="datetime-container">
          <label for="datetimePicker">Selecciona fecha y hora:</label>
          <input type="text" id="datetimePicker" v-model="selectedDateTime" />
        </div>
        <button @click="confirmarFecha" class="confirm-button">Confirmar</button>
      </div>
    </div>
  </div>
</template>

<script>
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import 'flatpickr/dist/l10n/es';
import '../assets/css/demo.css';

export default {
  data() {
    return {
      selectedDateTime: '',
    };
  },
  mounted() {
    flatpickr("#datetimePicker", {
      enableTime: true,
      dateFormat: "Y-m-d H:i",
      theme: "material_blue",
      locale: 'es',
    });
  },
  methods: {
    confirmarFecha() {
      if (this.selectedDateTime) {
        alert("Fecha y hora seleccionadas: " + this.selectedDateTime);
      } else {
        alert("Por favor, selecciona una fecha y hora antes de confirmar.");
      }
    },
  },
};
</script>
<style>
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.content {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.row {
  display: flex;
  flex-wrap: wrap;
}

.col-md-6 {
  flex: 0 0 50%;
  max-width: 50%;
  box-sizing: border-box;
  padding: 0 15px;
}

.datetime-container {
  margin-bottom: 20px;
}

#datetimePicker {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.confirm-button {
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.confirm-button:hover {
  background-color: #45a049;
}
</style>