<template>
  <div id="app">
    <h1>ToDoList</h1>
    <div class="input">
      <span>入力欄</span><br>
      <input class="border-line" type="text" name="ToDo" id="todo">
      <input class="border-line" type="button" value="入力ボタン">
    </div>
    <div class="filter">
      <span>フィルター</span><br>
      <span class="tag-check">未<input type="checkbox" name="d1" id="d1"></span>
      <span class="tag-check">済<input type="checkbox" name="d2" id="d2"></span>
    </div>
    <div class="list">
      <ul>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
  
</script>

<style scoped>
.border-line{
  border:solid 2px black ;
  margin-bottom: 5px;
}
.tag-check{
  margin-right: 5px
}
</style>