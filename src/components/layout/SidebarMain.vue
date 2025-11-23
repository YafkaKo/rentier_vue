<template>
  <aside>
    <LogoMain/>
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
import NavItem from '../ui/NavItem.vue'
import ChatIcon from '@/assets/images/icons/chatIcon.vue'
import HomeIcon from '@/assets/images/icons/homeIcon.vue'
import CoursesIcon from '@/assets/images/icons/coursesIcon.vue'
import ProjectIcon from '@/assets/images/icons/projectIcon.vue'
import FinanceIcon from '@/assets/images/icons/financeIcon.vue'
import PartnerIcon from '@/assets/images/icons/partnerIcon.vue'
import EventIcon from '@/assets/images/icons/eventIcon.vue'
import LogoMain from '../ui/LogoMain.vue'
</script>

<style scoped lang="scss">
aside {
  width: 265px;
  box-shadow: 0px 0px 21px 0px #59667a1a;
}
</style>
