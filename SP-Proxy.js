/**
 * 结构型模式--代理模式
 */

/**
 * 应用：股票查询缓存代理
 * author: rico
 * refrence: https://segmentfault.com/a/1190000022396503?utm_source=weekly&utm_medium=email&utm_campaign=email_weekly
 */

// StockPriceAPI
function StockPriceAPI() {
    // subject interface
    this.getValue = function (stock, callback) {
        console.log('Calling external API...');
        setTimeout(()=>{
            switch(stock) {
                case 'google':
                    callback('$1254.34')
                    break
                case 'apple':
                    callback('$1254.34')
                    break
                case 'microsoft':
                    callback('$1254.34')
                    break
                default:
                    callback('')
                    
            }
        },2000)
    }
}

// 我们不希望每次都去请求远程接口，而是增加缓存机制，当有缓存的时候就直接从缓存中获取，否则再去请求远程接口
// StockPiceAPIProxy
function StockPriceAPIProxy() {
    this.cache = {}
    this.realAPI = new StockPriceAPI()
    this.getValue = function (stock, callback) {
        const cachePrice = this.cache[stock]
        if (cachePrice) {
            console.log('Got price from cache');
            callback(cachePrice)
        }else {
            this.realAPI.getValue(stock,(price)=>{
                this.cache[stock]=price
                callback(price)
            })
            
        }
    }
}

//测试
const api = new StockPriceAPIProxy();
api.getValue('google', (price) => { console.log(price) });
api.getValue('apple', (price) => { console.log(price) });
api.getValue('microsoft', (price) => { console.log(price) });

setTimeout(() => {
  api.getValue('google', (price) => { console.log(price) });
  api.getValue('apple', (price) => { console.log(price) });
  api.getValue('microsoft', (price) => { console.log(price) });
}, 5000)