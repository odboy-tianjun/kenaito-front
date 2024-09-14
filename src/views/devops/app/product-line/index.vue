<template>
  <div class="app-container">
    <el-row :gutter="20">
      <el-col :span="4">
        <el-tree :data="productLineTree.data" :props="productLineTree.props" @node-click="handleLeftTreeNodeClick" />
      </el-col>
      <el-col :span="20">
        <!--查询条件-->
        <span>
          <el-input v-model="productLineQuery.name" class="filter-item" clearable size="small" placeholder="输入产品线名称搜索" style="width: 200px;" @keyup.enter.native="toQuery" />
          <el-button class="filter-item" size="mini" type="success" icon="el-icon-search" @click="toQuery">搜索</el-button>
          <el-button v-permission="permission.add" class="filter-item" size="mini" type="primary" icon="el-icon-plus" @click="toAdd">新增产品线</el-button>
        </span>
        <!--表格渲染-->
        <el-table
          ref="productLineTable"
          v-loading="productLineTable.loading"
          :data="productLineTable.data"
          row-key="id"
        >
          <el-table-column :selectable="checkboxT" type="selection" width="55" />
          <el-table-column label="产品线名称" prop="name" />
          <el-table-column label="描述" prop="description" />
          <el-table-column prop="createTime" label="创建日期" />
          <el-table-column v-if="checkPer(['admin','productLine:edit','productLine:del'])" label="操作" width="130px" align="center" fixed="right">
            <template slot-scope="scope">
              <span>
                <el-button v-permission="permission.edit" type="text" size="mini" @click.stop="toEdit(scope.row)">编辑</el-button>
                <el-button v-permission="permission.del" type="text" size="mini" @click.stop="toDelete(scope.row.id)">删除</el-button>
              </span>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
    <!--表单组件-->
    <el-dialog append-to-body :close-on-click-modal="false" :visible.sync="form.visible" :title="form.state === 'add'? '新增产品线' : '编辑产品线'" width="600px">
      <el-form ref="form" inline :model="form.values" :rules="form.rules" size="small" label-width="100px">
        <el-form-item label="产品线名称" prop="name">
          <el-input v-model="form.values.name" style="width: 370px;" />
        </el-form-item>
        <el-form-item label="父产品线" prop="pid">
          <el-input v-model="form.values.pid" style="width: 370px;" />
        </el-form-item>
        <el-form-item label="管理员" prop="adminList">
          <el-input v-model="form.values.adminList" style="width: 370px;" />
        </el-form-item>
        <el-form-item label="PE" prop="peList">
          <el-input v-model="form.values.peList" style="width: 370px;" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="text" @click="onCancelBtnClick('form')">取消</el-button>
        <el-button :loading="form.loading" type="primary" @click="onSubmitBtnClick('form')">确认</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import * as productLineService from '@/api/devops/app/productLine'
import { MessageBoxUtil, MessageUtil } from '@/utils/myElement'

export default {
  name: 'ProductLine',
  data() {
    return {
      permission: {
        add: ['admin', 'productLine:add'],
        edit: ['admin', 'productLine:edit'],
        del: ['admin', 'productLine:del']
      },
      productLineTree: {
        props: {
          children: 'children',
          label: 'name'
        },
        data: []
      },
      productLineQuery: {
        name: null,
        pid: null
      },
      productLineTable: {
        loading: false,
        page: 1,
        pageSize: 10,
        total: 0,
        data: []
      },
      form: {
        state: 'add',
        loading: false,
        visible: false,
        values: {
          name: null,
          pid: null,
          description: null,
          adminList: [],
          peList: []
        },
        rules: {
          name: [
            { required: true, message: '请输入产品线名称', trigger: 'blur' }
          ],
          deptSort: [
            { required: true, message: '请输入序号', trigger: 'blur', type: 'number' }
          ]
        }
      }
    }
  },
  mounted() {
    this.loadProductLineTree()
    this.queryPage()
  },
  methods: {
    loadProductLineTree() {
      const _this = this
      productLineService.getTree().then(res => {
        _this.productLineTree.data = [{
          id: null,
          name: '所有产品线',
          children: res || []
        }]
      })
    },
    queryPage() {
      const _this = this
      const data = {
        page: 1,
        pageSize: 10,
        body: {
          ..._this.productLineQuery
        }
      }
      _this.productLineTable.loading = true
      productLineService.queryPage(data).then(res => {
        _this.productLineTable.data = res.records || []
        _this.productLineTable.page = res.current
        _this.productLineTable.pageSize = res.size
        _this.productLineTable.total = res.total
        _this.productLineTable.loading = false
      })
    },
    // 左侧树
    handleLeftTreeNodeClick(data) {
      this.productLineQuery.pid = data.id
      this.queryPage()
    },
    // 右侧列表
    checkboxT(row) {
      return row.id !== 1
    },
    toQuery() {
      this.loadProductLineTree()
      this.queryPage()
    },
    toAdd() {},
    toEdit(data) {},
    toDelete(id) {
      const _this = this
      const data = { ids: [id] }
      MessageBoxUtil.deleteConfirm(_this, () => {
        productLineService.remove(data).then(res => {
          MessageUtil.success(_this, '操作成功')
          _this.queryPage()
        })
      }, null)
    },
    onCancelBtnClick(formName) {
      this.$refs[formName].resetFields()
    },
    onSubmitBtnClick(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

