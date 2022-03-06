<template>
  <main class="pricing-wrapper">
    <div class="pricing">
      <h1>Pricing</h1>
    </div>
    <h3 id="package-title">Half-Day Morning Rentals</h3>
    <div id="package-description">
      <p>8 - 2 PM</p>
      <p>+ Hosted on Heroku +</p>
      <p>Javascript | HTML | CSS | Tensorflow | Heroku | Express | Node.js</p>
    </div>
    <h3 id="package-title">Half-Day Evening Rentals</h3>
    <div id="package-description">
      <p>3 - 9 PM or 4 - 10 PM</p>
      <p>+ Hosted on Heroku +</p>
      <p>Javascript | HTML | CSS | Tensorflow | Heroku | Express | Node.js</p>
    </div>
    <h3 id="package-title">Full Day Rentals</h3>
    <div id="package-description">
      <p>10 - 10 PM</p>
      <p>+ Hosted on Heroku +</p>
      <p>Javascript | HTML | CSS | Tensorflow | Heroku | Express | Node.js</p>
    </div>
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
  flex-direction: column;
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
  flex-direction: column;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 250;
  margin: 20px 0;
  padding: 0;
}
</style>
