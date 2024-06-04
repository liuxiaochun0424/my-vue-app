<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item index="1">个人主页</el-menu-item>
          <el-sub-menu index="2">
            <template #title>个人简历</template>
            <el-menu-item index="2-1">基本信息</el-menu-item>
            <el-menu-item index="2-2">技能掌握</el-menu-item>
            <el-menu-item index="2-3">教育经历</el-menu-item>
            <el-sub-menu index="2-4">
              <template #title>项目经理</template>
              <el-menu-item index="2-4-1">大雁商城</el-menu-item>
              <el-menu-item index="2-4-2">民生银行灾备指挥平台</el-menu-item>
              <el-menu-item index="2-4-3">好未来DM数据清洗平台</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
        </el-menu>

        <el-dropdown>
          <el-button type="primary" @click="handleClick">
            登录<el-icon class="el-icon--right"><arrow-down /></el-icon>
          </el-button>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>Action 1</el-dropdown-item>
              <el-dropdown-item>Action 2</el-dropdown-item>
              <el-dropdown-item>Action 3</el-dropdown-item>
              <el-dropdown-item>Action 4</el-dropdown-item>
              <el-dropdown-item>Action 5</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </el-header>

      <el-container>
        <el-aside>
          <el-col :span="12">
            <h5 class="mb-2">Default colors</h5>
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
            >
              <el-sub-menu index="1">
                <template #title>
                  <el-icon><location /></el-icon>
                  <span>Navigator One</span>
                </template>
                <el-menu-item-group title="Group One">
                  <el-menu-item index="1-1">item one</el-menu-item>
                  <el-menu-item index="1-2">item two</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="Group Two">
                  <el-menu-item index="1-3">item three</el-menu-item>
                </el-menu-item-group>
                <el-sub-menu index="1-4">
                  <template #title>item four</template>
                  <el-menu-item index="1-4-1">item one</el-menu-item>
                </el-sub-menu>
              </el-sub-menu>
              <el-menu-item index="2">
                <el-icon><icon-menu /></el-icon>
                <span>Navigator Two</span>
              </el-menu-item>
              <el-menu-item index="3" disabled>
                <el-icon><document /></el-icon>
                <span>Navigator Three</span>
              </el-menu-item>
              <el-menu-item index="4">
                <el-icon><setting /></el-icon>
                <span>Navigator Four</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-aside>

        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ArrowDown, Document, Menu as IconMenu, Location, Setting, } from "@element-plus/icons-vue";

const activeIndex = ref("1");
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath);
};
const handleClick = () => {
  // eslint-disable-next-line no-alert
  alert("button click");
};

const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>

<style scoped>
/* 设置外层容器为 Flexbox 布局 */
.el-container {
  display: flex;
  flex-direction: column; /* 垂直排列子元素 */
  height: 100vh; /* 占据整个视口高度 */
}

/* 设置内层容器也为 Flexbox 布局 */
.el-container > .el-container {
  display: flex;
  flex-direction: row; /* 水平排列子元素 */
  flex: 1; /* 占据剩余空间 */
}

.el-header {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
}

.el-menu {
  width: 100%;
}

.el-dropdown {
  align-items: center;
}

.el-aside {
  width: 200px;
  /* 使侧边栏占据剩余高度 */
  flex-shrink: 0; /* 防止侧边栏缩小 */
}

.el-col{
  width: 200px;
  background-color: #fff;
}
.el-col-12 {
    /* flex: 0 0 50%; */
    max-width: 100%;
}
.el-menu[data-v-7a7a37b1] {
    width: 100%;
}

.el-main {
  background-color: blueviolet;
  /* 使主内容区域填充剩余宽度和高度 */
  flex-grow: 1; /* 使主内容区域增长以填充剩余空间 */
}
</style>
