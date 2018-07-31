<template>
	<div>
		<section class="todolist">
			<header class="header">
				<h1>待办事项</h1>
				<input class="new-todo"
				autofocus autocomplete="off"
				placeholder="What needs to be done?"
				v-model="newTodo"
				@keyup.enter="addTodo"
				>
			</header>

			<section class="main" v-show="todos.length" v-cloak>
				<input type="checkbox" class="toggle-all" v-model="allDone">
				<ul class="todo-list">
					<li v-for="todo in filteredTodos"
					class="todo"
					:key="todo.id"
					:class="{ completed: todo.completed, editing: todo == editedTodo }">
					<div class="view">
						<input type="checkbox" class="toggle" v-model="todo.completed">
						<label @dbclick="editTodo(todo)">{{todo.title}}</label>
						<button class="destroy" @click="removeTodo(todo)"></button>
					</div>
					<input type="text" class="edit"
					v-model="todo.title"
					v-todo-focus="todo == editedTodo"
					@blur="doneEdit(todo)"
					@keyup.enter="doneEdit(todo)"
					@keyup.esc="cancelEdit(todo)"
					>
				</li>
			</ul>
		</section>

		<footer class="footer" v-show="todos.length">
			<span class="todo-count">
				<strong>{{remaining}}</strong>{{remaining | pluralize}} left
			</span>
			<ul class="filters">
				<li><a href="#/all" :class="{ selected: visibility == 'all' }">All</a></li>
				<li><a href="#/active" :class="{ selected: visibility == 'active' }">Active</a></li>
				<li><a href="#/completed" :class="{ selected: visibility == 'completed' }">Completed</a></li>
			</ul>
			<button class="clear-completed" @click="removeCompleted" v-show="todos.length > remaining">
				Clear completed
			</button>
		</footer>
	</section>
</div>
</template>

<script>
export default{
	name: 'todolist',
	data () {
		return {
			newTodo: '',
			todos: [
			{ id: 1, title: '吃饭' }
			]
		}
	},
	methods: {
		addTodo () {

		},
		allDone () {

		}
	}
}
</script>
