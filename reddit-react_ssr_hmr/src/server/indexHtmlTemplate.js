const indexHtmlTemplate = (content, token) => `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reddit-ReactJS</title>
  <link rel="shortcut icon" href="https://i.redd.it/snoovatar/avatars/d80b552d-3f97-423c-b7d2-1b4180dcde4f.png" type="image/x-icon">
  <script src="/static/client.js" type="application/javascript"></script>
  <script>
 window.__token__ = '${token}'
  </script>
</head>
<body>
  <div id="react__root">${content}</div>
  <div id="modal__root"></div>
  <div id="dropdown_root"></div>
</body>
</html>
`;

export default indexHtmlTemplate;