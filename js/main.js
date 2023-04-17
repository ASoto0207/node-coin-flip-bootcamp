const buttons = document.querySelectorAll('button')
console.log(buttons)

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const pickASide = e.target.innerText
        console.log(pickASide)
        fetch(`/api?coins=${pickASide}`)
        .then(res => res.json())
        .then((data)=>{
            console.log(data)
            const {result} = data

            document.querySelector('.result').innerText = result
        })
    } )
})
//  had help from mena. 

















// if (page == '/api') {{{
//     res.writeHEad(200, {'Content-Type': 'application/json'});
//     let numbers = Math.floor(Math.random()* 100)
//     let headSide;
//     if(numbers >= 100){
//         let headSide = "Heads"
//         res.end(JSON.stringify(headSide))
//     }
//     else{
//         let headSide = 'Tails'
//         res.end(JSON.stringify(headSide))
        
//     }
//     res.end(JSON.stringify(headSide))
// }}
    
// }
    



