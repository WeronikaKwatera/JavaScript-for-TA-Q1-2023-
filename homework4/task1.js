function calcRectangleArea(width, height) {
  try {
    if (isNaN(width) || isNaN(height)) {
      throw new Error("Is not a number");
    }
    alert(calcRectangleArea(3,"a"))
  } catch (error) {
    console.log(error);
  }
}

calcRectangleArea();
