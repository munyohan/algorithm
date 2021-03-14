"use strict";

function solution(bridge_length, weight, truck_weights) {
  class Truck {
    constructor(weight) {
      this.weight = weight;
      this.timer = 1;
    }

    move() {
      this.timer++;

      if (this.timer > bridge_length) return true;
      else return false;
    }

    toString() {
      return `weight: ${this.weight}, timer: ${this.timer}`;
    }
  }

  let totalSec = 0;
  const trucksOnBridge = [];

  while (true) {
    let weightOfTrucksOnBridge = 0;

    // 다리를 건너는 트럭 한 칸씩 전진
    for (let i = 0; i < trucksOnBridge.length; i++) {
      if (trucksOnBridge[i].move()) {
        trucksOnBridge.shift();
        i--;
      }
    }

    // 다리에 새로운 트럭이 진입할 수 있으면 진입
    trucksOnBridge.forEach((truck) => {
      weightOfTrucksOnBridge += truck.weight;
    });

    if (weightOfTrucksOnBridge + truck_weights[0] <= weight) {
      trucksOnBridge.push(new Truck(truck_weights.shift()));
    }

    // 여기까지 1초
    totalSec++;

    // 다리위에랑 기다리는 트럭이 둘 다 없으면 break
    if (trucksOnBridge.length === 0 && truck_weights.length === 0) break;
  }

  return totalSec;
}

console.log(solution(2, 10, [7, 4, 5, 6]));
