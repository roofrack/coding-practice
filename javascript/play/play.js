const names = ['bobby', 'tommy', 'chillin']

const res = names.find(findBobby)

function findBobby(item) {
  return item === 'bobby'
}

console.log(res)
