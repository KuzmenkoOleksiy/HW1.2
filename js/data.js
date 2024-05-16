const user = {
  name: "Олексійович",
  surname: "Кузьменич",
  userPhoto: "2 — копия.png",
  qrQode: "qr-code.svg",
  dreams: [
    { src: "obkladynka_63e84.jpg", alt: "Авто моєї мрії" },
    { src: "images.jpg", alt: "Мій настрій" },
    { src: "2021_08_09_e79f4440a11e6ce1.jpg", alt: "Подорож по Марсу" },
  ],
};

// arr це середня місячна платня по рокам
const arr = [
  500,
  700,
  800,
  1000,
  1200,
  1500,
  1800,
  2100,
  2400,
  2700,
  3000,
  3300,
];

const necessaryExpenses = 800;

const todo = [
  { month: "Червень", skill: "JavaScript" },
  { month: "Липень", skill: "Java" },
  { month: "Серпень", skill: "Python" },
  { month: "Вересень", skill: "Самостійність" },
  { month: "Жовтень", skill: "Гнучкість" },
  { month: "Листопад", skill: "Емоційний інтелект" },
  { month: "Грудень", skill: "Креативність" },
  { month: "Січень", skill: "Лідерство" },
  { month: "Лютий", skill: "Нетворкінг" },
  { month: "Березень", skill: "Особистий бренд" },
  { month: "Квітень", skill: "Управління фінансами" },
  { month: "Травень", skill: "Публічні виступи" },
];

export { user, arr, necessaryExpenses, todo };
