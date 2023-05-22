// Шаг 1: Получаем все элементы <p> на странице
const paragraphs = document.getElementsByTagName("span");

// Шаг 2: Создаем объект для хранения текстовых фрагментов
const textFragments = {};

// Шаг 3: Проходимся по каждому элементу <p>
for (const paragraph of paragraphs) {
  const text = paragraph.textContent;

  // Шаг 4: Разделяем текст на отдельные слова
  const words = text.trim().split(/\s+/);

  // Шаг 5: Выделяем три слова
  const selectedWords = words.slice(0, 5).join(" ");

  // Шаг 6: Проверяем, есть ли такие же три слова в других элементах <p>
  if (textFragments[selectedWords]) {
    // Шаг 7: Изменяем задний фон на зеленый цвет
    paragraph.style.backgroundColor = "green";
    textFragments[selectedWords].style.backgroundColor = "green";
  } else {
    textFragments[selectedWords] = paragraph;
  }
}
