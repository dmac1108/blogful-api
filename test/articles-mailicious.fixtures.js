const maliciousArticle = {
    id: 911,
    title: 'Naughty naughty very naughty <script>alert("xss");</script>',
    style: 'How-to',
    content: `Bad image <img src="https://url.to.file.which/does-not.exist" onerror="alert(document.cookie);">. But not <strong>all</strong> bad.`
  }

  module.exports = maliciousArticle;