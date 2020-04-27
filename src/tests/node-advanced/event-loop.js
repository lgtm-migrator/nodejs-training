
const description = `
请阅读文档 https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/ 

阅读完成后返回true
`;

const template = `
module.exports = () => {
    return false;
}
`;

module.exports = {
    title: 'event-loop',
    description,
    template,
    runner: async (f) => {
        expect(f(), 'please read the event-loop document firstly').toBeTruthy();
    }
};