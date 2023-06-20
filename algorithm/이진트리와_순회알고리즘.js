
// 이진 트리 노드를 나타내는 클래스
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// 전위 순회 (Preorder Traversal)
function preorderTraversal(node) {
  if (node) {
    console.log(node.value);  // 현재 노드의 값을 출력
    preorderTraversal(node.left);  // 왼쪽 서브트리를 전위 순회
    preorderTraversal(node.right);  // 오른쪽 서브트리를 전위 순회
  }
}

// 중위 순회 (Inorder Traversal)
function inorderTraversal(node) {
  if (node) {
    inorderTraversal(node.left);  // 왼쪽 서브트리를 중위 순회
    console.log(node.value);  // 현재 노드의 값을 출력
    inorderTraversal(node.right);  // 오른쪽 서브트리를 중위 순회
  }
}

// 후위 순회 (Postorder Traversal)
function postorderTraversal(node) {
  if (node) {
    postorderTraversal(node.left);  // 왼쪽 서브트리를 후위 순회
    postorderTraversal(node.right);  // 오른쪽 서브트리를 후위 순회
    console.log(node.value);  // 현재 노드의 값을 출력
  }
}

// 이진 트리 생성
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);
root.left.left.left = new Node(8);
root.left.left.right = new Node(9);
root.left.right.left = new Node(10);
root.left.right.right = new Node(11);
root.right.left.left = new Node(12);
root.right.left.right = new Node(13);
root.right.right.left = new Node(14);
root.right.right.right = new Node(15);

console.log('전위 순회:');
preorderTraversal(root);

console.log('중위 순회:');
inorderTraversal(root);

console.log('후위 순회:');
postorderTraversal(root);

//전위 순회 결과값:
// 1 2 4 8 9 5 10 11 3 6 12 13 7 14 15

//중위 순회 결과값:
// 8 4 9 2 10 5 11 1 12 6 13 3 14 7 15

//후위 순회 결과값:
// 8 9 4 10 11 5 2 12 13 6 14 15 7 3 1
