import zhCN from '~/locales/zh-CN.json';
import enUS from '~/locales/en-US.json';
export default defineI18nConfig(() => ({
  legacy: false,
  fallbackLocale: 'zh-cn',
  locale: 'zh-cn',
  messages: {
    'en-us': enUS,
    'zh-cn': zhCN
  }
}));
