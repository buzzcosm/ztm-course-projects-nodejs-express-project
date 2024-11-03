const path = require('path');

function getMessages(req, res) {
  const imagePath = path.join(__dirname, '..', 'public', 'skimountain.jpg');
  res.sendFile(imagePath);
  // res.send('<ul><li>Helloo Albert!</li></ul>');
};

function postMessage(req, res) {
  console.log('Updating messages...');
}

module.exports = {
  getMessages,
  postMessage
}