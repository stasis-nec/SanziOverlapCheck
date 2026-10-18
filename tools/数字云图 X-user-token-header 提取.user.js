// ==UserScript==
// @name         数字云图 X-user-token-header 提取
// @namespace    xfz-local-tools
// @version      1.0
// @description  在当前浏览器中读取并复制 X-user-token-header，不自动上传
// @match        http://qdsz.cloudlizard.cn:19080/*
// @match        https://qdsz.cloudlizard.cn:19080/*
// @run-at       document-idle
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  if (window.top !== window || document.getElementById('xfz-token-copy')) return;

  const key = 'X-user-token-header';
  const decode = text => {
    try {
      return decodeURIComponent(text);
    } catch {
      return text;
    }
  };

  const button = document.createElement('button');
  button.id = 'xfz-token-copy';
  button.type = 'button';
  button.textContent = '复制 X-user-token-header';
  button.style.cssText =
    'position:fixed;right:16px;bottom:16px;z-index:2147483647;' +
    'background:#1456a0;color:#fff;border:0;border-radius:8px;' +
    'padding:10px 14px;font:14px sans-serif;cursor:pointer';

  button.onclick = async () => {
    const pair = document.cookie
      .split(';')
      .map(item => item.trim())
      .find(item => {
        const separator = item.indexOf('=');
        return separator > 0 &&
          decode(item.slice(0, separator)).toLowerCase() === key.toLowerCase();
      });

    const value = pair ? decode(pair.slice(pair.indexOf('=') + 1)) : '';

    if (!value) {
      alert(
        '脚本无法读取该 Cookie。请按 F12 → Application（应用）→ ' +
        'Cookies → 当前站点，手动查找 X-user-token-header。' +
        '如果它标记为 HttpOnly，油猴脚本无法读取。'
      );
      return;
    }

    try {
      await navigator.clipboard.writeText(value);
      alert('已复制 token 值。它相当于当前登录凭据，请妥善保管。');
    } catch {
      prompt('浏览器禁止自动复制，请在下方手动复制：', value);
    }
  };

  document.body.append(button);
})();
