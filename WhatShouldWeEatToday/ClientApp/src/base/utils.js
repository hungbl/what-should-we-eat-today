export function getQuadratic(topPointer = {x: 0, y: 0}, otherPointer = {x: 0, y: 0}){
    if (topPointer.x == otherPointer.x && topPointer.y == otherPointer.y) {
		return -1;
	}
	let a = (otherPointer.y - topPointer.y) / Math.pow((otherPointer.x - topPointer.x), 2);
	return {
		a,
		b: 2 * a * (-topPointer.x),
		c: a * Math.pow(topPointer.x, 2) + topPointer.y
	}
} 

export function getY(quadratic, x){
    let { a, b, c } = quadratic;
	return a * Math.pow(x, 2) + b * x + c;
}

export function getSpeed(quadratic, pointer = {x: 0, y: 0}){
    let speed = (2 * quadratic.a * pointer.x) + quadratic.b;
	return speed;
}

export function getSpeedY(speed, x){
    return x * speed;
}

export function easyIn(t, b, c, d){
    return c*(t/=d)*t*t + b;
}