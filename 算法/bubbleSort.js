var arr = [23,22,454,56,76,8,65];

function maopao(arr){
  for(var i = 0; i < arr.length; i++){
    for(var j = i +1; j < arr.length; j++){
      if(arr[i] > arr[j]){
        var linshi = arr [j];
        arr[j] = arr[i];
        arr[i] = linshi;
      }
    }
  }
  return arr;
}
function bubbleSort(arr){
  var i = arr.length;
	while (i > 0) {
		var pos = 0
		for (var j = 0; j < i; j++) {
			if (arr[j] > arr[j+1]){
				pos = j
				var temp = arr[j]
				arr[j] = arr[j+1]
				arr[j+1] = temp
			}
		}
		i = pos
	}
	return arr
}
console.time();
var aa = maopao(arr);
console.timeEnd();
console.time();
var bb = bubbleSort(arr);
console.timeEnd();
console.log(aa);
console.log(bb);