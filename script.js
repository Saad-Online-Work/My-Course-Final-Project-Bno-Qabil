document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
  
    document.getElementById('registrationMessage').textContent = `Thank you for registering, ${name}!`;
    this.reset();
  });
  
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const contactName = document.getElementById('contactName').value;
  
    document.getElementById('contactMessage').textContent = `Thank you, ${contactName}! Your message has been sent.`;
    this.reset();
  });
  // Initialize arrays to store student and teacher data
  let students = [];
  let teachers = [];
  
  // Handle student registration form submission
  document.getElementById('registrationForm').addEventListener('submit', function(event) {
      event.preventDefault();
  
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const course = document.getElementById('course').value;
  
      // Create a student object and add it to the students array
      const student = { name, email, phone, course };
      students.push(student);
  
      // Display the list of registered students
      displayStudents();
  
      // Clear the form
      this.reset();
      document.getElementById('registrationMessage').textContent = `Thank you for registering, ${name}!`;
  });
  
  // Handle teacher registration form submission
  document.getElementById('teacherForm').addEventListener('submit', function(event) {
      event.preventDefault();
  
      const teacherName = document.getElementById('teacherName').value;
      const teacherEmail = document.getElementById('teacherEmail').value;
      const teacherPhone = document.getElementById('teacherPhone').value;
      const qualifications = document.getElementById('qualifications').value;
  
      // Create a teacher object and add it to the teachers array
      const teacher = { name: teacherName, email: teacherEmail, phone: teacherPhone, qualifications };
      teachers.push(teacher);
  
      // Display the list of registered teachers
      displayTeachers();
  
      // Clear the form
      this.reset();
      document.getElementById('teacherRegistrationMessage').textContent = `Thank you for registering, ${teacherName}!`;
  });
  
  // Function to display registered students
  function displayStudents() {
      const studentList = document.getElementById8('studentList');
      studentList.innerHTML = ''; // Clear previous entries
  
      students.forEach((student, index) => {
          const studentItem = document.createElement('div');
          studentItem.textContent = `${index + 1}. Name: ${student.name}, Email: ${student.email}, Phone: ${student.phone}, Course: ${student.course}`;
          studentList.appendChild(studentItem);
      });
  }
  
  // Function to display registered teachers
  function displayTeachers() {
      const teacherList = document.getElementById('teacherList');
      teacherList.innerHTML = ''; // Clear previous entries
  
      teachers.forEach((teacher, index) => {
          const teacherItem = document.createElement('div');
          teacherItem.textContent = `${index + 1}. Name: ${teacher.name}, Email: ${teacher.email}, Phone: ${teacher.phone}, Qualifications: ${teacher.qualifications}`;
          teacherList.appendChild(teacherItem);
      });
  }
  
  // Handle contact form submission
  document.getElementById('contactForm').addEventListener('submit', function(event) {
      event.preventDefault();
  
      const contactName = document.getElementById('contactName').value;
      const message = document.getElementById('contactMessage').value;
  
      // Display a thank you message
      document.getElementById('contactMessage').textContent = `Thank you, ${contactName}! Your message has been sent.`;
      this.reset();
  });
  
  // Payment methods information
  const paymentMethods = [
      "Bank Transfer",
      "Easypaisa",
      "JazzCash",
      "Credit/Debit Card",
  ];
  
  // Function to display payment methods
  function displayPaymentMethods() {
      const paymentList = document.getElementById('paymentMethods');
      paymentList.innerHTML = ''; // Clear previous entries
  
      paymentMethods.forEach(method => {
          const methodItem = document.createElement('li');
          methodItem.textContent = method;
          paymentList.appendChild(methodItem);
      });
  }
  
  // Initialize payment methods on page load
  window.onload = function() {
      displayPaymentMethods();
  };
  // Show student registration form
  document.getElementById('showStudentForm').addEventListener('click', function() {
      document.getElementById('registration').style.display = 'block';
      document.getElementById('teacherRegistration').style.display = 'none';
  });
  
  // Show teacher registration form
  document.getElementById('showTeacherForm').addEventListener('click', function() {
      document.getElementById('teacherRegistration').style.display = 'block';
      document.getElementById('registration').style.display = 'none';
  });
  
  // Handle student registration form submission
  document.getElementById('registrationForm').addEventListener('submit', function(event) {
      event.preventDefault();
  
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const course = document.getElementById('course').value;
  
      // Handle image upload (for demonstration, just log the file)
      const studentImage = document.getElementById('studentImage').files[0];
      console.log(studentImage ? studentImage.name : 'No image uploaded');
  
      const student = { name, email, phone, course };
      students.push(student);
      displayStudents();
      this.reset();
      document.getElementById('registrationMessage').textContent = `Thank you for registering, ${name}!`;
  });
  
  // Handle teacher registration form submission
  document.getElementById('teacherForm').addEventListener('submit', function(event) {
      event.preventDefault();
  
      const teacherName = document.getElementById('teacherName').value;
      const teacherEmail = document.getElementById('teacherEmail').value;
      const teacherPhone = document.getElementById('teacherPhone').value;
      const qualifications = document.getElementById('qualifications').value;
  
      // Handle image upload (for demonstration, just log the file)
      const teacherImage = document.getElementById('teacherImage').files[0];
      console.log(teacherImage ? teacherImage.name : 'No image uploaded');
  
      const teacher = { name: teacherName, email: teacherEmail, phone: teacherPhone, qualifications };
      teachers.push(teacher);
      displayTeachers();
      this.reset();
      document.getElementById('teacherRegistrationMessage').textContent = `Thank you for registering, ${teacherName}!`;
  });
  
  // Function to display registered students
  function displayStudents() {
      const studentList = document.getElementById('studentList');
      studentList.innerHTML = '';
      students.forEach((student, index) => {
          const studentItem = document.createElement('div');
          studentItem.textContent = `${index + 1}. Name: ${student.name}, Email: ${student.email}, Phone: ${student.phone}, Course: ${student.course}`;
          studentList.appendChild(studentItem);
      });
  }
  
  // Function to display registered teachers
  function displayTeachers() {
      const teacherList = document.getElementById('teacherList');
      teacherList.innerHTML = '';
      teachers.forEach((teacher, index) => {
          const teacherItem = document.createElement('div');
          teacherItem.textContent = `${index + 1}. Name: ${teacher.name}, Email: ${teacher.email}, Phone: ${teacher.phone}, Qualifications: ${teacher.qualifications}`;
          teacherList.appendChild(teacherItem);
      });
  }
  
  // Handle payment form submission
  document.getElementById('paymentForm').addEventListener('submit', function(event) {
      event.preventDefault();
  
      const paymentMethod = document.getElementById('paymentMethod').value;
      const amount = document.getElementById('amount').value;
      document.getElementById('paymentMessage').textContent = `Payment of PKR ${amount} via ${paymentMethod} has been processed successfully!`;
      this.reset();
  });
  
  // Handle contact form submission
  document.getElementById('contactForm').addEventListener('submit', function(event) {
      event.preventDefault();
  
      const contactName = document.getElementById('contactName').value;
      const message = document.getElementById('contactMessage').value;
      document.getElementById('contactMessage').textContent = `Thank you, ${contactName}! Your message has been sent.`;
      this.reset();
  });
  // Show student registration form
  document.getElementById('showStudentForm').addEventListener('click', function() {
      document.getElementById('registration').style.display = 'block';
      document.getElementById('teacherRegistration').style.display = 'none';
  });
  
  // Show teacher registration form
  document.getElementById('showTeacherForm').addEventListener('click', function() {
      document.getElementById('teacherRegistration').style.display = 'block';
      document.getElementById('registration').style.display = 'none';
  });
  
  // Handle student registration form submission
  document.getElementById('registrationForm').addEventListener('submit', function(event) {
      event.preventDefault();
  
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const course = document.getElementById('course').value;
  
      // Handle image upload (for demonstration, just log the file)
      const studentImage = document.getElementById('studentImage').files[0];
      console.log(studentImage ? studentImage.name : 'No image uploaded');
  
      const student = { name, email, phone, course };
      students.push(student);
      displayStudents();
      this.reset();
      document.getElementById('registrationMessage').textContent = `Thank you for registering, ${name}!`;
  });
  
  // Handle teacher registration form submission
  document.getElementById('teacherForm').addEventListener('submit', function(event) {
      event.preventDefault();
  
      const teacherName = document.getElementById('teacherName').value;
      const teacherEmail = document.getElementById('teacherEmail').value;
      const teacherPhone = document.getElementById('teacherPhone').value;
      const qualifications = document.getElementById('qualifications').value;
  
      // Handle image upload (for demonstration, just log the file)
      const teacherImage = document.getElementById('teacherImage').files[0];
      console.log(teacherImage ? teacherImage.name : 'No image uploaded');
  
      const teacher = { name: teacherName, email: teacherEmail, phone: teacherPhone, qualifications };
      teachers.push(teacher);
      displayTeachers();
      this.reset();
      document.getElementById('teacherRegistrationMessage').textContent = `Thank you for registering, ${teacherName}!`;
  });
  
  // Function to display registered students
  function displayStudents() {
      const studentList = document.getElementById('studentList');
      studentList.innerHTML = '';
      students.forEach((student, index) => {
          const studentItem = document.createElement('div');
          studentItem.textContent = `${index + 1}. Name: ${student.name}, Email: ${student.email}, Phone: ${student.phone}, Course: ${student.course}`;
          studentList.appendChild(studentItem);
      });
  }
  
  // Function to display registered teachers
  function displayTeachers() {
      const teacherList = document.getElementById('teacherList');
      teacherList.innerHTML = '';
      teachers.forEach((teacher, index) => {
          const teacherItem = document.createElement('div');
          teacherItem.textContent = `${index + 1}. Name: ${teacher.name}, Email: ${teacher.email}, Phone: ${teacher.phone}, Qualifications: ${teacher.qualifications}`;
          teacherList.appendChild(teacherItem);
      });
  }
  
  // Handle payment form submission
  document.getElementById('paymentForm').addEventListener('submit', function(event) {
      event.preventDefault();
  
      const paymentMethod = document.getElementById('paymentMethod').value;
      const amount = document.getElementById('amount').value;
      document.getElementById('paymentMessage').textContent = `Payment of PKR ${amount} via ${paymentMethod} has been processed successfully!`;
      this.reset();
  });
  
  // Handle contact form submission
  document.getElementById('contactForm').addEventListener('submit', function(event) {
      event.preventDefault();
  
      const contactName = document.getElementById('contactName').value;
      const message = document.getElementById('contactMessage').value;
      document.getElementById('contactMessage').textContent = `Thank you, ${contactName}! Your message has been sent.`;
      this.reset();
  });
  