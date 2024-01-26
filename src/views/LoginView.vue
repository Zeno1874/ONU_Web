<template>
  <div class="page">
    <div class="login-card">
      <div class="login-icon">
        <img alt="" src="@/assets/icon-1.png">
      </div>
      <div class="login-form">
        <div class="login-form-title">
          <span>登录</span>
        </div>
        <div class="login-form-body">
          <t-form
              style="width: 100%;"
              ref="form"
              :rules="FORM_RULES"
              :data="loginForm"
              labelAlign="top"
              @submit="onSubmit">
            <t-form-item label="连接配置" name="conn">
              <t-space>
                <t-input
                    v-model="loginForm.conn"
                    placeholder="请输入连接配置"
                >
                  <template #prefixIcon>
                    <InternetIcon />
                  </template>
                </t-input>
                <t-button @click="queryConn">查询</t-button>
              </t-space>
            </t-form-item>
            <t-form-item label="设备" name="device">
              <t-select
                  v-model="loginForm.device"
                  :options="deviceOptions"
                  placeholder="请选择设备"
                  :disabled="deviceSelectDisabled">
                <template #prefixIcon>
                  <DeviceIcon />
                </template>
              </t-select>
            </t-form-item>
            <t-form-item>
              <t-button style="width: 100%;" class="login-form-button" type="submit">登录</t-button>
            </t-form-item>
          </t-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {DeviceIcon, InternetIcon, NextIcon, TemplateIcon} from "tdesign-icons-vue-next";

export default {
  name: "LoginView",
  components: {DeviceIcon, InternetIcon, NextIcon, TemplateIcon},
  data() {
    return {
      loginForm: {
        conn: null,
        device: null,
      },
      FORM_RULES: {
        conn: [{
          required: true,
          message: '请输入连接配置',
          type: 'error',
          trigger: 'blur'
        }],
        device: [{
          required: true,
          message: '请选择设备',
          type: 'error',
          trigger: 'blur'
        }, {
          required: true,
          message: '请选择设备',
          type: 'error',
          trigger: 'change'
        }]
      },
      deviceOptions: [],
      deviceSelectDisabled: true
    }
  },
  methods: {
    queryConn() {

    },
    onReset() {
    },
    onSubmit() {
    }
  }
}
</script>
<style lang="scss" scoped>
.page {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  position: relative;
  background: var(--td-bg-color-page);

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    background: url(@/assets/bg.png) no-repeat top center;
    background-size: cover;
    filter: blur(20px);
    transform: scaleX(-1);
  }

  .login-card {
    position: relative;
    z-index: 999;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.15);
    background: var(--td-bg-color-container);
    box-sizing: border-box;
    padding: 0 64px;

    .login-icon {
      img {
        width: 240px;
        aspect-ratio: 1;
      }
    }

    .login-form {
      padding: 0 0 64px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;

      .login-form-title {
        font-size: 32px;
        font-weight: 700;
        line-height: 1.5em;
        margin-bottom: 16px;
      }

      .login-form-body {
        width: 100%;
      }
    }
  }
}
</style>