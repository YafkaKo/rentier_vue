<template>
  <div class="authorization-form-container">
    <LogoMain is-authorization />
    <ReferalAllowed/>
    <form class="login-form">
      <h3 class="login-form-title">Регистрация на платформе "Рантье"</h3>
      <p class="login-form-description">
        Зарегистрироваться на платформе можно только по партнерской ссылке (возьмите ее у того, кто
        рассказал вам о проекте, либо, если такого человека нет - напишите в Поддержку).
      </p>
      <InputSharing />
      <InputMain
        type="text"
        name="input-patronymic"
        id="input-patronymic"
        placeholder="Отчество"
        label="Отчество"
      />
      <InputMain
        type="email"
        name="input-email"
        id="input-email"
        placeholder="Введите свои E-mail"
        label="Email"
      />
      <InputMain
        type="text"
        name="input-telegram"
        id="input-telegram"
        placeholder="@nik"
        label="Telegram"
        description="Введите свой логин в Telegram"
      />
      <InputWithPassword
        name="input-password"
        id="input-password"
        placeholder="123456"
        label="Пароль"
      />
      <div class="login-form-policy">
        <input class="login-form-policy-checkbox" type="checkbox" name="" id="" />
        <p class="login-form-policy-text">
          Принимаю <a href="#">Пользовательское соглашение, политику конфиденциальности</a> и <a
            href="#"
            >политику использования файлов cookie.</a
          >
        </p>
      </div>
      <ButtonMain text="Зарегистрироваться" />
      <p class="login-form-additionally">Уже зарегистрированы? <a href="/login">Войти</a></p>
    </form>
  </div>
</template>

<script setup>
import ButtonMain from '../ui/ButtonMain.vue'
import InputMain from '../ui/InputMain.vue'
import InputSharing from '../ui/InputSharing.vue'
import InputWithPassword from '../ui/InputWithPassword.vue'
import LogoMain from '../ui/LogoMain.vue'
import ReferalAllowed from './ReferalAllowed.vue'
</script>

<style lang="scss" scoped>
.authorization-form-container {
  width: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  max-width: 450px;
  margin: 0 auto;
}
.login-form {
  max-width: 450px;
  margin: 0 auto;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  padding: 40px;
  box-shadow: 0px 0px 37px 0px #0815420d;
  border-radius: 10px;
  .login-form-title {
    font-size: 24px;
    font-weight: 500;
    color: $bold-color;
    margin-bottom: 5px;
  }
  .login-form-description {
    font-size: 14px;
    letter-spacing: 0.7px;
    color: $chat-color;
    line-height: 24px;
    margin-bottom: 32px;
  }
  .forgotten-button {
    margin-bottom: 16px;
  }
  .login-form-additionally {
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

.login-form-policy {
  display: flex;
  align-items: start;
  gap: 6px;
  margin: 16px 0;
  &-checkbox {
    width: 19px;
    height: 19px;
  }
  &-text {
    font-size: 14px;
    line-height: 21px;
    letter-spacing: 1px;
    max-width: 256px;
  }
}
</style>
