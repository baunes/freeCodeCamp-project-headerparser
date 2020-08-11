const getIp = (request) => request.ip || null

const getLanguage = (request) => request.headers['accept-language'] || null

const getSoftware = (request) => request.headers['user-agent'] || null

function getWhoami(request) {
  return {
    ipaddress: getIp(request),
    language: getLanguage(request),
    software: getSoftware(request),
  }
}

module.exports = { getWhoami }
