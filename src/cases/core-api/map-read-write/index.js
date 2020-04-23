/*
	
编写一段逻辑，读取Map m中的所有value
Map m的key皆为number
Map m的value皆为string，格式如'Qtrv Nutesxgya Gblpmjv Yjwiti Xiosjw', 该value的words数为5

请统计Map m中所有value中的words数目总和
并将该总和的值通过key "__total__" 填入Map m中

最后返回原Map m

*/


/**
 * @param m {Map<any, string>}
 */
module.exports = function mapReadWrite(m) {
  m.set('__total__', Array.from(m.values()).reduce((pre, v) => pre + v.split(' ').length, 0));
  return m;
};
