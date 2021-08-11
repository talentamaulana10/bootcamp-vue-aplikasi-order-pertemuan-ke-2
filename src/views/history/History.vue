<template>
  <div class="container-history">
    <div v-for="item in orderData" :key="item" class="card-order">
      <div class="content-description">
        <span>Nama Barang : {{ item.txtNamaBarang }}</span>
        <span>Jumlah : {{ item.txtQuantity }}</span>
      </div>
      <div class="content-action">
        <button @click="deleteOrderHistory(item)">Hapus</button>
      </div>
    </div>
  </div>
</template>

<script src="./script.js" />
<style src="./styles.css" />
