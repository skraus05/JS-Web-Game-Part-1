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
    let object = document.createElement('img')
    object.src = imageURL
    object.style.position = 'fixed'
    object.style.left = left + 'px'
    object.style.bottom = bottom + 'px'
    document.body.append(object)
    return object;  
}

newImage('assets/green-character.gif', 100, 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)

//let sword = document.createElement('img')
//sword.src = 'assets/sword.png'
//sword.position = 'fixed'
//sword.left = '500px'
//sword.bottom = '405px'
//document.body.append(sword)

function newItem(imageURL, left, bottom){
    //sword.style.position = 'fixed';
    //sword.style.left = left + 'px';
    //sword.style.bottom = bottom + 'px';
    const obj = newImage(imageURL, left, bottom)
    obj.addEventListener('dblclick', function(){
        obj.remove()
    })
}

newItem('assets/sword.png' , 500, 405);
newItem('assets/shield.png', 165, 185);
newItem('assets/staff.png', 600, 100);
