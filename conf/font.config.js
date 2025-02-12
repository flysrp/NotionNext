/**
 * 网站字体相关配置
 *
 */
module.exports = {
  // START ************网站字体*****************
  // 使用衬线字体并设置字重为300（light）
  FONT_STYLE: process.env.NEXT_PUBLIC_FONT_STYLE || 'font-serif font-light',
  
  // 添加霞鹜文楷字体CSS（当前最新版1.6.0）
  FONT_URL: [
    'https://npm.elemecdn.com/lxgw-wenkai-webfont@1.6.0/style.css', // 取消注释启用
    'https://fonts.googleapis.com/css?family=Bitter&display=swap',
    // 以下中文字体可根据需要保留
    'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300&display=swap',
    'https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@300&display=swap'
  ],

  // 无衬线字体列表（保持原配置）
  FONT_SANS: [
    '"PingFang SC"',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Hiragino Sans GB"',
    '"Microsoft YaHei"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    '"Segoe UI"',
    '"Noto Sans SC"',
    'HarmonyOS_Regular',
    '"Helvetica Neue"',
    'Helvetica',
    '"Source Han Sans SC"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"'
  ],

  // 衬线字体列表（新增霞鹜文楷为首选）
  FONT_SERIF: [
    '"LXGW WenKai"',  // 新增文楷字体
    'Bitter',
    '"Noto Serif SC"',
    'SimSun',
    '"Times New Roman"',
    'Times',
    'serif',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    '"Apple Color Emoji"'
  ],

  FONT_AWESOME: 
    process.env.NEXT_PUBLIC_FONT_AWESOME_PATH || 
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
  // END ************网站字体*****************
}
