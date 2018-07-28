<template>
	<div class="login-page">
		<div class="login-form">
			<Form ref="formInline" :model="formLogin" :rules="ruleLogin">
				<FormItem prop="username">
					<Input type="text" v-model="formLogin.username" placeholder="用户名">
					<Icon type="ios-person" slot="prepend"></Icon></Input>
				</FormItem>
				<FormItem prop="password">
					<Input type="password" v-model="formLogin.password" placeholder="密码">
					<Icon type="key" slot="prepend"></Icon></Input>
				</FormItem>
				<FormItem>
					<Button type="primary" @click="handleSubmit('formInline')" long>登录</Button>
				</FormItem>
			</Form>
		</div>
	</div>
</template>
<script>

import './../../static/css/login.scss'
export default {
	name: 'login',
	components: {
	},
	data () {
		return {
			formLogin: {
				username: '',
				password: ''
			},
			ruleLogin: {
				username: [
				{ required: true, message: '请输入用户名', trigger: 'blur' }
				],
				password: [
				{ required: true, message: '请输入密码', trigger: 'blur' },
				{ type: 'string', min: 6, message: '密码长度不能少于6位', trigger: 'blur' }
				]
			}
		}
	},
	methods: {
		handleSubmit (refName) {
			this.$refs[refName].validate(valid => {
				if (valid) {
					this.$router.push('/')
				} else {
					console.log('failed')
				}
			})
		}
	}
}
</script>
