const myData = {
  name: 'Kamila',
  lastName: 'Dynysiuk',
  birthYear: 1990,
  job: 'Front end developer',
  friends: ['Anna', 'Jon', 'Elizabeth'],
  hasDriveLicense: true,

  calcAge: function () {
    // use this reference object itself
    this.age = new Date().getFullYear - this.birthYear;
    return this.age;
  },
  summary: function () {
    return `${this.name} is a ${this.age} and has ${
      this.hasDriveLicense ? 'has' : "doesn't have"
    } driving license `;
  },
};
console.log(myData.calcAge());
console.log(myData.age);

// ctr + D multiple curses, add next occurrence
