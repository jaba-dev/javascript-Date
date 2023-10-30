// also there is other libraries to use date besides native javascript Date
let d;
// constructor for Date is called (for current date and time)
d = new Date();

// second way
d = new Date(1164411006456);

// third example (not recommended)
d = new Date("2019-08-02T11:30:00+10:00");

// fourth example (gives local timezone)

d = new Date(2019, 7, 2, 11, 30, 27, 0);
// d = new Date(2019, 7,); also possible

console.log(d.toString());
// getters
// everything below comes in local timezone
console.log(d.getFullYear());
console.log(d.getMonth());
console.log(d.getDate());
console.log(d.getDay());
console.log(d.getMinutes());
console.log(d.getTime());
console.log(d.getHours());
console.log(d.getSeconds());
console.log(d.getUTCHours()); // UTC version

// setters

d.setMinutes(10);
d.setDate(5);
d.setUTCHours(4);
console.log(d.toString());

// different ways for displaying

console.log(d.toISOString());
console.log(
  d.toLocaleString("en-AU", {
    tomeZone: "America/Los_Angeles",
  })
);
console.log(d.toLocaleString("en-US"));
console.log(d.toLocaleString());
console.log(d.toLocaleDateString());
console.log(d.toDateString());

console.log(JSON.stringify({ myDate: d }));

// using as id

function generateTodoId() {
  const date = new Date();
  return date.getTime(); // Returns a unique timestamp as the ID
}
