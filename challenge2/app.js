/*
Challenge 2:
Given an array a[] of size N which contains elements from 0 to N-1, you need to find all
the elements occurring more than once in the given array.
Example :
Input:
N = 5
a[] = {2,3,1,2,3}
Output: 2 3
Explanation: 2 and 3 occur more than once in the given array.
*/  

function findOccurings(array, length)
{
	var data = new Map();
	for (var i = 0; i < length; i++)
	{
		if(data.has(array[i]))
			data.set(array[i], data.get(array[i])+1)
		else
			data.set(array[i], 1)
	}
	for (var i = 0; i < length; i++) {
		if (data.get(array[i]) > 1) {
			console.log(( array[i] + " " +  "occur more than once in the given array"));
			data.set(array[i], 0);
		}
	}
}

var array = [2,3,1,2,3];
var length = array.length;
findOccurings(array, length);