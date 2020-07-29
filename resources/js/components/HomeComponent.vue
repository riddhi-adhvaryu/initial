<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Home Component</div>
          <div class="card-body">{{ responseData }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      responseData: {}
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
