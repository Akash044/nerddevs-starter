function getNotesDistribution(students) {
  let arr = [];
  const validNotes = "12345";
  students.forEach(({ notes }) => {
    const validatedNotes = notes.filter((note) =>
      validNotes.includes(note.toString())
    );
    arr = [...arr, ...validatedNotes];
  });
  let ans = {};
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    ans[item] =
      ans[item] === undefined ? (ans[item] = 1) : (ans[item] = ans[item] + 1);
  }
  return ans;
}

console.log(
  getNotesDistribution([
    {
      name: "Steve",
      notes: [5, 5, 3, -1, 6],
    },
    {
      name: "John",
      notes: [3, 2, 5, 0, -3],
    },
  ])
);
