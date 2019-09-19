<template>
  <div class="app-container">

    <!-- 查询和其他操作 -->
    <div class="filter-container">
      <el-input v-model="listQuery.name" clearable class="filter-item" style="width: 200px;" placeholder="请输入名称"/>
      <el-select v-model="listQuery.isOnDisplay" style="width: 200px" class="filter-item" placeholder="请选择状态" clearable>
        <el-option v-for="(key, value) in isOnDisplayMap" :key="key" :label="key" :value="value"/>
      </el-select>
      <el-select v-model="listQuery.category" style="width: 200px" class="filter-item" placeholder="请选择分类" clearable>
        <el-option v-for="(key, value) in categoryMap" :key="key" :label="key" :value="value"/>
      </el-select>
      <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">查找</el-button>
      <el-button class="filter-item" type="primary" icon="el-icon-edit" @click="handleCreate">添加</el-button>
    </div>

    <!-- 查询结果 -->
    <el-table v-loading="listLoading" :data="list" element-loading-text="正在查询中。。。" border fit highlight-current-row>

      <el-table-column align="center" label="编号" prop="sn"/>

      <el-table-column align="center" min-width="" label="名称" prop="name"/>

      <el-table-column align="center" property="picUrl" label="图片">
        <template slot-scope="scope">
          <img :src="scope.row.picUrl" width="40">
        </template>
      </el-table-column>

      <el-table-column align="center" label="标题" prop="title"/>

      <el-table-column align="center" label="排序" prop="sortOrder"/>

      <el-table-column align="center" label="分类" prop="category"/>

      <el-table-column align="center" label="状态" prop="isOnDisplay">
        <template slot-scope="scope">
          <el-tag :type="scope.row.isOnDisplay ? 'success' : 'error' ">{{ scope.row.isOnDisplay ? '显示' : '隐藏' }}</el-tag>
        </template>
      </el-table-column>

      <el-table-column align="center" label="创建时间" prop="addTime"/>

      <el-table-column align="center" label="操作" width="200" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button type="primary" size="mini" @click="handleUpdate(scope.row)">编辑</el-button>
          <el-button type="danger" size="mini" @click="handleDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />

    <el-tooltip placement="top" content="返回顶部">
      <back-to-top :visibility-height="100" />
    </el-tooltip>

    <!-- 添加或修改对话框 -->
    <el-dialog :title="textMap[dialogStatus]" :visible.sync="detailDialogVisible">
      <el-form ref="dataForm" :rules="rules" :model="dataForm" status-icon label-position="left" label-width="100px" style="width: 400px; margin-left:50px;">
        <el-form-item label="编号" prop="sn">
          <el-input v-model="dataForm.sn"/>
        </el-form-item>
        <el-form-item label="名称" prop="name">
          <el-input v-model="dataForm.name"/>
        </el-form-item>
        <el-form-item label="图片" prop="picUrl">
          <el-upload
            :headers="headers"
            :action="uploadPath"
            :show-file-list="false"
            :on-success="uploadPicUrl"
            class="avatar-uploader"
            accept=".jpg,.jpeg,.png,.gif">
            <img v-if="dataForm.picUrl" :src="dataForm.picUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"/>
          </el-upload>
          <span class="avatar-tip">最佳尺寸：100*200；大小推荐不超过50kb</span>
        </el-form-item>
        <el-form-item label="链接" prop="link">
          <el-input v-model="dataForm.link"/>
        </el-form-item>
        <el-form-item label="标题" prop="title">
          <el-input v-model="dataForm.title"/>
        </el-form-item>
        <el-form-item label="排序" prop="sortOrder">
          <el-input v-model="dataForm.sortOrder"/>
        </el-form-item>
        <el-form-item label="状态" prop="isOnDisplay">
          <el-select v-model="dataForm.isOnDisplay" style="width: 300px" class="filter-item" placeholder="状态">
            <el-option v-for="(key, value) in isOnDisplayMap" :key="key" :label="key" :value="value"/>
          </el-select>
        </el-form-item>
        <el-form-item label="分类" prop="category">
          <el-select v-model="dataForm.category" style="width: 300px" class="filter-item" placeholder="分类">
            <el-option v-for="(key, value) in categoryMap" :key="key" :label="key" :value="value"/>
          </el-select>
        </el-form-item>
        <!-- <el-form-item label="链接" prop="link">
          <el-input v-model="dataForm.link"/>
        </el-form-item> -->
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="detailDialogVisible = false">取消</el-button>
        <el-button v-if="dialogStatus=='create'" type="primary" @click="createData">确定</el-button>
        <el-button v-else type="primary" @click="updateData">确定</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<style>
  .table-expand {
    font-size: 0;
  }
  .table-expand label {
    width: 100px;
    color: #99a9bf;
  }
  .table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
  }
  .gallery {
    width: 80px;
    margin-right: 10px;
  }
  .avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #20a0ff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 120px;
  height: 120px;
  line-height: 120px;
  text-align: center;
}
.avatar {
  width: 145px;
  height: 145px;
  display: block;
}
.avatar-tip{
  color:#b3b3b3;
  position: absolute;
  margin-top: -15px;
}
</style>

