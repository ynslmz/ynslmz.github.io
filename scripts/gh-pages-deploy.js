const execa = require('execa');
// const fs = require('fs');


(async () => {
    try {
        await execa('git', ['checkout', '--orphan', 'gh-pages']);
        console.log('Building...');
        await execa('npm', ['run', 'build']);

        // const folderName = fs.existsSync('dist') ? 'dist' : 'build';
        // await execa('git', ['--work-tree', folderName, 'add', '--all']);
        await execa('git', ['add', '--all']);
        // await execa('git', ['--work-tree', folderName, 'commit', '-m', 'gh-pages']);
        await execa('git', ['commit', '-m', 'gh-pages']);

        console.log('Pushing to gh-pages...');
        await exaca('git', ['push', 'origin', 'HEAD:gh-pages', '--force']);
        // await exaca('rm', ['-r', 'docs']);
        await execa("git", ["checkout", "-f", "master"]);
        await execa("git", ["branch", "-D", "gh-pages"]);
        console.log("Successfully deployed");

    }
    catch (e) {
        console.log(e.message);
        process.exit(1);
    }
})();