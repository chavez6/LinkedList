class LinkedList{
    constructor(){
        this.head = null
        this.length = 0
    }

    insertAtHead(data){
        // created new node giving it data and value we want to store
        const newNode = new LinkedListNode(data, this.head)
        // the next value is our current start of our list 
        this.head = newNode
        this.length++
    }

    getByIndex(index){
        if (index < 0 || index >= this.length) return null

        let current = this.head
        for (let i = 0; i < index; i++){
            current = current.next
        }
        return current
    }

    print(){
        let output = ''
        let current = this.head
        while (current){
            output = `${output}${current.value} ->`
            current = current.next
        }
        console.log(`${output}null`)
    }
}

class LinkedListNode{
    constructor(value, next){
        this.value = value
        this.next = next
    }
}

LinkedList.fromValues = function(...values){
    const ll = new LinkedList()
    for (let i = values.length - 1; i >= 0; i--){
        ll.insertAtHead(values[i])
    }
    return ll
}

module.exports = LinkedList

