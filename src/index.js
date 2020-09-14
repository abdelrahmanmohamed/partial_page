import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import StyleSelector from "./StyleSelector";
const StyleSelectorX =  <StyleSelector></StyleSelector>
ReactDOMServer.renderToNodeStream(
    StyleSelectorX ,
    document.getElementById('root')
);