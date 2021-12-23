const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const randomFromArray = (array) => {
  const index = getRandomInt(0, array.length - 1);
  return array[index];
};

const todoTemplates = [
  { base: 'Buy $THING', values: ['milk', 'bread', 'cheese', 'toys'] },
  { base: 'Clean $THING', values: ['house', 'yard', 'bedroom', 'car'] },
  { base: 'Read $THING', values: ['newspaper', 'book', 'email'] },
];

const generateTodoText = () => {
  const template = randomFromArray(todoTemplates);
  const value = randomFromArray(template.values);
  const text = template.base.replace('$THING', value);
  return text;
};

const hashCode = s => s.split('').reduce((a,b)=>{a=((a<<5)-a)+b.charCodeAt(0);return a&a},0) 

export const generateRandomTodos = (count) => Array(count)
  .fill(null)
  .map(() => {
    const text = generateTodoText();
    return {
      color: '',
      completed: false,
      text: text,
      id: hashCode(text),
    }
  });

export const generateTodo = (text) => ({
  color: '',
  completed: false,
  text: text,
  id: hashCode(text)
});
