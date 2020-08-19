# `CRA`(Create-React-App) 구조 분석
> [참고링크](https://medium.com/wasd/%EA%B8%B0%EC%B4%88%EB%B6%80%ED%84%B0-%EB%B0%B0%EC%9A%B0%EB%8A%94-react-part-3-a76a727447d3)

- ./my-app
```bash
├── README.md
├── node_modules
├── package-lock.json
├── package.json
├── public
└── src
```

- public: 가상 DOM을 사용하는 리액트는 실제 DOM이 필요합니다. 즉, 가상 DOM이 들어갈 빈 껍데기 html이 필요하다는 것인데, 바로 그 빈 껍데기가 존재하는 폴더입니다.

- src: 리액트 개발이 이루어지는 메인 폴더입니다. 앞으로 우리는 src폴더를 주로 수정하고 src 폴더에 있는 파일들을 작성하는데 많은 시간을 보내게 될 것입니다.

## ./public

- favicon.ico: 페이지 아이콘 이미지 파일입니다.

- index.html: 가상 DOM이 들어가기 위한 빈 껍데기 html 파일입니다.

- manifest.json: 웹 앱 매니페스트는 사용자가 앱을 볼 것으로 예상되는
영역(예: 휴대기기 홈 화면)에 웹 앱이나 사이트를 나타내는 방식을
개발자가 제어하고, 사용자가 시작할 수 있는 항목을 지시하고, 시작 시의 모습을 정의할 수 있는 JSON 파일 입니다.

## ./src

### index.js
```js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

```

App.js 에서 생성된 리액트 코드를 불러온 후, `./public/index.html` 의 id가 root인 태그에 넣어주는 코드입니다.

그 외에 CSS를 넣는 코드나, 아니면 서비스 워커를 사용하는 코드는 없어도 됩니다. 부가사항 이기 때문입니다.

추가로 `<App />`을 볼 수 있는데, 이는 `App.js`에서 `export default` 시켜준 앱입니다. 모든 리액트 파일들은 전부 html 코드 처럼 사용할 수 있습니다. 이를 통해서 알 수 있는 것은 html 코드를 여러 개의 리액트 파일로 분할해서 작업을 할 수가 있다는 것 입니다. 또한 그렇게 되면 여러 사람이 협업을 하는 것도 쉬워지고, 코드의 수정도 특정 부분만 하면 되기 때문에 이점이 많아지게 됩니다.

### App.js

1. 리액트, 리액트 컴포넌트를 불러옵니다.
2. App 클래스를 만드는데, 그 클래스는 리액트 컴포넌트를 상속받습니다.
3. 상속받은 리액트 컴포넌트 메소드 중, render() 메소드를 활용해서 html 코드를 작성해 return 시켜줍니다.
4. 이렇게 작성된 리액트 코드를 export 시켜줍니다.

### registerServiceWorker.js