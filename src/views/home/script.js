export default {
  name: "Home",
  methods: {
    routeToPageOrder() {
      this.$router.push("/order");
    },
    routeToPageHistory() {
      this.$router.push("/history");
    },
  },
};
