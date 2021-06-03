const LinkedList = require('./LinkedList')

describe('#insertAtHead', () => {
     test('adds element', () => {
        const ll = new LinkedList()
        ll.insertAtHead(10)
        const oldHead = ll.head
        ll.insertAtHead(20)

        expect(ll.head.value).toBe(20)
        expect(ll.head.next).toBe(oldHead)
        expect(ll.length).toBe(2)
    })
})

describe('#getByIndex', () => {
    describe('with index', () => {
        test('returns null', () => {
            const ll = LinkedList.fromValues(10, 20)

            expect(ll.getByIndex(-1)).toBeNull()
        })
    })

    describe('index greater than list length', () =>{
        test('returns null', () => {
            const ll = LinkedList.fromValues(10, 20)

            expect(ll.getByIndex(5)).toBeNull()
        })
    })

    describe('index 0', () => {
        test('returns head', () => {
            const ll = LinkedList.fromValues(10, 20, 30, 40)

            expect(ll.getByIndex(2).value).toBe(30)
        })
    })
})

describe('#insertAtInded', () => {
    describe('with index less than 0', () => {
        const ll = LinkedList.fromValues(10, 20)
        ll.insertAtIndex(5, 30)

        expect(ll.length).toBe(2)
    })

    describe('with index greater than list', () => {
        
    })

    describe('with index 0', () => {

    })
})