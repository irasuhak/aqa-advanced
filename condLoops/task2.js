// Завдання 2: Виконайте попереднє завдання але використовуючи конструкцію switch/case

const averageGrade = 73;
let successRate = '';

switch (true) {
	case averageGrade < 60:
		successRate = 'Незадовільно';
		break;
	case averageGrade >= 60 && averageGrade <= 70:
		successRate = 'Задовільно';
		break;
	case averageGrade >= 71 && averageGrade <= 80:
		successRate = 'Добре';
		break;
	case averageGrade >= 81 && averageGrade <= 90:
		successRate = 'Дуже добре';
		break;
	case averageGrade >= 91 && averageGrade <= 100:
		successRate = 'Відмінно';
		break;
	default:
		successRate = 'Ви впевнені, що ви наш студент?';
}

console.log(successRate);
