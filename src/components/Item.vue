<template>
  <div
    class="vsm-item"
    :class="[{'first-item' : firstItem}, {'open-item' : show}, {'active-item' : active}, {'parent-active-item' : childActive}]"
    @mouseenter="mouseEnter($event)"
  >
    <template v-if="isRouterLink">
        <template v-if='isSSR'>
          <nuxt-link
            class="vsm-link"
            :class="item.class"
            :to="item.href"
            :disabled="item.disabled"
            :event="item.disabled ? '' : 'click'"
            v-bind="item.attributes"
            @click.native="clickEvent"
          >
            <i
              v-if="item.icon"
              class="vsm-icon"
              :class="item.icon"
            />
            <template v-if="!isCollapsed">
              <span
                v-if="item.badge"
                :style="[rtl ? (item.child ? {'margin-left' : '30px'} : '') : (item.child ? {'margin-right' : '30px'} : '')]"
                class="vsm-badge"
                :class="[item.badge.class ? item.badge.class : 'default-badge']"
                v-bind="item.badge.attributes"
              >{{ item.badge.text }}</span>
              <span class="vsm-title">{{ item.title }}</span>
              <i
                v-if="item.child"
                class="vsm-arrow"
                :class="{'open-arrow' : show}"
              />


            </template>
          </nuxt-link>
         </template>
         <template v-else>
            <router-link
              class="vsm-link"
              :class="item.class"
              :to="item.href"
              :disabled="item.disabled"
              :event="item.disabled ? '' : 'click'"
              v-bind="item.attributes"
              @click.native="clickEvent"
            >
              <i
                v-if="item.icon"
                class="vsm-icon"
                :class="item.icon"
              />
              <template v-if="!isCollapsed">
                <span
                  v-if="item.badge"
                  :style="[rtl ? (item.child ? {'margin-left' : '30px'} : '') : (item.child ? {'margin-right' : '30px'} : '')]"
                  class="vsm-badge"
                  :class="[item.badge.class ? item.badge.class : 'default-badge']"
                  v-bind="item.badge.attributes"
                >{{ item.badge.text }}</span>
                <span class="vsm-title">{{ item.title }}</span>
                <i
                  v-if="item.child"
                  class="vsm-arrow"
                  :class="{'open-arrow' : show}"
                />


              </template>
            </router-link>
          </template>
    </template>
    <template v-else>
      <a
        class="vsm-link"
        :class="item.class"
        :href="item.href ? item.href : '#'"
        :disabled="item.disabled"
        v-bind="item.attributes"
        @click="clickEvent"
      >
        <i
          v-if="item.icon"
          class="vsm-icon"
          :class="item.icon"
        />
        <template v-if="!isCollapsed">
          <span
            v-if="item.badge"
            :style="[rtl ? (item.child ? {'margin-left' : '30px'} : '') : (item.child ? {'margin-right' : '30px'} : '')]"
            class="vsm-badge"
            :class="[item.badge.class ? item.badge.class : 'default-badge']"
            v-bind="item.badge.attributes"
          >{{ item.badge.text }}</span>
          <span class="vsm-title">{{ item.title }}</span>
          <i
            v-if="item.child"
            class="vsm-arrow"
            :class="{'open-arrow' : show}"
          />
        </template>
      </a>
    </template>
    <template v-if="item.child">
      <template v-if="!isCollapsed">
        <transition
          name="expand"
          @enter="expandEnter"
          @afterEnter="expandAfterEnter"
          @beforeLeave="expandBeforeLeave"
        >
          <div
            v-if="show"
            class="vsm-dropdown"
          >
            <div class="vsm-list">
              <sub-item
                v-for="(subItem, index) in item.child"
                :key="index"
                :item="subItem"
              />
            </div>
          </div>
        </transition>
      </template>
    </template>
  </div>
</template>

<script>
import SubItem from './SubItem.vue'
import { itemMixin, animationMixin } from '../mixin'

export default {
  data() {
    return {
      isSSR: process.server,
    }
  },
  components: {
    SubItem
  },
  mixins: [itemMixin, animationMixin],
  props: {
    item: {
      type: Object,
      required: true
    },
    firstItem: {
      type: Boolean,
      default: false
    },
    isCollapsed: {
      type: Boolean
    }
  },
  methods: {
    mouseEnter (event) {
      if (this.isCollapsed && this.firstItem) {
        this.$parent.$emit('mouseEnterItem', {
          item: this.item,
          pos:
              event.currentTarget.getBoundingClientRect().top -
              this.$parent.$el.getBoundingClientRect().top,
          height: this.$el.offsetHeight
        })
      }
    }
  }
}
</script>
