
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
    
function inOrderTraversal(node) {
    for (let i = 0; i < node.children.length; i++){
        inOrderTraversal(node.children[i])
    }
    console.log(node.name);
}

inOrderTraversal(node)