/*
	
请回答如下问题判断题

1. express的handler中必须定义一个path
2. express如果同一个路径匹配到多个handler，会按照定义的先后顺序执行
3. express的handler中使用for(;;)无限循环，不会阻塞其它请求
4. express的handler中，使用fs模块读取文件时，模块返回err，这时候使用throw err即可
5. express的handler中使用res.json/send/end的方法发送多次response不会出现问题


*/

/**
 * @returns {boolean[]}
 */
module.exports = () => {
    return [
        false,
        true,
        false,
        false,
        false,
    ];
};
