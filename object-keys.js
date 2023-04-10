const car = {
  make: 'Honda',
  model: 'Accord',
  year: 2020
}
const murat = Object.keys(car);
console.log(murat);
car.make
car['make']
car.model
car.year

for (i = 0; i < Object.keys(car).length; i++) {
  const carIcindekiKeyler = Object.keys(car); // ['make', 'model', 'year]
  const siradakiKey = carIcindekiKeyler[i]; // 'make'
  console.log(car[siradakiKey]);
}