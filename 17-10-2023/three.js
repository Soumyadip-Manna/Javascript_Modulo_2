const students = [
    {
      name: "Mithun",
      marks: 95,
    },
    {
      name: "Prabir",
      marks: 75,
    },
    {
      name: "Alka",
      marks: 92,
    },
    {
      name: "Shivam",
      marks: 70,
    },
    {
      name: "Farman",
      marks: 99,
    },
  ];

  // for(let student of students)
  // {
  //   console.log(student);
  // }
  const checkResults = (name) =>{
    for(let student of students)
    if(student.name === name){
    return student.marks > 90 ? console.log(`congratulations! ${student.name} passed the exam`):console.log(`Sorry ! You have not cleared the exam.`);
    }
    console.log("Invalid user");
  
  }
  checkResults("Mithun");