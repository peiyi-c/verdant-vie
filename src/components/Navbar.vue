<template>
  <nav class="navbar navbar-expand-lg fixed-top">
    <div class="container-fluid">
      <a href="/">
        <img src="../../public/logo.svg" alt="logo vie" class="" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarItems"
        aria-controls="navbarItems"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarItems">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link text-dark" to="/all">ALL </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-dark" to="/hair"
              >HAIR</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-dark" to="/face"
              >FACE</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-dark" to="/body"
              >BODY</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-dark" to="/home"
              >HOME
            </router-link>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search..."
            aria-label="Search"
          />
          <button class="btn btn-outline-primary rounded-1" type="submit">
            <span class="material-symbols-outlined"> search </span>
          </button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script></script>

<style></style>
