<template>
  <div class="app-container">
    <el-form ref="dataForm" :model="dataForm" status-icon label-width="300px">
      <el-form-item label="联系地址" prop="happydo_address">
        <el-input v-model="dataForm.happydo_address"/>
      </el-form-item>
      <el-form-item label="联系微信" prop="happydo_wx">
        <el-input v-model="dataForm.happydo_wx"/>
      </el-form-item>
      <el-form-item label="联系电话" prop="happydo_iphone">
        <el-input v-model="dataForm.happydo_iphone"/>
      </el-form-item>
      <el-form-item label="联系邮箱" prop="happydo_mailbox">
        <el-input v-model="dataForm.happydo_mailbox"/>
      </el-form-item>
      <el-form-item>
        <el-button @click="cancel">取消</el-button>
        <el-button type="primary" @click="update">确定</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { list, update } from '@/api/contact'

export default {
  name: 'BottomContact',
  data() {
    return {
      dataForm: {
        happydo_address: '',
        happydo_wx: '',
        happydo_iphone: '',
        happydo_mailbox: ''
      }
    }
  },
  created() {
    this.init()
  },
  methods: {
    init: function() {
      list().then(response => {
        console.log(response.data)
        this.dataForm = response.data.data
      })
    },
    cancel() {
      this.init()
    },
    update() {
      update(this.dataForm)
        .then(response => {
          this.$notify.success({
            title: '成功',
            message: '联系我们配置成功'
          })
        })
        .catch(response => {
          this.$notify.error({
            title: '失败',
            message: response.data.errmsg
          })
        })
    }
  }
}
</script>
