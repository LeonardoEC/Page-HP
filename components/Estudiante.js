class Student {

    static studentsData = {};

    static searchQuery = '';
    static selectedGender = '';

    static initialize(houseData) {
        Student.studentsData = houseData.students;
        Student.filterStudents();
    }

    static setupSearchListener() {
        document.getElementById('searchBarStudent').addEventListener('keyup', (e) => {
            Student.searchQuery = e.target.value.toLowerCase();
            Student.filterStudents();
        });
    }

    static setupGenderListener() {
        const maleCheckbox = document.getElementById('male');
        const femaleCheckbox = document.getElementById('female');

        maleCheckbox.addEventListener('change', (e) => {
            if (e.target.checked) {
                Student.selectedGender = 'male';
                femaleCheckbox.checked = false;
            } else {
                Student.selectedGender = '';
            }
            Student.filterStudents();
        });

        femaleCheckbox.addEventListener('change', (e) => {
            if (e.target.checked) {
                Student.selectedGender = 'female';
                maleCheckbox.checked = false;
            } else {
                Student.selectedGender = '';
            }
            Student.filterStudents();
        });
    }

    static filterStudents() {
        const { allStudents, maleStudents, femaleStudents } = Student.studentsData;
        let filteredStudents = allStudents;

        if (Student.selectedGender === 'male') {
            filteredStudents = maleStudents;
        } else if (Student.selectedGender === 'female') {
            filteredStudents = femaleStudents;
        }

        if (Student.searchQuery) {
            filteredStudents = filteredStudents.filter(student =>
                student.name.toLowerCase().includes(Student.searchQuery)
            );
        }

        Student.displayStudents(filteredStudents);
    }

    static displayStudents(students) {
        const cardContainer = document.getElementById('card-container');
        cardContainer.innerHTML = '';

        students.forEach(student => {
            const studentCard = document.createElement('div');
            studentCard.innerHTML = `
            <div class="card" ${student.id}>
                <img class="card-img" src="${student.image || 'https://via.placeholder.com/150'}" alt="student">
                <h3>${student.name}</h3>
                <p>Actor: ${student.actor || 'Unknown'}</p>
                <p>Gender: ${student.gender}</p>
                <p>Born: ${student.dateOfBirth || 'Unknown'}</p>
                <p>Patronus: ${student.patronus || 'Unknown'}</p>
            </div>
            `;
            cardContainer.appendChild(studentCard);
        });
    }

    static renderPage() {
        const studentsDiv = document.getElementById('students');
        studentsDiv.innerHTML = `
            <div class="student">
                <section class="cont-Title">
                    <h2>Estudiante</h2>
                </section>
                <div class="cont-searchBar">
                    <input id="searchBarStudent" type="search" placeholder="Buscar estudiante">
                </div>
                <div class="cont-checkBox">
                    <input type="checkbox" name="male" id="male" value="male">male
                    <input type="checkbox" name="female" id="female" value="female">female
                </div>
                <div id="card-container">
                    <!-- Los estudiantes filtrados se mostrarán aquí -->
                </div>
            </div>
        `;
    }
}

export default Student;