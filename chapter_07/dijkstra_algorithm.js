// the graph
/*  const graph = {};
graph["start"] = {};
graph["start"]["a"] = 6;
graph["start"]["b"] = 2;

graph["a"] = {};
graph["a"]["fin"] = 1;

graph["b"] = {};
graph["b"]["a"] = 3;
graph["b"]["fin"] = 5;

graph["fin"] = {};

// The costs table
const costs = {};
costs["a"] = 6;
costs["b"] = 2;
costs["fin"] = Infinity;

// the parents table
const parents = {};
parents["a"] = "start";
parents["b"] = "start";
parents["fin"] = null;
 */


//Exercise a

// the graph
const graph = {};
graph["start"] = {};
graph["start"]["a"] = 5;
graph["start"]["b"] = 2;

graph["a"] = {};
graph["a"]["c"] = 4;
graph["a"]["d"] = 2;

graph["b"] = {};
graph["b"]["a"] = 8;
graph["b"]["d"] = 7


graph["c"] = {};
graph["c"]["fin"] = 3;
graph["c"]["d"] = 6


graph["d"] = {};
graph["d"]["fin"] = 1;

graph["fin"] = {};

// The costs table
const costs = {};
costs["a"] = 5;
costs["b"] = 2;
costs["c"] = Infinity;
costs["d"] = Infinity;
costs["fin"] = Infinity;

// the parents table
const parents = {};
parents["a"] = "start";
parents["b"] = "start";
parents["c"] = null;
parents["d"] = null;
parents["fin"] = null;


let processed = [];

/**
 * Find the lowest node
 * @param {Object} itCosts Hash table
 * @returns {(string|null)} The lowest node
 */
function findLowestCostNode(costs) {
  let lowestCost = Infinity;
  let lowestCostNode = null;

  // Go through each node
  for (let node in costs) {
    const cost = costs[node];
    // If it's the lowest cost so far and hasn't been processed yet...
    if (cost < lowestCost && processed.indexOf(node) === -1) {
      // ... set it as the new lowest-cost node.
      lowestCost = cost;
      lowestCostNode = node;
    }
  }
  return lowestCostNode;
}

let node = findLowestCostNode(costs);

while (node !== null) {
  const cost = costs[node];
  // Go through all the neighbors of this node
  const neighbors = graph[node];
  Object.keys(neighbors).forEach(function (n) {
    const new_cost = cost + neighbors[n];
    // If it's cheaper to get to this neighbor by going through this node
    if (costs[n] > new_cost) {
      // ... update the cost for this node
      costs[n] = new_cost;
      // This node becomes the new parent for this neighbor.
      parents[n] = node;
    }
  });

  // Mark the node as processed
  processed = processed.concat(node);

  // Find the next node to process, and loop
  node = findLowestCostNode(costs);
}

console.log("Cost from the start to each node:");
console.log(costs); // { a: 5, b: 2, fin: 6 }



console.log("Resulting tables:");
console.log({ parents })
console.log({ costs })
console.log({ graph })
console.log({ processed })