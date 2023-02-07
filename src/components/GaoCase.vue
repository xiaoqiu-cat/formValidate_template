<template>
  <div class="gao-case">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="物料编码">
        <el-input v-model="formInline.things_code" placeholder="物料编码"></el-input>
      </el-form-item>
      <el-form-item label="产品名称">
        <el-input v-model="formInline.name" placeholder="产品名称"></el-input>
      </el-form-item>
      <el-form-item label="规格型号">
        <el-input v-model="formInline.type" placeholder="规格型号"></el-input>
      </el-form-item>
      <el-form-item label="计量单位">
        <el-input v-model="formInline.unit" placeholder="计量单位"></el-input>
      </el-form-item>
      <el-form-item label="含税单价">
        <el-input v-model="formInline.price" placeholder="含税单价"></el-input>
      </el-form-item>
      <el-form-item label="不含税价单">
        <el-input v-model="formInline.not_price" placeholder="不含税价单"></el-input>
      </el-form-item>
      <el-form-item label="可复制含税价">
        <el-input v-model="formInline.price_code" placeholder="可复制含税价"></el-input>
      </el-form-item>
      <el-form-item label="供应商">
        <el-input v-model="formInline.supplier" placeholder="供应商"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table
      :data="list"
      stripe
      height="500"
      v-loading="loading"
      style="width: 100%">
      <el-table-column
        type="index"
        :index="indexMethod"
        label="序号"
        >
      </el-table-column>
      <el-table-column
        prop="things_code"
        label="物料编码"
        >
      </el-table-column>
      <el-table-column
        prop="name"
        label="产品名称"
        >
      </el-table-column>
      <el-table-column
        prop="type"
        label="规格型号">
      </el-table-column>
      <el-table-column
        prop="type"
        label="计量单位">
      </el-table-column>
      <el-table-column
        prop="price"
        label="含税单价">
      </el-table-column>
     
      <el-table-column
        prop="price"
        label="不含税价单(元)">
      </el-table-column>
      <el-table-column
        prop="price_code"
        label="可复制含税价">
      </el-table-column>
      <el-table-column
        prop="supplier"
        label="供应商">
      </el-table-column>
      <el-table-column
        prop="remark"
        label="备注">
      </el-table-column>
    </el-table>
    <div style="margin-top: 50px;float: right;">
      <el-pagination
          background
          :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import {reqGaos} from '../api/index'
export default {
  data(){
    return {
      list: [],
      total: 0,
      loading: true,
      formInline: {
        things_code: '',
        name: '',
        price: '',
        not_price: '',
        price_code: '',
        type: '',
        unit: '',
        supplier: '',
        remark: '',
      }
    }
  },
  mounted(){
    this.getList()
  },
  methods:{
    indexMethod(index){
      return index + 1
    },
    getList(){
      let data = this.formInline
      this.loading = true
      reqGaos(data).then(res=>{
        if(res.code === 200){
          this.list = res.data
          this.total = res.data.length
          this.loading = false
        }
      })
    },
    onSubmit() {
      this.getList()
    }
  }
}
</script>

<style>

</style>