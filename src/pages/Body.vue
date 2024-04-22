<template>
  <h1 class="text-center">For Body</h1>
  <div id="carousel-body" class="carousel slide opacity-90">
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carousel-body"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carousel-body"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <!-- https://www.pexels.com/photo/crop-woman-with-eco-brush-and-soap-bar-7262410/ -->
        <img
          src="../assets/images/body/body-1.jpeg"
          class="d-block w-100 rounded-2"
          alt="Body Product Image 1"
        />
        <div class="carousel-caption d-none d-md-block">
          <h5>First slide label</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </div>
      </div>
      <div class="carousel-item">
        <!--https://www.pexels.com/photo/stack-of-natural-soaps-placed-on-table-6621497/-->
        <img
          src="../assets/images/body/body-2.jpeg"
          class="d-block w-100 rounded-2"
          alt="Body Product Image 2"
        />
        <div class="carousel-caption d-none d-md-block">
          <h5>Second slide label</h5>
          <p>Some representative placeholder content for the second slide.</p>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carousel-body"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carousel-body"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "Body",
};
</script>

<style></style>
