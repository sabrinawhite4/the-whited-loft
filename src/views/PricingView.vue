<template>
  <main class="pricing-wrapper">
    <div class="summer-pricing">
      <h1>Summer Pricing</h1>
      <h2>May-October</h2>
      <br />
      <h3>4:00 - 11:00</h3>
    </div>
    <div class="winter-pricing"></div>
  </main>
</template>

<style>
.pricing h1 {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 6rem;
  font-weight: 400;
  font-size: 3rem;
  font-family: Verdana, sans-serif;
}
.pricing-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  color: black;
  font-family: Verdana, sans-serif;
}
#package-title {
  font-size: 2rem;
  font-weight: 350;
  margin: 0;
  padding: 0;
}
#package-description {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 250;
  margin: 20px 0;
  padding: 0;
}
</style>
