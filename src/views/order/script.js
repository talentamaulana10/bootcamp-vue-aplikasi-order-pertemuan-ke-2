export default {
  name: "Order",
  data() {
    return {
      txtNamaBarang: "",
      txtQuantity: 0,
      currentOrderData: [],
    };
  },
  methods: {
    saveOrder() {
      var payload = {
        txtNamaBarang: this.txtNamaBarang,
        txtQuantity: this.txtQuantity,
      };
      this.currentOrderData.push(payload);
      sessionStorage.setItem(
        "order_data",
        JSON.stringify(this.currentOrderData)
      );
    },
    getCurrentOrder() {
      var getDataFromSession = JSON.parse(sessionStorage.getItem("order_data"));
      if (getDataFromSession) {
        this.currentOrderData = getDataFromSession;
      }
    },
  },
  mounted() {
    this.getCurrentOrder();
  },
};

// saat set item ubah json biasa => json string
// json string => json biasa
