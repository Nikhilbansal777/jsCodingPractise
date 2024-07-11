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
    }

    
function preOrderTraversal(node) {
    console.log(node.name);
    for (let i = 0; i < node.children.length; i++){
        preOrderTraversal(node.children[i])
    }
}

preOrderTraversal(node)