import React, { Component } from 'react';
import Lazyload from 'react-lazyload';
class lazyload extends Component {
    render() {
        return (
            <div>
                <Lazyload height={500}>
                    <img
                        width="90%"
                        src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2683203662,279060755&fm=26&gp=0.jpg"
                        alt=""
                    />
                </Lazyload>
                <Lazyload height={500}>
                    <img
                        width="90%"
                        src="http://imgsrc.baidu.com/forum/w=580/sign=6a339127bbb7d0a27bc90495fbee760d/6b50be003af33a872e57fd8fcf5c10385243b5d3.jpg"
                        alt=""
                    />
                </Lazyload>
                <Lazyload height={500}>
                    <img
                        width="90%"
                        src="http://5b0988e595225.cdn.sohucs.com/images/20170913/fe8f7fe0dd0e43eba2bdcd407176ad1b.gif"
                        alt=""
                    />
                </Lazyload>
                <Lazyload height={500}>
                    <img
                        width="90%"
                        src="http://ww1.sinaimg.cn/bmiddle/586f5255jw1e4c7r05idmg20bv06oqv5.gif"
                        alt=""
                    />
                </Lazyload>
            </div>
        );
    }
}

export default lazyload;
