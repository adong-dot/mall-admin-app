<template>
  <a-form-model
    class="login-form"
    ref="loginForm"
    :model="loginForm"
    :rules="rules"
    v-bind="layout"
  >
    <a-form-model-item has-feedback label="邮箱" prop="email">
      <a-input v-model="loginForm.email" type="email" autocomplete="off" />
    </a-form-model-item>

    <a-form-model-item has-feedback label="密码" prop="password">
      <a-input v-model="loginForm.password" type="password" autocomplete="off" />
    </a-form-model-item>

    <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="submitForm('loginForm')"> 提交 </a-button>
      <a-button style="margin-left: 10px" @click="resetForm('loginForm')"> 重置 </a-button>
    </a-form-model-item>
  </a-form-model>
</template>

<script>
import loginApi from '@/api/user';

export default {
  data() {
    const emailReg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
    const checkEmail = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请您输入邮箱'));
      }
      if (emailReg.test(value)) {
        return callback();
      }
      return callback(new Error('请您输入的邮箱格式错误'));
    };
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请您输入密码'));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        email: '',
        password: '',
      },
      rules: {
        email: [{ validator: checkEmail, trigger: 'change' }],
        password: [{ validator: validatePass, trigger: 'change' }],
      },
      layout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          loginApi.login(this.loginForm).then((res) => {
            this.$router.push('Home');
            console.log(res);
          }).catch((error) => {
            this.$message.error(error);
          });
          return true;
        }
        console.log('error submit!!');
        return false;
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style>
@import url("~@/assets/css/login.less");
</style>
