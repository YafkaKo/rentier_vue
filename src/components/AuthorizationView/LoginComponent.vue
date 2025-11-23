<template>
  <div class="authorization-form-container">
    <LogoMain is-authorization />
    <form class="login-form">
        <h3 class="login-form-title">Вход на платформу "Рантье"</h3>
        <p class="login-form-description">Просьба ввести данные для входа</p>
        <InputMain type="email" name="input-email" id="input-email" placeholder="Test@gmail.com" label="Email" />
        <InputWithPassword name="input-password" id="input-password"  placeholder="123456" label="Пароль"/>
        <a href="" class="forgotten-button">Забыли пароль?</a>
        <ButtonMain text="Войти"/>
        <p class="login-form-additionally">
          Не зарегистрированы? <a href="/registration">Зарегестрироваться</a>
        </p>
    </form>
    <MessageButton />
  </div>
</template>

<script setup>
import ButtonMain from '../ui/ButtonMain.vue';
import InputMain from '../ui/InputMain.vue';
import InputWithPassword from '../ui/InputWithPassword.vue';
import LogoMain from '../ui/LogoMain.vue'
import MessageButton from '../ui/MessageButton.vue';
</script>

<style lang="scss" scoped>
.authorization-form-container{
  width: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}
.login-form{
  max-width: 450px;
  margin: 0 auto;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  padding: 40px;
  box-shadow: 0px 0px 37px 0px #0815420D;
border-radius: 10px;
  .login-form-title{
    font-size: 24px;
    font-weight: 500;
    color: $bold-color;
    margin-bottom: 5px;
  }
  .login-form-description{
    font-size: 14px;
    letter-spacing: 0.7px;
    color: $chat-color;
    line-height: 24px;
    margin-bottom: 32px;
  }
  .forgotten-button{
    margin-bottom: 16px;
  }
  .login-form-additionally{
    margin-top: 24px;
    line-height: 24px;
    font-size: 14px;
    letter-spacing: 0.7px;
    color: #898989;
    margin: 24px auto 0;
    display: flex;
    gap: 7px;
    flex-wrap: wrap;
  }
}
</style>
