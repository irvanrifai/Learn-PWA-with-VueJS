<template>
  <div class="container">
    <!-- desktop view -->
    <div class="d-none d-md-block">
      <div class="row m-3 mt-4">
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h4>
                <strong>Can buy anything you want!</strong> <br />from anyscreen
              </h4>
              <p>Let's fill your cart with something you love</p>
              <button class="btn btn-lg btn-success">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
                </svg>
                Shop
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <img src="../assets/img/hero-img.png" alt="hero-img" width="500" />
        </div>
      </div>
    </div>

    <!-- mobile view -->
    <div class="d-sm-block d-md-none">
      <div class="row m-3 mt-4">
        <div class="col-md-6">
          <img src="../assets/img/hero-img.png" alt="hero-img" width="500" />
        </div>
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h4>
                <strong>Can buy anything you want!</strong> <br />from anyscreen
              </h4>
              <p>Let's fill your cart with something you love</p>
              <button class="btn btn-lg btn-success">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
                </svg>
                Shop
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero-app",
};
</script>

<style>
</style>