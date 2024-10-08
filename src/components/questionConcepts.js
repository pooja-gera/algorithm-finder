// This object stores detailed summaries associated with each question string.
// It provides explanations about different data structures and algorithms based on the questions in the decision tree.
const questionSummaries = {
    // Root Question
    "Is it a Graph?": "A graph is a non-linear data structure that consists of nodes (also called vertices) connected by edges. Graphs are used to model relationships between objects. They can be directed (where edges have direction) or undirected (where edges don't have direction). Applications of graphs include social networks, web page ranking, and network routing problems.",
  
    // Questions related to Graphs
    "Is it a Tree?": "A tree is a special case of a graph that has no cycles, and there is exactly one path between any two nodes. It has a hierarchical structure with a root node and child nodes. Trees are used to represent hierarchical data such as file systems, organizational structures, and in various algorithms like search and sort techniques (e.g., binary search trees).",
    
    "Do you need to solve for kth smallest / largest element?": "Finding the k-th smallest or largest element in a dataset is a common problem in many algorithms. It involves identifying the k-th element in a sorted sequence without necessarily fully sorting the data. Heaps, quickselect, and binary search trees are common methods used to solve such problems efficiently.",
    
    // Questions related to Trees
    "DFS": "Depth-First Search (DFS) is an algorithm for traversing or searching tree and graph data structures. It starts at a root node and explores as far along a branch as possible before backtracking. DFS is often used in solving problems related to connectivity, cycle detection, and pathfinding. It can be implemented using recursion or an explicit stack.",
    
    "Is the problem related to directed acyclic graphs?": "A Directed Acyclic Graph (DAG) is a directed graph with no cycles, meaning it is impossible to start at one node and return to it by following the edges. DAGs are used in modeling processes where some tasks must precede others, such as course prerequisites, task scheduling, and version control in software development. Algorithms like topological sort work well on DAGs.",
  
    // Questions related to Directed Acyclic Graphs
    "Topological Sort": "Topological sorting is a linear ordering of the vertices in a Directed Acyclic Graph (DAG) such that for every directed edge from vertex A to vertex B, vertex A appears before vertex B in the ordering. This sorting is crucial in scenarios like scheduling tasks, determining the order of compilation in build systems, or identifying dependency hierarchies.",
  
    "Is the problem related to shortest paths?": "Shortest path algorithms aim to find the minimum distance or cost to travel from a starting node to a destination node in a graph. Applications of these algorithms include GPS navigation systems, network routing, and optimizing transportation routes. Depending on the type of graph (weighted or unweighted), different algorithms are applied.",
  
    // Questions related to Shortest Paths
    "Is the graph weighted?": "A weighted graph is one where each edge between nodes has a numerical value, called weight or cost, associated with it. This weight often represents distances, costs, or capacities. Algorithms like Dijkstra's or Bellman-Ford are used to solve shortest path problems in weighted graphs. Weighted graphs are useful in real-world scenarios like transportation networks, where distances or costs matter.",
  
    "Does the problem involve connectivity?": "Graph connectivity refers to the existence of a path between two vertices. If a graph is connected, it means there is a path between every pair of vertices. Connectivity checks are important in network reliability, determining isolated components, or solving problems like determining the reachability of nodes in large datasets.",
  
    // Questions related to Connectivity
    "Disjoint Set Union": "The Disjoint Set Union (DSU), also known as Union-Find, is a data structure that keeps track of a set of elements partitioned into disjoint (non-overlapping) subsets. It's commonly used to detect cycles in graphs and solve connectivity problems. DSU supports two operations efficiently: finding the root of a set and merging two sets. Applications include network connectivity and Kruskal's algorithm for minimum spanning trees.",
  
    "Does the problem have small constraints?": "In computational problems, small constraints refer to cases where the input size is small enough that even inefficient algorithms like brute force may be feasible within a reasonable time frame. In such cases, trying all possibilities or running recursive approaches with backtracking is often a viable solution.",
  
    // Questions related to Constraints
    "DFS / Backtracking": "Depth-First Search (DFS) combined with backtracking is a technique to explore all possible solutions by exploring one path and backtracking if a solution isn't found. This approach is common in solving constraint satisfaction problems like Sudoku, N-Queens, and pathfinding where the optimal solution is found by testing all possibilities.",
  
    "BFS": "Breadth-First Search (BFS) is an algorithm for traversing or searching graph structures level by level. Starting from the root node, it visits all the neighboring nodes before moving to the next level of nodes. BFS is useful for finding the shortest path in unweighted graphs, solving puzzles like mazes, or spreading outwards in social networks.",
  
    // Questions related to Heaps / Sorting
    "Heaps / Sorting": "Heaps are specialized tree-based data structures that satisfy the heap property, making them useful for efficiently finding the minimum or maximum element. A heap is often used to implement priority queues. Sorting algorithms like merge sort, quicksort, and heapsort are employed when the entire data set needs to be ordered, but heaps can help maintain partial order for efficient element access.",
  
    "Does it involve Linked Lists?": "Linked Lists are linear data structures where elements are linked using pointers. They allow for efficient insertion and deletion of elements, particularly in scenarios where the size of the list can change dynamically. Problems involving linked lists often include reversing the list, detecting cycles, merging, or using two pointers for specific tasks like finding the middle of the list.",
  
    // Questions related to Linked Lists
    "Two Pointers": "The two-pointer technique involves using two pointers to iterate through a data structure, often to find a condition or result that depends on the relative positioning of elements. This approach is used for problems involving pairs, like finding two numbers that sum up to a target, or processing strings and arrays efficiently.",
  
    "Does it have small constraint bounds?": "Small constraint bounds indicate that the input size is limited, allowing for the use of algorithms with higher time complexities without significant performance issues. In such scenarios, methods like brute force, simple recursion, or exhaustive search become practical and can be implemented without worrying about scalability.",
  
    // Questions related to Small Constraint Bounds
    "Is brute force fast enough 2?": "Brute force algorithms attempt to solve problems by trying all possible solutions. This approach is usually the last resort when more efficient algorithms don't work or when the input size is small enough that testing every possibility is computationally feasible.",
  
    "Is it about subarrays or substrings?": "This refers to problems that involve contiguous segments of an array or string. Such problems often require efficient techniques to process or analyze these segments, like finding the longest subarray with certain properties, counting distinct substrings, or optimizing operations on these contiguous parts.",
  
    // Questions related to Subarrays or Substrings
    "Does it deal with sums or additive operations?": "This refers to problems that involve calculating the sum of a subset of elements, often involving arrays or sequences. Techniques like prefix sums, sliding windows, or segment trees are often applied to efficiently solve problems involving sums or additive operations across multiple ranges.",
  
    "Are you calculating max / min of something?": "Many problems involve finding the maximum or minimum value in a range or sequence of elements. Techniques like divide-and-conquer, heaps, or segment trees are used to efficiently calculate these values, especially in cases where the dataset is dynamic or large.",
  
    // Further Questions
    "Prefix Sums": "Prefix Sums is a technique where you precompute cumulative sums of a sequence, so that any subarray sum can be calculated in constant time by subtracting the appropriate prefix values. This approach is highly useful in problems involving range queries, cumulative sums, or dynamic sum calculations.",
  
    "Sliding Window": "The sliding window technique is used to solve problems involving a contiguous subset of elements in an array or list. It involves maintaining a window that slides across the data structure, adjusting its boundaries to meet a specific condition, and is used in problems involving subarrays, substrings, or finding maximum or minimum values within a range.",
  
    "Binary Search": "Binary Search is a divide-and-conquer algorithm used to efficiently find an element in a sorted array. It works by repeatedly dividing the search space in half, discarding the half that doesn't contain the target element. It is widely used in optimization problems and for searching in sorted datasets.",
  
    "Dynamic Programming": "Dynamic Programming (DP) is a method of solving complex problems by breaking them down into simpler subproblems and storing the results of subproblems to avoid redundant computations. DP is particularly useful for optimization problems like the knapsack problem, shortest paths, and sequence alignment in bioinformatics.",
  
    "Greedy Algorithm": "Greedy algorithms make a series of choices, each of which looks best at the moment, with the hope of finding the overall optimal solution. These algorithms are simple to implement and often work for optimization problems like interval scheduling, coin change, and Huffman coding, but they don’t always guarantee the optimal solution.",
  
    "Is the problem asking for number of ways?": "Many combinatorial problems involve counting the number of ways to arrange, choose, or partition elements under certain constraints. Techniques like dynamic programming, recursive counting, and inclusion-exclusion principles are often applied to solve these problems efficiently.",
  
    "Does it have multiple sequences?": "When a problem involves multiple sequences, it typically requires handling or comparing several sequences simultaneously. This could involve merging sequences, finding common subsequences, or managing multiple pointers across different sequences. Efficient algorithms are needed to handle the complexity that arises from multiple interacting sequences.",
  
    "Is brute force fast enough?": "Brute force algorithms attempt to solve problems by trying all possible solutions. This approach is usually the last resort when more efficient algorithms don't work or when the input size is small enough that testing every possibility is computationally feasible.",
  
    "Is it asking to find or enumerate indices?": "Problems that require finding or enumerating indices involve identifying the positions of elements that meet certain criteria within a data structure. This could include tasks like finding the start and end indices of a subarray that satisfies a condition, enumerating all possible index pairs that sum to a target, or locating specific patterns within strings.",
  
    "Is there a monotonic condition?": "A monotonic condition refers to a property where the elements either consistently increase or decrease. Problems with monotonic conditions often allow for optimization techniques like binary search or two-pointers, as the ordered nature of the data can be exploited to reduce computational complexity.",
  
    "Is O(1) memory required?": "Indicates whether the problem must be solved using constant memory, irrespective of input size. Constraints requiring O(1) memory often necessitate in-place algorithms or iterative approaches without additional data structures, making the solution more space-efficient but sometimes more complex to implement.",
  
    "Does it involve monotonic condition?": "Monotonic conditions involve maintaining a consistent order (either non-increasing or non-decreasing) among elements. Algorithms that leverage monotonic conditions can often achieve better performance by avoiding unnecessary computations, utilizing data structures like stacks or queues to maintain the required order efficiently.",
  
    "Can it be split into sub problems?": "Many complex problems can be broken down into smaller sub-problems that are easier to solve individually. This principle is the foundation of dynamic programming and divide-and-conquer algorithms. Problems like matrix chain multiplication, longest common subsequence, and Fibonacci numbers benefit from this approach.",
  
    "Can you calculate an answer greedily?": "Determining whether a problem can be solved greedily involves assessing if making the locally optimal choice at each step leads to a globally optimal solution. Greedy algorithms are efficient and simple but may not always yield the best solution for all problems. They work well for problems like interval scheduling, Huffman coding, and certain optimization tasks where the greedy choice property holds.",
  
    // Leaf Nodes (Algorithms and Data Structures)
    "Brute Force / Backtracking": "An exhaustive search technique that explores all possible configurations until a solution is found. Brute force is straightforward but can be inefficient for large datasets, while backtracking adds a way to eliminate unnecessary paths early, making the search process more efficient in many cases.",
    
    "Dynamic Programming": "A technique for solving problems by breaking them into simpler subproblems and storing the results to avoid redundant work. It is particularly effective for optimization problems and those with overlapping subproblems and optimal substructure properties, such as the knapsack problem, Fibonacci sequence, and shortest path algorithms.",
    
    "Greedy Algorithm": "An algorithmic paradigm that builds up a solution piece by piece, always choosing the next piece that offers the most immediate benefit. Greedy algorithms are used in optimization problems like interval scheduling, Huffman coding, and minimum spanning trees, where making the local optimal choice leads to a globally optimal solution.",
    
    "Two Pointers": "An algorithmic technique that uses two pointers to iterate through a data structure, often to find pairs or specific conditions within the data. This method is effective for problems involving sorted arrays, linked lists, or strings, such as finding two numbers that add up to a target, reversing a string, or detecting palindromes.",
    
    "Prefix Sums": "A technique that involves computing cumulative sums of a sequence to quickly calculate the sum of any subarray. By storing these prefix sums, one can obtain the sum of elements between any two indices in constant time, which is particularly useful in range query problems and scenarios requiring dynamic sum calculations.",
    
    "Sliding Window": "A technique used to maintain a subset of elements in a data structure, typically an array or string, to solve problems involving contiguous sequences. The window 'slides' over the data, adjusting its size or position based on specific conditions, making it efficient for tasks like finding the longest substring without repeating characters or the maximum sum subarray.",
    
    "Binary Search": "An efficient algorithm for finding an item from a sorted list of items. It works by repeatedly dividing the search interval in half and comparing the target value to the middle element. Binary search is widely used in searching and optimization problems where the data is sorted, offering a time complexity of O(log n).",
    
    "BFS": "Breadth-First Search is an algorithm for traversing or searching tree or graph data structures. It starts at the root node and explores all neighbor nodes at the present depth before moving on to nodes at the next depth level. BFS is useful for finding the shortest path in unweighted graphs, level order traversal in trees, and in scenarios where the solution is expected to be close to the starting point.",
    
    "DFS / Backtracking": "Depth-First Search combined with backtracking is a powerful technique for exploring all possible solutions in problems that require exhaustive search. It delves deep into each branch of the search tree, backtracking upon reaching dead ends or finding valid solutions. This approach is essential in solving puzzles, constraint satisfaction problems, and scenarios where all potential solutions need to be evaluated.",
    
    "Djikstra's Algorithm": "Dijkstra's Algorithm is used to find the shortest path from a single source node to all other nodes in a weighted graph with non-negative edge weights. It operates by maintaining a priority queue of nodes to explore, always selecting the node with the smallest known distance from the source. It's widely applied in routing and navigation systems, network optimization, and various scheduling problems.",
    
    "Disjoint Set Union": "The Disjoint Set Union (DSU), or Union-Find, is a data structure that keeps track of elements partitioned into disjoint sets. It supports two primary operations: finding the representative of a set and merging two sets. DSU is fundamental in algorithms that need to determine connectivity, such as Kruskal's algorithm for finding the Minimum Spanning Tree in a graph, and in network connectivity scenarios.",
    
    "Is brute force fast enough?": "Brute force algorithms solve problems by trying all possible solutions without any shortcuts. While they are simple to implement, their efficiency drastically decreases as the input size grows. Determining if brute force is sufficient depends on the problem's constraints; for small input sizes, brute force may be acceptable, but for larger inputs, more optimized algorithms are necessary to ensure feasible execution times.",
    
    "Can it be split into sub problems?": "Many complex problems can be divided into smaller, more manageable sub-problems. This divide-and-conquer approach allows each sub-problem to be solved independently, often leading to more efficient overall solutions. Techniques like recursion, dynamic programming, and memoization leverage this principle to optimize problem-solving, especially in scenarios involving overlapping sub-problems and optimal substructure.",
    
    "Does it have monotonic conditions?": "Monotonic conditions involve maintaining a consistent increasing or decreasing order within a dataset. Algorithms that exploit monotonicity can achieve significant optimizations, such as reducing time complexity or simplifying problem constraints. Examples include using binary search on sorted arrays, optimizing sliding window techniques, and implementing certain dynamic programming solutions.",
    
    "Is O(1) memory required?": "Indicates whether the problem must be solved using constant memory, regardless of the input size. Constraints requiring O(1) memory often necessitate in-place algorithms or iterative approaches that avoid using additional data structures. Achieving O(1) space complexity can lead to more efficient solutions, especially in environments with limited memory resources, but may require more complex logic.",
    
    "Is there a monotonic condition?": "A monotonic condition refers to a property where elements in a dataset consistently increase or decrease. Recognizing monotonicity allows for the application of efficient algorithms like binary search or two-pointers, which can significantly reduce computational complexity by leveraging the ordered nature of the data.",
    
    "Is it asking to find or enumerate indices?": "Problems that require finding or enumerating indices involve identifying specific positions within a data structure that meet certain criteria. This could include locating the start and end indices of a subarray, enumerating all valid index pairs that satisfy a condition, or finding the position of elements in a sorted array. Efficiently managing and traversing indices is crucial for optimizing such solutions.",
    
    "Does it involve monotonic condition?": "Monotonic conditions require maintaining a consistent order (either increasing or decreasing) among elements. Algorithms that leverage monotonicity can optimize operations by avoiding unnecessary computations, utilizing data structures like stacks or queues to maintain the required order, and enabling faster traversal or search processes.",
    
    // Leaf Nodes (Final Algorithms/Data Structures)
    "Greedy Algorithm": "Greedy algorithms make a series of choices, each of which looks best at the moment, with the hope of finding the overall optimal solution. These algorithms are simple to implement and often work for optimization problems like interval scheduling, coin change, and Huffman coding, but they don’t always guarantee the optimal solution.",
    
    "Brute Force / Backtracking": "An exhaustive search technique that explores all possible configurations until a solution is found. Brute force is straightforward but can be inefficient for large datasets, while backtracking adds a way to eliminate unnecessary paths early, making the search process more efficient in many cases.",
    
    "Dynamic Programming": "A technique for solving problems by breaking them into simpler subproblems and storing the results to avoid redundant work. It is particularly effective for optimization problems like the knapsack problem, Fibonacci sequence, and shortest path algorithms.",
    
    "Two Pointers": "An algorithmic technique that uses two pointers to iterate through a data structure, often to find a condition or result that depends on the relative positioning of elements. This method is effective for problems involving sorted arrays, linked lists, or strings, such as finding two numbers that add up to a target, reversing a string, or detecting palindromes.",
    
    "Prefix Sums": "A technique that involves computing cumulative sums of a sequence to quickly calculate the sum of any subarray. By storing these prefix sums, one can obtain the sum of elements between any two indices in constant time, which is particularly useful in range query problems and scenarios requiring dynamic sum calculations.",
    
    "Sliding Window": "The sliding window technique is used to maintain a subset of elements in a data structure, typically an array or string, to solve problems involving contiguous sequences. The window 'slides' over the data, adjusting its size or position based on specific conditions, making it efficient for tasks like finding the longest substring without repeating characters or the maximum sum subarray.",
    
    "Binary Search": "An efficient algorithm for finding an item from a sorted list of items. It works by repeatedly dividing the search space in half and comparing the target value to the middle element. Binary search is widely used in searching and optimization problems where the data is sorted, offering a time complexity of O(log n).",
    
    "BFS": "Breadth-First Search is an algorithm for traversing or searching tree or graph data structures. It starts at the root node and explores all neighbor nodes at the present depth before moving on to nodes at the next depth level. BFS is useful for finding the shortest path in unweighted graphs, level order traversal in trees, and in scenarios where the solution is expected to be close to the starting point.",
    
    "DFS / Backtracking": "Depth-First Search combined with backtracking is a powerful technique for exploring all possible solutions in problems that require exhaustive search. It delves deep into each branch of the search tree, backtracking upon reaching dead ends or finding valid solutions. This approach is essential in solving puzzles, constraint satisfaction problems, and scenarios where all potential solutions need to be evaluated.",
    
    "Djikstra's Algorithm": "Dijkstra's Algorithm is used to find the shortest path from a single source node to all other nodes in a weighted graph with non-negative edge weights. It operates by maintaining a priority queue of nodes to explore, always selecting the node with the smallest known distance from the source. It's widely applied in routing and navigation systems, network optimization, and various scheduling problems.",
    
    "Disjoint Set Union": "The Disjoint Set Union (DSU), or Union-Find, is a data structure that keeps track of elements partitioned into disjoint sets. It supports two primary operations: finding the representative of a set and merging two sets. DSU is fundamental in algorithms that need to determine connectivity, such as Kruskal's algorithm for finding the Minimum Spanning Tree in a graph, and in network connectivity scenarios.",
    
    "Brute Force / Backtracking": "An exhaustive search technique that explores all possible configurations until a solution is found. Brute force is straightforward but can be inefficient for large datasets, while backtracking adds a way to eliminate unnecessary paths early, making the search process more efficient in many cases."
  };
 
  export default questionSummaries;
  