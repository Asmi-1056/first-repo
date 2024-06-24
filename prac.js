// Arrays in Javascript

//Splits the data by comma(,) and creates/prints a array of the cities
// const data = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";
// const cities = data.split(",");
// cities;
// console.log(cities)

// Sequence of number is not mandatory
// const sequence = [1, 1, 2, 3, 5, 8, 13];
// console.log(sequence)

//We can store different datatypes in a single array
// finding the length of array by filename.length
// const random = ["tree", 795, [0, 1, 2]];
// console.log(random)
// console.log(random.length)// gives the length of array

// Accessing array items present at particular index
// const Names=['Asmi', 'Shaurya', 'Sagar', 'Omkar' ]
// console.log(Names[3])

// Modifying the item present at a particular index
// const Names=['Asmi', 'Shaurya', 'Sagar', 'Omkar' ]
// Names[0]='Dev'
// console.log(Names)

// Array inside an array is called Multi-Dimensional Array
// const random = ["tree", 795, [0, 1, 2]];

// Finding the index of a particular item in array by using indexOf().
// const Names=['Asmi', 'Shaurya', 'Sagar', 'Omkar' ]
// console.log(Names.indexOf("Omkar"));

//Add one or more items to the end of an array we can use push().
// const Names=['Asmi', 'Shaurya', 'Sagar', 'Omkar' ]
// Names.push("Swapnil");
// console.log(Names)

//The new length of the array is returned when the method call completes.
// const Names=['Asmi', 'Shaurya', 'Sagar', 'Omkar' ]
// const newLength = Names.push("Swapnil")
// console.log(Names)
// console.log(newLength)

// Add an item to the start of the array, use unshift()
// const Names=['Asmi', 'Shaurya', 'Sagar', 'Omkar' ]
// Names.unshift("Sonal")
// console.log(Names)

// Remove the last item from the array, use pop()
// const Names=['Asmi', 'Shaurya', 'Sagar', 'Omkar' ]
// Names.pop()
// console.log(Names)

// The pop() method returns the item that was removed. 
// To save that item in a new variable we do this:
// const Names=['Asmi', 'Shaurya', 'Sagar', 'Omkar' ]
// const removedNames = Names.pop()
// console.log(removedNames)

// Remove the first item from an array, use shift()
// const Names=['Asmi', 'Shaurya', 'Sagar', 'Omkar' ]
// Names.shift()
// console.log(Names)

// When we know the index of an item, you can remove it from the array using splice()
// const Names = ['Asmi', 'Shaurya', 'Sagar', 'Omkar' ]
// const index = Names.indexOf("Sagar")
// if (index!=-1)
//     {
//         Names.splice(index,1)   
//     }
//     console.log(Names)

     
// const Names = ['Asmi', 'Shaurya', 'Sagar', 'Omkar' ]
// const index = Names.indexOf("Sagar")
//     if (index!=-1)
//         {
//             Names.splice(index,2)   
//         }
//         console.log(Names)

    