<template>
  <div class="login">
    <img id="ninja1" src="../assets/images/ninja-lecdt-1.png" alt="ninja1" />
    <img id="ninja2" src="../assets/images/ninja-lecdt-2.png" alt="ninja2" />
    <div class="login-container">
      <img id="svg-barcode" src="../assets/images/icone-lecdt.svg" alt="icon" />
      <div class="title">
        <p>Teste dos</p>
        <h1>Mestres</h1>
      </div>
      <form class="login-form">
        <p>
          E-mail de Login<span>* </span
          ><span id="verify" v-if="$v.email.$error">O email é requerido.</span>
        </p>
        <input
          type="email"
          placeholder="email@email.com"
          v-model="email"
          @change="$v.email.$touch()"
        />

        <p>
          Senha de acesso<span
            >*
            <span id="verify" v-if="$v.password.$error"
              >A senha é requirida.</span
            ></span
          >
        </p>
        <input
          type="password"
          placeholder="senha123#"
          v-model="password"
          @change="$v.password.$touch()"
        />

        <button type="submit" @click.prevent="login">
          Entrar Agora<img
            id="icon-arrow"
            src="../assets/images/icone-seta-lecdt.svg"
            alt="arrow"
          />
        </button>
      </form>
      <div class="create-login">
        <p>Não tem conta? <a href="/">Crie agora.</a></p>
      </div>
    </div>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      email: "",
      password: "",
      emailVerify: false,
      passwordVerify: false,
    };
  },
  validations: {
    email: { required },
    password: { required },
  },
  methods: {
    login() {
      if (!this.$v.$invalid) {
        alert("Logado!!")
        window.location.reload();
      } else {
        this.$v.$touch();
      }
    }
  }
}
</script>

<style scoped>
* {
  font-family: "poppins";
  color: #fff;
  outline: none;
}
.login {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: url("../assets/images/background-lecdt.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.login #ninja1,
.login #ninja2 {
  position: absolute;
  width: 40%;
}
.login #ninja1 {
  bottom: 0;
  left: 0;
}
.login #ninja2 {
  bottom: 0;
  right: 0;
}
.login-container {
  position: relative;
  background: url("../assets/images/sombra-login-lecdt.png"),
    linear-gradient(45deg, transparent, #1b1d27);
  backdrop-filter: blur(10px);
  width: 450px;
  height: 500px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.login-container #svg-barcode {
  width: 35px;
  position: absolute;
  top: -15px;
  right: 30px;
  z-index: 10;
}
.title {
  text-align: center;
  padding: 40px 0 20px 0;
}
.title p {
  font-size: 1.2em;
}
.title h1 {
  font-family: "monster";
  font-size: 40px;
  letter-spacing: 2px;
}
#verify {
}
.login-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 40px;
}
.login-form p {
  font-size: 12px;
  margin-bottom: 2px;
}
.login-form span {
  color: red;
}
.login-form input {
  position: relative;
  width: 100%;
  height: 50px;
  padding: 15px;
  margin-bottom: 20px;
  border: none;
  border-radius: 5px;
  background: rgba(160, 160, 160, 0.3);
  backdrop-filter: blur(8px);
}
.login-form input::placeholder {
  color: #85878d;
}
.login-form button {
  width: 100%;
  height: 50px;
  padding: 15px;
  margin: 10px 0;
  font-family: "monster";
  font-size: 25px;
  letter-spacing: 1px;
  text-align: left;
  border: none;
  border-radius: 5px;
  background: #005fff;
  color: #fff;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.login-form button:hover {
  background: #3d84ff;
}
.login-form button #icon-arrow {
  width: 8px;
  position: absolute;
  right: 55px;
}
.create-login {
  font-weight: bold;
  font-size: 15px;
}
.create-login a {
  color: #005fff;
  text-decoration: none;
}
@media (max-width: 800px) {
  .login #ninja2 {
    top: 0;
    left: 0;
    transform: rotate(180deg);
  }
  .login #ninja1 {
    transform: scaleX(-1);
    width: 100%;
  }
  .login-container {
    width: 90%;
  }
  .login-form {
    padding: 20px;
  }
}
</style>