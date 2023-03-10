const express = require('express');
var cors = require('cors');
const players = require('./players-default.json');
const app = express();
app.use(
  cors({
    origin: '*',
  }),
);
// app.use(
//   express.urlencoded({
//     extended: true,
//   }),
// );

app.listen(3001, () => {
  console.log('>>> Serve Started <<<');
});

app.use(express.json());

const sortPlayer = (player1, player2) => {
  if (player1.score > player2.score) {
    return -1;
  }

  if (player1.score < player2.score) {
    return 1;
  }

  return 0;
};

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

app.post('/api/v1/players', function (req, res) {
  const newPlayer = req.body;
  const today = new Date();
  const currentPlayer = {
    id: `${guid()}`,
    name: newPlayer.name,
    score: newPlayer.score,
  };
  players.push(currentPlayer);
  players.sort(sortPlayer);
  const rank = players.findIndex((p) => p.id == currentPlayer.id);
  currentPlayer.rank = rank + 1;
  const responseData = {
    player: currentPlayer,
    success: true,
  };
  return res.status(201).json(responseData);
});
app.get('/', (req, res) => {
  res.status(200).json({ success: true });
})
app.get('/api/v1/leaderboard', (req, res) => {
  players.sort(sortPlayer);
  const responseData = {
    records: players.slice(0, 10),
    success: true,
  };
  res.status(200).json(responseData);
});
