export default {
  login: {
    title: 'EF-ADMIN 后台系统登录',
    logIn: '登录',
    username: '账号',
    password: '密码',
    rememberMe: '记住我',
    verificationCode: '验证码',
    LoggingIn: '登录中...'
  },
  sidebar: {
    title: 'EF-ADMIN 后台系统'
  },
  navbar: {
    dashboard: '首页',
    github: '项目地址',
    fullScreen: '全屏缩放',
    theme: '换肤',
    size: '布局大小',
    switchLang: '切换语言',
    projectDocs: '项目文档',
    layoutSettings: '布局设置',
    profile: '个人中心',
    logOut: '退出登录'
  },
  dashboard: { // 首页数据面板部分
    dayFlow: '日流量',
    dayIP: '日IP量',
    weekFlow: '周流量',
    weekIP: '周IP量'
  },
  crud: {
    new: '新增',
    edit: '编辑',
    delete: '删除',
    export: '导出',
    selectAll: '全选',
    search: '搜索',
    fuzzySearch: '模糊搜索',
    resetSearch: '重置搜索',
    advanceSearch: '高级搜索',
    confirm: '确定',
    cancel: '取消',
    submitSuccess: '提交成功',
    addSuccess: '新增成功',
    editSuccess: '编辑成功',
    delSuccess: '删除成功',
    exportData: '数据',
    deleteTips: '确定删除本条数据吗？',
    deleteWarn: '提示',
    multiDeleteTipsStart: '确认删除选中的',
    multiDeleteTipsEnd: '条数据?',
    selectAtLeastOne: '请至少选择一列',
    save: '保存'
  },
  bool: {
    true: '是',
    false: '否'
  },
  common: {
    close: '关闭',
    clickUpload: '点击上传',
    dragFileUpload: '将文件拖到此处，或',
    startDate: '开始日期',
    endDate: '结束日期',
    startTime: '开始时间',
    endTime: '结束时间',
    testConnect: '测试连接',
    connectOK: '连接成功',
    connectFailed: '连接失败'
  },
  // 组件的属性国际化
  // 基础实体BaseEntity的属性字段
  be: {
    id: '主键',
    createTime: '创建时间',
    updateTime: '更新时间',
    creatorNum: '创建人',
    updaterNum: '更新人',
    remark: '备注',
    operate: '操作'
  },
  // 用户管理表
  user: {
    TITLE: '用户',
    username: '用户名',
    nickName: '昵称',
    usercode: '用户编码',
    sex: '性别',
    userAvatar: '用户头像',
    email: '邮箱',
    phone: '电话',
    enabled: '状态',
    password: '密码',
    lastPasswordResetTime: '最后修改密码时间',
    roles: '角色',
    job: '岗位',
    dept: '部门',
    selectDept: '选择部门',
    selectJob: '请先选择部门',
    selectRole: '选择角色'
  },
  sex: {
    male: '男',
    female: '女'
  },
  userAvatar: {
    realName: '真实姓名',
    path: '路径',
    size: '大小'
  },
  role: {
    TITLE: '角色',
    name: '角色名称',
    dataScope: '数据范围',
    level: '级别',
    remark: '备注',
    permission: '角色权限',
    users: 'users',
    menus: 'menus',
    depts: 'depts',
    roleList: '角色列表',
    menuAssignment: '菜单分配'
  },
  menu: {
    TITLE: '菜单',
    name: '菜单名称',
    sort: '排序',
    path: '路由地址',
    component: '组件路径',
    type: '菜单类型',
    permission: '权限标识',
    componentName: '组件名',
    icon: '图标',
    cache: '是否缓存',
    hidden: '是否可见',
    pid: '上级菜单',
    iFrame: '是否外链',
    roles: '关联角色'
  },
  menuType: {
    dir: '目录',
    menu: '菜单',
    button: '按钮',
    menuTitle: '菜单标题',
    btnName: '按钮名称'
  },
  dept: {
    TITLE: '部门',
    name: '名称',
    enabled: '状态',
    pid: '上级部门',
    roles: '角色',
    selectSuperTips: '选择上级类目',
    deleteTips: '确定删除吗,如果存在下级节点则一并删除，此操作不能撤销！'
  },
  job: {
    TITLE: '岗位',
    name: '职位名称',
    sort: '排序',
    enabled: '状态',
    dept: '关联部门'
  },
  dict: {
    TITLE: '字典',
    queryTips: '输入名称或者描述搜索',
    name: '名称',
    dictList: '字典列表',
    dictDetails: '字典详情',
    deleteTips: '此操作将删除字典与对应的字典详情，确定要删除吗？'
  },
  dictDetail: {
    TITLE: '字典详情',
    queryTips: '输入字典标签查询',
    label: '字典标签',
    value: '字典值',
    sort: '排序',
    dict: '所属字典',
    clickViewDetail: '点击字典查看详情',
    deleteTips: '确定删除本条数据吗？'
  },
  employee: {
    TITLE: '员工',
    name: '姓名',
    idNumber: '身份证号',
    sex: '性别',
    code: '编码',
    avatar: '头像',
    email: '邮箱',
    phone: '电话',
    status: '状态',
    birthday: '生日',
    address: '地址',
    job: '职位',
    dept: '部门'
  },
  online: {
    TITLE: '在线用户',
    userName: '用户名',
    nickName: '昵称',
    job: '岗位',
    browser: '浏览器',
    ip: '登录IP',
    address: '登录地点',
    loginTime: '登录时间',
    forceOut: '强退',
    deleteTips: '确定强制退出该用户吗？',
    deleteOk: '强退成功！',
    deleteTitle: '提示',
    deleteContentStart: '确认强退选中的',
    deleteContentEnd: '个用户?',
    allTableLikeSearch: '全表模糊搜索'
  },
  log: {
    username: '用户名',
    description: '行为描述',
    method: '请求方法',
    params: '请求参数',
    logType: '日志类型',
    requestIp: '请求IP',
    address: 'IP来源',
    browser: '浏览器',
    time: '请求耗时',
    exceptionDetail: '异常详情',
    viewDetail: '查看详情',
    clearLog: '清空',
    deleteTitle: '提示',
    deleteTips: '确认清空所有操作日志吗?',
    deleteErrorTips: '确认清空所有异常日志吗?'
  },
  server: {
    TITLE: '服务',
    name: '名称',
    address: 'IP地址',
    port: '访问端口',
    state: '状态',
    cpuRate: 'CPU使用率',
    cpuCore: 'CPU内核数',
    memTotal: '内存总数',
    memUsed: '内存使用量',
    diskTotal: '磁盘总量',
    diskUsed: '磁盘使用量',
    swapTotal: '交换区总量',
    swapUsed: '交换区使用量',
    sort: '排序'
  },
  mserver: {
    TITLE: '服务器',
    name: '名称',
    ip: 'IP地址',
    port: '端口',
    account: '用户名',
    password: '密码',
    nameRequired: '请输入名称',
    ipRequired: '请输入IP地址',
    portRequired: '请输入端口',
    accountRequired: '请输入用户名',
    passwordRequired: '请输入密码',
    searchPlaceholder: '输入名称或IP搜索'
  },
  mapp: {
    TITLE: '应用',
    name: '应用名称',
    port: '端口',
    uploadPath: '上传目录',
    deployPath: '部署目录',
    backupPath: '备份目录',
    startScript: '启动脚本',
    deployScript: '部署脚本',
    copyBtn: '复制',
    searchPlaceholder: '输入名称搜索',
    nameRequired: '请输入应用名称',
    portRequired: '请输入端口',
    uploadPathRequired: '请输入上传目录',
    deployPathRequired: '请输入部署目录',
    backupPathRequired: '请输入备份目录',
    startScriptRequired: '请输入启动脚本',
    deployScriptRequired: '请输入部署脚本',
    namePlaceholder: '部署后的文件或者目录名称，用于备份',
    portPlaceholder: '例如: 8080',
    uploadPathPlaceholder: '例如: /opt/upload',
    deployPathPlaceholder: '例如: /opt/app',
    backupPathPlaceholder: '例如: /opt/backup'
  },
  deploy: {
    TITLE: '部署',
    appName: '应用名称',
    server: '服务器',
    deployTime: '部署时间',
    appNameRequired: '请选择应用名称',
    serverRequired: '请选择服务器',
    systemRecovery: '系统还原',
    statusQuery: '状态查询',
    start: '启动',
    stop: '停止',
    oneKeyDeploy: '一键部署',
    searchPlaceholder: '输入名称搜索'
  },
  deployHistory: {
    TITLE: '部署历史',
    appName: '应用名称',
    ip: '部署IP',
    deployDate: '部署时间',
    deployUser: '部署人员',
    deployId: '部署编号',
    searchPlaceholder: '输入搜索内容'
  },
  db: {
    TITLE: '数据库',
    name: '数据库名称',
    jdbcUrl: 'JDBC地址',
    userName: '数据库用户名',
    pwd: '数据库密码',
    execScript: '执行脚本',
    nameRequired: '请输入数据库名称',
    jdbcUrlRequired: '请输入JDBC地址',
    userNameRequired: '请输入数据库用户名',
    pwdRequired: '请输入数据库密码',
    execSqlTips: '上传后，系统会自动执行SQL脚本'
  },
  documentation: {
    documentation: '文档',
    github: 'Github 地址'
  },
  permission: {
    addRole: '新增角色',
    editPermission: '编辑权限',
    roles: '你的权限',
    switchRoles: '切换权限',
    tips: '在某些情况下，不适合使用 v-permission。例如：Element-UI 的 el-tab 或 el-table-column 以及其它动态渲染 dom 的场景。你只能通过手动设置 v-if 来实现。',
    delete: '删除',
    confirm: '确定',
    cancel: '取消'
  },
  guide: {
    description: '引导页对于一些第一次进入项目的人很有用，你可以简单介绍下项目的功能。本 Demo 是基于',
    button: '打开引导'
  },
  components: {
    documentation: '文档',
    tinymceTips: '富文本是管理后台一个核心的功能，但同时又是一个有很多坑的地方。在选择富文本的过程中我也走了不少的弯路，市面上常见的富文本都基本用过了，最终权衡了一下选择了Tinymce。更详细的富文本比较和介绍见',
    dropzoneTips: '由于我司业务有特殊需求，而且要传七牛 所以没用第三方，选择了自己封装。代码非常的简单，具体代码你可以在这里看到 @/components/Dropzone',
    stickyTips: '当页面滚动到预设的位置会吸附在顶部',
    backToTopTips1: '页面滚动到指定位置会在右下角出现返回顶部按钮',
    backToTopTips2: '可自定义按钮的样式、show/hide、出现的高度、返回的位置 如需文字提示，可在外部使用Element的el-tooltip元素',
    imageUploadTips: '由于我在使用时它只有vue@1版本，而且和mockjs不兼容，所以自己改造了一下，如果大家要使用的话，优先还是使用官方版本。'
  },
  table: {
    dynamicTips1: '固定表头, 按照表头顺序排序',
    dynamicTips2: '不固定表头, 按照点击顺序排序',
    dragTips1: '默认顺序',
    dragTips2: '拖拽后顺序',
    title: '标题',
    importance: '重要性',
    type: '类型',
    remark: '点评',
    search: '搜索',
    add: '添加',
    export: '导出',
    reviewer: '审核人',
    id: '序号',
    date: '时间',
    author: '作者',
    readings: '阅读数',
    status: '状态',
    actions: '操作',
    edit: '编辑',
    publish: '发布',
    draft: '草稿',
    delete: '删除',
    cancel: '取 消',
    confirm: '确 定'
  },
  example: {
    warning: '创建和编辑页面是不能被 keep-alive 缓存的，因为keep-alive 的 include 目前不支持根据路由来缓存，所以目前都是基于 component name 来进行缓存的。如果你想类似的实现缓存效果，可以使用 localStorage 等浏览器缓存方案。或者不要使用 keep-alive 的 include，直接缓存所有页面。详情见'
  },
  errorLog: {
    tips: '请点击右上角bug小图标',
    description: '现在的管理后台基本都是spa的形式了，它增强了用户体验，但同时也会增加页面出问题的可能性，可能一个小小的疏忽就导致整个页面的死锁。好在 Vue 官网提供了一个方法来捕获处理异常，你可以在其中进行错误处理或者异常上报。',
    documentation: '文档介绍'
  },
  excel: {
    export: '导出',
    selectedExport: '导出已选择项',
    placeholder: '请输入文件名(默认excel-list)'
  },
  zip: {
    export: '导出',
    placeholder: '请输入文件名(默认file)'
  },
  pdf: {
    tips: '这里使用   window.print() 来实现下载pdf的功能'
  },
  theme: {
    change: '换肤',
    documentation: '换肤文档',
    tips: 'Tips: 它区别于 navbar 上的 theme-pick, 是两种不同的换肤方法，各自有不同的应用场景，具体请参考文档。'
  },
  tagsView: {
    refresh: '刷新',
    close: '关闭',
    closeOthers: '关闭其它',
    closeAll: '关闭所有'
  },
  settings: {
    title: '系统布局配置',
    theme: '主题色',
    tagsView: '开启 Tags-View',
    fixedHeader: '固定头部',
    sidebarLogo: '显示侧边栏Logo',
    menuUniqueOpened: '菜单单一打开'
  }
}
