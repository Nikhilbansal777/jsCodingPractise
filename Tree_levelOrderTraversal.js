const node = {
    "name": "node1",
    "children": [
        {
            "name": "node2",
            "children": [
                {
                    "name": "node4",
                    "children": []
                }
            ]
        },
        {
            "name": "node3",
            "children": []
        }
    ]
};

// node1, node2, node3, node4.

function depth(node) {
    let queue = [node];
    while (queue.length > 0) {
        let currentNode = queue.shift();
        console.log(currentNode);
        console.log(currentNode.name);
        for (let child of currentNode.children) {
            queue.push(child);
        }
    }
}

depth(node);