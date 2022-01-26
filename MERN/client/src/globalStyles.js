import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap');

:root {
  --color-white: #fff;
  --color-black: #000;
  --color-gray: #c4c4c4;
  --color-lgray: #f4f4f4;
  --color-bg: #E5E5E5;
  --color-bgray: #999999;
  --color-dgray: #333333;
  --color-green: #a8b64f;
  --color-olive: #899441;
  --color-red: #dc3e22;
  --color-dred: #b7280f;
  --color-rose: #ee735d;
  --color-lrose: #ea8979;
}

* {
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

html {
  font-family: 'Ubuntu';
  background-color: var(--color-bg);
}

body {
  max-width: 90%;
  margin: 0 auto;
  background-color: var(--color-white);
}

h1,h2,h3,p {
  margin: 0;
}

button {
  cursor: pointer;
  font-family: 'SFUIDisplay';
  font-weight: 500;
  transition: 0.3s;
}

.toast {
  position: absolute;
  left: 6%;
  padding: 40px;
  margin-top: 100px;
  font-size: 16px;
  background-color: var(--color-dred);
  color: var(--color-white);
}
`
