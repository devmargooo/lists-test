import { List } from '../list/List';

type Value = {
  id: number;
  name: string;
};

const first = { id: 1, name: 'первый' };
const second = { id: 2, name: 'второй' };
const third = { id: 3, name: 'третий' };
const new_third = { id: 4, name: 'другой трейти' };

interface INode<T> {
  next: T;
  prev: T;
}
describe('List', () => {
  const list = new List<Value>();
  list.add({ id: 1, name: 'первый' });
  list.add({ id: 2, name: 'второй' });
  list.add({ id: 3, name: 'третий' });

  it('Правильно считает длину', () => {
    expect(list.length).toBe(3);
  });

  it('Верны указатели next', () => {
    expect((first as unknown as INode<Value>).next).toBe(second);
    expect((second as unknown as INode<Value>).next).toBe(third);
  });

  it('Верны указатели prev', () => {
    expect((second as unknown as INode<Value>).prev).toBe(first);
    expect((third as unknown as INode<Value>).next).toBe(second);
  });

  it('Верен указатель head', () => {
    expect(list.head).toBe(first);
  });

  it('Верен указатель tail', () => {
    expect(list.tail).toBe(third);
  });

  it('Находит элемент по индексу', () => {
    expect(list.find(0)).toBe(first);
    expect(list.find(1)).toBe(second);
    expect(list.find(2)).toBe(third);
  });

  it('Правильно вставляет элемент по индексу', () => {
    list.insert(2, new_third);
    expect(list.length).toBe(4);
    expect(list.find(0)).toBe(first);
    expect(list.find(1)).toBe(second);
    expect(list.find(2)).toBe(new_third);
    expect(list.find(3)).toBe(third);
  });

  it('Находит индекс элемента', () => {
    expect(list.findIndex(first)).toBe(0);
    expect(list.findIndex(second)).toBe(1);
    expect(list.findIndex(new_third)).toBe(2);
    expect(list.findIndex(third)).toBe(3);
  });

  it('Удаляет элемент по индексу', () => {
    list.remove(2);
    expect(list.length).toBe(3);
    expect(list.find(0)).toBe(first);
    expect(list.find(1)).toBe(second);
    expect(list.find(2)).toBe(third);
  });
});
