<template>
  <div class="search-bar">
    <div class="search-bar-wrapper">
      <van-icon class="search" name="search" color="#858C96" size="16px"></van-icon>
      <input type="text" class="search-input" :focus="focus" :disabled="disable" :maxlength="limit"
        :placeholder="hotSearch.length === 0 ? '搜索' : hotSearch" v-model="searchWord" @click="onSearchBarClick"
        @input="onChange" confirm-type="search" @confirm="onConfirm" placeholder-style="color: #ADB4BE;font-size: 15px;"
      >
      <van-icon class="clear" name="clear" color="#ccc" size="16px" @click="onClearClick"
        v-if="searchWord.length > 0"
      ></van-icon>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SearchBar',
    props: {
      focus: {
        type: Boolean,
        default: true
      },
      disable: {
        type: Boolean,
        default: false
      },
      limit: {
        type: Number,
        default: 50
      },
      hotSearch: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        searchWord: ''
      }
    },
    methods: {
      onSearchBarClick() {
        this.$emit('onClick')
      },
      onClearClick() {
        this.searchWord = ''
        this.$emit('onClear')
      },
      onChange(e) {
        const { value } = e.mp.detail
        this.$emit('onChange', value)
      },
      onConfirm(e) {
        const { value } = e.mp.detail
        this.$emit('onConfirm', value)
      },
      setValue(v) {
        this.searchWord = v
      },
      getValue() {
        return this.searchWord
      }
    }
  }
</script>

<style scoped lang="scss">
  .search-bar {
    padding: 15px 15.5px;

    .search-bar-wrapper {
      display: flex;
      box-sizing: border-box;
      align-items: center;
      height: 40px;
      padding: 12px 17px;
      background: #F5F7F9;
      border-radius: 40px;

      .search-input {
        flex: 1;
        margin: 0 8px;
      }

      .search, .clear {
        display: flex;
        align-items: center;
        height: 100%;
      }
    }
  }
</style>
