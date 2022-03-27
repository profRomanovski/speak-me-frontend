<template>
  <div class="container">
    <div class="card">
      <div class="card-image">
        <h2 class="card-heading">
          Sing in
          <small>Login to your account</small>
        </h2>
      </div>
      <login-form></login-form>
      <div class="card-info">
        <p>By signing up you are agreeing to our <a href="#">Terms and Conditions</a></p>
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from "@/modules/Auth/components/Form/LoginForm";
export default {
  name: "Login",
  components: {LoginForm}
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap");
*,
*:after,
*:before {
  box-sizing: border-box;
}

body {
  font-family: "DM Sans", sans-serif;
  line-height: 1.5;
  background-color: #f1f3fb;
  padding: 0 2rem;
}

img {
  max-width: 100%;
  display: block;
}

input {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0;
}

.card {
  margin: 0.5rem auto;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 425px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 20px 0 rgba(153, 153, 153, 0.25);
  padding: 0.75rem;
}

.card-image {
  border-radius: 8px;
  overflow: hidden;
  padding-bottom: 65%;
  background-image: url("https://assets.codepen.io/285131/coffee_1.jpg");
  background-repeat: no-repeat;
  background-size: 150%;
  background-position: 0 5%;
  position: relative;
}

.card-heading {
  position: absolute;
  left: 10%;
  top: 15%;
  right: 10%;
  font-size: 1.75rem;
  font-weight: 700;
  color: #735400;
  line-height: 1.222;
}
.card-heading small {
  display: block;
  font-size: 0.75em;
  font-weight: 400;
  margin-top: 0.25em;
}

.card-info {
  padding: 1rem 1rem;
  text-align: center;
  font-size: 0.875rem;
  color: #8597a3;
}
.card-info a {
  display: block;
  color: #6658d3;
  text-decoration: none;
}
</style>