export function getUploader (component) {
  let parent = component.$parent
  while (parent) {
    if (parent.uploader) {
      return parent.uploader
    } else {
      parent = parent.$parent
    }
  }
  return null
}

export function secondsToStr (temp) {
  const years = Math.floor(temp / 31536000)
  if (years) {
    return years + ' 年' + numberEnding(years)
  }
  const days = Math.floor((temp %= 31536000) / 86400)
  if (days) {
    return days + ' 天' + numberEnding(days)
  }
  const hours = Math.floor((temp %= 86400) / 3600)
  if (hours) {
    return hours + ' 小时' + numberEnding(hours)
  }
  const minutes = Math.floor((temp %= 3600) / 60)
  if (minutes) {
    return minutes + ' 分钟' + numberEnding(minutes)
  }
  const seconds = temp % 60
  return seconds + ' 秒' + numberEnding(seconds)
  function numberEnding (number) {
    return ''
  }
}

export function kebabCase (s) {
  return s.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`)
}
