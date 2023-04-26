function showUser(id) {
  if (id < 0) {
    throw new Error("IDs cannot be negative " + id);
  }
  return { id };
}

function showUsers(ids) {
  let result = [];
  ids.forEach(function (id) {
    try {
      let person = showUser(id);
      result.push(person);
    } catch (error) {
      console.log(error.message);
    }
  });
  return result;
}

showUsers([1,5,100,22,-1,-123])