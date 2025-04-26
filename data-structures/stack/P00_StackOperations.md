## Design Stack

```java
class MyStack<T> {

    T[] stack;
    int top; // points to the peek element
    int capacity;

    @SuppressWarnings("unchecked") // just to suppress the warning
    public MyStack(int capacity) {
        this.capacity = capacity;
        this.stack = (T[]) new Object[capacity];
        this.top = -1;
    }

    public void push(T value) {
        if (top == capacity - 1) {
            System.out.println("Stack is full");
            return;
        }
        top += 1;
        stack[top] = value;
    }

    public T pop() {
        if (top == -1) {
            System.out.println("Stack is empty");
            return null;
        }
        T value = stack[top];
        top -= 1;
        return value;
    }

    public T peek() {
        if (top == -1) {
            System.out.println("Stack is empty");
            return null;
        }
        return stack[top];
    }
}

class StackOperations {
    public static void main(String[] args) {
        MyStack<Integer> stack = new MyStack<>(5);
        stack.push(1);
        stack.push(2);
        stack.push(3);
        System.out.println("Top element is: " + stack.peek());
        System.out.println("Popped element is: " + stack.pop());
        System.out.println("Top element after pop is: " + stack.peek());
        stack.pop();
        stack.pop();
        stack.pop();
    }
}
```

### Output

```
Top element is: 3
Popped element is: 3
Top element after pop is: 2
Stack is empty
```
