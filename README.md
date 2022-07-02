# ONES Link

为什么会做这个插件？主要在于 ONES 团队在从公有云迁移到私有部署后，现存所有记录中存在的链接地址仍然指向的是公有云的地址，而不是迁移后私有部署的地址，这将导致每次访问都需要手动修改一下链接地址。

[ONES Link](https://github.com/k8scat/ones-link) 的目标就是：当 ONES 团队从公有云迁移到私有云后，在访问 ONES 系统时帮助用户自动地从旧地址跳转到新地址上。
比如，迁移前某个 wiki 页面的地址是 [https://ones.ai/wiki/#/team/a1b2c3d4/page/e5f6g7h8](https://ones.ai/wiki/#/team/a1b2c3d4/page/e5f6g7h8)，
迁移后私有部署的 ONES 地址是 [https://ones.example.com](https://ones.example.com)，
那么，该插件将会帮助用户自动地跳转到新地址上，即 [https://ones.example.com/wiki/#/team/a1b2c3d4/page/e5f6g7h8](https://ones.example.com/wiki/#/team/a1b2c3d4/page/e5f6g7h8)，
而不用手动去更改页面地址。

## 使用说明

### 浏览器支持

- [x] Google Chrome
- [x] Microsoft Edge

### 安装

#### Chrome 应用商店

[应用链接](https://chrome.google.com/webstore/detail/ones-link/khodhfmciemcgodoaklfpaoegloicgpj)

#### 压缩包

在 [GitHub Release](https://github.com/k8scat/ones-link/releases) 页面下载最新版本的浏览器插件压缩包，本地解压后，在浏览器中安装（需要打开插件的开发者模式）。

### 配置说明

- 私有部署地址
  - 包含具体的协议和域名，例如：`https://ones.example.com`
- 团队UUID
  - 当为空时则不校验具体的团队UUID
  - 支持指定多个团队UUID，使用逗号隔开，例如：`a1b2c3d4,e5f6g7h8`

### ONES 目前的公有云地址

- [https://ones.ai](https://ones.ai)
- [https://ones.cn](https://ones.cn)
- [https://ones.com](https://ones.com)

## Author

K8sCat <k8scat@gmail.com>

## License

[MIT](./LICENSE)

## OSCS

[![OSCS Status](https://www.oscs1024.com/platform/badge/k8scat/ones-link.git.svg?size=large)](https://www.murphysec.com/dr/ojcFeUzc6Nh1KTPGWr)
