$(document).ready(() => {

  const getRandomColor = () => {
    //generate a random number
    /*Why 0 and 15 ?
    Well this is the length of an array that contains all alphanumeric of HEX code, and we want to select random index 6 times and join all in one string.
    ( In this example we will use the HEX code, 0 to 9 and a to f
    Ex: #E06910 , #02198C, #BADA55)
    */
    const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    // 3-Get random HEX code: we need to loop 6 times and concatenate the result every time to the code string
    let code = "";
    for (let i = 0; i < 6; i++) {
      //1 1-Generate random integer between 0 and 15.
      let randomNumber = Math.floor(Math.random()*16);
      code += hexArray[randomNumber]
    };
    code = `#${code}`;
    return code;
  };
   $(".btn").on('click', () => {
     $("body").css("background-color", getRandomColor());
   });
});
