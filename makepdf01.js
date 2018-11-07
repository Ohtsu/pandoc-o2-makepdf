const mdfile = process.argv[2] + '.md';
const pdffile = process.argv[2] + '.pdf';

const spawn = require('child_process').spawn;

const ls = spawn('pandoc', [mdfile,
                    '-o', pdffile, 
                    '-V', 'documentclass=ltjarticle', 
                    '--pdf-engine=lualatex', 
                    '--toc', 
                    '--bibliography=myref01.bib', 
                    '--csl', 'chicago-author-date.csl', 
                    '--filter', 'pandoc-crossref']);

ls.stdout.on('data', (data) => {
  console.log(`stdout: \n${data}`);
});

ls.stderr.on('data', (data) => {
  console.log(`stderr: \n${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});