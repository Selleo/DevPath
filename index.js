const fs = require('fs');
const linkify = require('linkifyjs');
const fetch = require('node-fetch');
const glob = require('glob-fs')({ gitignore: true });
const core = require('@actions/core');

let URLs = []
let brokenURLsString = ''
let counter = 1;

(async () => {
  const files = glob.readdirSync('**/*.md', {})
  for (let i = 0; i < files.length; i++) {
    const file = fs.readFileSync(files[i], { encoding: 'utf-8' })
    const fileName = files[i].replace(__dirname, '')

    linkify.find(file).filter(url => url.type === 'url' && ( url.value.includes('http') || url.value.includes('www') )).map(urls => URLs.push({
      file: fileName,
      href: urls.value
    }))
  }

  for (url of URLs) {
    const fileName = url.file.replace('temp/', '')
    url.href = url.href.includes(')') ? url.href.split(')')[0] : url.href
    console.log(`URL handled: ${counter}`);

    await fetch(url.href).then(response => {
      if (!response.ok){
        brokenURLsString += `\n${fileName}:\n${url.href}\n----------`
      }

    }).catch(() => url.href.includes('.md') ? {} : brokenURLsString += `\n${fileName}:\n${url.href}\n----------`);
    counter++
  }

  if (brokenURLsString.length > 0)
    return core.setFailed(`Broken URLs: ${brokenURLsString}`)
})()
