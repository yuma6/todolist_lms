<template>
  <div id = "todoapp">
    <label v-for="(label,key) in options" :key="key">
      <input type="radio"
        v-model="current"
        v-bind:value="label.value">{{ label.label }}
    </label>
    （{{ computedTodos.length }} 件を表示）件数を表示
    <table>
      <thead>
        <tr>
          <th class="id">ID</th>
          <th class="comment">コメント</th>
          <th class="state">状態</th>
          <th class="button">-</th>
        </tr>
      </thead>
      <tbody>
          <tr
            v-for="item in computedTodos"
            v-bind:key="item.id"
            v-bind:class="{done:item.state}">
            <th>{{ item.id }}</th>
            <td>{{ item.comment }}</td>
            <td class="state">
              <button v-on:click="doChangeState(item)">
                {{ labels[item.state] }}
              </button>
            </td>
            <td class="button">
              <button v-on:click="doRemove(item,$event)">
                削除
              </button>
            </td>
          </tr>
      </tbody>
    </table>
  <transition>
    <p id="pipipi">※削除ボタンはコントロールキーを押しながらクリックして下さい</p>
  </transition>  
    <h2>新しい作業の追加</h2>
    <form class="add-form" v-on:submit.prevent="doAdd">
      コメント <input type="text" ref="comment">
      <button type="submit">追加</button>
    </form>
  </div>
</template>

<script>
/* eslint no-unused-vars: 0 */
let STORAGE_KEY = 'todos-vuejs-demo'
let todoStorage = {
  fetch: function () {
    let todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    todos.forEach(function (todo, index) {
      todo.id = index
    })
    todoStorage.uid = todos.length
    return todos
  },
  save: function (todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }
}

export default {
  data: function() {
    return {
      todos:[],
      current:-1,
      options:[
        { value: -1, label: 'すべて' },
        { value: 0, label: '作業中' },
        { value: 1, label: '完了' }
      ],
    };
  },
  computed: {
    computedTodos: function () {
      return this.todos.filter(function (el) {
        return this.current < 0 ? true : this.current === el.state
      }, this)
    },
    labels() {
      return this.options.reduce(function (a, b) {
        return Object.assign(a, { [b.value]: b.label })
      }, {})
    }
  },
  watch: {
    todos: {
      handler: function (todos) {
        todoStorage.save(todos)
      },
      deep: true
    },
  },
  created() {
    this.todos = todoStorage.fetch()
  },
  methods: {
    doAdd: function(event, value) {
      let comment = this.$refs.comment
      if (!comment.value.length) {
        return
      }
      this.todos.push({
        id: todoStorage.uid++,
        comment: comment.value,
        state: 0
      })
      comment.value = ''
    },
    doChangeState: function (item) {
      item.state = !item.state ? 1 : 0
    },
    doRemove: function (item,e) {
      let index = this.todos.indexOf(item)
      const getHTMLid = document.getElementById("pipipi")
      if(e.ctrlKey){
        this.todos.splice(index, 1)
      }else{
        getHTMLid.classList.add("className")
      }
    },
  },
  mounted(){
    const getHTMLid = document.getElementById("pipipi")
    getHTMLid.addEventListener("animationend",function() {
      getHTMLid.classList.remove("className")
    })
  },
}
</script>

<style scoped>
*{
    border:solid 2px black
}
.className{
    animation: hurueru .1s  3
}
@keyframes hurueru {
    0% {transform: translate(0px, 0px) rotateZ(0deg);color:red}
    25% {transform: translate(2px, 2px) rotateZ(1deg)}
    50% {transform: translate(0px, 2px) rotateZ(0deg)}
    75% {transform: translate(2px, 0px) rotateZ(-1deg)}
    100% {transform: translate(0px, 0px) rotateZ(0deg);color:red}
}
</style>