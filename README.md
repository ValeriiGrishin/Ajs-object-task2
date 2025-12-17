# Домашнее задание к лекции «Object, Reflection и Proxy»

## Задача: Destructuring - извлечение специальных атак

[![Tests](https://github.com/ValeriiGrishin/Ajs-object-task1/actions/workflows/ci.yml/badge.svg)](https://github.com/ValeriiGrishin/Ajs-object-task2/actions)
[![Coverage Status](https://valeriigrishin.github.io/Ajs-object-task1/badges/coverage.svg)](https://github.com/ValeriiGrishin/Ajs-object-task2/actions)

## Описание задания:

Реализация функции extractSpecialAttacks для извлечения массива специальных атак из объекта персонажа с использованием деструктуризации.

## Требования:

- Использование деструктуризации с default значениями

- Обработка отсутствующих полей description

- 100% покрытие unit-тестами (Jest)

- Прохождение ESLint без ошибок

- Сборка на базе Webpack

##  Результат:

- Функция extractSpecialAttacks с полной валидацией аргументов

- 12 unit-тестов с полным покрытием (100% Statements, Branch, Functions, Lines)

- Настроен CI/CD с автоматической генерацией бейджей покрытия

- Защита от некорректных входных данных (null, undefined, неверные типы)
