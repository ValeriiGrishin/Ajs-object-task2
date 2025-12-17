export default function extractSpecialAttacks(character) {
  // Проверка входных данных
  if (!character || typeof character !== 'object') {
    throw new Error('Аргумент должен быть объектом');
  }

  // Деструктуризация с значением по умолчанию для special
  const { special = [] } = character;

  if (!Array.isArray(special)) {
    throw new Error('Свойство special должно быть массивом');
  }

  // Используем деструктуризацию в map
  return special.map((attack) => {
    // Деструктурируем каждую атаку с default значением для description
    const {
      id,
      name,
      icon,
      description = 'Описание недоступно',
    } = attack;

    // Возвращаем новый объект с обязательными полями
    return {
      id,
      name,
      icon,
      description,
    };
  });
}