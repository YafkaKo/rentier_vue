<template>
  <header>
    <div class="header-top">
      <div class="header-top-left">
        <img class="header-top-left-img" :src="fire" alt="fire" />Уважаемые пользователи, сообщаем,
        что <span> в период с 23:00 до 02:00 МСК </span> будут проводиться технические работы на
        нашем сайте. <button>Ok</button>
      </div>
      <div class="header-top-right">
        <button><img :src="notice" alt="notice" /></button>
        <RouterLink to="/"><img :src="message" alt="message" /></RouterLink>
        <router-link to="/"><img :src="youtube" alt="youtube" /></router-link>
        <router-link to="/"><img :src="telegram" alt="telegram" /></router-link>
        <router-link to="/"><img :src="news" alt="news" /></router-link>
        <div class="header-top-right-profile">
          <div class="profile-avatar"></div>
          <div class="profile-description">
            <div class="profile-name">Никитин 1 Дмитрий 1</div>
            <div class="profile-role">Амбассадор</div>
          </div>
        </div>
      </div>
    </div>
    <div class="header-bottom">
      <h1 class="header-bottom-title">Чаты</h1>
      <div class="breadcrumbs">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item to="/"><HomeIcon /></el-breadcrumb-item>
          <el-breadcrumb-item to="/">Администрация</el-breadcrumb-item>
          <el-breadcrumb-item>Чаты</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
  </header>
</template>

<script setup>
import fire from '@/assets/images/icons/fire.gif'
import message from '@/assets/images/icons/message-round.png'
import notice from '@/assets/images/icons/notice.svg'
import youtube from '@/assets/images/icons/youtube-round.png'
import telegram from '@/assets/images/icons/telegram-round.png'
import news from '@/assets/images/icons/news-round.png'
import HomeIcon from '@/assets/images/icons/homeIcon.vue'
</script>

<style scoped lang="scss">
.header-top {
  padding: 22px 30px 12px;
  color: $chat-color;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 4px 40px 0px #2720781a;
}
.header-top-left {
  &-img {
    width: 29px;
    height: 29px;
    margin-right: 8px;
  }
  span {
    color: $accent-color;
  }
  button {
    color: #fff;
    padding: 6px 16px;
    border-radius: 6px;
    background-color: $accent-color;
    margin-left: 32px;
  }
}
.header-top-right {
  display: flex;
  gap: 12px;
}
.header-top-right-profile {
  display: flex;
  gap: 12px;
  .profile-avatar {
    width: 35px;
    height: 35px;
    background-color: gray;
    border-radius: 8px;
  }
  .profile-description {
    display: flex;
    flex-direction: column;
    justify-content: end;
  }
  .profile-name {
    font-weight: bold;
    color: $bold-color;
  }
  .profile-role {
    font-size: 14px;
  }
}
.header-bottom {
  display: flex;
  justify-content: space-between;
  padding: 15px 30px;
  align-items: center;
  &-title {
    font-size: 24px;
    color: $bold-color;
    text-transform: uppercase;
    font-size: 29px;
    font-weight: 500;
  }
  .breadcrumbs {
    :deep(.el-breadcrumb__item) {
      .el-breadcrumb__inner {
        color: $accent-color;
        text-transform: uppercase;
      }
      .el-breadcrumb__inner.is-link {
        color: $bold-color;
        font-weight: normal;
        &:hover {
          color: $accent-color;
        }
      }
    }
  }
}
</style>
