// 힙은 이진트리 형태로 우선순위가 높은 요소가 먼저 나가기 위해 요소가 삽입, 삭제될 때 바로 정렬되는 특징이 있는 자료구조 개념. 우선순위 큐와 다르다. 우선순위 큐는 자료구조가 아닌 개념.

// 힙의 특징
// 1) 우선순위가 높은 요소가 먼저 나가는 특징
// 2) 루트가 가장 큰 값이 되는 최대 힙과 루트가 가장 작은 값이 되는 최소 힙이 있다.
// 아쉽게도 자바스크립트에서는 직접 구현해서 사용한다

// 힙 요소 추가 알고리즘
// - 요소가 추가될 때에는 트리가 가장 마지막에 정점에 위치
// - 추가 후 부모 정점보다 우선순위가 높다면 부모 정점과 순서를 바꾼다.
// - 이 과정을 반복하면 결국 가장 우선순위가 높은 정점이 루트가 된다.
// - 완전 이진 트리의 높이는 log N이기에 힙의 요소 추가 알고리즘은 O(log N)의 시간복잡도를 가진다.

// 힙 요소 제거 알고리즘
// - 요소 제거는 루트 정점만 가능하다
// - 루트 정점이 제거된 후 가장 마지막 정점이 루트에 위치
// - 루트 정점의 두 자식 정점 중 더 우선순위가 높은 정점과 비교
// - 두 자식 정점이 우선순위가 더 낮을 때까지 반복
// - 완전 이진트리의 높이는 log N이기에 힙의 요소 제거 알고리즘은 O(log N)의 시간복잡도를 가진다.
