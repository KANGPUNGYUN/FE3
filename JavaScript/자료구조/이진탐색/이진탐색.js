// 선형탐색 : 순서대로 하나씩 찾는 탐색 알고리즘. O(n) 시간복잡도가 걸린다.

// 이진탐색 : 정렬 되어있는 요소들을 반씩 제외하며 찾는 알고리즘. O(log n)만큼 시간복잡도가 걸린다.

// 이진탐색 특징
// 1) 반드시 정렬이 되어있어야 사용할 수 있다.
// 2) 배열 혹은 이진트리를 이용하여 구현할 수 있다.
// 3) O(log n)시간복잡도인 만큼 상당히 빠르다.

// 이진탐색 트리의 문제점
// 1) 최악의 경우 한쪽으로 편향된 트리가 될 수 있다.
// 2) 그런 경우 순차 탐색과 동일한 시간복잡도를 가진다.
// 3) 이를 해결하기 위해 다음과 같은 자료구조를 이용할 수 있다.(AVL트리, 레드-블랙 트리)
