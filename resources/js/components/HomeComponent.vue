<template>
  <div class="container">
    <h1 class="heading">FizzBuzz test</h1>
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">FizzBuzz Data</div>
          <div class="card-body">{{ responseData != null ? responseData : 'No Data found !'}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      responseData: null
    };
  },
  mounted() {
    this.axios.get("/api/load-data").then(response => {
      if (response.data.status) {
        this.responseData = response.data.data;
      }
    });
  }
};
</script>

<style scoped>
.heading {
  font-weight: bold;
  color:teal;
  margin: 20px 10px;
  text-align: center;
}
</style>
