<template>
  <div id="app"><!--入力スペースとボタン(クリックするとaddTodoする)-->
    <h1>Todo List</h1>
    <span>作業名：</span>
    <input class="border" v-model="task" type="text">
    <button class="border" id="add" v-on:click="addTodo">追加</button>
    <todo-list v-on:remove="removeTodo" v-bind:items=todos></todo-list><!--コンポーネント使用--><!--v-bind調べる。:removeの起動条件、Todolist.vueにあった-->
  </div>
</template>
 
<script>
import TodoList from './components/Todolist1.vue'
 
export default {
  name: 'app',
  components: {
    TodoList//コンポーネント使用
  },
  data: function() {//
    return {
      task: "",//v-model="task"の初期値の宣言
      todos: [],//初期値？
      count: 0,//変数count作成のため？初期値？
    }
  },
  methods: {
    addTodo: function() {//追加ボタンを押したとき起動する
      if (this.task === "") {//入力内容が無い場合の処理
        alert("作業名を入力してください");
        return;
      }//入力内容が有る場合
      this.todos.push({//pushは何>配列に要素を追加する。
        message: this.task, id: ++this.count//入力内容をmassageに代入。idにtodo項目数の数値を与えている？別コンポーネントで使用？
      });
      this.task = "";//追加後、入力スペースを空にする
    },//追加ボタンを押したときの処理ここまで
    removeTodo: function(event, index) {//削除ボタンクリック時の処理、変数eventは別コンポーネントから来ていた、何のためか不明
      this.todos.splice(index, 1);//spliceは何>配列を操作している。変数indexの数値でクリックした削除ボタンを持つliを指定、隣の1でindexで指定した配列から1つ目まで消す
    }
  },
  mounted: function() {
    this.todos = JSON.parse(localStorage.getItem("todos")) || [];//右を左に代入
    // this.todos = [];
    const todos = this.todos;//todosにJSON.parse(localStorage.getItem("todos"))代入
    this.count = this.todos.length;//todoの項目の数をcountに代入
    window.onbeforeunload = function() {//画面更新時消えないように保存している？
      localStorage.setItem("todos", JSON.stringify(todos));//todoの記録、保存
    }
  }
}
</script>
 
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.border {
  border: solid 2px black;
  margin-right: 5px;
}
</style>