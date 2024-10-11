class Node {
  constructor(questionString, no = null, yes = null) {
    this.questionString = questionString;
    this.no = no;
    this.yes = yes;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  createRoot(question) {
    const currRoot = new Node(question);
    this.root = currRoot;
    return this.root;
  }

  getRoot() {
    return this.root;
  }

  addNode(parentQuestion, currentQuestion, isYesBranch) {
    const parentNode = this.getNode(this.root, parentQuestion);
    const currentNode = new Node(currentQuestion);

    if (isYesBranch) {
      parentNode.yes = currentNode;
    } else {
      parentNode.no = currentNode;
    }
  }

  getNode(node, questionText) {
    if (node == null) return null;

    if (node.questionString === questionText) {
      return node;
    }

    let obtainedNode = this.getNode(node.no, questionText);

    if (obtainedNode == null) {
      obtainedNode = this.getNode(node.yes, questionText);
    }

    return obtainedNode;
  }

  printTree(currNode) {
    if (currNode == null) return;

    console.log(currNode.questionString);

    if (currNode.yes != null) {
      console.log("--->");
      this.printTree(currNode.yes);
    }

    if (currNode.no != null) {
      console.log("<---");
      this.printTree(currNode.no);
    }
  }
}

const algorithmFinder = new BinaryTree();
const algorithmFinderRoot = algorithmFinder.createRoot("Is it a Graph?");

algorithmFinder.addNode("Is it a Graph?", "Is it a Tree?", true);
algorithmFinder.addNode(
  "Is it a Graph?",
  "Do you need to solve for kth smallest / largest element?",
  false
);

//NOTE: If answer ->  yes and no pointers will be null
algorithmFinder.addNode("Is it a Tree?", "DFS", true);
algorithmFinder.addNode(
  "Is it a Tree?",
  "Is the problem related to directed acyclic graphs?",
  false
);

algorithmFinder.addNode(
  "Is the problem related to directed acyclic graphs?",
  "Topological Sort",
  true
);
algorithmFinder.addNode(
  "Is the problem related to directed acyclic graphs?",
  "Is the problem related to shortest paths?",
  false
);

algorithmFinder.addNode(
  "Is the problem related to shortest paths?",
  "Is the graph weighted?",
  true
);
algorithmFinder.addNode(
  "Is the problem related to shortest paths?",
  "Does the problem involve connectivity?",
  false
);

algorithmFinder.addNode("Is the graph weighted?", "Djikstra's Algorithm", true);
algorithmFinder.addNode("Is the graph weighted?", "BFS", false);

algorithmFinder.addNode(
  "Does the problem involve connectivity?",
  "Disjoint Set Union",
  true
);
algorithmFinder.addNode(
  "Does the problem involve connectivity?",
  "Does the problem have small constraints?",
  false
);

algorithmFinder.addNode(
  "Does the problem have small constraints?",
  "DFS / Backtracking",
  true
);
algorithmFinder.addNode(
  "Does the problem have small constraints?",
  "BFS",
  false
);

algorithmFinder.addNode(
  "Do you need to solve for kth smallest / largest element?",
  "Heaps / Sorting",
  true
);
algorithmFinder.addNode(
  "Do you need to solve for kth smallest / largest element?",
  "Does it involve Linked Lists?",
  false
);

algorithmFinder.addNode("Does it involve Linked Lists?", "Two Pointers", true);
algorithmFinder.addNode(
  "Does it involve Linked Lists?",
  "Does it have small constraint bounds?",
  false
);

algorithmFinder.addNode(
  "Does it have small constraint bounds?",
  "Is brute force fast enough 2?",
  true
);
algorithmFinder.addNode(
  "Does it have small constraint bounds?",
  "Is it about subarrays or substrings?",
  false
);

algorithmFinder.addNode(
  "Is brute force fast enough 2?",
  "Brute Force / Backtracking",
  true
);
algorithmFinder.addNode(
  "Is brute force fast enough 2?",
  "Dynamic Programming",
  false
);

algorithmFinder.addNode(
  "Is it about subarrays or substrings?",
  "Does it deal with sums or additive operations?",
  true
);
algorithmFinder.addNode(
  "Is it about subarrays or substrings?",
  "Are you calculating max / min of something?",
  false
);

algorithmFinder.addNode(
  "Does it deal with sums or additive operations?",
  "Prefix Sums",
  true
);
algorithmFinder.addNode(
  "Does it deal with sums or additive operations?",
  "Sliding Window",
  false
);

algorithmFinder.addNode(
  "Are you calculating max / min of something?",
  "Does it have a monotonic condition?",
  true
);
algorithmFinder.addNode(
  "Are you calculating max / min of something?",
  "Is the problem asking for number of ways?",
  false
);

algorithmFinder.addNode(
  "Does it have a monotonic condition?",
  "Binary Search",
  true
);
algorithmFinder.addNode(
  "Does it have a monotonic condition?",
  "Can it be split into sub-problems?",
  false
);

algorithmFinder.addNode(
  "Can it be split into sub-problems?",
  "Dynamic Programming",
  true
);
algorithmFinder.addNode(
  "Can it be split into sub-problems?",
  "Can you calculate an answer greedily?",
  false
);

algorithmFinder.addNode(
  "Can you calculate an answer greedily?",
  "Greedy Algorithm",
  false
);

algorithmFinder.addNode(
  "Is the problem asking for number of ways?",
  "Is brute force fast enough?",
  true
);
algorithmFinder.addNode(
  "Is the problem asking for number of ways?",
  "Does it have multiple sequences?",
  false
);

algorithmFinder.addNode(
  "Is brute force fast enough?",
  "Brute Force / Backtracking",
  true
);
algorithmFinder.addNode(
  "Is brute force fast enough?",
  "Dynamic Programming",
  false
);

algorithmFinder.addNode(
  "Does it have multiple sequences?",
  "Does it have monotonic conditions?",
  true
);
algorithmFinder.addNode(
  "Does it have multiple sequences?",
  "Is it asking to find or enumerate indices?",
  false
);

algorithmFinder.addNode(
  "Does it have monotonic conditions?",
  "Two pointers",
  true
);
algorithmFinder.addNode(
  "Does it have monotonic conditions?",
  "Can it be split into sub problems?",
  false
);

algorithmFinder.addNode(
  "Can it be split into sub problems?",
  "Dynamic Programming",
  true
);

algorithmFinder.addNode(
  "Is it asking to find or enumerate indices?",
  "Is there a monotonic condition?",
  true
);
algorithmFinder.addNode(
  "Is it asking to find or enumerate indices?",
  "Is O(1) memory required?",
  false
);

algorithmFinder.addNode(
  "Is there a monotonic condition?",
  "Two Pointers",
  true
);

algorithmFinder.addNode(
  "Is O(1) memory required?",
  "Does it involve monotonic condition?",
  true
);

algorithmFinder.addNode(
  "Does it involve monotonic condition?",
  "Two Pointers",
  true
);

// algorithmFinder.printTree(algorithmFinderRoot);

export default algorithmFinder;
