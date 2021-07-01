/**
 * 创建型模式--工厂模式
 */

/**
 * 应用：汽车生产工厂
 * author: rico
 * refrence: https://segmentfault.com/a/1190000022396503?utm_source=weekly&utm_medium=email&utm_campaign=email_weekly
 */

// 汽车构造函数
function SuzukiCar(color) {
    this.color = color
    this.brand = 'Suzuki'
}
// 汽车构造函数
function HondaCar(color) {
    this.color = color
    this.brand = 'Honda'
}
// 汽车构造函数
function BMWCar(color) {
    this.color = color
    this.brand = 'BMW'
}

// 汽车品牌
const BRANDS = {
    suzuki: 1,
    honda: 2,
    bmw: 3
} 

// 汽车工厂
function CarFactory() {
    this.create = function (brand, color) {
        switch (brand){
            case BRANDS.suzuki:
                return new SuzukiCar(color)
            case BRANDS.honda:
                return new HondaCar(color)
            case BRANDS.bmw:
                return new BMWCar(color)
            default:
                break
        }

    }
}

// -----------------------------------------------------------------------------
// 测试
const carFactory = new CarFactory()
const cars = []
cars.push(carFactory.create(1,'yellow'))
cars.push(carFactory.create(2,'red'))
cars.push(carFactory.create(3,'green'))
console.log(cars);