<script>
import { list, Delete, create, update } from '@/api/home'
import BackToTop from '@/components/BackToTop'
import { getToken } from '@/utils/auth'
import { uploadPath } from '@/api/storage'
import Pagination from '@/components/Pagination' // Secondary package based on el-pagination

const isOnDisplayMap = {
  true: '显示',
  false: '隐藏'
}

const categoryMap = {
  '整店代运营服务': '整店代运营服务',
  '整合营销服务': '整合营销服务'
}

export default {
  name: 'BannerList',
  components: { BackToTop, Pagination },
  filters: {
    caseStatusFilter(status) {
      return isOnDisplayMap[status]
    }
  },
  data() {
    return {
      uploadPath,
      list: [],
      total: 0,
      listLoading: true,
      isOnDisplayMap,
      categoryMap,
      listQuery: {
        page: 1,
        limit: 10,
        name: undefined,
        isOnDisplay: undefined,
        type: 3,
        sort: 'sort_order',
        order: 'asc'
      },
      dialogStatus: '',
      rules: {
        sn: [
          { required: true, message: '编号不能为空', trigger: 'blur' }
        ],
        category: [
          { required: true, message: '归属不能为空', trigger: 'blur' }
        ],
        title: [
          { required: true, message: '标题不能为空', trigger: 'blur' }
        ],
        picUrl: [
          { required: true, message: '图片不能为空', trigger: 'blur' }
        ],
        link: [
          { required: true, message: '链接不能为空', trigger: 'blur' }
        ]
      },
      dataForm: {
        sn: '',
        name: '',
        picUrl: '',
        isOnDisplay: '',
        title: '',
        link: '',
        sortOrder: '',
        type: 3
      },
      detailDialogVisible: false,
      textMap: {
        update: '编辑',
        create: '创建'
      },
      ids: []
    }
  },
  computed: {
    headers() {
      return {
        'X-Happydo-Admin-Token': getToken()
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true
      list(this.listQuery).then(response => {
        this.list = response.data.data.list
        this.total = response.data.data.total
        this.listLoading = false
      }).catch(() => {
        this.list = []
        this.total = 0
        this.listLoading = false
      })
    },
    handleFilter() {
      this.listQuery.page = 1
      this.getList()
    },
    resetForm() {
      this.dataForm = {
        sn: '',
        name: '',
        picUrl: '',
        isOnDisplay: 'true',
        title: '',
        link: '',
        sortOrder: 0,
        type: 3
      }
    },
    handleCreate() {
      this.resetForm()
      this.dialogStatus = 'create'
      this.detailDialogVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    uploadPicUrl: function(response) {
      this.dataForm.picUrl = response.data.url
    },
    createData() {
      this.$refs['dataForm'].validate(valid => {
        if (valid) {
          create(this.dataForm)
            .then(response => {
              this.list.unshift(response.data.data)
              this.detailDialogVisible = false
              this.$notify.success({
                title: '成功',
                message: '创建成功'
              })
              this.getList()
            })
            .catch(response => {
              this.$notify.error({
                title: '失败',
                message: response.data.errmsg
              })
            })
        }
      })
    },
    handleUpdate(row) {
      this.dataForm = Object.assign({}, row)
      this.dataForm.isOnDisplay = this.dataForm.isOnDisplay.toString()
      this.dialogStatus = 'update'
      this.detailDialogVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    updateData() {
      this.$refs['dataForm'].validate(valid => {
        if (valid) {
          update(this.dataForm)
            .then(() => {
              for (const v of this.list) {
                if (v.id === this.dataForm.id) {
                  const index = this.list.indexOf(v)
                  this.list.splice(index, 1, this.dataForm)
                  break
                }
              }
              this.detailDialogVisible = false
              this.$notify.success({
                title: '成功',
                message: '更新成功'
              })
              this.getList()
            })
            .catch(response => {
              this.$notify.error({
                title: '失败',
                message: response.data.errmsg
              })
            })
        }
      })
    },
    handleDelete(row) {
      this.ids.push(row.id.toString())
      const idsObject = Object.assign({}, {
        ids: this.ids
      })
      Delete(idsObject).then(response => {
        this.$notify.success({
          title: '成功',
          message: '删除成功'
        })
        const index = this.list.indexOf(row)
        this.list.splice(index, 1)
        this.getList()
      }).catch(response => {
        this.$notify.error({
          title: '失败',
          message: response.data.errmsg
        })
      })
      this.ids = []
    }
  }
}
</script>
