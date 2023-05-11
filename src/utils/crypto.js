import crypto from "crypto";

/**
 * 字符串加密
 * @param {String} str 待加密字符串
 * @param {String} secret 加密秘钥盐
 */
function encrypt(str, secret) {
  const cipher = crypto.createCipher("aes192", secret);
  let enc = cipher.update(str, "utf8", "hex");
  enc += cipher.final("hex");
  return enc;
}

/**
 * 字符串解密
 * @param {String} str 待解密密字符串
 * @param {String} secret 解密秘钥盐
 */
function decrypt(str, secret) {
  const decipher = crypto.createDecipher("aes192", secret);
  let dec = decipher.update(str, "hex", "utf8");
  dec += decipher.final("utf8");
  return dec;
}

export default {
  encrypt,
  decrypt,
};
