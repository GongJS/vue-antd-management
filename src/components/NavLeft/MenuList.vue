<script>
import { Menu, Icon } from 'ant-design-vue'
const {Item, SubMenu} = Menu
const iconArr = ['dashboard', 'user', 'form', 'setting', 'message', 'safety', 'bell', 'delete', 'code-o', 'poweroff', 'eye-o', 'hourglass']
export default {
  name: 'IMenu',
  props: {
    menuList: {
      type: Array,
      required: true
    },
    theme: {
      type: String,
      required: false,
      default: 'dark'
    },
    mode: {
      type: String,
      required: false,
      default: 'vertical'
    }
  },
  data () {
    return {
      rootSubmenuKeys: ['/form', '/list', '/detail', '/exception', '/result'],
      selectedKeys: []
    }
  },
  methods: {
    renderIcon: function (h, icon) {
      return icon === 'none' ? null
        : h(
          Icon,
          {
            props: {type: icon !== undefined ? icon : iconArr[Math.floor((Math.random() * iconArr.length))]}
          })
    },
    renderMenuItem: function (h, menu, pIndex, index) {
      return h(
        Item,
        {
          key: menu.path ? menu.path : 'item_' + pIndex + '_' + index
        },
        [
          h(
            'a',
            {attrs: {href: '#' + menu.path}},
            [
              this.renderIcon(h, menu.icon),
              h('span', [menu.title])
            ]
          )
        ]
      )
    },
    renderSubMenu: function (h, menu, pIndex, index) {
      var this2_ = this
      var subItem = [h('span',
        {slot: 'title'},
        [
          this.renderIcon(h, menu.icon),
          h('span', [menu.title])
        ]
      )]
      var itemArr = []
      var pIndex_ = pIndex + '_' + index
      menu.children.forEach(function (item, i) {
        itemArr.push(this2_.renderItem(h, item, pIndex_, i))
      })
      return h(
        SubMenu,
        {key: menu.path ? menu.path : 'submenu_' + pIndex + '_' + index},
        subItem.concat(itemArr)
      )
    },
    renderItem: function (h, menu, pIndex, index) {
      if (!menu.invisible) {
        return menu.children ? this.renderSubMenu(h, menu, pIndex, index) : this.renderMenuItem(h, menu, pIndex, index)
      }
    },
    renderMenu: function (h, menuTree) {
      var this2_ = this
      var menuArr = []
      menuTree.forEach(function (menu, i) {
        menuArr.push(this2_.renderItem(h, menu, '0', i))
      })
      return menuArr
    }
  },
  render (h) {
    return h(
      Menu,
      {
        props: {
          theme: this.$props.theme,
          mode: this.$props.mode
        }
      }, this.renderMenu(h, this.menuList)
    )
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
