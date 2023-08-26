// ** 너비우선탐색(BFS: breadth first search)
// 탐색을 할 때 너비를 우선으로 하여 탐색을 수행하는 탐색 알고리즘
// 맹목적인 탐색을 하고자 할 때 사용할 수 있는 탐색 기법.
// 너비우선 탐색은 '최단 경로' 를 찾아준다는 점에서 최단 길이를 보장해야 할 떼 많이 사용.
// 준비물은 queue(큐).

// 처음에 시작노드를 큐에 삽입하면서 시작. 1 삽입
// 시작 노드를 방문했다고 '방문 처리' 를 해준다.

// bfs 시작:
// 1. 큐에서 하나의 노드를 꺼낸다.
// 2. 해당 노드에 연결된 노드 중 방문하지 않은 노드를 방문하고, 차례대로 큐에 삽입한다.
// 이 방법을 반복하면 1234567이 순서대로 나온다.
// 가까운 노드부터 탐색을 하게 되면 이렇게 나온다.

// 가장 먼 노드
// 문제 설명
// n개의 노드가 있는 그래프가 있습니다. 각 노드는 1부터 n까지 번호가 적혀있습니다. 1번 노드에서 가장 멀리 떨어진 노드의 갯수를 구하려고 합니다. 가장 멀리 떨어진 노드란 최단경로로 이동했을 때 간선의 개수가 가장 많은 노드들을 의미합니다.
// 노드의 개수 n, 간선에 대한 정보가 담긴 2차원 배열 vertex가 매개변수로 주어질 때, 1번 노드로부터 가장 멀리 떨어진 노드가 몇 개인지를 return 하도록 solution 함수를 작성해주세요.

// bfs 예제:
const graph = {
    A: ["B", "C"],
    B: ["A", "D"],
    C: ["A", "G", "H", "I"],
    D: ["B", "E", "F"],
    E: ["D"],
    F: ["D"],
    G: ["C"],
    H: ["C"],
    I: ["C", "J"],
    J: ["I"]
};

const BFS = (graph, startNode) => {
    const visited = []; // 탐색을 마친 노드들
    let needVisit = []; // 탐색해야 할 노드들

    needVisit.push(startNode); // 노드 탐색 시작

    while (needVisit.length !== 0) {
        const node = needVisit.shift() // queue 기 때문에 선입선출, pop 이 아닌 shift()를 사용한다.
        if (!visited.includes(node)) { // 해당 노드가 탐색된 적이 없다면,
            visited.push(node);
            needVisit = [...needVisit, ...graph[node]];
        }
    }
    return visited;
};

console.log(BFS(graph, "A"))

// ㅡㅡㅡㅡㅡㅡㅡ

// ** 깊이 우선 탐색(DFS: depth first search)
// 깊은 것을 우선적으로 하여 탐색하는 알고리즘.
// 너비 우선 탐색(bfs)에서는 큐(queue)가 사용되었다면, 깊이 우선 탐색(dfs)에서는 스택(stack)이 사용된다.
// but 스택을 사용하지 않아도 구현이 가능하다는 특징이 있다.
// 컴퓨터가 구조적으로 항상 스택의 원리를 사용하기 때문.

// dfs 시작:
// 1. 스택의 최상단 노드 확인.
// 2. 최상단 노드에게 방문하지 않은 인접 노드가 있으면 그 노드를 스택에 넣고 방문처리한다.
// 방문하지 않은 인접 노드가 없으면 스택에서 최상단 노드를 뺸다. -> 반복수행

// 스택을 직접 사용하지 않고, 재귀 함수를 이용해 간략하게 dfs함수를 구현할 수 있다.

// DFS 예제
const DFS = (graph, startNode) => {
    const visited = []; // 탐색을 마친 노드들
    let needVisit = []; // 탐색해야할 노드들

    needVisit.push(startNode); // 노드 탐색 시작

    while (needVisit.length !== 0) {
        const node = needVisit.shift();
        if (!visited.includes(node)) {
            visited.push(node);
            needVisit = [...graph[node], ...needVisit];
        }
    }
    return visited;
};

console.log(DFS(graph, "A"));

// 재귀함수를 사용한 예제
const DFS2 = (graph, node, visited) => {
    if (!visited.includes(node)) {
        visited.push(node);
        const neighbors = graph[node];
        for (const neighbor of neighbors) {
            DFS2(graph, neighbor, visited);
        }
    }
};

const startNode = "A";
const visitedNodes = [];
DFS2(graph, startNode, visitedNodes);
console.log(visitedNodes);



