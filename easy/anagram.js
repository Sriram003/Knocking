// /*
//   Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
//   What's Anagram?
//   - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
// */
// function isAnagram(str1, str2) {
//   let n1 = getLength(spar);
//   let n2 = getLength(rasp);

//   // if length is equal
//   if(n1 != n2){
//   return false;
//   } 
//   else{
//     // sort both string and compare
//     return (getSortedString(str1) == getSortedString(str2));
//   }
  
// }


// module.exports = isAnagram;
/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/
function isAnagram(str1, str2) {
  // let n1 = getLength(spar);
  // let n2 = getLength(rasp);
  str1 = str.toLowerCase();
  str2 = str.toLowerCase();

  let n1 = str1.lenght();
  let n2 = str2.lenght();
  
  // if length is equal
  if(n1 != n2){
  return false;
  } 
    // sort both string and compare
  const sortedString1 = str1.split('').sort().join("");
  const sortedString2 = str2.split('').sort().join("");
  
  return sortedString1 == sortedString2;


}


module.exports = isAnagram;
