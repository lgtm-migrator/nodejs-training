// generate package for trainee
const fs = require('fs');
const archiver = require('archiver');
const path = require('path');


if (require.main == module) {
    const output = fs.createWriteStream(path.join(__dirname, '../dist/trainee.zip'));
    const archive = archiver('zip', { zlib: { level: 9 } });

    output.on('close', () => { console.log('trainee package generated'); });

    archive.pipe(output);
    archive.directory('.github');
    archive.directory('.vscode');
    archive.directory('scripts');
    archive.glob('*', { nodir: true, ignore: 'training.config.json' });
    archive.file('dist/.gitkeep');
    archive.file('src/tests/index.test.js');
    archive.file('src/tests/reporter.js');
    archive.file('src/tests/utils.js');

    const config = JSON.parse(fs.readFileSync(path.join(__dirname, '../training.config.json'), { encoding: 'UTF-8' }));
    config.author = '';
    config.role = 'trainee';
    archive.append(JSON.stringify(config, undefined, 2), { name: 'training.config.json' });

    archive.finalize();

}