/**
 * Converts a string to Title Case string
 *
 * para 
 *   str: 		string type
 *   return: 	string type
 *
 */
function toTitleCase(str){
  return str.replace(/\w\S*/g, function(word){
    return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
  });
}