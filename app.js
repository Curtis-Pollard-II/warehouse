const packages = [
{
    heavy: false,
    priority: true,
    fragile: true,
    to: 'Mark',
    trackingNumber: '1325sdk',
    lost: false
},
{
    heavy: true,
    priority: false,
    fragile: true,
    to: 'Mick',
    trackingNumber: 'jffd147',
    lost: false
},
{
    heavy: false,
    priority: false,
    fragile: false,
    to: 'Jake',
    trackingNumber: 'acdc145',
    lost: false
},
{
    heavy: true,
    priority: true,
    fragile: true,
    to: 'Brittany',
    trackingNumber: 'b45434',
    lost: false
},
{
    heavy: false,
    priority: true,
    fragile: false,
    to: 'Zach',
    trackingNumber: '8081baz',
    lost: false
},
{
    heavy: true,
    priority: false,
    fragile: true,
    to: 'Jeremy',
    trackingNumber: 'suz2367',
    lost: false
}
]

// packages.forEach(p => console.log('forEach',`
// ${p.fragile} , ${p.heavy} ,${p.priority},${p.to}, ${p.trackingNumber}
// ` ))

function getLost(){
    let lostPackage = packages[Math.floor(Math.random()* packages.length)]
    console.log("random package", lostPackage);
    lostPackage.lost = true
}
getLost()

function openPackage(trackingNumber){
    let lostPackage = packages.find(p => p.lost == true)
    console.log('lost package', lostPackage);
    console.log(lostPackage.trackingNumber == trackingNumber);
    if(lostPackage.lost == true){
        window.alert('you found the missing package')
    } else {
        window.alert('wrong package, keep looking')
    }

}

let currentPackages = packages

function drawPackages (){
    let template = ""
    currentPackages.forEach(p => template += `<ul>
    <div class="col-12 btn bg-dark btn-primary" onclick="openPackage('${p.trackingNumber}')">Package: ${p.trackingNumber}</div>
</ul>`)
let packageElm = document.getElementById("Package")

packageElm.innerHTML = template
}

// function drawPackage(name){
// console.log(name);
// }

drawPackages()

function filterPriority(){
    currentPackages = currentPackages.filter(p => p.priority == true)
    console.log("priority packages", currentPackages); 
    drawPackages()
}

function filterHeavy(){
    currentPackages = currentPackages.filter(p => p.heavy == true)
    console.log("heavy packages", currentPackages); 
    drawPackages()
}

function filterFragile(){
    currentPackages = currentPackages.filter(p => p.fragile == true)
    console.log("fragile packages", currentPackages); 
    drawPackages()
}

function filterTo(){
    currentPackages = currentPackages.filter(p => p.to == true)
    console.log("To:", currentPackages); 
    drawPackages()
}
