<template>
  <div class="center">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span class="title">门户系统</span>
        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
      </div>
      <div>
        <div v-for="system in professionList" :key="system.id" class="system" >
          <div class="fathersys">{{ system.name }}</div>
          <div class="subsystems">
            <span v-for="subsystem in system.subsystems" :key="subsystem.id" @click="handleClick(subsystem)" class="childrensys">
              {{ subsystem.sitename }}
              <img class="icon" src="../../public/eics_icon.png"/>
            </span>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import { getsysInfoTree } from  '../api/api'
export default {
  data() {
    return {
      professionList: [],
      systems: [
        {
          id: 1,
          name: '系统A',
          subsystems: [
            { id: 1, name: '子系统A1' },
            { id: 2, name: '子系统A2' },
            // 其他子系统
          ]
        },
        {
          id: 2,
          name: '系统B',
          subsystems: [
            { id: 3, name: '子系统B1' },
            { id: 4, name: '子系统B2' },
            // 其他子系统
            ]
          },
          {
          id: 2,
          name: '系统B',
          subsystems: [
            { id: 3, name: '合同法律-合同系统-合同台账'},
            { id: 4, name: '合同法律-合同系统-合同台账' },
            { id: 4, name: '合同法律-合同系统-合同台账' },
            { id: 4, name: '合同法律-合同系统-合同台账' },
            { id: 4, name: '子系统B2' },
            { id: 4, name: '子系统B2' },
            { id: 3, name: '子系统B1' },
            { id: 4, name: '子系请问请问统B2' },
            { id: 4, name: '子系统B2' },
            { id: 4, name: '子系王企鹅请我统B2' },
            { id: 4, name: '带我去额去' },
            { id: 4, name: '子系统B2' },
            { id: 3, name: '子系全额请我请我统B1' },
            { id: 4, name: '子系统B2' },
            { id: 4, name: '子系统去问去问B2' },
            { id: 4, name: '子系统B2' },
            { id: 4, name: '完全而且额王企鹅请我额' },
            // 其他子系统
            ]
          },
          {
          id: 2,
          name: '系统B',
          subsystems: [
            { id: 3, name: '子系统B1' },
            { id: 4, name: '子系统B2' },
            // 其他子系统
            ]
          },
          {
          id: 2,
          name: '系统B',
          subsystems: [
            { id: 3, name: '子系统B1' },
            { id: 4, name: '子系统B2' },
            // 其他子系统
            ]
          },
        ]
        // 其他系统
    };
  },
  created() {
    this.getsysInfoTreeAll()
  },
  methods: {
    getsysInfoTreeAll(){
      console.log('getsysInfoTreeAll')
      getsysInfoTree().then((res)=>{
        if (res) {
          this.professionList = res.data.result
          console.log('professionList',this.professionList)
        }
      })
      console.log('professionList',this.professionList)
    }
    // handleClick(subsystem) {
    //   // 处理点击子系统的跳转逻辑
    // }
  }
};
</script>

<style>
.title{
  font-size: 20px;
  font-weight: 600;
}
.icon{
  height: 20px;
  width: 20px;
  vertical-align: middle; /* 垂直居中对齐 */
  margin-right: 20px; /* 可以根据需要调整图片和文字之间的间距 */
}
.fathersys{
  color: #191919;
  margin-bottom: 8px;
  font-size: large;
  font-weight :600
}
.childrensys{
  min-width: 400px;
  cursor: pointer; /* 鼠标悬停时显示为手型 */
  transition: color 0.3s, text-decoration 0.3s; /* 添加颜色和下划线的过渡效果 */
  color: #595959;
  display: flex; /* 使用flex布局 */
  align-items: center; /* 使图标和文字在垂直方向上对齐 */

}
.childrensys:hover {
  color: blue; /* 鼠标悬停时改变颜色为蓝色 */
  text-decoration: underline; /* 鼠标悬停时显示下划线 */
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 98vh;
}

.box-card {
  height: 90%;
  width: 95%; 
}

.system {
  margin-bottom: 20px; /* 控制系统之间的间距 */
}

.subsystems {
  display: flex;
  flex-wrap: wrap; /* 当子系统超出容器宽度时换行 */
  gap: 10px; /* 控制子系统之间的间距 */
  align-items: flex-start; /* 使子系统内容在顶部对齐 */
  text-align: justify; /* 使子系统之间的间距自动 */
}
.subsystems::after {
  content: '';
  flex: 1; /* 或者使用 flex: 1; */
}
</style>
