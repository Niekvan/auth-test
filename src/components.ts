import Vue from 'vue';
import Buefy from 'buefy';

import loader from '@/modules/core/loader.vue';

const customIconConfig = {
  unicons: {
    sizes: {
      default: '',
      'is-small': 'is-small',
      'is-medium': 'is-medium',
      'is-large': 'is-large'
    },
    iconPrefix: 'uil-',
    internalIcons: {
      check: 'check',
      information: 'info-circle',
      'check-circle': 'check-circle',
      alert: 'exclamation-triangle',
      'alert-circle': 'exclamation-circle',
      'arrow-up': 'arrow-up',
      'chevron-right': 'angle-right',
      'chevron-left': 'angle-left',
      'chevron-down': 'arrow-down',
      eye: 'eye',
      'eye-off': 'eye-slash',
      'menu-down': 'angle-down',
      'menu-up': 'angle-up'
    }
  }
};

Vue.use(Buefy, {
  defaultIconPack: 'unicons',
  customIconPacks: customIconConfig
});

Vue.component('loader', loader);
