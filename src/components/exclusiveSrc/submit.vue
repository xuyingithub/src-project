<template>
  <article class="submit">
    <section class="container">
      <div class="title">专属SRC>漏洞提交</div>
      <h3>漏洞提交</h3>
      <div class="elForm">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
          <el-form-item label="企业名称:" prop="name">
            <el-input v-model="ruleForm.name" placeholder="请填写您的企业名称"></el-input>
          </el-form-item>
          <el-form-item label="漏洞来源:" prop="origin">
            <el-input v-model="ruleForm.origin" placeholder="请填写漏洞来源"></el-input>
          </el-form-item>
          <el-form-item label="应用类型:" prop="region">
            <el-select v-model="ruleForm.region" placeholder="请选择应用类型">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="域名/版本号:" prop="version">
            <el-input v-model="ruleForm.version" placeholder="请填写域名/版本号"></el-input>
          </el-form-item>
          <el-form-item label="漏洞标题:" prop="title">
            <el-input v-model="ruleForm.title" placeholder="请填写漏洞标题"></el-input>
          </el-form-item>
          <el-form-item label="漏洞url:" prop="url">
            <el-input v-model="ruleForm.url" placeholder="请填写漏洞url"></el-input>
          </el-form-item>
          <el-form-item label="漏洞类型:" prop="type">
            <el-select v-model="ruleForm.type" placeholder="请选择漏洞类型">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="风险等级:" prop="level">
            <el-select v-model="ruleForm.level" placeholder="请选择风险等级">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="简要描述:" prop="desc">
            <el-input type="textarea" v-model="ruleForm.desc" :rows="5" placeholder="请输入描述"></el-input>
          </el-form-item>
          <el-form-item label="漏洞详情:" prop="detail">
            <el-input type="textarea" v-model="ruleForm.detail" :rows="5" placeholder="请输入描述"></el-input>
          </el-form-item>
          <el-form-item label="修复建议:" prop="suggest">
            <el-input type="textarea" v-model="ruleForm.suggest" :rows="5" placeholder="请输入描述"></el-input>
          </el-form-item>
          <el-checkbox v-model="ruleForm.checked">匿名提交，平台不会公开身份显示“天下平安”项</el-checkbox>
          <el-form-item>
            <el-button class="reset" @click="resetForm('ruleForm')">重置</el-button>
            <el-button class="submit" type="primary" @click="submitForm('ruleForm')">提交</el-button>
          </el-form-item>
        </el-form>
      </div>
    </section>
  </article>
</template>
<style lang="scss" scoped>
  .submit{
    height: 100%;
    overflow: hidden;
    background: #F0F4F7;
    .container{
      width: 1200px;
      height: 1310px;
      background: #fff;
      overflow: hidden;
      margin: 20px auto 240px;
      box-shadow: 0 2px 10px 0
      rgba(0,0,0,0.31);
      .title{
        font-family: PingFangSC-Light;
        font-size: 14px;
        color: #333333;
        letter-spacing: -0.49px;
        width: 1140px;
        margin:20px auto 16px;
      }
      h3{
        width: 1140px;
        height: 40px;
        background: rgba(49,140,184,0.08);
        margin: 0 auto;
        line-height: 40px;
        padding-left: 20px;
      }
      .elForm{
        width: 490px;
        margin: 60px auto;
      }
    }
  }
</style>
<script>
  export default{
    name:'submit',
    data(){
      return {
        ruleForm: {
          name: '',
          origin: '',
          region: '',
          version:'',
          title:'',
          url:'',
          type:'',
          desc: '',
          detail: '',
          suggest: '',
          checked: false
        },
        rules: {
          name: [
            { required: true, message: '请输入企业名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          origin: [
            { required: true, message: '请输入漏洞来源', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择应用类型', trigger: 'change' }
          ],
          version: [
            { required: true, message: '请输入域名/版本号', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          title: [
            { required: true, message: '请输入漏洞标题', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          url: [
            { required: true, message: '请输入漏洞标题url', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          type: [
            { required: true, message: '请选择漏洞类型', trigger: 'change' }
          ],
          level: [
            { required: true, message: '请选择风险等级', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请输入描述', trigger: 'blur' }
          ],
          detail: [
            { required: true, message: '请输入漏洞详情', trigger: 'blur' }
          ],
          suggest: [
            { required: true, message: '请输入建议', trigger: 'blur' }
          ]
        },
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
