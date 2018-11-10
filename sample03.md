---
title: PandocによるTeXを含めたMarkdownの出力テスト
author: Shuichi Ohtsu
header-includes: |
    \usepackage{fancyhdr}
    \pagestyle{fancy}
    \fancyhead[CO,CE]{Pandoc}
    \fancyfoot[CO,CE]{Sample Data for Pandoc}
    \fancyfoot[LE,RO]{\thepage}
abstract: これはPandocによるMarkdownからPDFへの出力用のテストデータです。TeXの構文も含まれています。 
bibliography: [./myref01.bib]
---

\clearpage

# Markdownの解説 

## 【特殊文字】

#### 入力

\begin{verbatim}

\TeX は スタンフォード大学のDonald E Knuth教授が開発しました。

$\mathcal{ABCDEFGH}$

\end{verbatim}


#### 出力
\TeX は スタンフォード大学のDonald E Knuth教授が開発しました。

$\mathcal{ABCDEFGH}$


## 【表】

#### 入力
\begin{verbatim}

\begin{tabular}{|l|l|}\hline
age & count \\ \hline
18-25 & 15 \\
26-35 & 33 \\
36-45 & 22 \\ \hline
\end{tabular}

\end{verbatim}

#### 出力

\begin{tabular}{|l|l|}\hline
age & count \\ \hline
18-25 & 15 \\
26-35 & 33 \\
36-45 & 22 \\ \hline
\end{tabular}


## 【数式】

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

## 【リンク】

#### 入力

\begin{verbatim}

<http://google.com>
<sample@google.com>

これは[インラインリンク](http://google.com)です。

\end{verbatim}


#### 出力

<http://google.com>
<sample@google.com>

これは[インラインリンク](http://google.com)です。

## 【脚注】

#### 入力

\begin{verbatim}

これは脚注の参照です[^longnote]。


[^longnote]: これは脚注の本文です。

\end{verbatim}

#### 出力

これは脚注の参照です[^longnote]。


[^longnote]: これは脚注の本文です。


## 【図】

#### 入力

\begin{verbatim}

![これはキャプションです](https://raw.githubusercontent.com/Ohtsu/images/master/ng5-bootstrap4/ng5-bootstrap4-carousel_default_page_01.png){#fig:carousel}


\end{verbatim}

\clearpage

#### 出力

![これはキャプションです](https://raw.githubusercontent.com/Ohtsu/images/master/ng5-bootstrap4/ng5-bootstrap4-carousel_default_page_01.png){#fig:carousel}



## 【プログラムソース】

#### 入力

\begin{verbatim}


```c
#include <stdio.h>

int main(int argc, char **argv)
{
  printf("%s\n", "Hello, World");
  return 0;
}
```

\end{verbatim}

#### 出力


```c
#include <stdio.h>

int main(int argc, char **argv)
{
  printf("%s\n", "Hello, World");
  return 0;
}
```



## 【リスト】

#### 入力

\begin{verbatim}

* list 1
    * list 1 - 1
        * list 1 - 1 - 1
        * list 1 - 1 - 2
    * list 1 - 2 
    * list 1 - 3
* list 2
* list 3

\end{verbatim}

#### 出力

* list 1
    * list 1 - 1
        * list 1 - 1 - 1
        * list 1 - 1 - 2
    * list 1 - 2 
    * list 1 - 3
* list 2
* list 3


## 【引用】

#### 入力

\begin{verbatim}

> このテキストは、HTMLのblockquote要素に囲まれます。  
blockquote要素はreflowableです。テキストを好きなように  
改行することができます。改行したとしても、変換後はひとつの  
blockquote要素として扱われます。

\end{verbatim}

#### 出力

> このテキストは、HTMLのblockquote要素に囲まれます。  
blockquote要素はreflowableです。テキストを好きなように  
改行することができます。改行したとしても、変換後はひとつの  
blockquote要素として扱われます。


## 【参照】

#### 入力

\begin{verbatim}

![Firefox]
[Firefox]: http://getfirefox.jp/b/120x90_1_white  "ファイヤーフォックス"


図[@fig:carousel]で表示されています。


\end{verbatim}

#### 出力


![Firefox]
[Firefox]: http://getfirefox.jp/b/120x90_1_white  "ファイヤーフォックス"


図[@fig:carousel]で表示されています。


## 【罫線】

#### 入力

\begin{verbatim}

---
* * *

\end{verbatim}

#### 出力

---
* * *

## 【参考文献】

#### 入力

\begin{verbatim}

Pandocの文法については、[@JohnMacFarlane2018/09Pandoc]や[@JapanesePandocUsersAssociation2014/06/27]を参照してください。

\TeX については、[@奥村晴彦2017/01/25]などを参照してください。

Pandocのインストールなどについては、[@miyamiya2018/06/28]が参考になります。

Pandoc-citeprocやPandoc-crossrefについては、[@inoblog2016]、[@kihara2017/12][@mickey2016/05]が参考になります。

詳しくは以下の _Reference_　を参照してください。

\end{verbatim}

#### 出力

\TeX 一般については、[@奥村晴彦2017/01/25]が大変参考になります。

Pandocの文法については、[@JohnMacFarlane2018/09Pandoc]や[@JapanesePandocUsersAssociation2014/06/27]を参照してください。


Pandocのインストールなどについては、[@miyamiya2018/06/28]が参考になります。

Pandoc-citeprocやPandoc-crossrefについては、[@inoblog2016]、[@kihara2017/12]や[@mickey2016/05]が参考になります。


詳しくは以下の _Reference_　を参照してください。

# Reference