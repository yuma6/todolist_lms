<template><!--https://trialanderror.jp/vue-todo/--><!--左のURLから、App.vueとTodolist.vue-->
  <div><!--追加ボタンクリックで入力内容をリスト化するコンポーネント-->
    <ul id="todolist">
      <li v-for="(item, index) in items" v-bind:key="item.id"><!--v-bind:keyは何、item.idを監視している--><!--ここのindexは削除機能に使われている。無い場合上から消えた-->
        {{ item.message }}
        <button id="remove-button" @click="$emit('remove', $event, index)">削除</button><!--@click = v-on:clickの短縮形-->
      </li><!--$emitで新たにイベントを設定している。clickでイベント名removeを実行、引数に$eventとindexを渡す--><!--$eventはDOM要素を渡すためらしい？-->
    </ul>
  </div>
</template>
 
<script>
export default {//v-bind関係？v-bind:items=todosタイプ指定で配列する。v-bind:items=todos
  name: 'todo-list',
  props: {  
    items: {
      type: Array,
      default: function() {
        return [];
      }
    },
  },
}
</script>
 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  /* list-style-type: none; */
  text-align: left;
  padding: 0;
  width: 100px;
  white-space: nowrap;
  margin: auto;
}
li {
  display: list-item;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#remove-button{
  border: solid 2px black;
}
</style>