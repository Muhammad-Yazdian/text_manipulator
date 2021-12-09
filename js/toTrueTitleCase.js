/**
 * Converts a string to Title Case string excluding no-cap words (e.g., in, is, ...)
 *
 * para 
 *   str: 		string type
 *   return: 	string type
 *
 */
function toTrueTitleCase(str){
  return str.replace(/\w\S*/g, function(word){
	noCapWords = ["a", "aboard", "about", "above", "across", "after", 
		"against", "along", "amid", "among", "an", "and", "anti", "are", 
		"around", "as", "at", "be", "before", "behind", "below", "beneath", 
		"beside", "besides", "between", "beyond", "but", "by", "concerning", 
		"considering", "despite", "during", "e.g.", "except", "excepting", 
		"excluding", "following", "for", "from", "i.e.", "in", "inside", 
		"into", "like", "is", "minus", "near", "of", "off", "on", "onto", 
		"opposite", "or", "outside", "over", "past", "per", "plus", 
		"regarding", "since", "so", "such", "than", "the", "through", "to", 
		"toward", "towards", "under", "underneath", "unlike", "until", "up", 
		"upon", "versus", "via", "with", "within", "without", "yet"];
	if(!noCapWords.includes(word.toLowerCase())){
      return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
	}else{
	  return word.toLowerCase();
	}
  });
}