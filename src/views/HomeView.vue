<template>
  <div class="page">
    <div class="header">
      <div class="title">
        <span>融媒体中心</span>
      </div>
      <div class="opt">
        <t-button theme="danger">断开连接</t-button>
      </div>
    </div>
    <div class="body">
      <div class="form">
        <t-form label-align="top">
          <t-form-item label="未注册ONU列表">
            <t-select></t-select>
          </t-form-item>
          <t-form-item label="线路模板列表">
            <t-select></t-select>
          </t-form-item>
          <t-form-item label="业务模板列表">
            <t-select></t-select>
          </t-form-item>
          <t-form-item label="流量模板列表">
            <t-select></t-select>
          </t-form-item>
          <t-form-item label="告警模板列表">
            <t-select></t-select>
          </t-form-item>


          <t-form-item label="注册描述">
            <t-textarea></t-textarea>
          </t-form-item>

          <t-form-item label="组播VLAN">
            <t-textarea></t-textarea>
          </t-form-item>

          <t-form-item label="用户侧VLAN">
            <t-textarea></t-textarea>
          </t-form-item>
          <t-form-item label="网络侧外层VLAN">
            <t-textarea></t-textarea>
          </t-form-item>
          <t-form-item label="网络侧内层VLAN">
            <t-textarea></t-textarea>
          </t-form-item>


          <t-form-item label="网络侧内层VLAN">
            <t-textarea></t-textarea>
          </t-form-item>

          <t-form-item label="网络侧内层VLAN">
            <t-textarea></t-textarea>
          </t-form-item>

          <t-form-item>
            <div class="form-btn">
<!--              <t-button theme="success" style="width: 100%;">显示未注册的ONU</t-button>-->
              <t-button theme="primary" style="width: 100%;" @click="showLoading = true">开始注册ONU</t-button>
            </div>
          </t-form-item>
        </t-form>
      </div>
<!--      <div class="result">-->

<!--      </div>-->
    </div>
    <div class="mask" v-show="showLoading"></div>

  </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "HomeView",
  data(){
    return{
      showLoading: false
    }
  },
  created(){
    console.log("11111111")
  }
})
</script>
<style lang="scss" scoped>
.mask{
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #00000050;
  z-index: 999;
  backdrop-filter: blur(10px);
}
.page {
  display: flex;
  flex-direction: column;
  padding: 48px;
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  background: var(--td-bg-color-page);
  gap: 48px;

  .header {
    width: 100%;
    height: 72px;
    border-radius: 8px;
    box-sizing: border-box;
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.15);
    background: var(--td-bg-color-container);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
  }

  .body {
    height: calc(100vh - 80px - 48px * 3);
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    gap: 48px;


    .form {
      flex: 1;
      height: 100%;
      overflow-y: scroll;
      border-radius: 8px;
      padding: 24px;
      box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.15);
      background: var(--td-bg-color-container);
      box-sizing: border-box;

      .form-btn{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 16px;
      }
    }

    .result {
      background: var(--td-bg-color-container);
      flex: 2;
      border-radius: 8px;
      padding: 24px;
      overflow-y: scroll;
      box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.15);
      box-sizing: border-box;
    }
  }
}
</style>