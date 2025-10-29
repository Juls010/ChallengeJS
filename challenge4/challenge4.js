// Definición del árbol


// Representación gráfica del árbol:
//        🎁
//       /   \
//     🎄     ❄️
//    /  \      \
//  ⭐   🎅      🦌

// Llamada a la función
treeHeight(tree)
// Devuelve: 3

/**
   * @param {{ value: string; left: any; right: any }} tree
   * @returns {number} - Height of the tree.
   */

const tree = {
    value: '🎁',
    left: {
        value: '🎄',
        left: {
        value: '⭐',
        left: null,
        right: null
        },
        right: {
        value: '🎅',
        left: null,
        right: null
        }
    },
    right: {
        value: '❄️',
        left: null,
        right: {
        value: '🦌',
        left: null,
        right: null
        }
    }
};

function treeHeight(tree) {
    if(tree){
        const leftHeight = treeHeight(tree.left);
        const rightHeigth = treeHeight(tree.right);
        return 1 + Math.max(leftHeight,rightHeigth); 
    }  
    return 0;
}

console.log(treeHeight(tree));