// 根据request请求，获取ip地址
export default function getIP(req) {
  var ip =
    req.headers["x-forwarded-for"] ||
    req.ip ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection?.socket.remoteAddress ||
    "";
  console.log("ip:", ip);
  if (ip.split(",").length > 0) {
    ip = ip.split(",")[0];
  }
  ip = ip.substr(ip.lastIndexOf(":") + 1, ip.length);

  return ip;
}
