import {addTodo} from './todoHelpers'

test('add todo should add the pa', () => {
    const startTodos = [
        {id: 1, name: 'one', isComplete: false},
        {id: 2, name: 'two', isComplete: false},

    ]
    const newTodo = {id: 3, name: 'three', isComplete: false}
    const expected = [
        {id: 1, name: 'one', isComplete: false},
        {id: 2, name: 'two', isComplete: false},
        {id: 3, name: 'three', isComplete: false}
    ]
    const result = addTodo(startTodos, newTodo)
    expect(result).toEqual(expected)
})