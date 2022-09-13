<template>
  <main class="pb-4">
    <div class="flex-row w-full flex justify-evenly mt-10">
      <div class="text-black flex flex-col justify-center w-max">
        <router-link
          class="bg-[#F79489] px-10 p-2 rounded border-black border hover:bg-rose-300 hover:text-white"
          to="/gallery"
          >Planning Portal</router-link
        >
      </div>
      <div class="">
        <div class="flex flex-col">
          <div class="flex flex-row justify-center">
            <img
              class="insta-image mr-3"
              src="src/assets/ig_logo.png"
              alt="Link to Instagram"
            />
            <svg
              class="w-10 h-7 text-black-700"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
              />
            </svg>
            <img
              class="pinterest-image w-10 h-8 flex flex-row justify-center justify-items-center"
              src="src/assets/icons8-pinterest.svg"
              alt="Link to Pinterest"
            />
          </div>

          <div class="flex-col text-center mt-2">
            <p class="text-black">1111 White Loft Ln Provo, UT 84604</p>
            <h5 class="text-black">Copyright &copy; Sabrina White 2022</h5>
          </div>
        </div>
      </div>
      <div class="text-black flex flex-col justify-center">
        <router-link
          class="bg-[#F79489] px-10 p-2 rounded border-black border hover:bg-rose-300 hover:text-white"
          to="/contact"
          >Schedule a Tour!</router-link
        >
      </div>
    </div>
  </main>
</template>

<style>
.insta-image {
  height: 30px;
}
</style>
