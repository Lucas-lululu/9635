/**
 * AES算法类 算法模式: CBC 
 * 密钥长度: 128位 
 * 补码方式: PKCS5Padding（加解密）/ZeroPadding（加解密）
 * 密钥: ctocode-api 
 * 密钥偏移量: api-token 
 * 加密结果编码方式: base64字符串/十六进制字符串 
 * 注意:需要引入aes.js,pad-zeropadding-min.js,md5.js,base64.js
 * 
 * @author: ctocode-zwj
 * @version: 1.0.0
 * @date: 2018/12/03
 */
function CTOCODE_Aes(keyStr, ivStr) {
  // 密钥
  this.keyStr = keyStr;
  // 密钥便宜量
  this.ivStr = ivStr;
  //加密
  this.encrypt = function (data, code) {
    //var keyStr = this.substrMd5(this.keyStr);
    //var ivStr = this.substrMd5(this.ivStr);
    var key = CryptoJS.enc.Utf8.parse(keyStr);
    var iv = CryptoJS.enc.Utf8.parse(ivStr);
    var encrypt = CryptoJS.AES.encrypt(data, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });
    if (code == 'base64') {
      return encrypt.toString();
    } else if (code == 'hex') {
      var hexStr = encrypt.ciphertext.toString().toUpperCase();
      //return CryptoJS.enc.Hex.parse(hexStr);
      return hexStr;
    } else {
      return false;
    }
    return encrypt;
  };
  //解密
  this.decrypt = function (data, code) {
    var keyStr = this.substrMd5(this.keyStr);
    //var ivStr = this.substrMd5(this.ivStr);
    var key = CryptoJS.enc.Utf8.parse(keyStr);
    var iv = CryptoJS.enc.Utf8.parse(ivStr);
    if (code == 'hex') {
      //若果密文是hex，则需执行这个
      var encryptedHexStr = CryptoJS.enc.Hex.parse(data);
      var data = CryptoJS.enc.Base64.stringify(encryptedHexStr);
    }
    var decrypted = CryptoJS.AES.decrypt(data, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC
    });
    return decrypted.toString(CryptoJS.enc.Utf8);
  };
  //解密2 16位
  this.decrypt2 = function (data, code) {
    var keyStr = this.keyStr;
    var ivStr = this.ivStr;
    var key = CryptoJS.enc.Utf8.parse(keyStr);
    var iv = CryptoJS.enc.Utf8.parse(ivStr);
    if (code == 'hex') {
      //若果密文是hex，则需执行这个
      var encryptedHexStr = CryptoJS.enc.Hex.parse(data);
      var data = CryptoJS.enc.Base64.stringify(encryptedHexStr);
    }
    var decrypted = CryptoJS.AES.decrypt(data, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC
    });
    return decrypted.toString(CryptoJS.enc.Utf8);
  };
  //md5后截取前16位数
  this.substrMd5 = function (str) {
    return hex_md5(str).substr(0, 16)
  };
  //字符串转16进制
  this.strToHex = function (str) {
    if (str === "")
      return "";
    var hexCharCode = [];
    hexCharCode.push("0x");
    for (var i = 0; i < str.length; i++) {
      hexCharCode.push((str.charCodeAt(i)).toString(16));
    }
    return hexCharCode.join("");
  };
  //16进制转字符串
  this.hexToStr = function (hexCharCodeStr) {
    var trimedStr = hexCharCodeStr.trim();
    var rawStr =
      trimedStr.substr(0, 2).toLowerCase() === "0x" ?
      trimedStr.substr(2) :
      trimedStr;
    var len = rawStr.length;
    if (len % 2 !== 0) {
      alert("Illegal Format ASCII Code!");
      return "";
    }
    var curCharCode;
    var resultStr = [];
    for (var i = 0; i < len; i = i + 2) {
      curCharCode = parseInt(rawStr.substr(i, 2), 16); // ASCII Code Value
      resultStr.push(String.fromCharCode(curCharCode));
    }
    return resultStr.join("");
  };
}