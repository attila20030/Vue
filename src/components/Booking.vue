<template>
  <div class="booking"></div>
  <div class="container p-4 rounded">
    <h2 class="my-5 text-center">Időpont Foglalás</h2>
    <form @submit.prevent="bookAppointment">
      <label>Kérem válassza ki milyen szolgáltatást szeretne igénybe venni:</label>
      <select v-model="service" class="form-select mb-3">
        <option>Pszichológus</option>
        <option>Műkörmös</option>
        <option>Fodrász Férfi/Női</option>
        <option>Orvos</option>
        <option>Műszaki vizsga</option>
        <option>Tetováló</option>
        <option>Hivatali ügyintézés</option>
      </select>


      <label class="idopont">Kérem válassza ki a napot:</label>
      <select v-model="time" class="form-select mb-3">
        <option>Hétfő</option>
        <option>Kedd</option>
        <option>Szerda</option>
        <option>Csütörtök</option>
        <option>Péntek</option>
        <option>Szombat</option>
        <option>Vasárnap</option>
      </select>


      <label class="idopont">Kérem válassza ki az időpontot:</label>
      <select v-model="time" class="form-select mb-3">
        <option>08:00</option>
        <option>09:00</option>
        <option>10:00</option>
        <option>11:00</option>
        <option>12:00</option>
        <option>13:00</option>
        <option>14:00</option>
        <option>15:00</option>
        <option>16:00</option>
      </select>

      <div class="mb-3">
        <label for="name" class="form-label">Név</label>
        <input v-model="name" type="text" class="form-control" id="name" placeholder="pl: Varga Irény" required />
      </div>

      <div class="mb-3">
        <label for="phone" class="form-label">Telefonszám</label>
        <input v-model="phone" type="text" class="form-control" id="phone" required pattern="^[0-9]{11}$" placeholder="Pl. 06307186525" />
      </div>

      <button type="submit" class="btn btn-primary mb-3">Foglalás</button>
    </form>

    <div class="toast-container position-fixed top-0 end-0 p-3">
      <div id="liveToast" class="toast align-items-center text-white bg-success border-0" role="alert">
        <div class="d-flex">
          <div class="toast-body">
            Sikeres foglalás!
          </div>
          <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Toast } from "bootstrap";

const name = ref("");
const phone = ref("");
const service = ref("Pszichológus");
const time = ref("08:00");

const bookAppointment = () => {
  if (!name.value || !phone.value) {
    alert("Kérlek, töltsd ki az összes mezőt!");
    return;
  }
  console.log(`Foglalás sikeres: Név - ${name.value}, Telefonszám - ${phone.value}`);

  const toastEl = document.getElementById("liveToast");
  const toast = new Toast(toastEl);
  toast.show();
};
</script>

<style scoped>
.container {
  background-color: lightblue;
  max-width: 500px;
}
</style>