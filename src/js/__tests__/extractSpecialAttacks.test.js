import extractSpecialAttacks from '../extractSpecialAttacks';

describe('extractSpecialAttacks function', () => {
  describe('Основная функциональность', () => {
    test('извлекает атаки с описанием и без', () => {
      const character = {
        name: 'Лучник',
        special: [
          {
            id: 8,
            name: 'Двойной выстрел',
            icon: 'http://...',
            description: 'Двойной выстрел наносит двойной урон',
          },
          {
            id: 9,
            name: 'Нокаутирующий удар',
            icon: 'http://...',
          },
        ],
      };

      const expected = [
        {
          id: 8,
          name: 'Двойной выстрел',
          icon: 'http://...',
          description: 'Двойной выстрел наносит двойной урон',
        },
        {
          id: 9,
          name: 'Нокаутирующий удар',
          icon: 'http://...',
          description: 'Описание недоступно',
        },
      ];

      expect(extractSpecialAttacks(character)).toEqual(expected);
    });

    test('обрабатывает все атаки без описания', () => {
      const character = {
        special: [
          { id: 1, name: 'Удар', icon: 'icon1' },
          { id: 2, name: 'Блок', icon: 'icon2' },
        ],
      };

      const expected = [
        { id: 1, name: 'Удар', icon: 'icon1', description: 'Описание недоступно' },
        { id: 2, name: 'Блок', icon: 'icon2', description: 'Описание недоступно' },
      ];

      expect(extractSpecialAttacks(character)).toEqual(expected);
    });
  });

  describe('Edge cases (граничные случаи)', () => {
    test('работает с пустым массивом special', () => {
      const character = { special: [] };
      expect(extractSpecialAttacks(character)).toEqual([]);
    });

    test('использует default значение при отсутствии special', () => {
      const character = { name: 'Воин' };
      expect(extractSpecialAttacks(character)).toEqual([]);
    });

    test('обрабатывает undefined special', () => {
      const character = { name: 'Маг', special: undefined };
      expect(extractSpecialAttacks(character)).toEqual([]);
    });
  });

  describe('Валидация аргументов', () => {
    test.each([
      { input: null, error: 'Аргумент должен быть объектом' },
      { input: 123, error: 'Аргумент должен быть объектом' },
      { input: 'текст', error: 'Аргумент должен быть объектом' },
    ])('выбрасывает ошибку для некорректного аргумента $input', ({ input, error }) => {
      expect(() => extractSpecialAttacks(input)).toThrow(error);
    });

    test.each([
      { input: { special: 'не массив' }, error: 'Свойство special должно быть массивом' },
      { input: { special: 123 }, error: 'Свойство special должно быть массивом' },
      { input: { special: {} }, error: 'Свойство special должно быть массивом' },
      { input: { special: null }, error: 'Свойство special должно быть массивом' },
    ])('выбрасывает ошибку для не-массива special $input', ({ input, error }) => {
      expect(() => extractSpecialAttacks(input)).toThrow(error);
    });
  });
});