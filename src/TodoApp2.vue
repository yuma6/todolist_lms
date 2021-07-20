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

</script>

<style scoped>
*{
    border:solid 2px black
}
</style>