//gasStation function
let gasStation = function(carFuel='Diesel', carSize='XL'){
   console.log(`заправка для ${carSize} авто, тип палива ${carFuel}`)
}

let carFuels = ['Gas', 'Diesel']
let carSizes = ['S','M', 'L', 'XL']

for (let carFuel = 0; carFuel < 2; carFuel++)
{
    for (let carSize = 0; carSize < 4; carSize++)
    {
        gasStation(carFuels[carFuel], carSizes[carSize])
    }
}
gasStation()