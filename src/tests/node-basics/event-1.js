const { Random } = require('mockjs');

const description = `
请编写并返回一个EventEmitter instance

该emitter需要响应wow事件, 并将第一个参数传入cb中

例如
emitter.emit("wow", "123123") // => exec cb("123123")

`;

const template = `
module.exports = (cb) => {
    const emitter = null;

    return emitter;
}
`;


module.exports = {
    title: 'event-1',
    description,
    template,
    runner: async (f) => {
        return new Promise((resolve, reject) => {
            const t = Random.word(5, 13);
            const e = f((v) => {
                try {
                    expect(v).toEqual(t); resolve();
                } catch (error) {
                    reject(error);
                }

            });
            e.emit('wow', t);
        });
    }
};