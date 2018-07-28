<template>
	<div class="login-page">
		<div class="login-form">
			<Form ref="formInline" :model="formLogin" :rules="ruleLogin">
				<FormItem prop="username">
					<Input type="text" v-model="formLogin.username" placeholder="用户名">
					<Icon type="ios-person" slot="prepend"></Icon></Input>
				</FormItem>
				<FormItem prop="password">
					<Input type="text" v-model="formLogin.username" placeholder="密码">
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
			ruleInline: {
				username: [
				{ required: true, message: 'Please fill in the user name', trigger: 'blur' }
				],
				password: [
				{ required: true, message: 'Please fill in the password.', trigger: 'blur' },
				{ type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
				]
			}
		}
	},
	methods: {
		handleSubmit (ref) {
			console.log(ref)
		}
	}
}
</script>
