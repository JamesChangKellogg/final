let firebase = require('./firebase')

exports.handler = async function(event) {
  
  let matchesdata = []
  
  return {
    statusCode: 200,
    body: JSON.stringify(matchesdata)
  }
}