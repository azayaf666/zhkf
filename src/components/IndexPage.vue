<template>
    <div>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>卡片名称</span>
              <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
            </div>
            <div v-for="o in 4" :key="o" class="text item">
              {{'列表内容 ' + o }}
            </div>
          </el-card>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        systems: [
          {
            name: '系统A',
            subsystems: [
              { name: '子系统A1', link: '/subsystemA1' },
              { name: '子系统A2', link: '/subsystemA2' }
            ]
          },
          {
            name: '系统B',
            subsystems: [
              { name: '子系统B1', link: '/subsystemB1' },
              { name: '子系统B2', link: '/subsystemB2' }
            ]
          },
          // 更多系统...
        ]
      };
    },
    methods: {
      goTo(link) {
        this.$router.push(link);
      }
    }
  };
  </script>
  
  <style>
    .text {
      font-size: 14px;
    }
  
    .item {
      margin-bottom: 18px;
    }
  
    .clearfix:before,
    .clearfix:after {
      display: table;
      content: "";
    }
    .clearfix:after {
      clear: both
    }
  
    .box-card {
      width: 480px;
    }
  </style>
  