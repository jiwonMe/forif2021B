export const parseContentType = (content: string): 'image' | 'link' | 'text' => {
    const URLRegex = RegExp(/^https?:\/\/[a-zA-Z0-9\-_]*.?[a-zA-Z0-9\-_]*.[a-zA-Z0-9\-_]*(\/.*)?/g)
    const imageRegex = RegExp(/^https?:\/\/[a-zA-Z0-9\-_]*.?[a-zA-Z0-9\-_]*.[a-zA-Z0-9\-_]*(\/.*\.(svg)?(a?png)?(jpe?g)?(gif)?)/g)
    
    if(URLRegex.test(content)){
        return imageRegex.test(content) ? 'image' : 'link'
    } else {
        return 'text'
    }
}

// image
parseContentType('https://firebase.google.com/downloads/brand-guidelines/SVG/logo-standard.svg')

// link
parseContentType('https://naver.com')

// text
parseContentType('hello, world!')