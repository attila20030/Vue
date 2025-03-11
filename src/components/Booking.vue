<template>
    <div class="booking"></div>
    <div class="container">
      <h2 class="my-5 text-center">Időpont Foglalás</h2>
      <form>
        <label>Kérem válasza ki milyen szolgáltatást szeretne igénybe venni:  </label>
        <select class="valasztek">
          <option>Pszichológus</option>
          <option>Mükörmös</option>
          <option>Fodrász Férfi/Női</option>
          <option>Orvos</option>
          <option>Műszaki vizsga</option>
          <option>Tetováló</option>
          <option>Hivatali ügyintézés</option>
        </select><br>
  
        <label class="idopont">Kérem válassza ki az időpontot:</label>
        <select class="valasztek1">
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
          <label for="name" class="form-label" >Név</label>
          <input type="text" class="form-control" id="name" placeholder="pl: Varga Irény"/>
        </div>
        <div class="mb-3">
          <label for="phone" class="form-label" >Telefonszám</label>
          <input
            type="text"
            class="form-control"
            id="phone"
            required
            pattern="^[0-9]{10}$"
            placeholder="Pl. 0612345678"
          />
        </div>
        <button type="submit" class="btn btn-primary mb-3 ">Foglalás</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import {ref} from 'vue'
  </script>
  
  <style scoped>
  .container{
    background-color: lightblue;
  }
  </style>
    
    