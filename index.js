class Student {
    constructor (name, id, sex, age, religion, genotype, Grades)  {
        this.name = name;
        this.id = id;
        this.sex = sex;
        this.age = age
        this.religion = religion;
        this.genotype = genotype;
        class Grades {
            constructor (english, maths, interScience) {
                this.english = english
                this.maths = maths
                this.interScience = interScience
            } 

        };

       };
    }

    class student extends Student {
        
     
    //Calculating the average grade of a student.
    calculateAverageGrades(){
        if (this.grades.length === 0) {
            throw new Error("No grades added");
             0;
        } else {
            const total = this.grades.reduce((sum, grade) => sum + grade, 0);
            return total / this.grades.length;
        }
    }
    };
    working
    
const studentDetails = new student('Emeka Ike', 1, 'Male', 13, 'Muslim', 'AA', english 40);
console.log(studentDetails.grades);