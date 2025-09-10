let lastId = 2;

const tasks = [
  { id: 1, title: "Learn Rest", completed: false },
  { id: 2, title: "Learn Backend", completed: false },
];

function nextId() {
  lastId += 1;
  return lastId;
}

module.exports = {
  tasks,
  nextId,
};
