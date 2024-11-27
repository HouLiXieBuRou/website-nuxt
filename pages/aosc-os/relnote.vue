<script setup>
const { tm } = useI18n();
const textValue = tm('aosc-os.relnote');
</script>

<template>
  <div>
    <category-second :title="textValue.title1" />
    <div class="p-6">
      <p>{{ textValue.p1 }}</p>
      <p>{{ textValue.p1 }}</p>
      <p
        ><b>{{ textValue.b1 }}</b></p
      >
    </div>

    <category-second id="platform-support" :title="textValue.title2" />
    <div class="p-6">
      <p>{{ textValue.p3 }}</p>
      <div class="pt-2 pb-4 px-16">
        <app-ul-ordinary :ul-value="textValue.ul1" my-key="aosc-os-relnote-1"/>
      </div>
    </div>

    <category-second id="architectural-changes" :title="textValue.title3" />
    <div class="p-6">
      <p
        >根据用户反馈，我们对系统套件包 (<code>*-base</code>)
        的依赖结构进行了调整：</p
      >
      <div class="pt-2 pb-4 px-16">
        <ul class="list-disc">
          <li
            >任何非必要组件均已从原来的“硬依赖 (Depends)”降级为“软依赖
            (Recommends)”，即默认自动安装但允许用户根据需要和喜好卸载</li
          >
          <li
            >将一部分删除后可能阻碍系统修复和管理的工具（如 NetworkManager 和
            oma 等）标记为“关键组件 (Essential)”，默认不允许用户删除</li
          >
        </ul>
      </div>
    </div>

    <category-second id="component-updates" :title="textValue.titl4" />
    <div class="p-6">
      <p>本次系统发行更新包含许多组件更新，其中较为关键的更新及修复有：</p>
      <div class="pt-2 pb-4 px-16">
        <ul class="list-disc">
          <li
            >系统核心包 (Core) 更新至
            11.5.2，提高了默认内存映射数量以修复部分大型软件编译时报告内存不足的问题；修复一处与
            foot 终端配置的文件冲突</li
          >
          <li
            ><a href="https://github.com/AOSC-Dev/oma" class="text-link"
              >小熊猫包管理 (oma)</a
            >
            更新至 1.10，包含多轮功能及界面修复，改善了对部分 Debian/Ubuntu
            第三方源的支持</li
          >
          <li
            ><a href="https://liblol.aosc.io/" class="text-link">libLoL</a>
            龙架构“旧世界”应用程序兼容层更新至 0.1.6，适配 glibc 2.40 更新及
            Linux 内核引入
            <code>statx()</code>
            系统调用等变化，并修复了
            <code>lxstat64()</code>
            系统调用的实现</li
          >
          <li
            >OpenSSH 发布更新，针对先前泄漏的 OpenSSH
            主机密钥进行集中匹配、删除和重生成</li
          >
          <li
            >Mesa 图形库更新至 24.2.2、libdrm 直接渲染管理器运行时库更新至
            2.4.123，包含对各类新老显卡的支持</li
          >
          <li>curl 网络工具及运行时更新至 8.10.0，包含多个安全漏洞修复</li>
          <li>OpenSSL 更新至 3.3.2，包含自八月初以来的多个安全漏洞修复</li>
          <li
            >NVIDIA 官方显卡驱动更新至
            560.35.03，包含对最新显卡及图形应用、游戏的支持优化</li
          >
          <li
            >为 OpenSSH 组件引入
            <code>ssh-agent.service</code>
            用户服务，方便登录时进行密钥鉴权和登记</li
          >
          <li
            >更新 X11 基础工具包 (<code>x11-app</code>) 各组件，其中包含
            <code>x11perf</code>
            工具测试梯形绘制性能时因未正确处理不受支持的材质格式时引发崩溃的问题（UnixBench
            的 2D 图形测试使用该工具）</li
          >
          <li>更新 Intel 处理器微码至 20240910，修复部分已知安全问题</li>
        </ul>
      </div>
    </div>

    <category-second id="bugfixes" :title="textValue.title5" />
    <div class="p-6">
      <p
        >除功能更新带来的修复外，我们还针对用户反馈的问题对部分系统功能中存在的问题进行了修复：</p
      >
      <div class="pt-2 pb-4 px-16">
        <ul class="list-disc">
          <li>修复彩色 emoji 字形无法正确显示的问题</li>
          <li
            >修复了 Bilibili 未正确识别 AV1
            元数据，导致无法正确启用硬件解码的问题，可提高部分平台的观看体验</li
          >
          <li
            >默认 Bash 配置中可执行文件搜索路径（<code>$PATH</code>
            变量）在非登录会话中被错误覆盖的问题</li
          >
        </ul>
      </div>
    </div>

    <category-second id="installation-media" :title="textValue.title6" />
    <div class="p-6">
      <p>本次发行更新包含的安装盘亦包含许多修复与改进，具体有：</p>
      <div class="pt-2 pb-4 px-16">
        <ul class="list-disc">
          <li
            >修复了安装盘在包含 NVIDIA 及非 NVIDIA GPU
            的多显卡设备上无法正常启动的问题</li
          >
          <li
            >将救援与恢复控制台（命令行模式）下的安装程序替换为
            <a href="https://github.com/AOSC-Dev/dkcli" class="text-link"
              >dkcli</a
            >，与图形安装程序功能均等且支持无人值守安装模式</li
          >
          <li>新增在龙架构“旧世界”固件上的启动和安装支持</li>
          <li
            >删除预设的
            <code>live</code>
            用户密码，规避默认启用 SSH 服务的情况下提权路径过于显著的问题</li
          >
          <li>禁用屏幕节电、睡眠等功能，避免产生意外故障</li>
          <li
            >为救援与恢复控制台的启动提示新增本地化支持，并更新了报告系统问题的渠道信息</li
          >
          <li
            >更新
            <a href="https://www.memtest.org" class="text-link">Memtest86+</a>
            内存测试工具至 7.00</li
          >
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
./components/Header.vue
