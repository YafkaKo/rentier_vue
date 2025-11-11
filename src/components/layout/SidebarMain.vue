<template>
  <aside>
    <div class="top">
      <img class="logo" :src="logo" alt="logo" />
      <img class="logo-title" :src="title" alt="title" />
      <p class="logo-subtitle">Развиваем города</p>
      <button class="toggle-sidebar"><img :src="toggleSidebar" alt="toggle-sidebar" /></button>
    </div>
    <nav class="bottom">
      <ul class="nav-list">
        <NavItem alt="home" source="" text="Рабочий кабинет" isDropList>
          <HomeIcon />
        </NavItem>
        <NavItem alt="course" source="/" text="Курсы, карьера" isDropList>
          <CoursesIcon />
        </NavItem>
        <NavItem alt="project" source="/" text="Проекты">
          <ProjectIcon />
        </NavItem>
        <NavItem alt="finance" source="/" text="Финансы" isDropList>
          <FinanceIcon />
        </NavItem>
        <NavItem alt="partner" source="/" text="Партнеры" isDropList>
          <PartnerIcon />
        </NavItem>
        <NavItem alt="event" source="/" text="Мероприятия" isDropList isDangerous>
          <EventIcon />
        </NavItem>
        <NavItem alt="chat" source="/" text="Чат" isDropList isActive>
          <ChatIcon is-active />
        </NavItem>
      </ul>
    </nav>
  </aside>
</template>

<script setup>
import logo from '@/assets/images/icons/logo.png'
import title from '@/assets/images/icons/Logo-text.png'
import toggleSidebar from '@/assets/images/icons/toggle-sidebar.svg'
import NavItem from '../ui/NavItem.vue'
import ChatIcon from '@/assets/images/icons/chatIcon.vue'
import HomeIcon from '@/assets/images/icons/homeIcon.vue'
import CoursesIcon from '@/assets/images/icons/coursesIcon.vue'
import ProjectIcon from '@/assets/images/icons/projectIcon.vue'
import FinanceIcon from '@/assets/images/icons/financeIcon.vue'
import PartnerIcon from '@/assets/images/icons/partnerIcon.vue'
import EventIcon from '@/assets/images/icons/eventIcon.vue'
</script>

<style scoped lang="scss">
aside {
  width: 265px;
  box-shadow: 0px 0px 21px 0px #59667a1a;
}
.top {
  padding: 27px 39px 27px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  gap: 12px;
  box-shadow: -9px 0px 20px 0px #59667a1a;
  .logo-subtitle {
    font-size: 14px;
    font-weight: 400;
    opacity: 0.9;
    color: #26313a;
  }
  .toggle-sidebar {
    position: absolute;
    right: 30px;
    top: 36px;
  }
}
</style>
