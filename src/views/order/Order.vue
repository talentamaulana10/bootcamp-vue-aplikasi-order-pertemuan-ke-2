<template>
  <div>
    <input v-model="txtNamaBarang" type="text" placeholder="Nama Barang" />
    <input v-model="txtQuantity" type="number" placeholder="Jumlah" />
    <button @click="saveOrder">Submit</button>
  </div>
</template>

<script src="./script.js" />
