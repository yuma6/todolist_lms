<template>
  <div id="todo">
    <h1>todolist</h1>
    <div>
      <p>todoを追加する</p>
      <input type="text">
      <input type="submit">
    </div>
    <div>
      <button type="radio"></button>
      <span>{{件数}}件を表示</span>
    </div>
    <tr>
      <th>id</th>
      <th>コメント</th>
      <th>状態</th>
      <th>削除</th>
    </tr>
  </div>
</template>

<script>
//vueディレクティブ
//コンポーネントオプション
</script>

<style scoped>
*{
  border:solid black 2px
}
</style>