
## 연결 리스트(Linked List)
: 연결 리스트(Linked List)는 데이터 요소 또는 노드(Node)의 집합으로, 이러한 노드들이 연결되어 있는 자료구조.
각 노드는 데이터 요소와 다음 노드를 가리키는 참조(포인터)로 구성되며, 연결 리스트는 선형적인 데이터 구조로 각 노드가 이전 노드나 다음 노드와 연결되어 있습니다. 연결 리스트는 일반적으로 배열과 대조됩니다.

- 단일 연결 리스트(Singly Linked List):
각 노드는 데이터 요소와 다음 노드를 가리키는 포인터로 구성됩니다. 마지막 노드는 다음 노드를 가리키는 포인터가 없으며 NULL 또는 None으로 표시됩니다.

- 이중 연결 리스트(Doubly Linked List):
각 노드는 데이터 요소, 이전 노드를 가리키는 포인터, 다음 노드를 가리키는 포인터로 구성됩니다. 이중 연결 리스트는 양방향으로 탐색할 수 있는 장점이 있습니다.

- 원형 연결 리스트(Circular Linked List):
마지막 노드가 첫 번째 노드를 가리키는 형태의 연결 리스트로, 무한 루프 형태를 가집니다.

- 장점:
  - 데이터 요소의 삽입과 삭제가 배열보다 효율적입니다. 배열은 요소를 삽입 또는 삭제할 때 다른 요소들을 이동해야 할 수 있지만, 연결 리스트는 해당 노드의 참조만 업데이트하면 됩니다. 
  - 동적 크기 조절이 쉽습니다. 연결 리스트는 필요할 때 노드를 추가하거나 제거할 수 있으므로 크기가 동적으로 조절됩니다.
- 단점:
  - 임의의 요소에 접근하기가 느립니다. 배열은 인덱스를 통해 빠르게 접근할 수 있지만, 연결 리스트는 특정 요소에 접근하려면 처음부터 순차적으로 탐색해야 합니다. 
  - 추가적인 메모리 오버헤드가 있습니다. 각 노드는 데이터 요소와 참조를 가지고 있으므로 메모리 사용량이 더 크다는 단점이 있습니다.

### 연결리스트 예제
```javascript

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  // 노드 삭제 메서드
  delete(data) {
    if (!this.head) {
      return;
    }
    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }
    let current = this.head;
    while (current.next) {
      if (current.next.data === data) {
        current.next = current.next.next;
        return;
      }
      current = current.next;
    }
  }
}

const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);

// 2를 삭제
linkedList.delete(2);

```
