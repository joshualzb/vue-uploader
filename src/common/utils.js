export function getUploader(component) {
  let parent = component.$parent;
  while (parent) {
    if (parent.uploader) {
      return parent.uploader
    } else {
      parent = parent.$parent
    }
  }
  return null
}

export function secondsToStr(temp) {
  const years = Math.floor(temp / 31536000);
  if (years) {
    return years + ' 年';
  }
  const days = Math.floor((temp %= 31536000) / 86400);
  if (days) {
    return days + ' 天';
  }
  const hours = Math.floor((temp %= 86400) / 3600);
  if (hours) {
    return hours + ' 时';
  }
  const minutes = Math.floor((temp %= 3600) / 60);
  if (minutes) {
    return minutes + ' 分';
  }
  const seconds = temp % 60;
  return seconds + ' 秒';
}

export function kebabCase(s) {
  return s.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`)
}
