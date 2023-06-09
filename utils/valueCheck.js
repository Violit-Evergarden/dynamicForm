export function isImgUrl(str) {
  const imgTypes = ["jpg", "jpeg", "png", "gif", "bmp"];
  const strIty = str.split(".").at(-1).toLowerCase();
  for (let i = 0; i < imgTypes.length; i++) {
    if (imgTypes[i] === strIty) return true;
  }
  return false;
}

export function isColor(str) {
  const colorReg = /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/;
  const rgbColorReg =
    /^[rR][gG][Bb][Aa]?[\(]([\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?),){2}[\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?),?[\s]*(0\.\d{1,2}|1|0)?[\)]{1}$/g;
  return colorReg.test(str) || rgbColorReg.test(str);
}

export function isBoolean(val) {
  return typeof val === "boolean";
}
