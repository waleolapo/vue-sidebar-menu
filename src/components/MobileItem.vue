<template>
  <div
    v-if="item"
    class="vsm-item mobile-item"
    :class="[{'open-item' : item.child}, {'active-item' : active}, {'parent-active-item' : childActive}]"
  >
    <template v-if="isRouterLink">
      <template v-if='isSSR'>
        <nuxt-link
          class="vsm-link"
          :to="item.href"
          :disabled="item.disabled"
          :event="item.disabled ? '' : 'click'"
          @click.native="clickEvent($event, true)"
        >
          <i
            v-if="item.icon"
            class="vsm-icon"
            :class="item.icon"
          />
          <span
            v-if="item.badge"
            :style="[rtl ? (item.child ? {'margin-left' : '30px'} : '') : (item.child ? {'margin-right' : '30px'} : '')]"
            class="vsm-badge"
            :class="[item.badge.class ? item.badge.class : 'default-badge']"
          >{{ item.badge.text }}</span>
          {{ item.title }}
          <i
            v-if="item.child"
            class="vsm-arrow open-arrow"
          />
        </nuxt-link>
      </template>
      <template v-else>
        <router-link
          class="vsm-link"
          :to="item.href"
          :disabled="item.disabled"
          :event="item.disabled ? '' : 'click'"
          @click.native="clickEvent($event, true)"
        >
          <i
            v-if="item.icon"
            class="vsm-icon"
            :class="item.icon"
          />
          <span
            v-if="item.badge"
            :style="[rtl ? (item.child ? {'margin-left' : '30px'} : '') : (item.child ? {'margin-right' : '30px'} : '')]"
            class="vsm-badge"
            :class="[item.badge.class ? item.badge.class : 'default-badge']"
          >{{ item.badge.text }}</span>
          {{ item.title }}
          <i
            v-if="item.child"
            class="vsm-arrow open-arrow"
          />
        </router-link>
      </template>
    </template>
    <template v-else>
      <a
        class="vsm-link"
        :href="item.href ? item.href : '#'"
        :disabled="item.disabled"
        @click="clickEvent($event, true)"
      >
        <i
          v-if="item.icon"
          class="vsm-icon"
          :class="item.icon"
        />
        <span
          v-if="item.badge"
          :style="[rtl ? (item.child ? {'margin-left' : '30px'} : '') : (item.child ? {'margin-right' : '30px'} : '')]"
          class="vsm-badge"
          :class="[item.badge.class ? item.badge.class : 'default-badge']"
        >{{ item.badge.text }}</span>
        {{ item.title }}
        <i
          v-if="item.child"
          class="vsm-arrow open-arrow"
        />
      </a>
    </template>
  </div>
</template>

<script>
import { itemMixin } from '../mixin'

export default {
  data() {
    return {
      isSSR: process.server,
    }
  },
  mixins: [itemMixin],
  props: {
    item: {
      type: Object,
      default: null
    }
  },
  watch: {
    item () {
      this.active =
        this.item && this.item.href ? this.isLinkActive(this.item) : false
      this.childActive =
        this.item && this.item.child
          ? this.isChildActive(this.item.child)
          : false
    }
  }
}
</script>
