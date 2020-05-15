<!-- EvDialog -->
<template>
  <div class="ev-dialog">
    <div class="ev-dialog-wrapper">
      <div class="ev-dialog-header">
        <slot name="header">{{ title }}</slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // import引入的组件需要注入到对象中才能使用
  name: 'EvDialog',
  props: {
    isLockScroll: {
      type: Boolean,
      default: () => true
    },
    visibile: {
      type: Boolean,
      default: () => false
    },
    title: {
      type: String,
      default: () => '测试数据'
    }
  },
  components: {},
  watch: {
    visibile (val) {
      if (this.isLockScroll) this.lockScroll(val)
      this.$emit('update:visibile', val) // sync
    }
  },
  data () {
    // 这里存放数据
    return {}
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  // 方法集合
  methods: {
    // 锁定全局滚动条
    lockScroll (v) {
      const body = document.getElementsByTagName('body')[0]
      console.log(body)
      if (v) {
        this.$nextTick(() => {
          body.style.overflow = 'hidden'
        })
      } else {
        body.style.overflow = 'visible'
      }
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {},
  beforeCreate () {}, // 生命周期 - 创建之前
  beforeMount () {}, // 生命周期 - 挂载之前
  beforeUpdate () {}, // 生命周期 - 更新之前
  updated () {}, // 生命周期 - 更新之后
  beforeDestroy () {}, // 生命周期 - 销毁之前
  destroyed () {}, // 生命周期 - 销毁完成
  activated () {}
}
</script>
