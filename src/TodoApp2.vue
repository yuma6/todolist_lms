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
              <button v-on:click.ctrl="doRemove(item)">
                削除
              </button>
            </td>
          </tr>
      </tbody>
    </table>
  <p>※削除ボタンはコントロールキーを押しながらクリックして下さい</p>
    <h2>新しい作業の追加</h2>
    <form class="add-form" v-on:submit.prevent="doAdd">
      コメント <input type="text" ref="comment">
      <button type="submit">追加</button>
    </form>
  </div>
</template>

<script>
export default {
// https://jp.vuejs.org/v2/examples/todomvc.html
STORAGE_KEY : 'todos-vuejs-demo',
todoStorage : {
  fetch: function () {
    var todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    todos.forEach(function (todo, index) {
      todo.id = index
    })
    todoStorage.uid = todos.length
    return todos
  },
  save: function (todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }
},


// ★STEP1
  el: '#app',

  data: {
    // ★STEP5 localStorage から 取得した ToDo のリスト
    todos:function(){[]},
    // ★STEP11 抽出しているToDoの状態
    current:function(){-1},
    // ★STEP11＆STEP13 各状態のラベル
    options:function(){[
      { value: -1, label: 'すべて' },
      { value: 0, label: '作業中' },
      { value: 1, label: '完了' }
    ]}
  },

  computed: {

    // ★STEP12
    computedTodos: function () {
      return this.todos.filter(function (el) {
        return this.current < 0 ? true : this.current === el.state
      }, this)
    },

    // ★STEP13 作業中・完了のラベルを表示する
    labels() {
      return this.options.reduce(function (a, b) {
        return Object.assign(a, { [b.value]: b.label })
      }, {})
      // キーから見つけやすいように、次のように加工したデータを作成
      // {0: '作業中', 1: '完了', -1: 'すべて'}
    }
  },

  // ★STEP8
  watch: {
    // オプションを使う場合はオブジェクト形式にする
    todos: {
      // 引数はウォッチしているプロパティの変更後の値
      handler: function (todos) {
        todoStorage.save(todos)
      },
      // deep オプションでネストしているデータも監視できる
      deep: true
    }
  },

  // ★STEP9
  created() {
    // インスタンス作成時に自動的に fetch() する
    this.todos = todoStorage.fetch()
  },

  methods: {

    // ★STEP7 ToDo 追加の処理
    doAdd: function(event, value) {
      // ref で名前を付けておいた要素を参照
      var comment = this.$refs.comment
      // 入力がなければ何もしないで return
      if (!comment.value.length) {
        return
      }
      // { 新しいID, コメント, 作業状態 }
      // というオブジェクトを現在の todos リストへ push
      // 作業状態「state」はデフォルト「作業中=0」で作成
      this.todos.push({
        id: todoStorage.uid++,
        comment: comment.value,
        state: 0
      })
      // フォーム要素を空にする
      comment.value = ''
    },

    // ★STEP10 状態変更の処理
    doChangeState: function (item) {
      item.state = !item.state ? 1 : 0
    },

    // ★STEP10 削除の処理
    doRemove: function (item) {
      var index = this.todos.indexOf(item)
      this.todos.splice(index, 1)
    }

  }
}
</script>

<style scoped>
*{
    border:solid 2px black
}
</style>