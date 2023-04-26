const checkAge = () => {
  try {
    const age = prompt("Before we start, please enter your age");
    if ((age = ""))
      throw new Error("the field cannot be empty! Please enter your age");
    else if (isNaN(parseInt(age))) throw new Error("Please enter number");
    else if (age < 14) throw new Error("I am sorry! You are too young!");
    alert("Enjoy the movie");
  } catch (error) {
    alert(error.name + " " + error.message);
  }
};

checkAge();
