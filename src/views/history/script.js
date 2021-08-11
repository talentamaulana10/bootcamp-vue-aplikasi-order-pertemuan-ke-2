export default {
  name: "History",
  data() {
    return {
      orderData: [],
    };
  },
  methods: {
    getOrderData() {
      var getDataFromSession = JSON.parse(sessionStorage.getItem("order_data"));
      if (getDataFromSession) {
        this.orderData = getDataFromSession;
      }
    },
    deleteOrderHistory(item) {
      this.orderData.splice(item.index, 1);
      sessionStorage.setItem("order_data", JSON.stringify(this.orderData));
    },
  },
  mounted() {
    this.getOrderData();
  },
};
