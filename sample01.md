---
title: TeXを含めたMarkdownのテスト
author: Shuichi Ohtsu
header-includes: |
    \usepackage{fancyhdr}
    \pagestyle{fancy}
    \fancyhead[CO,CE]{Pandoc}
    \fancyfoot[CO,CE]{Pandoc Sample Data}
    \fancyfoot[LE,RO]{\thepage}
abstract: これはPandocによるPDF出力用のテストデータです。TeXも含めています。 
---

\clearpage

# Markdownの解説 

## 特殊文字

#### 入力
`
\TeX は スタンフォード大学のDonald E Knuth教授が開発しました。

$\mathcal{ABCDEFGH}$

`


#### 出力
\TeX は スタンフォード大学のDonald E Knuth教授が開発しました。

$\mathcal{ABCDEFGH}$


## 表

#### 入力
`
\begin{tabular}{|l|l|}\hline
age & count \\ \hline
18-25 & 15 \\
26-35 & 33 \\
36-45 & 22 \\ \hline
\end{tabular}
`

#### 出力

\begin{tabular}{|l|l|}\hline
age & count \\ \hline
18-25 & 15 \\
26-35 & 33 \\
36-45 & 22 \\ \hline
\end{tabular}


## 数式

#### 入力

\begin{verbatim}
\newcommand{\tuple}[1]{\langle #1 \rangle}

$\tuple{a, b, c}$

H~2~Oは液体です。2^10^は1024です。

\begin{equation}
    y = ax^2 + bx + c
\end{equation}

$\displaystyle y=\frac{1+x}{1-x}$
\end{verbatim}


#### 出力

\newcommand{\tuple}[1]{\langle #1 \rangle}

$\tuple{a, b, c}$

H~2~Oは液体です。2^10^は1024です。

\begin{equation}
    y = ax^2 + bx + c
\end{equation}

$\displaystyle y=\frac{1+x}{1-x}$

## リンク

<http://google.com>
<sample@google.com>

これは[インラインリンク](http://google.com)です。

## 脚注

これは脚注の参照です[^longnote]。


[^longnote]: これは脚注の本文です。


## 図


![これはキャプションです](https://raw.githubusercontent.com/Ohtsu/images/master/ng5-bootstrap4/ng5-bootstrap4-carousel_default_page_01.png){#fig:carousel}



## ソース


```c
#include <stdio.h>

int main(int argc, char **argv)
{
  printf("%s\n", "Hello, World");
  return 0;
}
```



## リスト

* list 1
    * list 1 - 1
        * list 1 - 1 - 1
        * list 1 - 1 - 2
    * list 1 - 2 
    * list 1 - 3
* list 2
* list 3


## 引用

> このテキストは、HTMLのblockquote要素に囲まれます。  
blockquote要素はreflowableです。テキストを好きなように  
改行することができます。改行したとしても、変換後はひとつの  
blockquote要素として扱われます。


![Firefox]
[Firefox]: http://getfirefox.jp/b/120x90_1_white  "ファイヤーフォックス"


## 参照

図[@fig:carousel]で表示されています。


## 罫線

---
* * *

## 参考文献

Pandocの文法については、[@JohnMacFarlane2018/09Pandoc]や[@JapanesePandocUsersAssociation2014/06/27]を参照してください。

\TeX については、[@奥村晴彦2017/01/25]などを参照してください。

この内容については、Referenceを参照してください[@zipf1946p1][@Aruneko2018/9/2][@JohnMacFarlane2018/09Pandoc]。


# Reference