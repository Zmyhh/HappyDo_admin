<template>
  <div class="dashboard-editor-container">

    <el-row class="panel-group">
      <el-col class="card-panel-col">
        <div class="card-panel" @click="handleSetLineChartData('newVisitis')">
          <div class="card-panel-description">
            <img class="card-image" src="../../assets/images/logo.png">
            <div class="card-panel-text">欢迎进入上海悦为官网后台管理端</div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import CountTo from 'vue-count-to'

export default {
  components: {
    CountTo
  },
  data() {
    return {
      userTotal: 0,
      goodsTotal: 0,
      productTotal: 0,
      orderTotal: 0
    }
  },
  created() {
  },
  methods: {
    handleSetLineChartData(type) {
      this.$emit('handleSetLineChartData', type)
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}

.panel-group {
  margin-top: 18px;

  .card-panel-col{
    margin-bottom: 32px;
  }
  .card-panel {
    height: 350px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
    border-color: rgba(0, 0, 0, .05);
    &:hover {
      .card-panel-icon-wrapper {
        color: #fff;
      }
      .icon-people {
         background: #40c9c6;
      }
      .icon-message {
        background: #36a3f7;
      }
      .icon-money {
        background: #f4516c;
      }
      .icon-shoppingCard {
        background: #34bfa3
      }
    }
    .icon-people {
      color: #40c9c6;
    }
    .icon-message {
      color: #36a3f7;
    }
    .icon-money {
      color: #f4516c;
    }
    .icon-shoppingCard {
      color: #34bfa3
    }
    .card-panel-icon-wrapper {
      float: left;
      margin: 14px 0 0 14px;
      padding: 16px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
    }
    .card-panel-description {
      text-align: center;
      font-weight: bold;
      margin: 26px;
      .card-image{
        width: 200px;
        height: 200px;
        margin: 10px;
      }
      .card-panel-text {
        line-height: 30px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 24px;
        margin:30px 0;
      }
      .card-panel-num {
        font-size: 20px;
      }
    }
  }
}
</style>
