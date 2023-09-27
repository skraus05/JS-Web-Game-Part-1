//let greenCharacter = document.createElement('img')
//greenCharacter.src = 'assets/green-character.gif'
//greenCharacter.style.position = 'fixed'
//greenCharacter.style.left = '100px'
//greenCharacter.style.bottom = '100px'
//document.body.append(greenCharacter)

//let pineTree = document.createElement('img')
//pineTree.src = 'assets/pine-tree.png'
//pineTree.style.position = 'fixed'
//pineTree.style.left = '450px'
//pineTree.style.bottom = '200px'
//document.body.append(pineTree)

function newImage(imageURL, left, bottom){
    let pineTree = document.createElement('img')
    pineTree.src = imageURL
    pineTree.style.position = 'fixed'
    pineTree.style.left = left + 'px'
    pineTree.style.bottom = bottom + 'px'
    document.body.append(pineTree)  
}

newImage('assets/green-character.gif', 100, 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)

let sword = document.createElement('img')
sword.src = 'assets/sword.png'
sword.position = 'fixed'
sword.left = '500px'
sword.bottom = '405px'
document.body.append(sword)

sword.addEventListener('dblclick', function(){
    sword.remove()
})

function newItem(imageURL, left, bottom){
    sword.style.position = 'fixed';
    sword.style.left = left + 'px';
    sword.style.bottom = bottom + 'px';
}

newItem('assets/sword.png' , 500, 405);
newItem('assets/shield.png', 165, 185);
newItem('assets/staff.png', 600, 100);
